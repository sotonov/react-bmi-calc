import * as React from 'react';

import InputSlider from '../../molecules/InputSlider/InputSlider';
import * as cst from '../../../constants/constants';

type Props = {
  height: number,
  weight: number,
  lang: string,
  isMetric: boolean,
  handleInputChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
};

const Input = ({
  height,
  weight,
  lang,
  isMetric,
  handleInputChange,
}: Props) => {
  return (
    <>
      {[cst.HEIGHT, cst.WEIGHT].map(title => (
        <InputSlider
          key={title}
          title={title}
          lang={lang}
          isMetric={isMetric}
          isHeight={title === cst.HEIGHT}
          value={title === cst.HEIGHT ? height : weight}
          handleChange={handleInputChange}
        />
      ))}
    </>
  );
};

export default Input;
