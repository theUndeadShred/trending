import React, { Component } from 'react';
import './App.scss';
import TrendsMatrix from './components/TrendsMatrix';
import data from './data/animals.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrendsMatrix data={data}/>
      </div>
    );
  }
}

export default App;
