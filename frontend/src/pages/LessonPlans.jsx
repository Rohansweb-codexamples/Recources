import React, { useState, useEffect } from 'react';
import { api } from '../api/client';

export default function LessonPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showGenerator, setShowGenerator] = useState(false);

  const [subject, setSubject] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('45 minutes');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState('');
  const [aiError, setAiError] = useState('');
  const [planTitle, setPlanTitle] = useState('');

  function loadPlans() {
    setLoading(true);
    api.getLessonPlans().then(data => setPlans(data.plans)).finally(() => setLoading(false));
  }

  useEffect(() => { loadPlans(); }, []);

  async function handleGenerate() {
    setAiLoading(true);
    setAiError('');
    setAiResult('');
    try {
      const data = await api.aiCreateLessonPlan({ subject, gradeLevel, topic, duration });
      setAiResult(data.content);
      setPlanTitle(`${subject}: ${topic}`);
    } catch (err) {
      setAiError(err.message);
    } finally {
      setAiLoading(false);
    }
  }

  async function handleSavePlan() {
    if (!planTitle || !aiResult) return;
    try {
      await api.createLessonPlan({ title: planTitle, subject, gradeLevel, content: aiResult });
      setAiResult(''); setPlanTitle(''); setSubject(''); setTopic('');
      setShowGenerator(false); loadPlans();
    } catch (err) {
      setAiError(err.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this lesson plan?')) return;
    await api.deleteLessonPlan(id);
    loadPlans();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Lesson Plans</h1>
      <p className="text-gray-500 mb-8">Create AI-generated lesson plans and manage your saved plans</p>

      <button onClick={() => setShowGenerator(!showGenerator)} className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-700 mb-8">
        ✨ AI Lesson Plan Generator
      </button>

      {showGenerator && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">AI Lesson Plan Generator</h2>
          {aiError && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{aiError}</div>}

          {!aiResult ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="e.g., Science" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade Level</label>
                  <input type="text" value={gradeLevel} onChange={e => setGradeLevel(e.target.value)} placeholder="e.g., Year 4 / KS2" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                  <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g., The Solar System" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input type="text" value={duration} onChange={e => setDuration(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <button onClick={handleGenerate} disabled={aiLoading || !subject || !topic}
                className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50">
                {aiLoading ? 'Generating...' : '✨ Generate Lesson Plan'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg"><p className="text-green-700 font-medium">✓ AI generated lesson plan! Review and save below.</p></div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Title</label>
                <input type="text" value={planTitle} onChange={e => setPlanTitle(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-600 whitespace-pre-wrap">{aiResult}</pre>
              </div>
              <div className="flex gap-3">
                <button onClick={handleSavePlan} className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700">✓ Save Lesson Plan</button>
                <button onClick={() => { setAiResult(''); setPlanTitle(''); }} className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200">Discard & Try Again</button>
              </div>
            </div>
          )}
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">Saved Lesson Plans ({plans.length})</h2>
      {loading ? (
        <div className="flex justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div></div>
      ) : plans.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-4xl mb-4">📋</p>
          <p>No lesson plans yet. Use the AI generator above to create one.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {plans.map(plan => (
            <details key={plan.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <summary className="p-4 cursor-pointer flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{plan.title}</h3>
                  <p className="text-sm text-gray-500">{plan.subject} · {plan.gradeLevel}</p>
                </div>
                <button onClick={(e) => { e.preventDefault(); handleDelete(plan.id); }} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
              </summary>
              <div className="p-4 pt-0 border-t border-gray-100">
                <pre className="text-sm text-gray-600 whitespace-pre-wrap">{plan.content}</pre>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
