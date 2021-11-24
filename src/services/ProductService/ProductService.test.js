import ProductService from '.';
import { allProducts } from '../../../fixtures/allProducts.fixture';
import { singleProduct } from '../../../fixtures/singleProduct.fixture';
import apiClient from '../../infrastructure/api/apiClient';

jest.mock('../../infrastructure/api/apiClient');

describe('ProductService', () => {
  test('should return all products', async () => {
    apiClient.getAllProducts.mockImplementation(() =>
      Promise.resolve({ data: [...allProducts] })
    );

    const { data: products } = await ProductService.getAllProducts();
    expect(products).toMatchObject(allProducts);
  });

  test('should return a product detail by id', async () => {
    apiClient.getProduct.mockImplementation(() =>
      Promise.resolve({ data: { ...singleProduct } })
    );
    const { data: productDetail } = await ProductService.getProductDetail(
      singleProduct.id
    );
    expect(apiClient.getProduct).toHaveBeenCalledWith(singleProduct.id);
    expect(productDetail).toMatchObject(singleProduct);
  });

  test('should add a product to cart', async () => {
    apiClient.postProductToCart.mockImplementation(() =>
      Promise.resolve({ data: { count: 1 } })
    );

    const productToAdd = {
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      colorCode: 1000,
      storageCode: 2000,
    };

    const { data: count } = await ProductService.addProductToCart(productToAdd);
    expect(count).toMatchObject({ count: 1 });
  });
});
