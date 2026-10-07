import React, { useState, useEffect } from 'react';
import { api } from '../api/client';
import ResourceCard from '../components/ResourceCard';

const categories = [
  { key: 'ALL', label: 'All Resources', emoji: '📚' },
  { key: 'COMPUTING_LABELS', label: 'Computing Labels', emoji: '💻' },
  { key: 'AUTUMN', label: 'Autumn', emoji: '🍂' },
  { key: 'SPACE', label: 'Space', emoji: '🚀' },
  { key: 'DISPLAY_RESOURCES', label: 'Display Resources', emoji: '🎨' },
];

export default function Home() {
  const [resources, setResources] = useState([]);
  const [category, setCategory] = useState('ALL');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getResources({ category, search })
      .then(data => setResources(data.resources))
      .catch(() => setResources([]))
      .finally(() => setLoading(false));
  }, [category, search]);

  return (
    <div>
      <div className="bg-gradient-to-br from-brand-600 to-purple-600 text-white py-16 no-print">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rohan's Web Resources</h1>
          <p className="text-lg md:text-xl text-brand-100 mb-8">Downloadable display materials, computing labels, and teaching resources</p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-full text-gray-900 shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-300"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8 no-print">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                category === cat.key
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div></div>
        ) : resources.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-4xl mb-4">🔍</p>
            <p>No resources found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
