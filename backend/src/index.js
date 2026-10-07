import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import resourceRoutes from './routes/resources.js';
import aiRoutes from './routes/ai.js';
import lessonPlanRoutes from './routes/lessonPlans.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/lesson-plans', lessonPlanRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
