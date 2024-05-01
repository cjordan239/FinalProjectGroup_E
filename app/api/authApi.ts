import axios from 'axios';

const API_BASE_URL = 'https://groupebackendrevou-development.up.railway.app';

export const registerUser = async (data: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/register`, data);
  return response.data;
};