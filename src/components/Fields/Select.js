import React from 'react';

import styles from './Select.module.css';

const Select = ({ answer={}, options={}, handleChange }) => {

  const selectOptions = (options) => {
    return options.map((option, index) =>
      <option key={index} value={option.value}>{option.value}</option>
    )
  };

  return (
      <select value={answer} onChange={handleChange} className={ styles.select }>
        { selectOptions(options) }
      </select>
  );
}

export default Select;
