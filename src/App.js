import React from 'react';

import Debounce from './components/Debounce';
import Throttle from './components/Throttle';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <Debounce />
      <Throttle />
    </div>
  );
}

export default App;
