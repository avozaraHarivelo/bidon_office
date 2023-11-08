
import axios from "@/utils/axios";

export const getAllTransactionNfc = async () => {
    try {
        const response = await axios.get(`/transactions_nfc/all`);
        return response;
    } catch (error) {
        throw error;
    }
} 
