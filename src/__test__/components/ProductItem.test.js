import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import { allProducts } from './../../../fixtures/allProducts.fixture';

describe('ProductItem', () => {
  test('should render ProductItem with all passed props', () => {
    const { id, imgUrl, brand, model, price } = allProducts[0];
    render(
      <BrowserRouter>
        <ProductItem
          id={id}
          imgUrl={imgUrl}
          brand={brand}
          model={model}
          price={price}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(brand)).toBeInTheDocument();
    expect(screen.getByText(model)).toBeInTheDocument();
    expect(screen.getByText(`${price}€`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('should render ProductItem with default text if price is not passed', () => {
    const { id, imgUrl, brand, model } = allProducts[0];
    const expectedText = 'Price to be consulted';
    render(
      <BrowserRouter>
        <ProductItem id={id} imgUrl={imgUrl} brand={brand} model={model} />
      </BrowserRouter>
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  test('should match snapshot ProductItem with default text if price is not passed', () => {
    const { id, imgUrl, brand, model } = allProducts[0];
    const { container } = render(
      <BrowserRouter>
        <ProductItem id={id} imgUrl={imgUrl} brand={brand} model={model} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot ProductItem with all passed props', () => {
    console.log(`allProducts`, allProducts[0]);
    const { id, imgUrl, brand, model, price } = allProducts[0];
    const { container } = render(
      <BrowserRouter>
        <ProductItem
          id={id}
          imgUrl={imgUrl}
          brand={brand}
          model={model}
          price={price}
        />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
