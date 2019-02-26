import React, { useState, useEffect } from 'react';

import Button from './UIElements/Button'
import Input from './Fields/Input'
import Select from './Fields/Select'
import Radios from './Fields/Radios'
import Error from './UIElements/Error'

import styles from './Answer.module.css';

const Answer = ( { answer="", step=0, length=0, type="", options={} } ) => {
  const [storedAnswer, setStoredAnswer] = useState("");

  useEffect(() => {
    setStoredAnswer(localStorage.getItem(`answer${step}`) ? localStorage.getItem(`answer${step}`) : "")
  });

  const handleChange = (event) => {
    localStorage.setItem(`answer${step}`, event.target.value);
    setStoredAnswer(event.target.value)
  }

  const answerField = (type, options) => {
    switch (type) {
      case "input":
        return <Input answer={ storedAnswer } handleChange={ handleChange }/>
      case "select":
        return <Select answer={ storedAnswer } options={ options } handleChange={ handleChange }/>
      case "radio":
        return <Radios answer={ storedAnswer } options={ options } handleChange={ handleChange }/>
      default:
        return <Error text="No options found..." handleChange={ handleChange }/>
    }
  };

  return (
    <div className= { styles.answer }>
      { answerField(type, options) }
      <div className={ styles.buttons }>
        { step > 0
          ? <Button link={`/question/${step-1}`} text="Back" />
          : <Button hidden={true} /> }
        { step < length-1
          ? <Button link={`/question/${step+1}`} disabled={!storedAnswer} text="Next" />
          : <Button link={`/answers`} disabled={!storedAnswer} text="Answers" step={localStorage.getItem('currentStep')}/> }
      </div>
    </div>
  );
}

export default Answer;
