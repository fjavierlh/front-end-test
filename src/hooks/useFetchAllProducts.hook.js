import { useEffect, useState } from 'react';
import PersiscenteKeys from '../constants/PersintenceKeys';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';

const useFetchAllProducts = () => {
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
        const { data: productsFromAPI } = await ProductService.getAllProducts();
        setProductsState({
          products: productsFromAPI,
          loading: false,
          success: true,
          error: false,
        });
        PersistenceService.persist(PersiscenteKeys.PRODUCTS, productsFromAPI);
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
  }, []);

  return productsState;
};

export default useFetchAllProducts;
