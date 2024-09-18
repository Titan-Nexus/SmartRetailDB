import axios from 'axios';

export const getInventory = async () => {
    try {
        const response = await axios.get('/api/inventory');
        return response.data;
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw error;
    }
};

export const updateInventory = async (item_id, quantity) => {
    try {
        const response = await axios.post('/api/inventory/update', { item_id, quantity });
        return response.data;
    } catch (error) {
        console.error('Error updating inventory:', error);
        throw error;
    }
};