
import axios from "@/utils/axios";

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`/utilisateur/current-user`);
        return response.data;
    } catch (error) {
        throw error;
    }
} 

export const getAllUser = async () => {
    try {
        const response = await axios.get(`/utilisateur/all`);
        return response;
    } catch (error) {
        throw error;
    }
} 



export const update = (user) => axios.put(`utilisateur/update/${user.id}`, user);