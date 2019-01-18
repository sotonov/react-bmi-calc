import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.css';

type Props = {
  content: string,
  handleClick: (event: SyntheticMouseEvent<HTMLButtonElement>) => void;
}

let cx = classNames.bind(styles);

const Button = (
  { content, handleClick }: Props) => {

  let className = cx('button');

  return (
    <button
      className={className}
      onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
