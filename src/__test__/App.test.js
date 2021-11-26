import { render } from '@testing-library/react';
import App from '../App';
import useAddProductToCart from '../hooks/useAddProductToCart.hook';

jest.mock('../hooks/useAddProductToCart.hook');

describe('App', () => {
  test('should render App component', async () => {
    useAddProductToCart.mockImplementationOnce(() => ({
      cartCount: 0,
      addProductToCart: jest.fn(),
    }));
    render(<App />);
  });
});
