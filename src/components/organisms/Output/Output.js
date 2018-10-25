import React from 'react';

import style from './Output.css';
import OutputDiv from '../../molecules/OutputDiv/OutputDiv';

const Output = (props) => {
  // console.log('props', props);
  const { height, weight, bmi, bmiClass, isMetric } = props;

  return (
    <div>
      <OutputDiv label='height' value={height} isMetric={isMetric} />
      <OutputDiv label='weight' value={weight} isMetric={isMetric} />
      <OutputDiv label='bmi' value={bmi} />
      <OutputDiv label='diagnose' value={bmiClass} />
    </div>
  );
};

export default Output;
