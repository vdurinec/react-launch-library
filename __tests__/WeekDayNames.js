import { render, screen } from '@testing-library/react';
import WeekDayNames from '../components/week-day-names';

describe('WeekDayNames', () => {
  test('renders without crashing', () => {
    render(<WeekDayNames testId="test-week-day-names" />);

    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Mon');
    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Tue');
    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Wed');
    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Thu');
    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Fri');
    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Sat');
    expect(screen.getByTestId('test-week-day-names')).toHaveTextContent('Sun');
  });
});
