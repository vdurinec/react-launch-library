import PropTypes from 'prop-types';

import styles from '../../styles/DetailsCard.module.css';

const Card = ({ children, testId }) => {
  return (
    <div className={styles.container} data-testid={testId}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  testId: PropTypes.string,
};

export default Card;
