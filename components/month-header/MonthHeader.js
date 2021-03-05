import PropTypes from 'prop-types';

import { getMonth } from '../../helpers/dateUtils';

import styles from '../../styles/MonthHeader.module.css';

const OPERATIONS = { sub: 'sub', add: 'add' };
const OPERATORS = { [OPERATIONS.sub]: -1, [OPERATIONS.add]: 1 };

export default function MonthHeader({ month, changeMonth, testId }) {
  const { number, name } = month;

  const handleMonthChange = (operation) => () => {
    const operator = OPERATORS[operation];
    const newMonth = operator ? number + operator : number;

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
  testId: PropTypes.string,
};
