import React from 'react';

import styles from './Error.module.css';

const Error = ({ text='', handleChange }) => {


  if(handleChange) handleChange({target: { value: text}})

  return (
    <div className={styles.error}>{text}</div>
  );
}

export default Error;
