import React from 'react';

import questionList from '../server/questions'
import Answer from './Answer'

import styles from './Question.module.css';

const Question = ( { match = {} } ) => {
    let currentStep = 0;
    if (match.params.index <= questionList.length && match.params.index >= 0 ) {
      currentStep = parseInt(match.params.index)
    }
    localStorage.setItem("currentStep", currentStep);

    return (
      <div className= { styles.question }>
        { questionList[currentStep].question }
        <Answer
          answer={localStorage.getItem(`answer${currentStep}`)}
          type={questionList[currentStep].answer.type}
          options={questionList[currentStep].answer.options}
          step={currentStep}
          length={questionList.length}/>
      </div>
    );
}

export default Question;
