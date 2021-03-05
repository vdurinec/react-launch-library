import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from '../../styles/Day.module.css';

export default function Day({ day, testId }) {
  return (
    <span className={styles.container} data-testid={testId}>
      {day}
    </span>
  );
}

Day.propTypes = {
  day: PropTypes.number.isRequired,
  testId: PropTypes.string,
};
