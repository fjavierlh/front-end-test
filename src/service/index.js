import getProduct from './getProduct.service';
import getProducts from './getProducts.service';
import addToCart from './addToCart.service'

const ProductService = {
  getProducts: getProducts,
  getProduct: getProduct,
  addToCart: addToCart,
};

export default ProductService;
