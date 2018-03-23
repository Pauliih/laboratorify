import React, { Component } from 'react';

import './App.css';
// Components
// import LabButton from './components/LabButton';
// import LabCard from './components/LabCard';
// import LabFont from './components/LabFont';
import Main from './containers/Main';
import Header from './containers/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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