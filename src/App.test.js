import { render, screen } from '@testing-library/react';
import { Instructions } from './App';

// this is just an example of a simple unit test for a single component
// it's going to be hard to test the full app because of issues with rendering the canvas with the testing library
test('renders the instructions', () => {
  render(<Instructions />);
  const title = screen.getByText(/instructions/i);
  expect(title).toBeInTheDocument();
});
