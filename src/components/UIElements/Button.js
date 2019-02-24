import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Button.module.css';

const Button = ({ text='', link=null, disabled=false }) => {
    return (
      !disabled ?
        <Link to={link} className={styles.button}>{text}</Link> :
        <span className={styles.disabledButton}>{text}</span>
    );
}

export default Button;
