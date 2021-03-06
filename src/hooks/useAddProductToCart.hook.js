import { useEffect, useState } from 'react';
import PersiscenteKeys from '../constants/PersintenceKeys';
import PersistenceService from '../services/PersistenceService';
import ProductService from '../services/ProductService';

const useAddProductToCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const addProductToCart = async ({ id, colorCode, storageCode }) => {
    const { data: cart } = await ProductService.addProductToCart({
      id,
      colorCode,
      storageCode,
    });

    if (cart.count) {
      setCartCount((count) => count + 1);
      PersistenceService.persist(PersiscenteKeys.CART, cartCount);
    }
  };

  useEffect(() => {
    const storedCartCount = PersistenceService.get(PersiscenteKeys.CART);
    if (storedCartCount) {
      setCartCount(storedCartCount);
    }
  }, []);

  return { cartCount, addProductToCart };
};

export default useAddProductToCart;
