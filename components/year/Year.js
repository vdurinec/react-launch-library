import { useState } from 'react';

import YearHeader from '../year-header';
import Month from '../month';
import { getYear } from '../../helpers/dateUtils';
import styles from '../../styles/Year.module.css';

export default function Year() {
  const [showMonths, setShowMonths] = useState(false);
  const [currentYear, setCurrentYear] = useState(getYear());

  return (
    <div className={styles.container}>
      <YearHeader year={currentYear} changeYear={setCurrentYear} />
      <Month />
    </div>
  );
}
