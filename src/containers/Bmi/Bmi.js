import * as React from 'react';

import styles from './Bmi.css';
import Input from '../../components/organisms/Input/Input';
import Output from '../../components/organisms/Output/Output';
import Button from '../../components/atoms/Button/Button';
import * as cst from '../../constants/constants';

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
    height: this.props.height || cst.DEFAULT_HEIGHT,
    weight: this.props.weight || cst.DEFAULT_WEIGHT,
    bmi: 0,
    bmiClass: this.props.bmiClass || cst.DEFAULT_BMI_CLASS,
    isMetric: true,
  };

  componentDidMount () {
    const { height, weight } = this.props;
    this.setState({
      bmi: this.calculateBmi(height, weight)
    })
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    (event.currentTarget: HTMLInputElement);
    const { value, name } = event.currentTarget;
    this.setState({
      [name]: Number(value),
    }, this.setBmi)
  }

  calculateBmi = (height: number, weight: number): number => Number(weight / Math.pow(height*1e-2, 2)).toFixed(2);

  setBmi = (): void => {
    const { height, weight } = this.state;
    const bmi = this.calculateBmi(height, weight);
    const bmiClass = this.getBmiClass(bmi);
    this.setState({
      bmi,
      bmiClass
    });
  }

  getBmiClass = (bmi: number): string => {
    if (bmi > 29.99) {
      return cst.OBESE;
    } else if (bmi > 24.99) {
      return cst.OVERWEIGHT;
    } else if (bmi < 18.5) {
      return cst.UNDERWEIGHT;
    } else {
      return cst.NORMAL;
    }
  }

  handleClick = (): void => {
    this.setState(prevState => {
      return { isMetric: !prevState.isMetric };
    })
  }

  render () {
    const { isMetric } = this.state;
    return (
      <div className={styles.bmi}>
        <h1 className={styles['bmi-title']}>BMI CALCULATOR</h1>
        <Input
          handleInputChange={this.handleChange}
          {...this.state}
         />
        <Output {...this.state} />
        <Button
          content={isMetric ? cst.CHANGE_TO_IMPERIAL : cst.CHANGE_TO_METRIC}
          handleClick={this.handleClick}
          />
      </div>
    );
  }
}

export default Bmi;
