import * as React from 'react';
// $FlowFixMe
import classNames from 'classnames/bind';

import styles from './Label.css';

type Props = {
  content: string,
  output?: boolean,
};

let cx = classNames.bind(styles);

const Label = ({ content, output }: Props) => {
  let className = cx({
    label: true,
    'label-output': output,
    'label-output-diagnose': content === 'diagnose',
  });

  return <div className={className}>{content}</div>;
};

export default Label;
