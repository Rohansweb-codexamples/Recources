import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoryConfig } from '../categories.js';

const typeLabels = {
  LABELS: 'Labels',
  BANNER: 'Banner',
  DISPLAY: 'Display Pack',
  FLASHCARDS: 'Flashcards',
  WORKSHEET: 'Worksheet',
  POSTER: 'Poster',
};

export default function ResourceCard({ resource }) {
  const config = getCategoryConfig(resource.category);

  return (
    <Link to={`/resource/${resource.id}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100 hover:-translate-y-1">
      <div className={`bg-gradient-to-br ${config.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <span className="text-5xl relative z-10 drop-shadow-lg">{config.emoji}</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badge}`}>{config.label}</span>
          <span className="text-xs font-medium text-gray-400">{typeLabels[resource.type] || resource.type}</span>
        </div>
        <h3 className="font-bold text-gray-900 mb-1 leading-snug line-clamp-2">{resource.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{resource.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">By {resource.author?.name || 'Rohan'}</span>
          <span className="text-xs text-brand-600 font-semibold group-hover:translate-x-0.5 transition-transform">View & Download →</span>
        </div>
      </div>
    </Link>
  );
}
