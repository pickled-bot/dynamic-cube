import { render, screen } from '@testing-library/react';
import { Instructions } from './App';

test('renders the instructions', () => {
  render(<Instructions />);
  const title = screen.getByText(/instructions/i);
  expect(title).toBeInTheDocument();
});
