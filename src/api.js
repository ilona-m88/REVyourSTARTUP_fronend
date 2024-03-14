import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: `${API_BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (username, password) => {
  return api.post('login/', { username, password });
};

export const register = (username, email, password) => {
  return api.post('register/', { username, email, password });
};

export const logout = () => {
  return api.post('logout/');
};

// Additional API functions
export const getUserData = (userId) => {
  return api.get(`users/${userId}/`);
};

export const updateUserProfile = (userId, userData) => {
  return api.put(`users/${userId}/`, userData);
};