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

export const getProfile = async (options: any) => {
  const response = await axios.get(`${API_BASE_URL}/current-user/data`, options);
  return response.data;
}

export const donationUser = async ( data: { nominal: number; from_id: number;}) => {
  const response = await axios.post(`${API_BASE_URL}/donations`, data);
  return response.data;
}

// export const createProfile = async ( data: { realname: string; address: string occupation: string }) => {
//   const response = await axios.get(`${API_BASE_URL}/profiles`, data);
//   return response.data;
// }
  