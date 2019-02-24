import React from 'react';

import styles from './Radios.module.css';

const Radios = ({ answer={}, options={}, handleChange }) => {

  const radioOptions = (options) => {
    return options.map((option, index) =>
    <label key={index}>
      <input
        type="radio"
        name="radioAnswer"
        value={option.value}
        onChange={handleChange}
        checked={option.value === answer}
        className={styles.radio}
      />
      {option.value}
    </label>
    )
  };

  return (
      <div>
        { radioOptions(options) }
      </div>
  );
}

export default Radios;
