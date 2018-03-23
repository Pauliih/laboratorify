import React, { Component } from 'react';
import './styles.css';

class SideBar extends Component {
  render() {
    return (
      <div className="col-sm-2 verticalNav">
        <nav className="nav flex-column  fixed-left nav-sidebar">
          <a className="nav-link active" href="#">Buttons</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link disabled" href="#">Disabled</a>
        </nav>
      </div>
    );
  }
}

export default SideBar;