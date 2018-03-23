import React, { Component } from 'react';
//Components
import ContentDetail from "./../components/ContentDetail/ContentDetail";
import SideBar from '../components/SideBar/SideBar';

class Main extends Component {
  render() {
    return (
      <div className="main col-12">
        <div className="row">
          <SideBar />
          <ContentDetail />
        </div>
      </div>
    );
  }
}

export default Main;