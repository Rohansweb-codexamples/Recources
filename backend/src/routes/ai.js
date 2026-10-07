import { Router } from 'express';
import { generateResource } from '../generator.js';
import { authMiddleware, requireAdmin, requireTeacherOrAdmin } from '../middleware.js';

const router = Router();

// Built-in Resource Creator (admin only) — no external API needed
router.post('/create-resource', authMiddleware, requireAdmin, (req, res) => {
  const { category, type, description } = req.body;
  if (!category || !type) return res.status(400).json({ error: 'Category and type are required' });

  try {
    const result = generateResource(category, type, description);
    res.json({ content: result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate resource: ' + err.message });
  }
});

// Built-in Lesson Plan Creator (teacher/admin) — no external API needed
router.post('/create-lesson-plan', authMiddleware, requireTeacherOrAdmin, (req, res) => {
  const { subject, gradeLevel, topic, duration } = req.body;
  if (!subject || !topic) return res.status(400).json({ error: 'Subject and topic are required' });

  try {
    const dur = duration || '45 minutes';
    const content = `LESSON PLAN
============

Subject: ${subject}
Grade Level: ${gradeLevel || 'KS1/KS2'}
Topic: ${topic}
Duration: ${dur}

LEARNING OBJECTIVES
-------------------
- To understand key concepts related to ${topic}
- To be able to describe and explain ${topic} in their own words
- To apply their knowledge of ${topic} in a practical activity
- To develop vocabulary related to ${topic}

MATERIALS NEEDED
----------------
- Whiteboard and markers
- Printed worksheets or activity sheets
- ${topic} display materials and vocabulary cards
- Pencils, coloured pencils, and paper
- Any topic-specific resources or props

INTRODUCTION / HOOK (10 minutes)
--------------------------------
1. Begin with a question to assess prior knowledge: "What do you know about ${topic}?"
2. Show a picture or object related to ${topic} and ask children to describe what they see
3. Share the learning objectives with the class
4. Introduce key vocabulary for ${topic}

MAIN ACTIVITIES (25 minutes)
-----------------------------
Activity 1: Whole Class Teaching (10 minutes)
- Use the display materials to teach key facts about ${topic}
- Ask questions throughout to check understanding
- Record key vocabulary on the board

Activity 2: Group Work (15 minutes)
- Children work in mixed-ability groups
- Each group completes a task related to ${topic}
- Groups share their findings with the class
- Teacher circulates to support and challenge

DIFFERENTIATION
---------------
Support: Provide sentence starters and key word banks
Core: Children complete the main activity independently
Challenge: Children extend their learning with additional questions or a creative task

ASSESSMENT
----------
- Observe children during group work
- Ask targeted questions during the plenary
- Review completed work for understanding
- Note any children who need additional support next lesson

PLENARY / CLOSING (10 minutes)
------------------------------
1. Ask children to share one thing they learned about ${topic}
2. Review key vocabulary
3. Pose a challenge question for next time: "What would you like to find out about ${topic} next?"
4. Praise good effort and participation

EXTENSION IDEAS
---------------
- Create a display about ${topic}
- Write a short paragraph about ${topic}
- Make a poster or model related to ${topic}
- Research a question about ${topic} at home`;

    res.json({ content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate lesson plan: ' + err.message });
  }
});

export default router;
