import { Router } from 'express';
import OpenAI from 'openai';
import { authMiddleware, requireAdmin, requireTeacherOrAdmin } from '../middleware.js';

const router = Router();

function getClient() {
  if (!process.env.OPENAI_API_KEY) return null;
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// AI Resource Creator (admin only)
router.post('/create-resource', authMiddleware, requireAdmin, async (req, res) => {
  const { category, type, description } = req.body;
  const client = getClient();
  if (!client) return res.status(503).json({ error: 'AI service not configured. Set OPENAI_API_KEY in your secrets.' });

  try {
    const prompt = `Create an educational resource for a teaching resources website (like Twinkl).
Category: ${category}
Type: ${type}
Description: ${description}

Generate a JSON object with this structure:
{
  "title": "a catchy title",
  "description": "a brief description",
  "items": [
    { "label": "short label text", "value": "description or explanation" }
  ]
}

For banners, use: { "title": "...", "subtitle": "...", "decorations": ["emoji1 desc", ...], "message": "..." }
Return ONLY valid JSON, no markdown.`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' }
    });

    const content = JSON.parse(response.choices[0].message.content);
    res.json({ content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate resource: ' + err.message });
  }
});

// AI Lesson Plan Creator (teacher/admin)
router.post('/create-lesson-plan', authMiddleware, requireTeacherOrAdmin, async (req, res) => {
  const { subject, gradeLevel, topic, duration } = req.body;
  const client = getClient();
  if (!client) return res.status(503).json({ error: 'AI service not configured. Set OPENAI_API_KEY in your secrets.' });

  try {
    const prompt = `Create a detailed lesson plan for a teacher.
Subject: ${subject}
Grade Level: ${gradeLevel}
Topic: ${topic}
Duration: ${duration || '45 minutes'}

Include these sections:
- Learning Objectives
- Materials Needed
- Introduction / Hook
- Main Activities (step by step)
- Differentiation
- Assessment
- Plenary / Closing

Format as structured text with clear headings.`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }]
    });

    const content = response.choices[0].message.content;
    res.json({ content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate lesson plan: ' + err.message });
  }
});

export default router;
