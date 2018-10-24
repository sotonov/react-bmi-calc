import React from 'react';

import styles from './Label.css';

const Label = (props) => {
  const {content} = props;

  return (
    <div className={styles.label}>{content}</div>
  );
};

export default Label;
