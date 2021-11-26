import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { allProducts } from '../../../fixtures/allProducts.fixture';
import { BreadCrumb } from '../../components/BreadCrumb';

const {
  id: mockId,
  imgUrl: mockImgUrl,
  brand: mockBrand,
  model: mockModel,
} = allProducts[0];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
    state: {
      id: mockId,
      imgUrl: mockImgUrl,
      brand: mockBrand,
      model: mockModel,
    },
  }),
}));

describe('Breadcrumb', () => {
  test('should render Breadcrumb component', () => {
    render(
      <BrowserRouter>
        <BreadCrumb />
      </BrowserRouter>
    );
  });

  test('should render Breadcrumb component if location is product', () => {
    render(
      <BrowserRouter>
        <BreadCrumb />
      </BrowserRouter>
    );
    expect(screen.getByText(`${mockBrand} ${mockModel}`)).toBeInTheDocument();
  });

  test("should render Breadcrumb component render home link with anchor's href equal to /", () => {
    render(
      <BrowserRouter>
        <BreadCrumb />
      </BrowserRouter>
    );
    expect(screen.getByText(/home/i).closest('a')).toHaveAttribute('href', '/');
  });
});
