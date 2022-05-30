import { fireEvent, render, screen } from '@testing-library/react';
import ListName from './ListName';

describe('ListName', () => {
  test('renders ListName component with h3', () => {
    render(<ListName />);
    expect(screen.getByText(/Recruitment Process/i)).toBeInTheDocument();
  });

  test('input text appeared on edit', async () => {
    render(<ListName />);
    await fireEvent.click(screen.getByLabelText(/edit/i), true);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});