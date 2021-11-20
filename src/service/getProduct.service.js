import apiClient from '../infrastructure/api/apiClient';

const getProduct = async (id) => apiClient.getProduct(id);

export default getProduct;
