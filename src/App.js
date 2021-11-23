import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import useAddProductToCart from './hooks/useAddProductToCart.hook';
import useFetchAllProducts from './hooks/useFetchAllProducts.hook';
import MainLayout from './layout/MainLayout';
import ListProductViewRaw from './views/ListProductView';
import { PageNotFoundView } from './views/PageNotFoundView';
import { ProductDetailView } from './views/ProductDetail';

const App = () => {
  const { products, ...loadStateProducts } = useFetchAllProducts();
  const { cartCount, addProductToCart } = useAddProductToCart();

  return (
    <>
      <MainLayout>
        <Header title="Mobile devices shop" cartCount={cartCount} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ListProductViewRaw
                products={products}
                loadState={loadStateProducts}
              />
            }
          />
          <Route
            path="/product/:model"
            element={<ProductDetailView onAddToCart={addProductToCart} />}
          />
          <Route path="*" element={<PageNotFoundView />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
