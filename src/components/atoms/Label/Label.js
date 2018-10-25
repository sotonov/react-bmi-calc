import React from 'react';

import styles from './Label.css';

const Label = (props) => {
  const {content, output} = props;

  let classes = [ 'label' ];

  output && classes.push('output')
  content === 'diagnose' && classes.push('diagnose')

  return (
    <div className={styles[classes.join('-')]}>{content}</div>
  );
};

export default Label;
