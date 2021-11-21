import apiClient from '../../infrastructure/api/apiClient';

const getAllProducts = async (id) => apiClient.getAllProducts();

export default getAllProducts;
