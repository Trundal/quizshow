import React from 'react';

import Error from '../UIElements/Error'
import styles from './Select.module.css';

const Select = ({ answer="", options={}, handleChange }) => {

  return (
    <div>
    { options[0] ?
      <select value={answer} onChange={handleChange} className={ styles.select }>
        {options.map((option, index) =>
          <option key={index} value={option.value}>{option.value}</option> )}
      </select> :
      <Error text="No options found..." handleChange={handleChange}/>
    }
    </div>
  );
}

export default Select;
