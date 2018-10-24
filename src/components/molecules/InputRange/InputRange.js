import React from 'react';

import styles from './InputRange.css';
import Label from '../../atoms/Label/Label';
import Range from '../../atoms/Range/Range';
import { toLb, toFtInch } from '../../../shared/utility';

const InputRange = (props) => {
  const { value } = props;
  const { height, weight, isMetric } = props;
  const min = height ? 150 : 40;
  const max = height ? 220 : 130;
  const title = height ? 'Height' : 'Weight';
  let step, unit, content;
  if (isMetric) {
    step = height ? 1 : 0.5;
    unit = height ? ' cm' : ' kg';
    content = `${title} [${min} - ${max}${unit}]`;
  } else {
    step = height ? 2.54 : 0.4536;
    unit = height ? '' : ' lb';
    content = height
      ? `${title} [${toFtInch(min)} - ${toFtInch(max)}${unit}]`
      : `${title} [${toLb(min)} - ${toLb(max)}${unit}]`;
  }

  const labelProps = { content };
  const rangeProps = { min, max, step, value };

  return (
    <div className={styles.input_range}>
      <Label {...labelProps} />
      <Range {...rangeProps} handleChange={props.handleChange}/>
    </div>
  );
};

export default InputRange;
