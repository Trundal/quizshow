import React from 'react';

import questionList from '../server/questions'
import styles from './Answers.module.css';

const Answers = () => {

  const answerList = (questionList) => {
    return questionList.map((question, index) =>
      <li className= { styles.answer } key={index}>
        <div>{question.question}</div>
        <div>{localStorage.getItem(`answer${index}`)}</div>
      </li>
    )
  };

  return (
    <ul className= { styles.answers }>
      { answerList(questionList) }
    </ul>
  );
}

export default Answers;
