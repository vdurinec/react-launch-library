import { render, screen } from '@testing-library/react';
import Day from '../components/day';

const data = {
  id: 'mocked-day',
  day: 27,
  hasEvents: false,
  handleDayClick: jest.fn,
  testId: 'test-day',
};

describe('Day', () => {
  test('renders without crashing', () => {
    render(<Day {...data} />);

    expect(screen.getByTestId(data.testId)).toHaveTextContent('27');
  });
});
