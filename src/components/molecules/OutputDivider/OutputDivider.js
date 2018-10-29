import React from 'react';

import classNames from 'classnames/bind';
import styles from './OutputDivider.css';
import ValueBox from '../../atoms/ValueBox/ValueBox';
import Label from '../../atoms/Label/Label';
import { toLb, toFtInch } from '../../../shared/utility';

let cx = classNames.bind(styles);

type Props = {
  label: string,
  value: number | string,
  isMetric?: boolean,
}

const OutputDivider = (
  { label, value, isMetric }: Props) => {
  // let { label, value, isMetric } = props;
  switch (label) {
    case 'height':
      value = isMetric ? `${Math.round(value)} cm` : `${toFtInch(value)}`;
      break;
    case 'weight':
      value = isMetric ? `${Math.round(value*2)/2} kg` : `${toLb(value)} lb`;
      break;
    case 'bmi':

      break;
    case 'diagnose':

      break;
    default:
      console.log('What happenned?');
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
