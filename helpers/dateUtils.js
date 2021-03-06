export const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
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

export const getDayIndex = (date) => {
  let day;

  if (date) {
    day = new Date(date);
    const dayIndex = day.getDay();
    if (dayIndex === 0) return 6;

    return dayIndex - 1;
  }

  day = new Date();
  return day.getUTCDay();
};

export const getDay = (date) => {
  const day = getDayIndex(date);

  return week[day];
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

export const getWeeksWithDays = (firstDayIndex, totalMonthDays) => {
  const monthDays = Array.from({ length: totalMonthDays });
  return monthDays.reduce((days, item, index) => {
    const day = Math.floor(index / 7);

    if (!days[day]) {
      days[day] = []; // start a new week
    }

    if (index < firstDayIndex) {
      days[day].push(0); // push "empty" days for first week
      return days;
    }
    const dayItem = index + 1 - firstDayIndex;

    days[day].push(dayItem);

    return days;
  }, []);
};
