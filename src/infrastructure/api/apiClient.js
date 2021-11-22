import axios from '../../config/axios.config';

const apiClient = {
  getAllProducts: async () => await axios.get('/product'),

  getProduct: async (id) => await axios.get(`/product/${id}`),

  postProductToCart: async (product) => await axios.post('/cart', product),
};

export default apiClient;
