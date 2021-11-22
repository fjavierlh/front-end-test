import { useEffect, useState } from 'react';
import PersiscenteKeys from '../constants/PersintenceKeys';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';

export const useFetchAllProducts = () => {
  const [productsState, setProductsState] = useState({
    products: [],
    loading: true,
    success: false,
    error: false,
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const storedProducts = PersistenceService.get(PersiscenteKeys.PRODUCTS);
        if (storedProducts) {
          setProductsState({
            products: storedProducts,
            loading: false,
            success: true,
            error: false,
          });
          return;
        }
        const { data: products } = await ProductService.getAllProducts();
        setProductsState({
          ...products,
          loading: false,
          success: true,
          error: false,
        });
        PersistenceService.persist(PersiscenteKeys.PRODUCTS, products);
      } catch (error) {
        setProductsState((prevState) =>
          !prevState.products
            ? {
                ...prevState,
                loading: false,
                success: true,
                error: false,
              }
            : { products: [], loading: false, success: false, error: true }
        );
      }
    };

    loadProducts();
  }, [productsState]);

  return productsState;
};
