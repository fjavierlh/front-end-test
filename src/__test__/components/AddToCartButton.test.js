import { render, screen } from '@testing-library/react';
import { singleProduct } from '../../../fixtures/singleProduct.fixture';
import { AddToCartButton } from '../../components/AddToCartButton';

describe('AddToCartButton', () => {
  test('should render AddToCartButton', () => {
    const text = 'Add to cart';

    render(
      <AddToCartButton text={text} userOptions={singleProduct.userOptions} />
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('should render AddToCartButton with default text if not receive it by props', () => {
    const defaultText = 'Add to cart';
    render(<AddToCartButton userOptions={singleProduct.userOptions} />);
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  test('should render component when button is enable', () => {
    const userOptions = {
      id: singleProduct.id,
      colorCode: 1000,
      storageCode: 2000,
    };
    const text = 'Add to cart';
    render(<AddToCartButton text={text} userOptions={userOptions} />);
    expect(screen.getByText(text)).not.toBeDisabled();
  });
  
  test('should match snapshot when button is enable', () => {
    const userOptions = {
      id: singleProduct.id,
      colorCode: 1000,
      storageCode: 2000,
    };
    const text = 'Add to cart';
    const { container } = render(
      <AddToCartButton text={text} userOptions={userOptions} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should match with last snapshot when button is disabled', () => {
    const text = 'Add to cart';
    const { container } = render(<AddToCartButton text={text} />);
    expect(container).toMatchSnapshot();
  });

  test('should render disabled if receive userOptions with some property as undifined', () => {
    const userOptions = {
      id: singleProduct.id,
      colorCode: undefined,
      storageCode: 2000,
    };
    const text = 'Add to cart';
    render(<AddToCartButton text={text} userOptions={userOptions} />);
    expect(screen.getByText(/Add to cart/i)).toBeDisabled();
  });

  test('should render disabled if not receive userOptions object', () => {
    const text = 'Add to cart';
    render(<AddToCartButton text={text} />);
    expect(screen.getByText(/Add to cart/i)).toBeDisabled();
  });
});
