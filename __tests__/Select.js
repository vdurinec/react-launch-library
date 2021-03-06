import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../components/select';

const data = {
  id: 'test-select',
  testId: 'test-select',
  label: 'Select option(s)',
  handleChange: jest.fn(),
  options: [
    {
      id: '1',
      value: '1',
      text: 'First Option',
    },
    {
      id: '2',
      value: '2',
      text: 'Two',
    },
    {
      id: '3',
      value: '3',
    },
  ],
};

test('Select renders without crashing', () => {
  render(<Select {...data} />);
  expect(screen.getByText('Select option(s)')).toBeInTheDocument();
});

test('Select has options that opens and closes', () => {
  render(<Select {...data} />);
  expect(screen.getByText('Select option(s)')).toBeInTheDocument();
  const optionsContainer = screen.getByTestId('test-options');
  expect(optionsContainer).toHaveClass('options closed');

  userEvent.click(screen.getByText('Select option(s)'));
  expect(optionsContainer).toHaveClass('options open');

  userEvent.click(screen.getByText('Select option(s)'));
  expect(optionsContainer).toHaveClass('options closed');
});

test('Select value updates', () => {
  render(<Select {...data} value="" />);

  userEvent.click(screen.getByTestId('2'));
  expect(screen.getByTestId('test-select')).toHaveTextContent('Two');
});
