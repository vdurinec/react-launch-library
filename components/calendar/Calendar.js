import { useState } from 'react';

import { getMonth, getMonthFromNum, getYear } from '../../helpers/dateUtils';
import CalendarHeader from '../calendar-header';
import Month from '../month';
import { OPERATORS } from '../../helpers/general';
import styles from '../../styles/Calendar.module.css';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentYear, setCurrentYear] = useState(getYear());
  const [month, setMonth] = useState(currentMonth.number);

  const handleYearUpdate = (operation) => {
    const operator = OPERATORS[operation];
    setCurrentYear((currentYear) =>
      operator ? currentYear + operator : currentYear
    );
  };

  const handleMonthUpdate = (operation) => {
    const operator = OPERATORS[operation];

    setMonth((month) => {
      let newMonth = operator ? month + operator : month;
      if (newMonth > 12) {
        newMonth = newMonth - 12;
        setCurrentYear((currentYear) => currentYear + 1);
      }

      if (newMonth < 1) {
        newMonth = newMonth + 12;
        setCurrentYear((currentYear) => currentYear - 1);
      }

      setCurrentMonth(getMonthFromNum(newMonth));
      return newMonth;
    });
  };

  return (
    <div className={styles.container}>
      <CalendarHeader
        header={{ name: currentYear.toString() }}
        handleChange={handleYearUpdate}
        type="year"
      />
      <CalendarHeader
        header={currentMonth}
        handleChange={handleMonthUpdate}
        type="month"
      />
      <Month month={month} year={currentYear} />
    </div>
  );
}
