import * as React from 'react';

import './Slider.css';

type Props = {
  name: string,
  min: number,
  max: number,
  step: number,
  value: number,
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
};

const Slider = ({ name, min, max, step, value, handleChange }: Props) => {
  return (
    <input
      type="range"
      name={name}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;
