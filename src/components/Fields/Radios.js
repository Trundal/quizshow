import React from 'react';

import styles from './Radios.module.css';

const Radios = ({ answer={}, options={}, handleChange }) => {

  return (
      <div className={styles.radios}>
        { options[0] ?
          options.map((option, index) =>
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
        ) :
          <div>No options found...</div> }
      </div>
  );
}

export default Radios;
