import React from 'react';

import styles from './OutputDiv.css';
import ValueBox from '../../atoms/ValueBox/ValueBox';
import Label from '../../atoms/Label/Label';
import { toLb, toFtInch } from '../../../shared/utility';

const OutputDiv = (props) => {
  let { label, value, isMetric } = props;
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
      console.log('An error has occurred.');
  }

  return (
    <div className={styles.output_div}>
      <Label content={label} output />
      <ValueBox value={value} />
    </div>
  );
};

export default OutputDiv;
