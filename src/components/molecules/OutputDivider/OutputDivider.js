import * as React from 'react';

import classNames from 'classnames/bind';
import styles from './OutputDivider.css';
import ValueBox from '../../atoms/ValueBox/ValueBox';
import Label from '../../atoms/Label/Label';
import { toLb, toFtInch } from '../../../shared/utility';

let cx = classNames.bind(styles);

type Props = {
  label: string,
  height?: number,
  weight?: number,
  bmi?: number,
  bmiClass?: string,
  isMetric?: boolean,
}

const OutputDivider = (
  { label, height, weight, bmi, bmiClass, isMetric }: Props) => {

  let value;

  if (height) {
    value = isMetric ? `${Math.round(height)} cm` : `${toFtInch(height)}`;
  }

  if (weight) {
    value = isMetric ? `${Math.round(weight*2)/2} kg` : `${toLb(weight)} lb`;
  }

  if (bmi) {
    value = bmi;
  }

  if (bmiClass) {
    value = bmiClass;
  }

  let className = cx({
    'output-divider': true,
  });

  return (
    <div className={className}>
      <Label content={label} output />
      <ValueBox value={value} />
    </div>
  );
};

export default OutputDivider;
