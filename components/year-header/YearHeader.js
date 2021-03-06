import PropTypes from 'prop-types';

import { OPERATIONS, OPERATORS } from '../../helpers/general';
import styles from '../../styles/MonthHeader.module.css';

export default function YearHeader(props) {
  const { year, changeYear, testId } = props;

  const handleYearChange = (operation) => () => {
    const operator = OPERATORS[operation];

    changeYear((currentYear) => currentYear + operator);
  };

  return (
    <div className={styles.container} data-testid={testId}>
      <a
        role="button"
        className={styles.caret}
        onClick={handleYearChange(OPERATIONS.sub)}
        data-testid="test-month-prev"
      >
        &lsaquo;
      </a>
      <div className={styles.current}>{year}</div>
      <a
        role="button"
        className={styles.caret}
        onClick={handleYearChange(OPERATIONS.add)}
        data-testid="test-month-next"
      >
        &rsaquo;
      </a>
    </div>
  );
}

YearHeader.propTypes = {
  year: PropTypes.number.isRequired,
  changeYear: PropTypes.func.isRequired,
  testId: PropTypes.string,
};
