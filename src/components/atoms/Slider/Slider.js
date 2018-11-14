import * as React from 'react';

import './Slider.css';

type Props = {
  min: number,
  max: number,
  step: number,
  value: number,
  handleChange: any
}

const Slider = (
  { min, max, step, value, handleChange }: Props) => {
  // const { min, max, step, value } = props;

  return (
    <input
      type='range'
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;
