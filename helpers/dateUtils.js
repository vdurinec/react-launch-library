export const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDay = (date) => {
  let day;

  if (date) {
    day = new Date(date);
    return week[day.getDay()];
  }

  day = new Date();
  return week[day.getUTCDay()];
};

export const getMonthFromNum = (month) => {
  const monthIndex = month - 1;
  return {
    name: months[monthIndex],
    number: month,
  };
};

export const getMonth = (date) => {
  const d = date ? new Date(date) : new Date();
  const month = d.getUTCMonth();
  const m = months[month];

  return {
    name: m,
    number: months.indexOf(m) + 1,
  };
};

export const getYear = (date) =>
  date ? new Date(date).getFullYear() : new Date().getFullYear();

export const getDaysInMonth = (month, year) =>
  new Date(year, month, 0).getDate();
