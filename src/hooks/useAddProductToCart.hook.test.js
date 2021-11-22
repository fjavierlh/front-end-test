import { renderHook } from '@testing-library/react-hooks';
import { allProducts } from '../../fixtures/allProducts.fixture';
import { singleProduct } from '../../fixtures/singleProduct.fixture';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';
import useAddProductToCart from './useAddProductToCart.hook';

jest.mock('../service/ProductService');
jest.mock('../service/PersistenceService');

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

    const { cart, count, loading, error, success } = result.current;
    expect(cart).toEqual([]);
    expect(count).toEqual(0);
    expect(loading).toEqual(true);
    expect(error).toEqual(false);
    expect(success).toEqual(false);
  });

  // TODO
});
