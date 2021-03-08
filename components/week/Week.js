import PropTypes from 'prop-types';

import styles from '../../styles/Week.module.css';

export default function Week({ children, className, testId }) {
  return (
    <div
      className={`${styles.container} ${className ? styles[className] : ''}`}
      data-testid={testId}
    >
      {children}
    </div>
  );
}

Week.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  testId: PropTypes.string,
};
