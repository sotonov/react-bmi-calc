import * as React from 'react';

import InputSlider from '../../molecules/InputSlider/InputSlider';
import * as cst from '../../../constants/constants';

type Props = {
  height: number,
  weight: number,
  isMetric: boolean,
  handleInputChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
}

const Input = (
  { height, weight, isMetric, handleInputChange }: Props) => {

  return (
    <div>
        {[cst.HEIGHT, cst.WEIGHT].map(title => (
            <InputSlider
                key={title}
                title={title}
                value={title === cst.HEIGHT ? height : weight}
                handleChange={handleInputChange}
                isMetric={isMetric} />
        ))}
    </div>
  );
};

export default Input;
