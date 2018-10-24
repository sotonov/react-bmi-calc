import React from 'react';

import styles from './Button.css';

const Button = (props) => {
  const {content} = props;
  return (
    <button
      className={styles.button}
      onClick={props.handleClick}>
      {content}
    </button>
  );
};

export default Button;
