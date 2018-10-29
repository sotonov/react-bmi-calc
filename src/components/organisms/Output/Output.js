import React from 'react';

import classNames from 'classnames/bind';
import styles from './Output.css';
import OutputDivider from '../../molecules/OutputDivider/OutputDivider';

let cx = classNames.bind(styles);

type Props = {
  height: number,
  weight: number,
  bmi: number,
  bmiClass: string,
  isMetric: boolean,
}

const Output =
  ({ height, weight, bmi, bmiClass, isMetric }: Props) => {

  let className = cx({
    'output': true,
  });

  return (
    <div className={className}>
      <OutputDivider label='height' value={height} isMetric={isMetric} />
      <OutputDivider label='weight' value={weight} isMetric={isMetric} />
      <OutputDivider label='bmi' value={bmi} />
      <OutputDivider label='diagnose' value={bmiClass} />
    </div>
  );
};

export default Output;
