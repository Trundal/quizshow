import React from 'react';

import styles from './Progress.module.css';

const Progress = ( { numSteps, currentStep } ) => {

  const spanWidth = {
    width: (((parseInt(currentStep) + 1) / numSteps) * 100) + "%"
  };

    return (
      <div className= {styles.progress} >
        <span style={spanWidth}></span>
      </div>
    );
}

export default Progress;
