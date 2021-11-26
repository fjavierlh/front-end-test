import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header', () => {
  test('should render Header component', () => {
    const brandTitle = 'Mobile devices shop';
    render(
      <BrowserRouter>
        <Header title={brandTitle} />
      </BrowserRouter>
    );
    const brand = screen.getByText(/mobile devices shop/i);
    expect(brand).toBeInTheDocument();
  });

  test('should render Header component with cart count with 0 default value', () => {
    const brandTitle = 'Mobile devices shop';
    render(
      <BrowserRouter>
        <Header title={brandTitle} />
      </BrowserRouter>
    );
    const cartCount = screen.getByText(/0/i);
    expect(cartCount).toBeInTheDocument();
  });

  test('should render Header component with cart count passed by props', () => {
    const brandTitle = 'Mobile devices shop';
    render(
      <BrowserRouter>
        <Header title={brandTitle} cartCount={10} />
      </BrowserRouter>
    );
    const cartCount = screen.getByText(/10/i);
    expect(cartCount).toBeInTheDocument();
  });

  test('should match snapshot with cart count passed by props', () => {
    const brandTitle = 'Mobile devices shop';
    const { container } = render(
      <BrowserRouter>
        <Header title={brandTitle} cartCount={10} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with cart count default value by props', () => {
    const brandTitle = 'Mobile devices shop';
    const { container } = render(
      <BrowserRouter>
        <Header title={brandTitle} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
