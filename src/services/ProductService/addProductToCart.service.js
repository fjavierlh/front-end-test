import apiClient from '../../infrastructure/api/apiClient';

const addProductToCart = async (product) => apiClient.postProductToCart(product);

export default addProductToCart;
