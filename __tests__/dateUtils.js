import {
  week,
  months,
  getDay,
  getDayIndex,
  getDayOfMonth,
  getMonth,
  getMonthFromNum,
  getYear,
  getDaysInMonth,
  getWeeksWithDays,
  formatTimeDigits,
  displayZeros,
  formatCounterTime,
  formatDate,
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

  test('getDayOfMonth returns correct day of current month', () => {
    expect(getDayOfMonth('2019-12-31T00:00:00Z')).toBe(31);
    expect(getDayOfMonth('2019-12-30T00:00:00Z')).toBe(30);
    expect(getDayOfMonth('2020-01-14T00:00:00Z')).toBe(14);
    expect(getDayOfMonth('2020-04-29T00:00:00Z')).toBe(29);
    expect(getDayOfMonth('2021-02-18T00:00:00Z')).toBe(18);
    expect(getDayOfMonth('2021-03-05T00:00:00Z')).toBe(5);
    expect(getDayOfMonth('2021-05-22T00:00:00Z')).toBe(22);
    expect(getDayOfMonth('2021-12-26T00:00:00Z')).toBe(26);
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
      [
        { day: 1, events: [] },
        { day: 2, events: [] },
        { day: 3, events: [] },
        { day: 4, events: [] },
        { day: 5, events: [] },
        { day: 6, events: [] },
        { day: 7, events: [] },
      ],
      [
        { day: 8, events: [] },
        { day: 9, events: [] },
        { day: 10, events: [] },
        { day: 11, events: [] },
        { day: 12, events: [] },
        { day: 13, events: [] },
        { day: 14, events: [] },
      ],
      [{ day: 15, events: [] }],
    ]);

    expect(getWeeksWithDays(1, 13)).toStrictEqual([
      [
        { day: '', events: [] },
        { day: 1, events: [] },
        { day: 2, events: [] },
        { day: 3, events: [] },
        { day: 4, events: [] },
        { day: 5, events: [] },
        { day: 6, events: [] },
      ],
      [
        { day: 7, events: [] },
        { day: 8, events: [] },
        { day: 9, events: [] },
        { day: 10, events: [] },
        { day: 11, events: [] },
        { day: 12, events: [] },
      ],
    ]);

    expect(getWeeksWithDays(2, 12)).toStrictEqual([
      [
        { day: '', events: [] },
        { day: '', events: [] },
        { day: 1, events: [] },
        { day: 2, events: [] },
        { day: 3, events: [] },
        { day: 4, events: [] },
        { day: 5, events: [] },
      ],
      [
        { day: 6, events: [] },
        { day: 7, events: [] },
        { day: 8, events: [] },
        { day: 9, events: [] },
        { day: 10, events: [] },
      ],
    ]);

    expect(getWeeksWithDays(6, 18)).toStrictEqual([
      [
        { day: '', events: [] },
        { day: '', events: [] },
        { day: '', events: [] },
        { day: '', events: [] },
        { day: '', events: [] },
        { day: '', events: [] },
        { day: 1, events: [] },
      ],
      [
        { day: 2, events: [] },
        { day: 3, events: [] },
        { day: 4, events: [] },
        { day: 5, events: [] },
        { day: 6, events: [] },
        { day: 7, events: [] },
        { day: 8, events: [] },
      ],
      [
        { day: 9, events: [] },
        { day: 10, events: [] },
        { day: 11, events: [] },
        { day: 12, events: [] },
      ],
    ]);
  });
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

test('displayZeros will add zeros if higher time unit exist', () => {
  expect(
    displayZeros({ days: '', hours: '', minutes: '', seconds: '' })
  ).toStrictEqual({
    days: '',
    hours: '',
    minutes: '',
    seconds: '00',
  });

  expect(
    displayZeros({ days: '', hours: '', minutes: 12, seconds: '' })
  ).toStrictEqual({
    days: '',
    hours: '',
    minutes: 12,
    seconds: '00',
  });

  expect(
    displayZeros({ days: '', hours: 19, minutes: '', seconds: '' })
  ).toStrictEqual({
    days: '',
    hours: 19,
    minutes: '00',
    seconds: '00',
  });

  expect(
    displayZeros({ days: 10, hours: '', minutes: '', seconds: '' })
  ).toStrictEqual({
    days: 10,
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  expect(
    displayZeros({ days: 10, hours: 14, minutes: '', seconds: '' })
  ).toStrictEqual({
    days: 10,
    hours: 14,
    minutes: '00',
    seconds: '00',
  });

  expect(
    displayZeros({ days: 10, hours: '', minutes: 21, seconds: '' })
  ).toStrictEqual({
    days: 10,
    hours: '00',
    minutes: 21,
    seconds: '00',
  });

  expect(
    displayZeros({ days: '', hours: 23, minutes: 47, seconds: '' })
  ).toStrictEqual({
    days: '',
    hours: 23,
    minutes: 47,
    seconds: '00',
  });
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

test('formatDate returns correctly formated date', () => {
  expect(formatDate({ day: 17, month: 2, year: 2019 })).toStrictEqual(
    '17/02/2019'
  );

  expect(formatDate({ day: 1, month: 7, year: 2019 })).toStrictEqual(
    '01/07/2019'
  );

  expect(formatDate({ month: 11, day: 27, year: 2020 })).toStrictEqual(
    '27/11/2020'
  );

  expect(formatDate({ year: 2021, month: '09', day: 30 })).toStrictEqual(
    '30/09/2021'
  );
});
