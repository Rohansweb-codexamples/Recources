import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

const categoryConfig = {
  COMPUTING_LABELS: { label: 'Computing Labels', bgClass: 'bg-blue-50', badgeClass: 'bg-blue-100 text-blue-700', emoji: '💻' },
  AUTUMN: { label: 'Autumn', bgClass: 'bg-orange-50', badgeClass: 'bg-orange-100 text-orange-700', emoji: '🍂' },
  SPACE: { label: 'Space', bgClass: 'bg-purple-50', badgeClass: 'bg-purple-100 text-purple-700', emoji: '🚀' },
  DISPLAY_RESOURCES: { label: 'Display Resources', bgClass: 'bg-emerald-50', badgeClass: 'bg-emerald-100 text-emerald-700', emoji: '🎨' },
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
      if (saved) {
        await api.unsaveResource(id);
        setSaved(false);
      } else {
        await api.saveResource(id);
        setSaved(true);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  function handleDownload() {
    const content = resource.content;
    let html = `<html><head><title>${resource.title}</title><style>
      body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
      h1 { color: #4f46e5; }
      .label { display: inline-block; margin: 10px; padding: 15px 25px; border: 2px solid #4f46e5; border-radius: 10px; text-align: center; }
      .label .key { font-size: 18px; font-weight: bold; color: #4f46e5; }
      .label .desc { font-size: 14px; color: #666; margin-top: 5px; }
      .banner { text-align: center; padding: 40px; background: linear-gradient(135deg, #6366f1, #a855f7); color: white; border-radius: 15px; }
      .banner h1 { color: white; font-size: 36px; }
      .decorations { margin: 20px 0; font-size: 24px; }
    </style></head><body>`;

    html += `<h1>${resource.title}</h1><p>${resource.description}</p>`;

    if (content.items) {
      html += '<div>';
      content.items.forEach(item => {
        html += `<div class="label"><div class="key">${item.label}</div><div class="desc">${item.value}</div></div>`;
      });
      html += '</div>';
    }
    if (content.title) {
      html += `<div class="banner"><h1>${content.title}</h1>`;
      if (content.subtitle) html += `<p>${content.subtitle}</p>`;
      if (content.decorations) html += `<div class="decorations">${content.decorations.join(' ')}</div>`;
      if (content.message) html += `<p>${content.message}</p>`;
      html += '</div>';
    }

    html += '</body></html>';

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.title.replace(/\s+/g, '_')}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) return <div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div></div>;
  if (error) return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><p className="text-red-600">{error}</p></div>;
  if (!resource) return null;

  const config = categoryConfig[resource.category] || { label: resource.category, bgClass: 'bg-gray-50', badgeClass: 'bg-gray-100 text-gray-700', emoji: '📄' };
  const content = resource.content;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="text-sm text-gray-500 hover:text-brand-600 mb-4 no-print">← Back</button>

      <div className={`${config.bgClass} rounded-2xl p-8 mb-6 text-center`}>
        <div className="text-6xl mb-4">{config.emoji}</div>
        <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${config.badgeClass} mb-3`}>{config.label}</span>
        <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
        <p className="text-gray-600">{resource.description}</p>
      </div>

      <div className="flex gap-3 mb-8 no-print">
        <button onClick={handleDownload} className="flex-1 bg-brand-600 text-white py-3 rounded-lg font-medium hover:bg-brand-700">⬇ Download</button>
        <button onClick={() => window.print()} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200">🖨 Print</button>
        <button onClick={handleSave} className={`px-6 py-3 rounded-lg font-medium ${saved ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
          {saved ? '✓ Saved' : '☆ Save'}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        {content.items && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Contents</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.items.map((item, i) => (
                <div key={i} className="border-2 border-gray-200 rounded-lg p-4 text-center">
                  <div className="font-bold text-brand-600 text-lg">{item.label}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {content.title && (
          <div className="text-center">
            <div className="bg-gradient-to-br from-brand-500 to-purple-500 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-2">{content.title}</h2>
              {content.subtitle && <p className="text-xl text-brand-100">{content.subtitle}</p>}
              {content.decorations && <div className="text-2xl my-4">{content.decorations.join(' ')}</div>}
              {content.message && <p className="text-lg">{content.message}</p>}
            </div>
          </div>
        )}
      </div>

      {resource.author && <p className="text-center text-sm text-gray-400 mt-4">Created by {resource.author.name}</p>}
    </div>
  );
}
