import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should show "mobile devices shop" text on render', () => {
    render(<App />);
    const linkElement = screen.getByText(/mobile devices shop/i);
    expect(linkElement).toBeInTheDocument();
  });
});
