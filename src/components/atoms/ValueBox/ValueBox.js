import * as React from 'react';
// $FlowFixMe
import classNames from 'classnames/bind';

import styles from './ValueBox.css';

type Props = {
  value: ?(number | string),
};

let cx = classNames.bind(styles);

const ValueBox = ({ value }: Props) => {
  let className = cx({
    'value-box': true,
    'value-box-obese': value === 'Obese',
  });

  return <span className={className}>{value}</span>;
};

export default ValueBox;
