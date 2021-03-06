import { Fragment, useState, useEffect } from 'react';

import {
  getDayIndex,
  getMonth,
  getMonthFromNum,
  getDaysInMonth,
  getYear,
} from '../../helpers/dateUtils';
import MonthHeader from '../month-header';
import WeekDayNames from '../week-day-names';
import Week from '../week';
import styles from '../../styles/Month.module.css';

export default function Month() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentYear, setCurrentYear] = useState(getYear());
  const [month, setMonth] = useState(currentMonth.number);
  const firstDayIndex = getDayIndex(`${month}-01-${currentYear}`);
  const totalMonthDays =
    getDaysInMonth(currentMonth.number, currentYear) + firstDayIndex;
  const monthDays = Array.from({ length: totalMonthDays });

  useEffect(() => setCurrentMonth(getMonthFromNum(month)), [month]);

  const weeks = monthDays.reduce((days, item, index) => {
    const day = Math.floor(index / 7);

    if (!days[day]) {
      days[day] = []; // start a new week
    }

    if (index < firstDayIndex) {
      days[day].push(0);
      return days;
    }
    const dayItem = index + 1 - firstDayIndex;

    days[day].push(dayItem);

    return days;
  }, []);

  return (
    <div className={styles.container}>
      <MonthHeader
        month={currentMonth}
        changeMonth={setMonth}
        changeYear={setCurrentYear}
      />
      <WeekDayNames />
      <div className={styles.main}>
        {weeks.map((week, index) => (
          <Week
            className={index === 0 ? 'first' : ''}
            days={week}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
