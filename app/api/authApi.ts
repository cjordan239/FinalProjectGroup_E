import axios from 'axios';

const API_BASE_URL = 'https://groupebackendrevou-development.up.railway.app';

export const registerUser = async (data: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/register/user`, data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/login/user`, data);
  return response.data;
};

export const getProfile = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/current-user/data`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
};
export const donateUser = async (data: any) => {
  try {
    const token = localStorage.getItem('token'); 
    if (!token) {
      throw new Error('JWT token not found in local storage');
    }

    const response = await axios.post(`${API_BASE_URL}/donations/current-user`, data, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

