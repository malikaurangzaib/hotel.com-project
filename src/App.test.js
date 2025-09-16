import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hotels.com text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hotels.com/i);
  expect(headingElement).toBeInTheDocument();
});
