import PropTypes from 'prop-types';

import {
  getDayIndex,
  getDaysInMonth,
  getWeeksWithDays,
} from '../../helpers/dateUtils';
import WeekDayNames from '../week-day-names';
import Week from '../week';
import styles from '../../styles/Month.module.css';

export default function Month({ month, year }) {
  const firstDayIndex = getDayIndex(`${month}-01-${year}`);
  const totalMonthDays = getDaysInMonth(month, year) + firstDayIndex;
  const weeks = getWeeksWithDays(firstDayIndex, totalMonthDays);

  return (
    <div className={styles.container} data-testid="test-month">
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

Month.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};
