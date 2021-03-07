import PropTypes from 'prop-types';

import styles from '../../styles/DetailsCard.module.css';

const ItemContainer = ({ children, testId }) => {
  return (
    <div className={styles.detailItemContainer} data-testid={testId}>
      {children}
    </div>
  );
};

ItemContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  testId: PropTypes.string,
};

export default ItemContainer;
