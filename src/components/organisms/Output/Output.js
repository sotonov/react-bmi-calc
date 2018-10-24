import React from 'react';

import style from './Output.css';
import OutputSpan from '../../molecules/OutputSpan/OutputSpan'

const Output = (props) => {
  // console.log('props', props);
  const { height, weight, bmi, bmiClass, isMetric } = props;

  return (
    <div>
      <OutputSpan label='height' value={height} isMetric={isMetric} />
      <OutputSpan label='weight' value={weight} isMetric={isMetric} />
      <OutputSpan label='bmi' value={bmi} />
      <OutputSpan label='diagnose' value={bmiClass} />
    </div>
  );
};

export default Output;
