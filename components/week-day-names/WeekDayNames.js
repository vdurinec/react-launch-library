import { useState } from 'react';
import PropTypes from 'prop-types';

import useWindowWidth from '../../hooks/useWindowWidth';
import { week } from '../../helpers/dateUtils';
import { PHONE_WIDTH } from '../../helpers/general';
import styles from '../../styles/WeekDayName.module.css';

export default function WeekDayName({ testId }) {
  const width = useWindowWidth();

  const formatWeekDayName = (weekDay) =>
    width < PHONE_WIDTH ? weekDay.substr(0, 3) : weekDay;

  return (
    <div className={styles.container} data-testid={testId}>
      {week.map((weekDay) => (
        <span className={styles.weekDay} key={weekDay}>
          {formatWeekDayName(weekDay)}
        </span>
      ))}
    </div>
  );
}

WeekDayName.propTypes = {
  testId: PropTypes.string,
};
