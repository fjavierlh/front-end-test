import apiClient from '../api/apiClient';

const getProduct = async (product) => apiClient.postProductToCart(product);

export default getProduct;
