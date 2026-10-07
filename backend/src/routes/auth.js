import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware.js';

const prisma = new PrismaClient();
const router = Router();

router.post('/register', async (req, res) => {
  const { email, password, name, role } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'Missing required fields' });

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ error: 'Email already registered' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name, role: role || 'USER' }
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

router.get('/me', authMiddleware, (req, res) => {
  res.json({ user: { id: req.user.id, email: req.user.email, name: req.user.name, role: req.user.role } });
});

export default router;
