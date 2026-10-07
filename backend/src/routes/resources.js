import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware, requireAdmin } from '../middleware.js';

const prisma = new PrismaClient();
const router = Router();

// Saved resources (must be before /:id)
router.get('/saved', authMiddleware, async (req, res) => {
  const saved = await prisma.savedResource.findMany({
    where: { userId: req.user.id },
    include: { resource: { include: { author: { select: { name: true } } } } },
    orderBy: { createdAt: 'desc' }
  });
  res.json({ resources: saved.map(s => s.resource) });
});

// List with optional category filter and search
router.get('/', async (req, res) => {
  const { category, search } = req.query;
  const where = {};
  if (category && category !== 'ALL') where.category = category;
  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } }
    ];
  }
  const resources = await prisma.resource.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: { author: { select: { name: true } } }
  });
  res.json({ resources });
});

// Single resource
router.get('/:id', async (req, res) => {
  const resource = await prisma.resource.findUnique({
    where: { id: req.params.id },
    include: { author: { select: { name: true } } }
  });
  if (!resource) return res.status(404).json({ error: 'Resource not found' });
  res.json({ resource });
});

// Create (admin only)
router.post('/', authMiddleware, requireAdmin, async (req, res) => {
  const { title, description, category, type, content, tags } = req.body;
  const resource = await prisma.resource.create({
    data: {
      title, description, category, type,
      content: content || {},
      tags: tags || [],
      createdBy: req.user.id
    }
  });
  res.json({ resource });
});

// Update (admin only)
router.put('/:id', authMiddleware, requireAdmin, async (req, res) => {
  const { title, description, category, type, content, tags } = req.body;
  const resource = await prisma.resource.update({
    where: { id: req.params.id },
    data: { title, description, category, type, content, tags }
  });
  res.json({ resource });
});

// Delete (admin only)
router.delete('/:id', authMiddleware, requireAdmin, async (req, res) => {
  await prisma.resource.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});

// Save / unsave
router.post('/:id/save', authMiddleware, async (req, res) => {
  try {
    await prisma.savedResource.create({
      data: { userId: req.user.id, resourceId: req.params.id }
    });
  } catch (err) {
    // already saved — fine
  }
  res.json({ saved: true });
});

router.delete('/:id/save', authMiddleware, async (req, res) => {
  await prisma.savedResource.deleteMany({
    where: { userId: req.user.id, resourceId: req.params.id }
  });
  res.json({ saved: false });
});

export default router;
