import React from 'react';

import styles from './Span.css';

const Span = (props) => {
  const { value } = props;
  return (
    <span className={styles.span}>{value}</span>
  );
};

export default Span;
