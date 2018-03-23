import React, { Component } from 'react';
// Components
// import LabButton from './components/LabButton';
// import LabCard from './components/LabCard';
// import LabFont from './components/LabFont';
import Main from './containers/Main';
import Header from './containers/Header.jsx';
import '../src/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header/>
        <div className="row">
          <Main className="col-sm-12" />
        </div>
      </div>
    );
  }
}

export default App;