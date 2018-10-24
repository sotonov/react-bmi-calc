import React, { Component } from 'react';

import Bmi from './containers/Bmi/Bmi';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Bmi />
      </main>
    );
  }
}

export default App;
