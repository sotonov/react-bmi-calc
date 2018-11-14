import * as React from 'react';

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
      <OutputDivider label='height' height={height} isMetric={isMetric} />
      <OutputDivider label='weight' weight={weight} isMetric={isMetric} />
      <OutputDivider label='bmi' bmi={bmi} />
      <OutputDivider label='diagnose' bmiClass={bmiClass} />
    </div>
  );
};

export default Output;
