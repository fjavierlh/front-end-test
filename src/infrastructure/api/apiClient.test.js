import { allProducts } from '../../../fixtures/allProducts.fixture';
import { singleProduct } from '../../../fixtures/singleProduct.fixture';
import apiClient from './apiClient';

describe('apiClient', () => {
  test('should return an object with all items', async () => {
    const { data: products } = await apiClient.getProducts();
    expect(products).toMatchObject(allProducts);
  });

  test('should return an object with item detail by id', async () => {
    const productId = singleProduct.id;
    const { data: product } = await apiClient.getProduct(productId);
    expect(product).toMatchObject(singleProduct);
  });
  test('should add an object to cart', async () => {
    const productToAdd = {
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      colorCode: 1000,
      storageCode: 2000,
    };
    const { data: count } = await apiClient.postProductToCart(productToAdd);
    expect(count).toMatchObject({ count: 1 });
  });
});
