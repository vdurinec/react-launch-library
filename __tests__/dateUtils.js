import { render, screen } from '@testing-library/react';
import {
  week,
  months,
  getDay,
  getMonth,
  getMonthFromNum,
  getYear,
  getDaysInMonth,
} from '../helpers/dateUtils';

describe('date utils', () => {
  test('week has 7 days', () => {
    expect(week.length).toBe(7);
  });

  test('there are 12 months in a year', () => {
    expect(months.length).toBe(12);
  });

  test('getDay returns correct day for given date', () => {
    expect(getDay('12-30-2019')).toBe('Monday');
    expect(getDay('01-14-2020')).toBe('Tuesday');
    expect(getDay('04-29-2020')).toBe('Wednesday');
    expect(getDay('02-18-2021')).toBe('Thursday');
    expect(getDay('03-05-2021')).toBe('Friday');
    expect(getDay('05-22-2021')).toBe('Saturday');
    expect(getDay('12-26-2021')).toBe('Sunday');
  });

  test('getMonthFromNum returns correct month for given month number', () => {
    expect(getMonthFromNum(1)).toStrictEqual({
      name: 'January',
      number: 1,
    });

    expect(getMonthFromNum(3)).toStrictEqual({
      name: 'March',
      number: 3,
    });

    expect(getMonthFromNum(6)).toStrictEqual({
      name: 'June',
      number: 6,
    });

    expect(getMonthFromNum(10)).toStrictEqual({
      name: 'October',
      number: 10,
    });
  });

  test('getMonth returns correct month for given date', () => {
    expect(getMonth('01-05-2021')).toStrictEqual({
      name: 'January',
      number: 1,
    });

    expect(getMonth('03-05-2021')).toStrictEqual({
      name: 'March',
      number: 3,
    });

    expect(getMonth('06-05-2021')).toStrictEqual({
      name: 'June',
      number: 6,
    });

    expect(getMonth('10-05-2021')).toStrictEqual({
      name: 'October',
      number: 10,
    });
  });

  test('getYear returns correct year', () => {
    expect(getYear('03-21-1927')).toBe(1927);
    expect(getYear('03-21-1965')).toBe(1965);
    expect(getYear('03-21-1999')).toBe(1999);
    expect(getYear('03-21-2001')).toBe(2001);
    expect(getYear('03-21-2017')).toBe(2017);
    expect(getYear('03-21-2021')).toBe(2021);
  });

  test('getDaysInMonth returns correct number of days in month', () => {
    expect(getDaysInMonth(2, 2020)).toBe(29);
    expect(getDaysInMonth(2, 2021)).toBe(28);
    expect(getDaysInMonth(3, 2021)).toBe(31);
    expect(getDaysInMonth(6, 2021)).toBe(30);
    expect(getDaysInMonth(12, 2021)).toBe(31);
  });
});
