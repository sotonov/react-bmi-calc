import * as React from 'react';

import './Slider.css';

type Props = {
  min: number,
  max: number,
  step: number,
  value: number,
  handleChange: (value: number) => void
}

const Slider = (
  { min, max, step, value, handleChange }: Props) => {

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
