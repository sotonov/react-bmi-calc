import * as React from 'react';

import styles from './Bmi.css';
import Input from '../../components/organisms/Input/Input';
import Output from '../../components/organisms/Output/Output';
import Settings from '../../components/organisms/Settings/Settings';
import { calculateBmi } from '../../utils/calculateBmi';
import { getBmiClass } from '../../utils/getBmiClass';
import * as cst from '../../constants/constants';
import t from '../../constants/translations';

type State = {
  height: number,
  weight: number,
  bmi: number,
  bmiClass: string,
  isMetric: boolean,
  lang: string,
};

class Bmi extends React.Component<{}, State> {
  state = {
    height: cst.DEFAULT_HEIGHT,
    weight: cst.DEFAULT_WEIGHT,
    bmi: calculateBmi(cst.DEFAULT_HEIGHT, cst.DEFAULT_WEIGHT),
    bmiClass: t[cst.EN][cst.DEFAULT_BMI_CLASS],
    isMetric: true,
    lang: cst.EN,
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    (event.currentTarget: HTMLInputElement);
    const { value, name } = event.currentTarget;
    this.setState(
      {
        [name]: Number(value),
      },
      this.setBmi
    );
  };

  setBmi = (): void => {
    const { height, weight, lang } = this.state;
    const bmi = calculateBmi(height, weight);
    const bmiClass = t[lang][getBmiClass(bmi)];
    this.setState({
      bmi,
      bmiClass,
    });
  };

  changeMetric = (): void => {
    this.setState(prevState => {
      return { isMetric: !prevState.isMetric };
    });
  };

  changeLanguage = (event: SyntheticInputEvent<HTMLSelectElement>): void => {
    const { value: lang } = event.currentTarget;
    this.setState(
      {
        lang,
        isMetric: true,
      },
      this.setBmi
    );
  };

  render() {
    const { isMetric, lang } = this.state;
    return (
      <div className={styles.bmi}>
        <h1 className={styles['bmi-title']}>{t[lang].bmiCalculator}</h1>
        <Input handleInputChange={this.handleChange} {...this.state} />
        <Output {...this.state} />
        <Settings
          isMetric={isMetric}
          lang={lang}
          handleClick={this.changeMetric}
          handleChangeLanguage={this.changeLanguage}
        />
      </div>
    );
  }
}

export default Bmi;
