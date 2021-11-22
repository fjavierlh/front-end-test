import { renderHook } from '@testing-library/react-hooks';
import { allProducts } from '../../fixtures/allProducts.fixture';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';
import { useFetchAllProducts } from './useFetchAllProducts.hook';

jest.mock('../service/ProductService');
jest.mock('../service/PersistenceService');

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
