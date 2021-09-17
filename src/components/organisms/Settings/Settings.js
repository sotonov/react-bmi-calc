import * as React from 'react';

import styles from './Settings.css';
import Button from '../../atoms/Button/Button';
import LanguageDropdown from '../../molecules/LanguageDropdown/LanguageDropdown';
import t from '../../../constants/translations';
import * as cst from '../../../constants/constants';

type Props = {
  lang: string,
  isMetric: boolean,
  handleClick: (event: SyntheticMouseEvent<HTMLButtonElement>) => void,
  handleChangeLanguage: (event: SyntheticInputEvent<HTMLSelectElement>) => void,
};

const Settings = ({
  lang,
  isMetric,
  handleClick,
  handleChangeLanguage,
}: Props) => {
  const buttonText = isMetric
    ? t[lang].changeToImperial
    : t[lang].changeToMetric;
  return (
    <div className={styles.settings}>
      <LanguageDropdown lang={lang} handleChange={handleChangeLanguage} />
      {lang === cst.EN ? (
        <Button content={buttonText} handleClick={handleClick} />
      ) : null}
    </div>
  );
};

export default Settings;
