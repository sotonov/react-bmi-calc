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
    height: cst.DEFAULT_HEIGHT,
    weight: cst.DEFAULT_WEIGHT,
    bmiClass: cst.DEFAULT_BMI_CLASS,
  };

  handleHeightChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    (event.currentTarget: HTMLInputElement);
    this.setState({
      height: +event.currentTarget.value
    }, this.setBmi);
  }

  handleWeightChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    (event.currentTarget: HTMLInputElement);
    this.setState({
      weight: +event.currentTarget.value
    }, this.setBmi);
  }

  calculateBmi = (height: number, weight: number): number => +(weight / Math.pow(height*1e-2, 2)).toFixed(2);

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
    return bmi > 29.99 ? cst.OBESE : (bmi > 24.99 ? cst.OVERWEIGHT : (bmi >= 18.5 ? cst.NORMAL : cst.UNDERWEIGHT));
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>): void => {
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
        <Output {...this.state} />
        <Button
          content={this.state.isMetric ? cst.CHANGE_TO_IMPERIAL : cst.CHANGE_TO_METRIC}
          handleClick={this.handleClick}
          />
      </div>
    );
  }
}

export default Bmi;
