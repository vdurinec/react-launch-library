import { render, screen } from '@testing-library/react';
import Day from '../components/day';

describe('Day', () => {
  test('renders without crashing', () => {
    render(<Day day={27} testId="test-day-cell" />);

    expect(screen.getByTestId('test-day-cell')).toHaveTextContent('27');
  });
});
