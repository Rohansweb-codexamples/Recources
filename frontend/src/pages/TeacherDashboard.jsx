import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function TeacherDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome, {user?.name}. Access your teacher tools.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/lesson-plans" className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">📋</div>
          <h2 className="text-xl font-semibold mb-2">Lesson Plans</h2>
          <p className="text-gray-500">Create and manage AI-generated lesson plans for your classes.</p>
        </Link>
        <Link to="/saved" className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">⭐</div>
          <h2 className="text-xl font-semibold mb-2">Saved Resources</h2>
          <p className="text-gray-500">Access your bookmarked teaching resources and display materials.</p>
        </Link>
        <Link to="/" className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">📚</div>
          <h2 className="text-xl font-semibold mb-2">Browse Resources</h2>
          <p className="text-gray-500">Explore all available teaching resources and download materials.</p>
        </Link>
        <div className="bg-brand-50 rounded-xl border border-brand-100 p-8">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-xl font-semibold mb-2">AI Lesson Planner</h2>
          <p className="text-gray-500">Generate detailed lesson plans with AI. Go to Lesson Plans to get started.</p>
          <Link to="/lesson-plans" className="inline-block mt-4 text-brand-600 font-medium text-sm">Get started →</Link>
        </div>
      </div>
    </div>
  );
}
