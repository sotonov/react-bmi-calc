// import React, { Component } from 'react';
import * as React from 'react';

import styles from './Bmi.css';
import Input from '../../components/organisms/Input/Input';
import Output from '../../components/organisms/Output/Output';
import Button from '../../components/atoms/Button/Button';

type Props = {
  height: number,
  weight: number,
  bmiClass: string,
};

type State = {
  height: number,
  weight: number,
  bmi: number,
  bmiClass: string,
  isMetric: boolean,
};

class Bmi extends React.Component<Props, State> {
  state = {
    height: this.props.height,
    weight: this.props.weight,
    bmi: 0,
    bmiClass: this.props.bmiClass,
    isMetric: true,
  };

  componentDidMount () {
    this.setState({
      bmi: this.calculateBmi(this.props.height, this.props.weight)
    })
  }

  static defaultProps = {
    height: 180,
    weight: 75,
    bmiClass: 'Normal',
  };

  handleHeightChange = (event) => {
    this.setState({
      height: +event.target.value
    }, this.setBmi);
  }

  handleWeightChange = (event) => {
    this.setState({
      weight: +event.target.value
    }, this.setBmi);
  }

  calculateBmi = (height, weight) => +(weight / Math.pow(height*1e-2, 2)).toFixed(2);

  setBmi = () => {
    const bmi = this.calculateBmi(this.state.height, this.state.weight);
    const bmiClass = this.getBmiClass(bmi);
    this.setState({
      bmi,
      bmiClass
    });
  }

  getBmiClass = (bmi) => {
    return bmi > 29.99 ? 'Obese' : (bmi > 24.99 ? 'Overweight' : (bmi >= 18.5 ? 'Normal' : 'Underweight') );
  }

  handleClick = (event) => {
    this.setState(prevState => {
      return { isMetric: !prevState.isMetric };
    })
  }

  render () {
    return (
      <div className={styles.bmi}>
        <h1 className={styles['bmi-title']}>BMI CALCULATOR</h1>
        <Input
          handleHeightChange={this.handleHeightChange}
          handleWeightChange={this.handleWeightChange}
          {...this.state}
         />
        <Output {...this.state}/>
        <Button
          content={this.state.isMetric ? "Change to Imperial" : "Change to Metric"}
          handleClick={this.handleClick}
          />
      </div>
    );
  }
}

export default Bmi;
