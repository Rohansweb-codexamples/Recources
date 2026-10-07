import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResourceDetail from './pages/ResourceDetail';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import SavedResources from './pages/SavedResources';
import LessonPlans from './pages/LessonPlans';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="/saved" element={<ProtectedRoute><SavedResources /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute roles={['ADMIN']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/teacher" element={<ProtectedRoute roles={['TEACHER', 'ADMIN']}><TeacherDashboard /></ProtectedRoute>} />
          <Route path="/lesson-plans" element={<ProtectedRoute roles={['TEACHER', 'ADMIN']}><LessonPlans /></ProtectedRoute>} />
        </Routes>
      </main>
      <footer className="bg-gray-900 text-gray-300 py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Rohan's Web Resources — Educational resources for teachers</p>
        </div>
      </footer>
    </div>
  );
}
