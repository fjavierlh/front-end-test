import axios from '../../config/axios.config';

const apiClient = {
  getAllProducts: async () => axios.get('/product'),

  getProduct: async (id) => axios.get(`/product/${id}`),

  postProductToCart: async (product) => axios.post('/cart', product),
};

export default apiClient;
