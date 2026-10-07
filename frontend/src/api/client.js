const API_URL = '/api';

function getToken() {
  return localStorage.getItem('token');
}

async function request(path, options = {}) {
  const token = getToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export const api = {
  register: (email, password, name, role) =>
    request('/auth/register', { method: 'POST', body: JSON.stringify({ email, password, name, role }) }),
  login: (email, password) =>
    request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  getMe: () => request('/auth/me'),

  getResources: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/resources${query ? '?' + query : ''}`);
  },
  getResource: (id) => request(`/resources/${id}`),
  createResource: (data) => request('/resources', { method: 'POST', body: JSON.stringify(data) }),
  deleteResource: (id) => request(`/resources/${id}`, { method: 'DELETE' }),
  saveResource: (id) => request(`/resources/${id}/save`, { method: 'POST' }),
  unsaveResource: (id) => request(`/resources/${id}/save`, { method: 'DELETE' }),
  getSavedResources: () => request('/resources/saved'),

  aiCreateResource: (data) => request('/ai/create-resource', { method: 'POST', body: JSON.stringify(data) }),
  aiCreateLessonPlan: (data) => request('/ai/create-lesson-plan', { method: 'POST', body: JSON.stringify(data) }),

  getLessonPlans: () => request('/lesson-plans'),
  createLessonPlan: (data) => request('/lesson-plans', { method: 'POST', body: JSON.stringify(data) }),
  deleteLessonPlan: (id) => request(`/lesson-plans/${id}`, { method: 'DELETE' }),
};
