import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';
import { getCategoryConfig } from '../categories.js';

const typeLabels = {
  LABELS: 'Labels', BANNER: 'Banner', DISPLAY: 'Display Pack',
  FLASHCARDS: 'Flashcards', WORKSHEET: 'Worksheet', POSTER: 'Poster',
};

export default function ResourceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getResource(id)
      .then(data => setResource(data.resource))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSave() {
    if (!user) { navigate('/login'); return; }
    try {
      if (saved) { await api.unsaveResource(id); setSaved(false); }
      else { await api.saveResource(id); setSaved(true); }
    } catch (err) { setError(err.message); }
  }

  function handleDownload() {
    const c = resource.content;
    const config = getCategoryConfig(resource.category);
    let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${resource.title}</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Comic Sans MS', 'Segoe UI', sans-serif; padding: 40px; color: #1f2937; }
      .header { text-align: center; padding: 40px; border-radius: 20px; margin-bottom: 30px; background: linear-gradient(135deg, #6366f1, #a855f7); color: white; }
      .header h1 { font-size: 36px; margin-bottom: 10px; }
      .header p { font-size: 18px; opacity: 0.9; }
      .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
      .card { border: 3px solid #e5e7eb; border-radius: 16px; padding: 20px; text-align: center; page-break-inside: avoid; }
      .card .label { font-size: 22px; font-weight: bold; color: #4f46e5; margin-bottom: 8px; }
      .card .value { font-size: 14px; color: #6b7280; line-height: 1.4; }
      .banner-display { text-align: center; padding: 60px; border-radius: 20px; background: linear-gradient(135deg, #6366f1, #a855f7); color: white; }
      .banner-display h1 { font-size: 48px; margin-bottom: 15px; }
      .banner-display .subtitle { font-size: 24px; opacity: 0.9; margin-bottom: 20px; }
      .banner-display .decorations { font-size: 32px; margin: 20px 0; }
      .banner-display .message { font-size: 20px; }
      .footer { text-align: center; margin-top: 40px; color: #9ca3af; font-size: 12px; }
    </style></head><body>`;

    html += `<div class="header"><h1>${resource.title}</h1><p>${resource.description}</p></div>`;

    if (c.items) {
      html += '<div class="grid">';
      c.items.forEach(item => {
        html += `<div class="card"><div class="label">${item.label}</div><div class="value">${item.value}</div></div>`;
      });
      html += '</div>';
    }
    if (c.title) {
      html += `<div class="banner-display"><h1>${c.title}</h1>`;
      if (c.subtitle) html += `<div class="subtitle">${c.subtitle}</div>`;
      if (c.decorations) html += `<div class="decorations">${c.decorations.join(' ')}</div>`;
      if (c.message) html += `<div class="message">${c.message}</div>`;
      html += '</div>';
    }

    html += `<div class="footer">Created with Rohan's Web Resources — ${config.label}</div></body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.title.replace(/[^a-z0-9]/gi, '_')}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-600"></div></div>;
  if (error) return <div className="max-w-4xl mx-auto px-4 py-20 text-center"><p className="text-red-600 text-lg">{error}</p></div>;
  if (!resource) return null;

  const config = getCategoryConfig(resource.category);
  const c = resource.content;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="text-sm text-gray-500 hover:text-brand-600 mb-6 no-print flex items-center gap-1">
        ← Back to resources
      </button>

      {/* Themed header */}
      <div className={`bg-gradient-to-br ${config.gradient} rounded-3xl p-10 mb-6 text-center text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 20%, white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10">
          <div className="text-7xl mb-4 drop-shadow-xl">{config.emoji}</div>
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full bg-white/25 backdrop-blur mb-4">{config.label} · {typeLabels[resource.type] || resource.type}</span>
          <h1 className="text-4xl font-extrabold mb-3 drop-shadow-lg">{resource.title}</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{resource.description}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mb-8 no-print">
        <button onClick={handleDownload} className="flex-1 min-w-[140px] bg-brand-600 text-white py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-md">
          ⬇ Download Resource
        </button>
        <button onClick={() => window.print()} className="flex-1 min-w-[140px] bg-white border-2 border-gray-200 text-gray-700 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          🖨 Print / Save as PDF
        </button>
        <button onClick={handleSave} className={`px-6 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2 ${saved ? 'bg-green-100 text-green-700 border-2 border-green-200' : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
          {saved ? '✓ Saved' : '☆ Save'}
        </button>
      </div>

      {/* Content display — Twinkl-style */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 md:p-10">
        {/* BANNER type */}
        {resource.type === 'BANNER' && c.title && (
          <div className={`bg-gradient-to-br ${config.gradient} rounded-2xl p-12 text-center text-white`}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">{c.title}</h2>
            {c.subtitle && <p className="text-xl md:text-2xl text-white/90 mb-4">{c.subtitle}</p>}
            {c.decorations && <div className="text-3xl my-6">{c.decorations.join('  ')}</div>}
            {c.message && <p className="text-lg md:text-xl max-w-2xl mx-auto">{c.message}</p>}
          </div>
        )}

        {/* LABELS / DISPLAY / FLASHCARDS / WORKSHEET / POSTER — all use items */}
        {c.items && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <span>{config.emoji}</span>
              {resource.type === 'FLASHCARDS' ? 'Vocabulary Cards' : resource.type === 'WORKSHEET' ? 'Questions & Answers' : 'Contents'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {c.items.map((item, i) => (
                <div key={i} className="border-3 border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow bg-gradient-to-b from-white to-gray-50">
                  <div className="font-bold text-lg text-brand-600 mb-2">{item.label}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {resource.author && (
        <p className="text-center text-sm text-gray-400 mt-6 no-print">
          Created by {resource.author.name} · Rohan's Web Resources
        </p>
      )}
    </div>
  );
}
