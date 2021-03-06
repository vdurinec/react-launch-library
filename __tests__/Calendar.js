import { render, screen } from '@testing-library/react';

import Calendar from '../components/calendar';

describe('Calendar', () => {
  test('renders without crashing', () => {
    render(<Calendar />);

    expect(screen.queryByTestId('test-year-prev')).toBeInTheDocument();
    expect(screen.queryByTestId('test-year-next')).toBeInTheDocument();
    expect(screen.queryByTestId('test-month-prev')).toBeInTheDocument();
    expect(screen.queryByTestId('test-month-next')).toBeInTheDocument();
    expect(screen.queryByTestId('test-month')).toBeInTheDocument();
  });
});
