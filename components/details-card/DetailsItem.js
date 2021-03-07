import PropTypes from 'prop-types';

import styles from '../../styles/DetailsCard.module.css';

const TYPES = {
  title: 'title',
  subtitle: 'subtitle',
  text: 'text',
  link: 'link',
};

const Item = ({ item, type, description, testId }) => {
  if (!item) return null;
  const itemType = TYPES[type] || TYPES.text;

  const className = `${styles.detail} ${styles[itemType]}`;
  if (itemType === TYPES.link) {
    return (
      <a className={className} href={item} data-testid={testId} role="button">
        {description || item}
      </a>
    );
  }

  return (
    <div className={className} data-testid={testId}>
      {item}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  testId: PropTypes.string,
};

export default Item;
