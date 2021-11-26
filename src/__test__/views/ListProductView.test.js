import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { allProducts } from '../../../fixtures/allProducts.fixture';
import useFetchAllProducts from '../../hooks/useFetchAllProducts.hook';
import useFilterProductsSearch from '../../hooks/useFilterProductsSearch.hook';
import ListProductView from '../../views/ListProductView';

jest.mock('../../hooks/useFetchAllProducts.hook');
jest.mock('../../hooks/useFilterProductsSearch.hook');

describe('ListProductView', () => {
  test('should render ListProductView component with loading message', () => {
    useFetchAllProducts.mockImplementationOnce(() => ({
      products: [],
      loading: true,
      error: false,
      success: false,
    }));
    useFilterProductsSearch.mockImplementationOnce(() => ({
      setSearchValue: jest.fn(),
      searchedProducts: [],
    }));

    const { container } = render(
      <BrowserRouter>
        <ListProductView />
      </BrowserRouter>
    );
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render ListProductView component with not found message', () => {
    useFetchAllProducts.mockImplementationOnce(() => ({
      products: [],
      loading: false,
      error: false,
      success: true,
    }));
    useFilterProductsSearch.mockImplementationOnce(() => ({
      setSearchValue: jest.fn(),
      searchedProducts: [],
    }));

    const { container } = render(
      <BrowserRouter>
        <ListProductView />
      </BrowserRouter>
    );
    expect(screen.queryByText(/not products found/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render ListProductView component with all products', () => {
    useFetchAllProducts.mockImplementationOnce(() => ({
      products: allProducts,
      loading: false,
      error: false,
      success: true,
    }));
    useFilterProductsSearch.mockImplementationOnce(() => ({
      setSearchValue: jest.fn(),
      searchedProducts: allProducts,
    }));

    const { container } = render(
      <BrowserRouter>
        <ListProductView />
      </BrowserRouter>
    );
    expect(screen.queryAllByRole('article').length).toBe(allProducts.length);
    expect(container).toMatchSnapshot();
  });
});
