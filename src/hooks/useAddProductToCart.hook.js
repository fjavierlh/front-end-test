import { useEffect, useState } from 'react';
import PersiscenteKeys from '../constants/PersintenceKeys';
import PersistenceService from '../service/PersistenceService';
import ProductService from '../service/ProductService';

const useAddProductToCart = ({ id, colorCode, storageCode }) => {

  const [cartState, setCartState] = useState({
    cart: [],
    count: 0,
    loading: true,
    error: false,
    success: false,
  });

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = PersistenceService.get(PersiscenteKeys.CART);
        if (storedCart) {
          setCartState((prevState) => ({
            cart: [...prevState.cart, { id, colorCode, storageCode }],
            count: storedCart.count,
            loading: false,
            error: false,
            success: true,
          }));
          return;
        }
        const { data: cart } = await ProductService.addProductToCart({
          id,
          colorCode,
          storageCode,
        });
        setCartState((prevState) => ({
          cart: [...prevState.cart, { id, colorCode, storageCode }],
          count: cart.count,
        }));
        PersistenceService.persist(PersiscenteKeys.CART, cart);
      } catch (error) {
        setCartState((prevState) =>
          !prevState.cart
            ? {
                ...prevState,
                loading: false,
                success: true,
                error: false,
              }
            : {
                cart: [],
                count: 0,
                loading: false,
                error: true,
                success: false,
              }
        );
      }
    };
    loadCart();
  }, [id, colorCode, storageCode]);

  return {...cartState};
};

export default useAddProductToCart;
