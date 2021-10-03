import * as React from 'react';

import OutputDivider from '../../molecules/OutputDivider/OutputDivider';
import * as cst from '../../../constants/constants';
import t from '../../../constants/translations';

type Props = {
  lang: string,
  height: number,
  weight: number,
  bmi: number,
  bmiClass: string,
  isMetric: boolean,
};

const Output = ({ lang, height, weight, bmi, bmiClass, isMetric }: Props) => {
  return (
    <>
      {cst.OUTPUT_LABELS.map(label => (
        <OutputDivider
          key={label}
          label={t[lang][label]}
          height={label === cst.HEIGHT ? height : 0}
          weight={label === cst.WEIGHT ? weight : 0}
          bmi={label === cst.BMI ? bmi : 0}
          bmiClass={label === cst.DIAGNOSIS ? bmiClass : ''}
          isMetric={isMetric}
        />
      ))}
    </>
  );
};

export default Output;
