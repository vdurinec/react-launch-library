import PropTypes from 'prop-types';
import styles from '../../styles/Select.module.css';

const SelectOption = ({ value, text, ...props }) => (
  <option
    className={styles.option}
    value={value}
    data-testid={value}
    {...props}
  >
    {text || value}
  </option>
);

SelectOption.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.bool,
};

export default SelectOption;
