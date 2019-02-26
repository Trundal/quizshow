import React from 'react';

import Error from '../UIElements/Error'
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
        ) : <Error text="No options found..." handleChange={handleChange}/>
      }
    </div>
  );
}

export default Radios;
