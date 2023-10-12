
import axios from "@/utils/axios";

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`/utilisateur/current-user}`);
        return response.data;
    } catch (error) {
        throw error;
    }
} 