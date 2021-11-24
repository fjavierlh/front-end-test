import { renderHook } from '@testing-library/react-hooks';
import { useEffect } from 'react';
import { singleProduct } from '../../fixtures/singleProduct.fixture';
import PersistenceService from '../services/PersistenceService';
import ProductService from '../services/ProductService';
import useFetchSingleProduct from './useFetchSingleProduct.hook';

jest.mock('../service/ProductService');
jest.mock('../service/PersistenceService');

describe('useFetchProduct', () => {
  test('should return initial state', async () => {
    const id = singleProduct.id;
    const { result, rerender } = renderHook(() => {
      useEffect(() => {
        useFetchSingleProduct(id);
        return () => {
          useFetchSingleProduct(id);
        };
      }, [id]);
    });

    PersistenceService.persist.mockImplementation(() => {});
    ProductService.getProductDetail.mockImplementation(() => ({
      data: Promise.resolve(singleProduct),
    }));

    const { product, loading, error, success } = result.current;
    expect(product).toEqual({});
    expect(loading).toEqual(true);
    expect(error).toEqual(false);
    expect(success).toEqual(false);
  });

  // TODO
});
