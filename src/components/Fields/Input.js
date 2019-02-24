import React from 'react';

import styles from './Input.module.css';

const Input = ({ answer, handleChange }) => {
    return (
      <input className={styles.input}
        value={ answer }
        onChange={ handleChange }
      />
    );
}

export default Input;
