import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAddProductToCart from './hooks/useAddProductToCart.hook';
import useFetchAllProducts from './hooks/useFetchAllProducts.hook';
import MainLayout from './layout/MainLayout';
import ListProductView from './views/ListProductView';
import { PageNotFoundView } from './views/PageNotFoundView';
import { ProductDetailView } from './views/ProductDetailView';

const App = () => {
  const { cartCount, addProductToCart } = useAddProductToCart();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout cartCount={cartCount} />}>
          <Route
            index
            element={
              <ListProductView
              />
            }
          />
          <Route
            path="/product/:model"
            element={<ProductDetailView onAddToCart={addProductToCart} />}
          />
          <Route path="*" element={<PageNotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
