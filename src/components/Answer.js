import React, { useState, useEffect } from 'react';
import Button from './UIElements/Button'
import Input from './Fields/Input'
import Select from './Fields/Select'
import Radios from './Fields/Radios'

import styles from './Answer.module.css';

const Answer = ( { answer="", step=0, length=0, type="", options={} } ) => {
  const [storedAnswer, setStoredAnswer] = useState("");

  useEffect(() => {
    setStoredAnswer(localStorage.getItem(`answer${step}`) ? localStorage.getItem(`answer${step}`) : "")
  });

  const handleChange = (event) => {
    //handles edgecase where 'handleChange' is triggered programatically rather than through user input
    let value="";
    if(typeof event === "string") value=event
    else if(typeof event.target !== "undefined") value=event.target.value

    localStorage.setItem(`answer${step}`, value);
    setStoredAnswer(value)
  }

  const prevStep = step - 1;
  const nextStep = step + 1 ;

  const answerField = (type, options) => {
    switch (type) {
			case "input":
        return <Input answer={ storedAnswer } handleChange={ handleChange }/>
			case "select":
				return <Select answer={ storedAnswer } options={ options } handleChange={ handleChange }/>
      case "radio":
        return <Radios answer={ storedAnswer } options={ options } handleChange={ handleChange }/>
      default:
        return null
		}
  };

  return (
    <div className= { styles.answer }>
      { answerField(type, options) }
      <div className={ styles.buttons }>
        { prevStep >= 0 ? <Button link={`/question/${prevStep}`} text="Back" /> : <Button hidden={true} /> }
        { nextStep < length ? <Button link={`/question/${nextStep}`} disabled={!storedAnswer} text="Next" /> : <Button link={`/answers`} disabled={!storedAnswer} text="Answers" /> }
      </div>
    </div>
  );
}

export default Answer;
