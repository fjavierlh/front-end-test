import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('should render App component', () => {
    render(<App />);
    const brandText = screen.getByText(/mobile devices shop/i);
    expect(brandText).toBeInTheDocument();
  });

  test('should render App component with search bar', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/search model or brand/i);
    expect(searchInput).toBeInTheDocument();

    act(() => {
      userEvent.click(searchInput);
    });

    expect(searchInput).toHaveFocus();
    expect(searchInput).toHaveValue('');
  });
});
