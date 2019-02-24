import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Button.module.css';

const Button = ({ text='', link=null, disabled=false }) => {
    return (
      <button className={ styles.button } disabled={ disabled }>
        { !disabled ? <Link to={link}>{text}</Link> : <div>{text}</div> }
      </button>
    );
}

export default Button;
