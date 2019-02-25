import React from 'react';

import styles from './Select.module.css';

const Select = ({ answer="", options={}, handleChange }) => {

  // handles edgecase where no options are provided
  if(!options[0]) handleChange("No options found...")

  return (
      <select value={answer} onChange={handleChange} className={ styles.select }>
        { options[0] ?
          options.map((option, index) =>
            <option key={index} value={option.value}>{option.value}</option>
        ) :
          <option value="no options">no options found...</option> }
      </select>
  );
}

export default Select;
