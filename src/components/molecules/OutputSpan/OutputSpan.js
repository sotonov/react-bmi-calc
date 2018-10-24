import React from 'react';

import styles from './OutputSpan.css';
import Span from '../../atoms/Span/Span';
import { toLb, toFtInch } from '../../../shared/utility';

const OutputSpan = (props) => {
  let { label, value, isMetric } = props;
  switch (label) {
    case 'height':
      value = isMetric ? `${Math.round(value)} cm` : `${toFtInch(value)}`;
      break;
    case 'weight':
      value = isMetric ? `${Math.round(value)/2} kg` : `${toLb(value)} lb`;
      break;
    case 'bmi':

      break;
    case 'diagnose':

      break;
    default:
      console.log('An error has occurred.');
  }

  return (
    <div className={styles.outputSpan}>
      {label}<Span value={value} />
    </div>
  );
};

export default OutputSpan;
