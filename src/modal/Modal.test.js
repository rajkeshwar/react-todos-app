import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('renders Modal component', () => {
    render(<Modal />);
    expect(screen.getByLabelText(/dialog/i)).toBeInTheDocument();
  });

  test('calls the onClose callback handler', async () => {
    const onClose = jest.fn();
    render(<Modal onClose={onClose}/>);
    await fireEvent.click(screen.getByLabelText(/close/i), false);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

});