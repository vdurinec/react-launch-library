import PropTypes from 'prop-types';

import { OPERATIONS, OPERATORS } from '../../helpers/general';
import styles from '../../styles/MonthHeader.module.css';

export default function MonthHeader(props) {
  const { month, changeMonth, changeYear, testId } = props;
  const { number, name } = month;

  const handleMonthChange = (operation) => () => {
    const operator = OPERATORS[operation];
    let newMonth = operator ? number + operator : number;

    if (newMonth > 12) {
      newMonth = newMonth - 12;
      changeYear((currentYear) => currentYear + 1);
    }

    if (newMonth < 1) {
      newMonth = newMonth + 12;
      changeYear((currentYear) => currentYear - 1);
    }

    changeMonth(newMonth);
  };

  return (
    <div className={styles.container} data-testid={testId}>
      <a
        role="button"
        className={styles.caret}
        onClick={handleMonthChange(OPERATIONS.sub)}
        data-testid="test-month-prev"
      >
        &lsaquo;
      </a>
      <div className={styles.current}>
        {name} ({number})
      </div>
      <a
        role="button"
        className={styles.caret}
        onClick={handleMonthChange(OPERATIONS.add)}
        data-testid="test-month-next"
      >
        &rsaquo;
      </a>
    </div>
  );
}

MonthHeader.propTypes = {
  month: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  changeMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  testId: PropTypes.string,
};
