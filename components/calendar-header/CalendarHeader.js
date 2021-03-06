import PropTypes from 'prop-types';

import { OPERATIONS } from '../../helpers/general';
import styles from '../../styles/CalendarHeader.module.css';

export default function CalendarHeader(props) {
  const { header, handleChange, type, testId } = props;
  const { number, name } = header;

  const handleCalendarChange = (operation) => () => {
    handleChange(operation);
  };

  return (
    <div className={styles.container} data-testid={testId}>
      <a
        role="button"
        className={styles.caret}
        onClick={handleCalendarChange(OPERATIONS.sub)}
        data-testid={`test-${type}-prev`}
      >
        &lsaquo;
      </a>
      <div className={styles.current}>
        {name} {number && `(${number})`}
      </div>
      <a
        role="button"
        className={styles.caret}
        onClick={handleCalendarChange(OPERATIONS.add)}
        data-testid={`test-${type}-next`}
      >
        &rsaquo;
      </a>
    </div>
  );
}

CalendarHeader.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string,
};
