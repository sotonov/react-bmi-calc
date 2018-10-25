import React from 'react';

import styles from './Input.css';
import InputRange from '../../molecules/InputRange/InputRange'

const Input = (props) => {
  // console.log('input props', props);
  const {height, weight, isMetric} = props;
  // console.log(weight, height, isMetric);
  return (
    <div className={styles.input}>
      <InputRange
        height
        value={height}
        handleChange={props.handleHeightChange}
        isMetric={isMetric} />
      <InputRange
        weight
        value={weight}
        handleChange={props.handleWeightChange}
        isMetric={isMetric} />
    </div>
  );
};

export default Input;
