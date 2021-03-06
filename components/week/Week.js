import PropTypes from 'prop-types';

import Day from '../day';
import styles from '../../styles/Week.module.css';

export default function Week({ days, className, testId }) {
  return (
    <div
      className={`${styles.container} ${className ? styles[className] : ''}`}
      data-testid={testId}
    >
      {days.map((day, index) => (
        <Day key={`${day}${index}`} day={day} />
      ))}
    </div>
  );
}

Week.propTypes = {
  days: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string,
  testId: PropTypes.string,
};
