import React from 'react';

import styles from './Radios.module.css';

const Radios = ({ answer={}, options={}, handleChange }) => {

  const radioOptions = (options) => {
    return options.map((option, index) =>
    <div className={styles.radio} key={index}>
      <label className={styles.label}>
        <input
          type="radio"
          name="radioAnswer"
          value={option.value}
          onChange={handleChange}
          checked={option.value === answer}
          className={styles.input}
        />
        {option.value}
      </label>
    </div>
    )
  };

  return (
      <div className={styles.radios}>
        { radioOptions(options) }
      </div>
  );
}

export default Radios;
