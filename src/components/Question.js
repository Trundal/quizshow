import React from 'react';

import questionList from '../server/questions'
import Answer from './Answer'
import Progress from './Progress'
import Error from './UIElements/Error'

import styles from './Question.module.css';

const Question = ( { match = {} } ) => {
  let currentStep = 0;
  if (match.params && match.params.index <= questionList.length && match.params.index >= 0 ) {
    currentStep = parseInt(match.params.index)
  }
  localStorage.setItem("currentStep", currentStep);

  return (
    questionList[0] && !questionList.error ?
    <div className={ styles.question }>
      <Progress numSteps={questionList.length} currentStep={ currentStep } />
      { questionList[currentStep].question ?
        <h2 className={ styles.title }>{ questionList[currentStep].question }</h2> :
        <Error text="Question text unavailable..."/> }
      <Answer
        answer={localStorage.getItem(`answer${currentStep}`)}
        type={questionList[currentStep].answer ? questionList[currentStep].answer.type : null}
        options={questionList[currentStep].answer ? questionList[currentStep].answer.options : null}
        step={currentStep}
        length={questionList.length}/>
    </div>
    : <Error text="Quiz not currently available"/>
  );
}

export default Question;
