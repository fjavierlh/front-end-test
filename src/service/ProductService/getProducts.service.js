import apiClient from '../infrastructure/api/apiClient';

const getProducts = async (id) => apiClient.getProducts();

export default getProducts;
