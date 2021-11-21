import getProductDetail from './getProductDetail.service';
import getAllProducts from './getAllProducts.service';
import addProductToCart from './addProductToCart.service';

const ProductService = {
  getAllProducts: getAllProducts,
  getProductDetail: getProductDetail,
  addProductToCart: addProductToCart,
};

export default ProductService;
