import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { allProducts } from '../../../fixtures/allProducts.fixture';
import SearchBar from '../../components/SearchBar';

const onSearchMock = jest.fn();

describe('SearchBar', () => {
  test('should render SearchBar component', () => {
    const { container } = render(
      <SearchBar onSearch={onSearchMock} products={allProducts} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should render search input with placeholder text', () => {
    render(<SearchBar onSearch={onSearchMock} products={allProducts} />);
    expect(
      screen.queryByPlaceholderText(/search model or brand/i)
    ).toBeInTheDocument();
  });

  test('should render search input and allow user to type', () => {
    render(<SearchBar onSearch={onSearchMock} products={allProducts} />);
    const searchInput = screen.getByPlaceholderText(/search model or brand/i);
    expect(searchInput).toBeInTheDocument();

    act(() => {
      userEvent.click(searchInput);
    });

    expect(searchInput).toHaveFocus();
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'test');
    expect(searchInput.value).toBe('test');
  });
});
