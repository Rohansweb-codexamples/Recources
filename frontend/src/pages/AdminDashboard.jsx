import React, { useState, useEffect } from 'react';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';
import { categoryList, getCategoryConfig } from '../categories.js';

const resourceTypes = [
  { value: 'LABELS', label: 'Labels' },
  { value: 'BANNER', label: 'Banner' },
  { value: 'DISPLAY', label: 'Display Pack' },
  { value: 'FLASHCARDS', label: 'Flashcards' },
  { value: 'WORKSHEET', label: 'Worksheet' },
  { value: 'POSTER', label: 'Poster' },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreator, setShowCreator] = useState(false);
  const [showManual, setShowManual] = useState(false);

  // Creator form
  const [category, setCategory] = useState('SPRING');
  const [type, setType] = useState('LABELS');
  const [description, setDescription] = useState('');
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function loadResources() {
    setLoading(true);
    api.getResources().then(data => setResources(data.resources)).finally(() => setLoading(false));
  }

  useEffect(() => { loadResources(); }, []);

  async function handleGenerate() {
    setGenerating(true);
    setError('');
    setResult(null);
    try {
      const data = await api.aiCreateResource({ category, type, description });
      setResult(data.content);
      if (data.content.title) setTitle(data.content.title);
    } catch (err) {
      setError(err.message);
    } finally {
      setGenerating(false);
    }
  }

  async function handleSaveResource() {
    if (!title || !result) return;
    try {
      await api.createResource({
        title, description: description || result.description,
        category, type,
        content: result.content, tags: [category.toLowerCase(), type.toLowerCase()]
      });
      setResult(null); setDescription(''); setTitle('');
      setShowCreator(false); loadResources();
    } catch (err) {
      setError(err.message);
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
      <p className="text-gray-500 mb-8">Welcome, {user?.name}. Create resources with the built-in generator — no API key needed!</p>

      <div className="flex flex-wrap gap-3 mb-8">
        <button onClick={() => setShowCreator(!showCreator)} className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-700 shadow-md">
          ✨ Resource Creator
        </button>
        <button onClick={() => setShowManual(!showManual)} className="bg-white border-2 border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50">
          ✏️ Manual Create
        </button>
      </div>

      {/* Resource Creator */}
      {showCreator && (
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">✨ Resource Creator</h2>
          <p className="text-sm text-gray-500 mb-4">Instantly generate resources from our built-in knowledge base — no API key required!</p>
          {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}

          {!result ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500">
                    {categoryList.filter(c => c.key !== 'ALL').map(c => (
                      <option key={c.key} value={c.key}>{c.emoji} {c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resource Type</label>
                  <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500">
                    {resourceTypes.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2}
                  placeholder="Add a custom description, or leave blank for auto-generated"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
              </div>
              <button onClick={handleGenerate} disabled={generating}
                className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50 shadow-md flex items-center gap-2">
                {generating ? '⏳ Generating...' : '✨ Generate Resource'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-green-700 font-medium flex items-center gap-2">✓ Resource generated! Review and save below.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
              </div>
              {/* Preview */}
              <div className="border-2 border-gray-100 rounded-xl p-6 bg-gray-50 max-h-96 overflow-y-auto">
                {result.content?.title && (
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold">{result.content.title}</h3>
                    {result.content.subtitle && <p className="text-gray-500">{result.content.subtitle}</p>}
                    {result.content.decorations && <p className="text-2xl my-2">{result.content.decorations.join(' ')}</p>}
                    {result.content.message && <p className="text-gray-600">{result.content.message}</p>}
                  </div>
                )}
                {result.content?.items && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {result.content.items.map((item, i) => (
                      <div key={i} className="border-2 border-gray-200 rounded-lg p-3 text-center bg-white">
                        <div className="font-bold text-brand-600">{item.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{item.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <button onClick={handleSaveResource} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 shadow-md">✓ Save Resource</button>
                <button onClick={() => { setResult(null); setTitle(''); }} className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">↩ Discard & Try Again</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Manual Creator */}
      {showManual && (
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Manual Resource Creator</h2>
          <ManualCreator onCreated={() => { setShowManual(false); loadResources(); }} />
        </div>
      )}

      {/* Resource list */}
      <h2 className="text-xl font-semibold mb-4">All Resources ({resources.length})</h2>
      {loading ? (
        <div className="flex justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div></div>
      ) : (
        <div className="space-y-2">
          {resources.map(r => {
            const config = getCategoryConfig(r.category);
            return (
              <div key={r.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{config.emoji}</span>
                  <div>
                    <h3 className="font-medium">{r.title}</h3>
                    <p className="text-sm text-gray-500">{config.label} · {r.type}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(r.id)} className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-red-50">Delete</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ManualCreator({ onCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('SPRING');
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg">
            {categoryList.filter(c => c.key !== 'ALL').map(c => <option key={c.key} value={c.key}>{c.emoji} {c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg">
            {resourceTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Items (one per line: Label, Description)</label>
        <textarea value={itemsText} onChange={e => setItemsText(e.target.value)} rows={5} placeholder="Ctrl+C, Copy&#10;Ctrl+V, Paste" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg" />
      </div>
      <button type="submit" className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 shadow-md">Create Resource</button>
    </form>
  );
}
