import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add todo link', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', {
    name: /Add todo/i
  });
  expect(linkElement).toBeInTheDocument();
});
