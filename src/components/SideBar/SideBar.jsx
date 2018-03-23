import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="col-sm-3 verticalNav">
        <nav className="nav flex-column">
        <a className="nav-link active" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" href="#">Disabled</a>
      </nav>
      </div>
    );
  }
}

export default SideBar;