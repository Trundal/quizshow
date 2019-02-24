import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import questionList from '../server/questions'

import Header from './Header'
import Progress from './Progress'
import Question from './Question'
import Answers from './Answers'

import styles from './App.module.css';

const App = () => {
  const [currentStep] = useState(
    localStorage.getItem('currentStep') ? localStorage.getItem('currentStep') : 0
  );

  return (
    <div className= { styles.App } >
      <Header />
      <BrowserRouter>
        <div>
          <Progress numSteps={questionList.length} currentStep={ currentStep } />
          <Route exact path="/" render={() => (
            <Redirect to={`/question/${currentStep}` } />
          )}/>
          <Route path="/question/:index" component={ Question } />
          <Route path="/answers" component={ Answers }/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
