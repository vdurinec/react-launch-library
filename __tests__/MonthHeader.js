import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MonthHeader from '../components/month-header';

describe('MonthHeader', () => {
  test('renders without crashing', () => {
    render(
      <MonthHeader
        month={{
          name: 'March',
          number: 3,
        }}
        changeMonth={jest.fn}
        testId="test-month-header"
      />
    );

    expect(screen.getByTestId('test-month-header')).toHaveTextContent(
      'March (3)'
    );
  });

  test('"prev month" click works', () => {
    const handleChange = jest.fn();

    render(
      <MonthHeader
        month={{
          name: 'March',
          number: 3,
        }}
        changeMonth={handleChange}
        testId="test-month-header"
      />
    );

    userEvent.click(screen.getByTestId('test-month-prev'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('"next month" click works', () => {
    const handleChange = jest.fn();

    render(
      <MonthHeader
        month={{
          name: 'March',
          number: 3,
        }}
        changeMonth={handleChange}
        testId="test-month-header"
      />
    );

    userEvent.click(screen.getByTestId('test-month-next'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
