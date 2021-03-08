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
    day = new Date(fixDateFormatToFitAllBrowsers(date));
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

export const getDayOfMonth = (date) => {
  const day = new Date(fixDateFormatToFitAllBrowsers(date));
  return day.getUTCDate();
};

export const getMonthFromNum = (month) => {
  const monthIndex = month - 1;
  return {
    name: months[monthIndex],
    number: month,
  };
};

export const getMonth = (date) => {
  const d = date ? new Date(fixDateFormatToFitAllBrowsers(date)) : new Date();
  const month = d.getUTCMonth();
  const m = months[month];

  return {
    name: m,
    number: months.indexOf(m) + 1,
  };
};

export const getYear = (date) =>
  date
    ? new Date(fixDateFormatToFitAllBrowsers(date)).getFullYear()
    : new Date().getFullYear();

export const getDaysInMonth = (month, year) =>
  new Date(year, month, 0).getDate();

export const getWeeksWithDays = (firstDayIndex, totalMonthDays, events) => {
  const monthDays = Array.from({ length: totalMonthDays });
  return monthDays.reduce((days, item, index) => {
    const day = Math.floor(index / 7);

    if (!days[day]) {
      days[day] = []; // start a new week
    }

    if (index < firstDayIndex) {
      days[day].push({ day: '', events: [] }); // push "empty" days for first week
      return days;
    }
    const dayItem = index + 1 - firstDayIndex;
    const dayEvents = events?.filter((event) => event.day === dayItem);

    days[day].push({ day: dayItem, events: dayEvents || [] });

    return days;
  }, []);
};

export const formatTimeDigits = (n) => {
  if (n === 0) {
    return '';
  }

  // parse to int to avoid double zeroes in front of number
  return n < 10 ? `0${parseInt(`${n}`, 10)}` : n;
};

export const displayZeros = (formattedTime) => {
  const { days, hours, minutes, seconds } = formattedTime;

  return {
    days,
    hours: !hours && days ? '00' : hours,
    minutes: !minutes && (days || hours) ? '00' : minutes,
    seconds: seconds || '00',
  };
};

export const formatCounterTime = (milis) => {
  let seconds = Math.floor(milis / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = 0;
  let days = 0;

  seconds = seconds % 60;

  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes = minutes - hours * 60;
  }

  if (hours > 24) {
    days = Math.floor(hours / 24);
    hours = hours - days * 24;
  }

  const formattedTime = {
    days: formatTimeDigits(days),
    hours: formatTimeDigits(hours),
    minutes: formatTimeDigits(minutes),
    seconds: formatTimeDigits(seconds),
  };

  return displayZeros(formattedTime);
};

export const formatDate = ({ day, month, year }) => {
  return `${formatTimeDigits(day)}/${formatTimeDigits(month)}/${year}`;
};

export const fixDateFormatToFitAllBrowsers = (date) =>
  date && date.replace(/-/g, '/').replace(/T/, ' ').replace(/Z/, ' -0');
