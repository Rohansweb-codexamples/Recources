import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware, requireTeacherOrAdmin } from '../middleware.js';

const prisma = new PrismaClient();
const router = Router();

router.get('/', authMiddleware, requireTeacherOrAdmin, async (req, res) => {
  const plans = await prisma.lessonPlan.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: 'desc' }
  });
  res.json({ plans });
});

router.post('/', authMiddleware, requireTeacherOrAdmin, async (req, res) => {
  const { title, subject, gradeLevel, content } = req.body;
  const plan = await prisma.lessonPlan.create({
    data: { title, subject, gradeLevel, content, userId: req.user.id }
  });
  res.json({ plan });
});

router.delete('/:id', authMiddleware, requireTeacherOrAdmin, async (req, res) => {
  await prisma.lessonPlan.deleteMany({
    where: { id: req.params.id, userId: req.user.id }
  });
  res.json({ success: true });
});

export default router;
