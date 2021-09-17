import * as cst from '../constants/constants';

export const getBmiClass = (bmi: number): string => {
  if (bmi > 29.99) {
    return cst.OBESE;
  } else if (bmi > 24.99) {
    return cst.OVERWEIGHT;
  } else if (bmi < 18.5) {
    return cst.UNDERWEIGHT;
  } else {
    return cst.NORMAL;
  }
};
