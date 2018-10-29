import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.css';

type Props = {
  content: 'string',
}

let cx = classNames.bind(styles);

const Button = (
  { content, handleClick }: Props) => {
  // const {content} = props;
  let className = cx({
    button: true
  })

  return (
    <button
      className={className}
      onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
