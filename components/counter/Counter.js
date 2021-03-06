import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { OPERATIONS, OPERATORS } from '../../helpers/general';
import { formatCounterTime } from '../../helpers/dateUtils';
import styles from '../../styles/Counter.module.css';

const Counter = ({ date, testId }) => {
  const currentDate = new Date();
  const currentDateMs = currentDate.getTime();
  const dateMs = date.getTime();
  const operation = currentDateMs > dateMs ? OPERATIONS.add : OPERATIONS.sub;
  const operator = OPERATORS[operation] * 1000;
  const currentCounter =
    currentDateMs > dateMs ? currentDateMs - dateMs : dateMs - currentDateMs;
  const [counter, setCounter] = useState(currentCounter);

  const tick = () => setCounter((counter) => counter + operator);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const formatedCounterTime = formatCounterTime(counter);
  const formattedTimeArray = Object.entries(formatedCounterTime);

  return (
    <div className={styles.container} data-testid={testId}>
      <div className={styles.indicator}>
        {operation === OPERATIONS.sub ? 'T-' : 'T+'}
      </div>
      <div className={styles.main}>
        <div className={styles.box}>
          {formattedTimeArray.map(([key, value], i) => (
            <div key={key} className={styles.item}>
              {value &&
                `${value} ${i + 1 < formattedTimeArray.length ? ':' : ''}`}
            </div>
          ))}
        </div>
        <div className={styles.box}>
          {formattedTimeArray.map(([key], i) => (
            <div key={key} className={styles.description}>
              {key &&
                `${key.substr(0, 1)} ${
                  i + 1 < formattedTimeArray.length ? ':' : ''
                }`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  date: PropTypes.any.isRequired,
  testId: PropTypes.string,
};

export default Counter;
