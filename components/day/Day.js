import PropTypes from 'prop-types';

import Launch from '../../public/launch.svg';
import styles from '../../styles/Day.module.css';

export default function Day({ id, day, hasEvents, handleDayClick, testId }) {
  if (!day) return null;

  return (
    <a
      className={`${styles.container} ${hasEvents ? styles.focusable : ''}`}
      data-testid={testId}
      onClick={handleDayClick(id, hasEvents)}
      role="button"
    >
      <p className={styles.day}>{day}</p>
      <p className={styles.events}>
        {hasEvents && <Launch className={styles.icon} />}
      </p>
    </a>
  );
}

Day.propTypes = {
  id: PropTypes.string.isRequired,
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hasEvents: PropTypes.bool.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
};
