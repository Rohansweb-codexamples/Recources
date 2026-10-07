import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate('/');
  }

  const isActive = (path) => location.pathname === path;
  const isTeacher = user && (user.role === 'TEACHER' || user.role === 'ADMIN');

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-xl text-brand-600">Rohan's Resources</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'}`}>Browse</Link>
            {user && <Link to="/saved" className={`text-sm font-medium ${isActive('/saved') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'}`}>Saved</Link>}
            {isTeacher && <Link to="/lesson-plans" className={`text-sm font-medium ${isActive('/lesson-plans') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'}`}>Lesson Plans</Link>}
            {isTeacher && <Link to="/teacher" className={`text-sm font-medium ${isActive('/teacher') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'}`}>Teacher</Link>}
            {user && user.role === 'ADMIN' && <Link to="/admin" className={`text-sm font-medium ${isActive('/admin') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'}`}>Admin</Link>}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-sm font-medium text-gray-600 hover:text-red-600">Logout</button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-brand-600">Login</Link>
                <Link to="/register" className="text-sm font-medium bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700">Sign Up</Link>
              </div>
            )}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded text-gray-600 hover:bg-gray-100">Browse</Link>
            {user && <Link to="/saved" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded text-gray-600 hover:bg-gray-100">Saved</Link>}
            {isTeacher && <Link to="/lesson-plans" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded text-gray-600 hover:bg-gray-100">Lesson Plans</Link>}
            {isTeacher && <Link to="/teacher" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded text-gray-600 hover:bg-gray-100">Teacher</Link>}
            {user && user.role === 'ADMIN' && <Link to="/admin" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded text-gray-600 hover:bg-gray-100">Admin</Link>}
            {user ? (
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50">Logout ({user.name})</button>
            ) : (
              <div className="flex gap-2 px-3">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2 border rounded-lg text-gray-600">Login</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2 bg-brand-600 text-white rounded-lg">Sign Up</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
