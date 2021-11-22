import { renderHook } from '@testing-library/react-hooks';
import { allProducts } from '../../fixtures/allProducts.fixture';
import { singleProduct } from '../../fixtures/singleProduct.fixture';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';
import useFetchSingleProduct from './useFetchSingleProduct.hook';

jest.mock('../service/ProductService');
jest.mock('../service/PersistenceService');

describe('useFetchProduct', () => {
  test('should return initial state', async () => {
    const { result } = renderHook(() => useFetchSingleProduct());

    PersistenceService.get.mockImplementation(() => allProducts);
    PersistenceService.persist.mockImplementation(() => {});
    ProductService.getProductDetail.mockImplementation(() =>
      Promise.resolve(singleProduct)
    );

    const { product, loading, error, success } = result.current;
    expect(product).toEqual({});
    expect(loading).toEqual(true);
    expect(error).toEqual(false);
    expect(success).toEqual(false);
  });

  // TODO
});
