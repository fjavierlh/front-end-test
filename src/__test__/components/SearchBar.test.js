import { render } from '@testing-library/react';
import { allProducts } from '../../../fixtures/allProducts.fixture';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
  const onSearchMock = jest.fn();
  test('should render SearchBar component', () => {
    render(<SearchBar onSearch={onSearchMock} products={allProducts} />);
  });
});
