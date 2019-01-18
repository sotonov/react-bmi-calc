import * as React from 'react';

import Label from '../../atoms/Label/Label';
import Slider from '../../atoms/Slider/Slider';
import { toLb, toFtInch } from '../../../shared/utility';
import * as cst from '../../../constants/constants';


type Props = {
  value: number,
  height?: boolean,
  weight?: boolean,
  isMetric: boolean,
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void
}

const InputSlider = (
  { value, height, weight, isMetric, handleChange }: Props) => {

  const min = height ? cst.MIN_HEIGHT : cst.MIN_WEIGHT;
  const max = height ? cst.MAX_HEIGHT : cst.MAX_WEIGHT;
  const title = height ? cst.HEIGHT : cst.WEIGHT;

  let step, unit, content;
  if (isMetric) {
    step = height ? cst.STEP_H_METRIC : cst.STEP_W_METRIC;
    unit = height ? cst.UNIT_H_METRIC : cst.UNIT_W_METRIC;
    content = `${title} [${min} - ${max}${unit}]`;
  } else {
    step = height ? cst.STEP_H_IMPERIAL : cst.STEP_W_IMPERIAL;
    unit = height ? cst.UNIT_H_IMPERIAL : cst.UNIT_W_IMPERIAL;
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
