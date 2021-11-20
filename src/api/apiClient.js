import axios from './../config/axios.config';
import handleError from './handleError';

const apiClient = {
  getProducts: async () =>
    await axios.get('/product').catch(handleError),

  getProduct: async (id) =>
    await axios.get(`/product/${id}`).catch(handleError),

  postProductToCart: async (product) =>
    await axios.post('/cart', product).catch(handleError),
};

export default apiClient;
