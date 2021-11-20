import apiClient from '../api/apiClient';

const getProduct = async (id) => apiClient.getProduct(id);

export default getProduct;
