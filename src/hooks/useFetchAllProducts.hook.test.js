import { renderHook } from '@testing-library/react-hooks';
import { allProducts } from '../../fixtures/allProducts.fixture';
import PersistenceService from '../services/PersistenceService';
import ProductService from '../services/ProductService';
import useFetchAllProducts from './useFetchAllProducts.hook';

jest.mock('../services/ProductService');
jest.mock('../services/PersistenceService');

describe('useFetchProducts', () => {
  test('should return initial state', async () => {
    const { result } = renderHook(() => useFetchAllProducts());

    PersistenceService.get.mockImplementation(() => allProducts);
    PersistenceService.persist.mockImplementation(() => {});
    ProductService.getAllProducts.mockImplementation(() =>
      Promise.resolve(allProducts)
    );

    const { products, loading, error, success } = result.current;
    expect(products).toEqual([]);
    expect(loading).toEqual(true);
    expect(error).toEqual(false);
    expect(success).toEqual(false);
  });

  // TODO
});
