import apiClient from '../../infrastructure/api/apiClient';

const getProductDetail = async (id) => apiClient.getProduct(id);

export default getProductDetail;
