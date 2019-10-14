import * as React from 'react';

import OutputDivider from '../../molecules/OutputDivider/OutputDivider';

type Props = {
  height: number,
  weight: number,
  bmi: number,
  bmiClass: string,
  isMetric: boolean,
}

const Output =
  ({ height, weight, bmi, bmiClass, isMetric }: Props) => {

  return (
    <div>
      <OutputDivider label='height' height={height} isMetric={isMetric} />
      <OutputDivider label='weight' weight={weight} isMetric={isMetric} />
      <OutputDivider label='bmi' bmi={bmi} />
      <OutputDivider label='diagnose' bmiClass={bmiClass} />
    </div>
  );
};

export default Output;
