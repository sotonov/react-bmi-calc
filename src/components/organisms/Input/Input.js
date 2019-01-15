import * as React from 'react';

import InputSlider from '../../molecules/InputSlider/InputSlider';

type Props = {
  height: number,
  weight: number,
  isMetric: boolean,
  handleHeightChange: Function,
  handleWeightChange: Function
}

const Input = (
  { height, weight, isMetric, handleHeightChange, handleWeightChange }: Props) => {

  return (
    <div>
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
