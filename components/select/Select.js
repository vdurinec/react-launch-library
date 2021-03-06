import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import useClickOutside from '../../hooks/useClickOutside';
import styles from '../../styles/Select.module.css';

const Select = (props) => {
  const {
    id,
    label,
    options,
    value,
    multiple,
    handleChange,
    className,
    testId,
  } = props;
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const isClickedOutside = useClickOutside(container);

  useEffect(() => {
    if (open && isClickedOutside) setOpen(false);
  }, [isClickedOutside]);

  const isSelected = (option) => {
    return multiple ? !!value?.includes(option) : value === option;
  };

  const formatValueText = () => {
    if (multiple) {
      return value?.reduce((values, val, index) => {
        const valueText = getValueText(val);
        if (valueText) {
          return index === 0 ? `${valueText}` : `${values}, ${valueText}`;
        }
        return values;
      }, '');
    }

    return getValueText(value);
  };

  const getValueText = (currentValue) => {
    const valueObject = options.find((option) => option.id === currentValue);
    return (valueObject && valueObject?.text) || '';
  };

  const handleSelect = (item) => () => {
    handleChange(item);
  };

  const toggleOptions = () => setOpen((open) => !open);

  return (
    <div
      className={styles.container}
      ref={container}
      id="select-container"
      aria-labelledby="select-value"
      aria-describedby="select-options"
      data-testid={testId}
    >
      {label && (
        <label id="select-label" htmlFor="select-value">
          {label}
        </label>
      )}
      <div className={styles.main}>
        <button
          type="button"
          className={styles.select}
          onClick={toggleOptions}
          aria-haspopup="listbox"
          aria-labelledby="select-label"
          id="select-value"
        >
          <div className={styles.value}>{formatValueText()}</div>
          <div
            className={`${styles.caret} ${open ? styles.up : styles.down}`}
          />
        </button>
        <div
          role="listbox"
          className={`${styles.options} ${open ? styles.open : styles.closed}`}
          id="select-options"
          aria-labelledby="select-label"
          aria-hidden={!open}
          data-testid={'test-options'}
        >
          {options.map((option) => (
            <button
              type="button"
              className={`${styles.option} ${
                isSelected(option.id) && styles.selected
              }`}
              key={option.id}
              onClick={handleSelect(option)}
              data-testid={option.id}
              role="option"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
  ]),
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  handleChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      text: PropTypes.string,
      placeholder: PropTypes.bool,
    })
  ).isRequired,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  testId: PropTypes.string,
};

export default Select;
