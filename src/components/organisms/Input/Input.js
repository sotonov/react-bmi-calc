import * as React from 'react';

import classNames from 'classnames/bind';
import styles from './Input.css';
import InputSlider from '../../molecules/InputSlider/InputSlider';

let cx = classNames.bind(styles);

type Props = {
  height: number,
  weight: number,
  isMetric: boolean,
  handleHeightChange: Function,
  handleWeightChange: Function
}

const Input = (
  { height, weight, isMetric, handleHeightChange, handleWeightChange }: Props) => {

  let className = cx({
    'input': true,
  });

  return (
    <div className={className}>
      <InputSlider
        height
        value={height}
        handleChange={handleHeightChange}
        isMetric={isMetric} />
      <InputSlider
        weight
        value={weight}
        handleChange={handleWeightChange}
        isMetric={isMetric} />
    </div>
  );
};

export default Input;
