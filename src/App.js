import React, { Component } from 'react';
import './App.css';
// Components
import LabButton from './components/LabButton';
// import LabFont from './components/LabFont';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Laboratorify</h1>
        </header>
        <p className="App-intro">
          <LabButton className="lab-lg">Large Button</LabButton>
          <LabButton>Default Button</LabButton>
          <LabButton className="lab-sm">Small Button</LabButton>
        </p>
      </div>
    );
  }
}

export default App;