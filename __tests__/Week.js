import { render, screen } from '@testing-library/react';
import Week from '../components/week';

const data = [0, 0, 1, 2, 3, 4, 5];

describe('Week', () => {
  test('renders without crashing', () => {
    render(<Week days={data} testId="test-week" />);
    expect(screen.getByTestId('test-week')).toHaveTextContent('1');
  });

  test('does not render zeros', () => {
    render(<Week days={data} testId="test-week" />);
    expect(screen.getByTestId('test-week')).not.toHaveTextContent('0');
  });

  test('does render days', () => {
    render(<Week days={data} testId="test-week" />);
    expect(screen.getByTestId('test-week')).toHaveTextContent('2');
    expect(screen.getByTestId('test-week')).toHaveTextContent('3');
    expect(screen.getByTestId('test-week')).toHaveTextContent('4');
    expect(screen.getByTestId('test-week')).toHaveTextContent('5');
  });
});
