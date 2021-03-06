import {
  week,
  months,
  getDay,
  getDayIndex,
  getMonth,
  getMonthFromNum,
  getYear,
  getDaysInMonth,
  getWeeksWithDays,
  formatTimeDigits,
  formatCounterTime,
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

  test('getDayIndex returns correct index for given date', () => {
    expect(getDayIndex('12-30-2019')).toBe(0);
    expect(getDayIndex('01-14-2020')).toBe(1);
    expect(getDayIndex('04-29-2020')).toBe(2);
    expect(getDayIndex('02-18-2021')).toBe(3);
    expect(getDayIndex('03-05-2021')).toBe(4);
    expect(getDayIndex('05-22-2021')).toBe(5);
    expect(getDayIndex('12-26-2021')).toBe(6);
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

  test('getWeeksWithDays returns correct days in week', () => {
    expect(getWeeksWithDays(0, 15)).toStrictEqual([
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15],
    ]);

    expect(getWeeksWithDays(1, 13)).toStrictEqual([
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);

    expect(getWeeksWithDays(2, 12)).toStrictEqual([
      [0, 0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ]);

    expect(getWeeksWithDays(6, 18)).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 1],
      [2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12],
    ]);
  });

  test('formatTimeDigits places 0 before single digit niumber only', () => {
    expect(formatTimeDigits(1)).toBe('01');
    expect(formatTimeDigits(3)).toBe('03');
    expect(formatTimeDigits(7)).toBe('07');
    expect(formatTimeDigits(9)).toBe('09');
    expect(formatTimeDigits(10)).toBe(10);
    expect(formatTimeDigits(10)).not.toBe('010');
    expect(formatTimeDigits(25)).toBe(25);
    expect(formatTimeDigits(25)).not.toBe('025');
    expect(formatTimeDigits(192)).toBe(192);
    expect(formatTimeDigits(192)).not.toBe('0192');
  });

  test('formatCounterTime returns correctly formated time', () => {
    expect(formatCounterTime(0)).toStrictEqual({
      days: '',
      hours: '',
      minutes: '',
      seconds: '00',
    });

    expect(formatCounterTime(13234)).toStrictEqual({
      days: '',
      hours: '',
      minutes: '',
      seconds: 13,
    });

    expect(formatCounterTime(13234)).toStrictEqual({
      days: '',
      hours: '',
      minutes: '',
      seconds: 13,
    });

    expect(formatCounterTime(229323)).toStrictEqual({
      days: '',
      hours: '',
      minutes: '03',
      seconds: 49,
    });

    expect(formatCounterTime(229323)).toStrictEqual({
      days: '',
      hours: '',
      minutes: '03',
      seconds: 49,
    });

    expect(formatCounterTime(21222323)).toStrictEqual({
      days: '',
      hours: '05',
      minutes: 53,
      seconds: 42,
    });

    expect(formatCounterTime(221222323)).toStrictEqual({
      days: '02',
      hours: 13,
      minutes: 27,
      seconds: '02',
    });

    expect(formatCounterTime(687687687)).toStrictEqual({
      days: '07',
      hours: 23,
      minutes: '01',
      seconds: 27,
    });

    expect(formatCounterTime(1941222323)).toStrictEqual({
      days: 22,
      hours: 11,
      minutes: 13,
      seconds: 42,
    });
  });
});
