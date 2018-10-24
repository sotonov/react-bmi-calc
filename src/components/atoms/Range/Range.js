import React from 'react';

import styles from './Range.css';

const Range = (props) => {
  const { min, max, step, value } = props;

  return (
    <input
      type='range'
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={props.handleChange}
    />
  );
};

export default Range;
