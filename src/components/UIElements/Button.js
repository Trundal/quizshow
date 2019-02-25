import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Button.module.css';

const Button = ({ text='', link=null, disabled=false, hidden=false }) => {
    return (
      !disabled && link ?
        <Link to={link} className={styles.button}>{text}</Link> :
        <span className={[styles.disabled, hidden ? styles.hidden : null].join('')}>{text}</span>
    );
}

export default Button;
