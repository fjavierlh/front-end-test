import { render, screen } from '@testing-library/react';
import Description from '../../components/Description';
import { singleProduct } from './../../../fixtures/singleProduct.fixture';

describe('Description', () => {
  test('should render Description', () => {
    render(<Description product={singleProduct} />);
  });

  test('should match snapshot Description when receive product by props', () => {
    const { container } = render(<Description product={singleProduct} />);
    expect(container).toMatchSnapshot();
  });

  test('should render product properties', () => {
    render(<Description product={singleProduct} />);
    expect(screen.queryByText(/brand/i)).toBeInTheDocument();
    expect(screen.queryByText(/model/i)).toBeInTheDocument();
    expect(screen.queryByText(/price/i)).toBeInTheDocument();
    expect(screen.queryByText(/cpu/i)).toBeInTheDocument();
    expect(screen.queryByText(/ram/i)).toBeInTheDocument();
    expect(screen.queryByText(/^os$/i)).toBeInTheDocument();
    expect(screen.queryByText(/display resolution/i)).toBeInTheDocument();
    expect(screen.queryByText(/battery/i)).toBeInTheDocument();
    expect(screen.queryByText(/cameras/i)).toBeInTheDocument();
    expect(screen.queryByText(/display type/i)).toBeInTheDocument();
    expect(screen.queryByText(/display size/i)).toBeInTheDocument();
    expect(screen.queryByText(/chipset/i)).toBeInTheDocument();
    expect(screen.queryByText(/external memory/i)).toBeInTheDocument();
    expect(screen.queryByText(/internal memory/i)).toBeInTheDocument();
    expect(screen.queryByText(/^usb$/i)).toBeInTheDocument();
  });
});
