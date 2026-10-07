import React, { useState, useEffect } from 'react';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreator, setShowCreator] = useState(false);
  const [showManual, setShowManual] = useState(false);

  const [category, setCategory] = useState('COMPUTING_LABELS');
  const [type, setType] = useState('LABELS');
  const [description, setDescription] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [aiError, setAiError] = useState('');
  const [title, setTitle] = useState('');

  function loadResources() {
    setLoading(true);
    api.getResources().then(data => setResources(data.resources)).finally(() => setLoading(false));
  }

  useEffect(() => { loadResources(); }, []);

  async function handleAIGenerate() {
    setAiLoading(true);
    setAiError('');
    setAiResult(null);
    try {
      const data = await api.aiCreateResource({ category, type, description });
      setAiResult(data.content);
      if (data.content.title) setTitle(data.content.title);
    } catch (err) {
      setAiError(err.message);
    } finally {
      setAiLoading(false);
    }
  }

  async function handleSaveResource() {
    if (!title || !aiResult) return;
    try {
      await api.createResource({
        title, description, category, type,
        content: aiResult, tags: [category.toLowerCase(), type.toLowerCase()]
      });
      setAiResult(null); setDescription(''); setTitle('');
      setShowCreator(false); loadResources();
    } catch (err) {
      setAiError(err.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this resource?')) return;
    await api.deleteResource(id);
    loadResources();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome, {user?.name}. Manage resources and create new ones with AI.</p>

      <div className="flex gap-3 mb-8">
        <button onClick={() => setShowCreator(!showCreator)} className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-700">✨ AI Resource Creator</button>
        <button onClick={() => setShowManual(!showManual)} className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200">✏️ Manual Create</button>
      </div>

      {showCreator && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">AI Resource Creator</h2>
          {aiError && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{aiError}</div>}

          {!aiResult ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option value="COMPUTING_LABELS">Computing Labels</option>
                    <option value="AUTUMN">Autumn</option>
                    <option value="SPACE">Space</option>
                    <option value="DISPLAY_RESOURCES">Display Resources</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option value="LABELS">Labels</option>
                    <option value="BANNER">Banner</option>
                    <option value="DISPLAY">Display</option>
                    <option value="POSTER">Poster</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Describe what you want</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3}
                  placeholder="e.g., Keyboard shortcut labels for Windows computers, suitable for KS2 computing display"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <button onClick={handleAIGenerate} disabled={aiLoading || !description}
                className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50">
                {aiLoading ? 'Generating...' : '✨ Generate with AI'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg"><p className="text-green-700 font-medium">✓ AI generated content! Review and save below.</p></div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-600">{JSON.stringify(aiResult, null, 2)}</pre>
              </div>
              <div className="flex gap-3">
                <button onClick={handleSaveResource} className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700">✓ Save Resource</button>
                <button onClick={() => { setAiResult(null); setTitle(''); }} className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200">Discard & Try Again</button>
              </div>
            </div>
          )}
        </div>
      )}

      {showManual && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Manual Resource Creator</h2>
          <ManualCreator onCreated={() => { setShowManual(false); loadResources(); }} />
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">All Resources ({resources.length})</h2>
      {loading ? (
        <div className="flex justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div></div>
      ) : (
        <div className="space-y-3">
          {resources.map(r => (
            <div key={r.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{r.title}</h3>
                <p className="text-sm text-gray-500">{r.category} · {r.type}</p>
              </div>
              <button onClick={() => handleDelete(r.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ManualCreator({ onCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('COMPUTING_LABELS');
  const [type, setType] = useState('LABELS');
  const [itemsText, setItemsText] = useState('');
  const [error, setError] = useState('');

  async function handleCreate(e) {
    e.preventDefault();
    setError('');
    try {
      const items = itemsText.split('\n').filter(l => l.trim()).map(line => {
        const [label, ...rest] = line.split(',');
        return { label: label.trim(), value: rest.join(',').trim() };
      });
      await api.createResource({ title, description, category, type, content: { items }, tags: [category.toLowerCase(), type.toLowerCase()] });
      onCreated();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleCreate} className="space-y-4">
      {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option value="COMPUTING_LABELS">Computing Labels</option>
            <option value="AUTUMN">Autumn</option>
            <option value="SPACE">Space</option>
            <option value="DISPLAY_RESOURCES">Display Resources</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option value="LABELS">Labels</option>
            <option value="BANNER">Banner</option>
            <option value="DISPLAY">Display</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Items (one per line, format: Label, Description)</label>
        <textarea value={itemsText} onChange={e => setItemsText(e.target.value)} rows={5} placeholder="Ctrl+C, Copy&#10;Ctrl+V, Paste" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
      </div>
      <button type="submit" className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700">Create Resource</button>
    </form>
  );
}
