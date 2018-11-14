import * as React from 'react';

import Bmi from './containers/Bmi/Bmi';
import styles from './App.css';

class App extends React.Component<{}> {
  render() {
    return (
      <main>
        <Bmi />
      </main>
    );
  }
}

export default App;
