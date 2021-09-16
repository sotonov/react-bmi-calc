import * as React from 'react';

import Label from '../../atoms/Label/Label';
import Slider from '../../atoms/Slider/Slider';
import { toLb, toFtInch } from '../../../shared/utility';
import * as cst from '../../../constants/constants';


type Props = {
  value: number,
  isMetric: boolean,
  title: string,
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void
}

const InputSlider = (
  { value, isMetric, title, handleChange }: Props) => {

  const isHeight = title === cst.HEIGHT;
  const min = isHeight ? cst.MIN_HEIGHT : cst.MIN_WEIGHT;
  const max = isHeight ? cst.MAX_HEIGHT : cst.MAX_WEIGHT;

  let step, unit, content;
  if (isMetric) {
    step = isHeight ? cst.STEP_H_METRIC : cst.STEP_W_METRIC;
    unit = isHeight ? cst.UNIT_H_METRIC : cst.UNIT_W_METRIC;
    content = `${title} [${min} - ${max}${unit}]`;
  } else {
    step = isHeight ? cst.STEP_H_IMPERIAL : cst.STEP_W_IMPERIAL;
    unit = isHeight ? cst.UNIT_H_IMPERIAL : cst.UNIT_W_IMPERIAL;
    content = isHeight
      ? `${title} [${toFtInch(min)} - ${toFtInch(max)}${unit}]`
      : `${title} [${toLb(min)} - ${toLb(max)}${unit}]`;
  }

  const labelProps = { content };
  const rangeProps = { min, max, step, value, name: title.toLowerCase() };

  return (
    <div>
      <Label {...labelProps} />
      <Slider {...rangeProps} handleChange={handleChange}/>
    </div>
  );
};

export default InputSlider;
