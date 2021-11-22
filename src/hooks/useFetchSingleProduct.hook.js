import { useEffect, useState } from 'react';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';

const useFetchSingleProduct = (id) => {
  const [productState, setProductState] = useState({
    product: {},
    loading: true,
    success: false,
    error: false,
  });

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const storedProduct = PersistenceService.get(id);

        if (storedProduct) {
          setProductState({
            product: storedProduct,
            loading: false,
            success: true,
            error: false,
          });
          return;
        }
        const { data: product } = await ProductService.getProductDetail(id);
        setProductState({
          product,
          loading: false,
          success: true,
          error: false,
        });
        PersistenceService.persist(id, product);
      } catch (error) {
        console.log(`error`, error);
        setProductState((prevState) =>
          !prevState.product
            ? {
                ...prevState,
                loading: false,
                success: true,
                error: false,
              }
            : { product: {}, loading: false, success: false, error: true }
        );
      }
    };

    loadProduct();
  }, [id]);

  return productState;
};

export default useFetchSingleProduct;
