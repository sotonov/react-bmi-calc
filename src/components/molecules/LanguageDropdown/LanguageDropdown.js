import * as React from 'react';

import styles from './LanguageDropdown.css';
import * as cst from '../../../constants/constants';

type Props = {
  lang: string,
  handleChange: (event: SyntheticInputEvent<HTMLSelectElement>) => void,
};

const LanguageDropdown = ({ lang, handleChange }: Props) => {
  return (
    <>
      <select
        name="lang"
        id="language-select"
        defaultValue={lang}
        onChange={handleChange}
        className={styles.select}
      >
        {[cst.EN, cst.FR, cst.ES, cst.RS, cst.BG].map(language => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageDropdown;
