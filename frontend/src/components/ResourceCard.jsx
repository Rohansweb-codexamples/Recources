import React from 'react';
import { Link } from 'react-router-dom';

const categoryConfig = {
  COMPUTING_LABELS: { label: 'Computing Labels', bgClass: 'bg-blue-50', badgeClass: 'bg-blue-100 text-blue-700', emoji: '💻' },
  AUTUMN: { label: 'Autumn', bgClass: 'bg-orange-50', badgeClass: 'bg-orange-100 text-orange-700', emoji: '🍂' },
  SPACE: { label: 'Space', bgClass: 'bg-purple-50', badgeClass: 'bg-purple-100 text-purple-700', emoji: '🚀' },
  DISPLAY_RESOURCES: { label: 'Display Resources', bgClass: 'bg-emerald-50', badgeClass: 'bg-emerald-100 text-emerald-700', emoji: '🎨' },
};

export default function ResourceCard({ resource }) {
  const config = categoryConfig[resource.category] || { label: resource.category, bgClass: 'bg-gray-50', badgeClass: 'bg-gray-100 text-gray-700', emoji: '📄' };

  return (
    <Link to={`/resource/${resource.id}`} className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <div className={`${config.bgClass} p-6 flex items-center justify-center text-5xl`}>
        {config.emoji}
      </div>
      <div className="p-4">
        <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${config.badgeClass} mb-2`}>
          {config.label}
        </span>
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{resource.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{resource.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">{resource.type}</span>
          <span className="text-xs text-brand-600 font-medium">View →</span>
        </div>
      </div>
    </Link>
  );
}
