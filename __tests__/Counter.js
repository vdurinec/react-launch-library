import { render, screen } from '@testing-library/react';

import Counter from '../components/counter';

describe('Counter', () => {
  test('renders without crashing', () => {
    render(<Counter date={new Date()} testId="test-counter" />);

    expect(screen.getByTestId('test-counter')).toBeInTheDocument();
  });

  test('renders T+time for the time after current time', () => {
    const currentDate = new Date();
    const previousDateMs = currentDate.getTime() - 60000;

    render(<Counter date={new Date(previousDateMs)} testId="test-counter" />);
    expect(screen.getByTestId('test-counter')).toHaveTextContent('T+');
  });

  test('renders T-time for time before current time', () => {
    const currentDate = new Date();
    const nextDateMs = currentDate.getTime() + 60000;

    render(<Counter date={new Date(nextDateMs)} testId="test-counter" />);
    expect(screen.getByTestId('test-counter')).toHaveTextContent('T-');
  });
});
