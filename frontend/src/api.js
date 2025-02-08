import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const fetchItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};
