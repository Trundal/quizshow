import React from 'react';

import questionList from '../server/questions'
import styles from './Answers.module.css';

const Answers = () => {

  return (
    <ul className= { styles.answers }>
      { questionList.map((question, index) =>
        <li className={ styles.answer } key={index}>
          <div className={ styles.question }>{question.question}</div>
          <div className={ styles.response }>{localStorage.getItem(`answer${index}`)}</div>
        </li>
      ) }
    </ul>
  );
}

export default Answers;
