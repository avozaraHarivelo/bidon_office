import { Credentials, User } from "@/types";
import axios from "@/utils/axios";

export const login = async (credentials)=> {
  try {
    const response = await axios.post('/auth/signin', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post('/api/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};