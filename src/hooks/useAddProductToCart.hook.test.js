import { renderHook } from '@testing-library/react-hooks';
import { allProducts } from '../../fixtures/allProducts.fixture';
import { singleProduct } from '../../fixtures/singleProduct.fixture';
import PersistenceService from '../services/PersistenceService';
import ProductService from '../services/ProductService';
import useAddProductToCart from './useAddProductToCart.hook';

jest.mock('../services/ProductService');
jest.mock('../services/PersistenceService');

describe('useFetchProduct', () => {
  test('should return initial state', async () => {
    const { result } = renderHook(() =>
      useAddProductToCart({
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        colorCode: 1000,
        storageCode: 2000,
      })
    );

    PersistenceService.get.mockImplementation(() => allProducts);
    PersistenceService.persist.mockImplementation(() => {});
    ProductService.getProductDetail.mockImplementation(() =>
      Promise.resolve(singleProduct)
    );

    const { cartCount } = result.current;
    expect(cartCount).toEqual(0);
  });

  // TODO
});
