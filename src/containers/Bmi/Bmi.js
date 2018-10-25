import React, { Component } from 'react';

import styles from './Bmi.css';
import Input from '../../components/organisms/Input/Input';
import Output from '../../components/organisms/Output/Output';
import Button from '../../components/atoms/Button/Button';

class Bmi extends Component {
  state = {
    height: this.props.height,
    weight: this.props.weight,
    bmi: this.props.bmi,
    bmiClass: this.props.bmiClass,
    isMetric: true
  }

  static get defaultProps() {
    return {
      height: 180,
      weight: 75,
      bmi: 23.15,
      bmiClass: 'Normal'
    }
  }

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

  setBmi = () => {
    const bmi = +(this.state.weight / Math.pow(this.state.height*1e-2, 2)).toFixed(2);
    const bmiClass = this.getBmiClass(bmi);
    this.setState({
      bmi,
      bmiClass
    });
  }

  getBmiClass = (bmi) =>{
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
        <h1 className={styles.title}>BMI CALCULATOR</h1>
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
