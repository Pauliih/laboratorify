import React, { Component } from 'react';

import './App.css';
// Components
// import LabButton from './components/LabButton';
// import LabCard from './components/LabCard';
// import LabFont from './components/LabFont';
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Laboratorify</h1>
        </header>
        <div className="container-fluid">
        <div className="App-intro row">
          <Main className="col-sm-12" />
        </div>
        </div>
      </div>
    );
  }
}

export default App;