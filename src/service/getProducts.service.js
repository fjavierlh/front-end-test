import apiClient from '../api/apiClient';

const getProducts = async (id) => apiClient.getProducts();

export default getProducts;
