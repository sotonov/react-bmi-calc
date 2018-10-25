import React from 'react';

import styles from './ValueBox.css';

const ValueBox = (props) => {
  const { value } = props;
  const classes = [ 'value-box' ];

  value === 'Obese' && classes.push('obese')

  return (
    <span className={styles[classes.join('-')]}>{value}</span>
  );
};

export default ValueBox;
