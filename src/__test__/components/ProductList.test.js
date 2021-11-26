import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { allProducts } from '../../../fixtures/allProducts.fixture';
import ProductList from '../../components/ProductList';
describe('ProductList', () => {
  test('should render ProductList with all products', () => {
    const loadState = {
      loading: false,
      error: false,
      success: true,
    };
    render(
      <BrowserRouter>
        <ProductList products={allProducts} loadState={loadState} />
      </BrowserRouter>
    );
  });
  test('should match snapshot ProductList with all products', () => {
    const loadState = {
      loading: false,
      error: false,
      success: true,
    };
    const { container } = render(
      <BrowserRouter>
        <ProductList products={allProducts} loadState={loadState} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render ProductList with message error', () => {
    const loadState = {
      loading: false,
      error: true,
      success: false,
    };
    render(
      <BrowserRouter>
        <ProductList products={[]} loadState={loadState} />
      </BrowserRouter>
    );

    expect(screen.queryByText(/shomething was wrong/i)).toBeInTheDocument();
  });
  
  test('should match snapshot ProductList with message error', () => {
    const loadState = {
      loading: false,
      error: true,
      success: false,
    };
    const { container } = render(
      <BrowserRouter>
        <ProductList products={[]} loadState={loadState} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render ProductList with not found products message', () => {
    const loadState = {
      loading: false,
      error: false,
      success: true,
    };
    render(
      <BrowserRouter>
        <ProductList products={[]} loadState={loadState} />
      </BrowserRouter>
    );

    expect(screen.queryByText(/not products found/i)).toBeInTheDocument();
  });

  test('should match snapshot ProductList with not found products message', () => {
    const loadState = {
      loading: false,
      error: false,
      success: true,
    };
    const { container } = render(
      <BrowserRouter>
        <ProductList products={[]} loadState={loadState} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
