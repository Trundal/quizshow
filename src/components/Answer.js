import React, { useState, useEffect } from 'react';
import Button from './UIElements/Button'
import Input from './Fields/Input'
import Select from './Fields/Select'

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

  const prevStep = step - 1;
  const nextStep = step + 1 ;

  const answerField = (type, options) => {
    switch (type) {
			case "input":
        return <Input answer={ storedAnswer } handleChange={ handleChange }/>
			case "select":
				return <Select answer={ storedAnswer } options={ options } handleChange={ handleChange }/>
      default:
        return null
		}
  };

  return (
    <div className= { styles.answer }>
      { answerField(type, options) }
      { prevStep >= 0 ? <Button link={`/question/${prevStep}`} text="Previous" /> : null }
      { nextStep < length ? <Button link={`/question/${nextStep}`} text="Next" /> : <Button link={`/answers`} text="Answers" /> }
    </div>
  );
}

export default Answer;
