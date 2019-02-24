import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Button.module.css';

const Button = ({ text='', link=null }) => {
    return (
      <button className={ styles.button }>
        <Link to={link}>
          {text}
        </Link>
      </button>
    );
}

export default Button;
