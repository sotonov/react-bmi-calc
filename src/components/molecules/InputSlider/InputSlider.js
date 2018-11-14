import * as React from 'react';

import Label from '../../atoms/Label/Label';
import Slider from '../../atoms/Slider/Slider';
import { toLb, toFtInch } from '../../../shared/utility';


type Props = {
  value: number,
  height?: boolean,
  weight?: boolean,
  isMetric: boolean,
  handleChange: Function
}

const InputSlider = (
  { value, height, weight, isMetric, handleChange }: Props) => {

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
    <div>
      <Label {...labelProps} />
      <Slider {...rangeProps} handleChange={handleChange}/>
    </div>
  );
};

export default InputSlider;