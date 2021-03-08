import { render, screen } from '@testing-library/react';
import Week from '../components/week';
import Day from '../components/day';

const data = {
  id: 'mocked-data-day',
  day: 1,
  hasEvents: false,
  handleDayClick: jest.fn,
  testId: 'test-week-day',
};

describe('Week', () => {
  test('renders without crashing', () => {
    render(
      <Week testId="test-week">
        <Day {...data} />
      </Week>
    );
    expect(screen.getByTestId('test-week')).toHaveTextContent('1');
  });

  test('does not render zeros', () => {
    render(
      <Week testId="test-week">
        <Day {...data} day={0} />
      </Week>
    );
    expect(screen.getByTestId('test-week')).not.toHaveTextContent('0');
  });

  test('does render given days', () => {
    render(
      <Week days={data} testId="test-week">
        <Day {...data} day={2} />
        <Day {...data} day={3} />
        <Day {...data} day={4} />
        <Day {...data} day={5} />
      </Week>
    );
    expect(screen.getByTestId('test-week')).toHaveTextContent('2');
    expect(screen.getByTestId('test-week')).toHaveTextContent('3');
    expect(screen.getByTestId('test-week')).toHaveTextContent('4');
    expect(screen.getByTestId('test-week')).toHaveTextContent('5');
  });
});
