import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CalendarHeader from '../components/calendar-header';

describe('CalendarHeader', () => {
  test('year renders without crashing', () => {
    render(
      <CalendarHeader
        header={{
          name: '2021',
        }}
        handleChange={jest.fn}
        type="year"
        testId="test-year-header"
      />
    );

    expect(screen.getByTestId('test-year-header')).toHaveTextContent('2021');
  });

  test('"prev year" click works', () => {
    const handleChange = jest.fn();

    render(
      <CalendarHeader
        header={{
          name: '2025',
        }}
        handleChange={handleChange}
        type="year"
        testId="test-year-header"
      />
    );

    userEvent.click(screen.getByTestId('test-year-prev'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('"next year" click works', () => {
    const handleChange = jest.fn();

    render(
      <CalendarHeader
        header={{
          name: '2023',
        }}
        handleChange={handleChange}
        type="year"
        testId="test-year-header"
      />
    );

    userEvent.click(screen.getByTestId('test-year-next'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('month renders without crashing', () => {
    render(
      <CalendarHeader
        header={{
          name: 'March',
          number: 3,
        }}
        handleChange={jest.fn}
        type="month"
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
      <CalendarHeader
        header={{
          name: 'March',
          number: 3,
        }}
        handleChange={handleChange}
        type="month"
        testId="test-month-header"
      />
    );

    userEvent.click(screen.getByTestId('test-month-prev'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('"next month" click works', () => {
    const handleChange = jest.fn();

    render(
      <CalendarHeader
        header={{
          name: 'March',
          number: 3,
        }}
        handleChange={handleChange}
        type="month"
        testId="test-month-header"
      />
    );

    userEvent.click(screen.getByTestId('test-month-next'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
