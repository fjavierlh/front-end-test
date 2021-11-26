import { allProducts } from '../../../../fixtures/allProducts.fixture';
import { singleProduct } from '../../../../fixtures/singleProduct.fixture';
import axios from '../../../config/axios.config';
import apiClient from '../../../infrastructure/api/apiClient';

jest.mock('../../../config/axios.config');

describe('apiClient', () => {
  test('should return an object with all items', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: allProducts }));
    const { data: products } = await apiClient.getAllProducts();
    expect(products).toMatchObject(allProducts);
  });

  test('should return an object with item detail by id', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: singleProduct })
    );

    const productId = singleProduct.id;
    const { data: product } = await apiClient.getProduct(productId);
    expect(product).toMatchObject(singleProduct);
  });
  test('should add an object to cart', async () => {
    axios.post.mockImplementation(() =>
      Promise.resolve({ data: { count: 1 } })
    );
    const productToAdd = {
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      colorCode: 1000,
      storageCode: 2000,
    };
    const { data: count } = await apiClient.postProductToCart(productToAdd);
    expect(count).toMatchObject({ count: 1 });
  });
});
