import React, { useState, useEffect } from 'react';
import { api } from '../api/client';
import ResourceCard from '../components/ResourceCard';
import { categoryList } from '../categories.js';

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
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-600 via-purple-600 to-pink-500 text-white py-16 no-print relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 2px, transparent 2px), radial-gradient(circle at 80% 20%, white 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Rohan's Web Resources</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">Downloadable display materials, labels, banners, flashcards and worksheets for teachers</p>
          <div className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8 no-print">
          {categoryList.map(cat => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                category === cat.key
                  ? 'bg-brand-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:shadow-sm'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Resource count */}
        <div className="mb-4 text-sm text-gray-500">
          {loading ? 'Loading...' : `${resources.length} resource${resources.length !== 1 ? 's' : ''} found`}
        </div>

        {/* Resources grid */}
        {loading ? (
          <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-600"></div></div>
        ) : resources.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg">No resources found. Try a different search or category.</p>
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
