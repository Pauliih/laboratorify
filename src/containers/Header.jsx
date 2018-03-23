import React, { Component } from 'react';
import Navigator from './../components/Navigator/Navigator.jsx';

class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Navigator />
        </div>
      </div>
    );
  }
}

export default Main;