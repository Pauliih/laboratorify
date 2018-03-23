import React, { Component } from 'react';
import './styles.css';

class SideBar extends Component {
  handleBtns = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    // const Ca = document.getElementById('btnCa');
    buttons.classList.remove('hidden');
    cards.classList.add('hidden');
  }
  handleCards = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    // const Ca = document.getElementById('btnCa');
    buttons.classList.add('hidden');
    cards.classList.remove('hidden');
  }
  // handleCa = (event) => {
  //   const Ar = document.getElementById('btnAr');
  //   const Te = document.getElementById('btnTe');
  //   const Ca = document.getElementById('btnCa');
  //   Te.classList.add('hidden');
  //   Ar.classList.add('hidden');
  //   Ca.classList.remove('hidden');
  // }
  render() {
    return (
      <div className="col-sm-2 verticalNav">
        <nav className="nav flex-column fixed-left col-sm-2">
          <a onClick={this.handleBtns} className="nav-link active">Buttons</a>
          <a onClick={this.handleCards} className="nav-link">Cards</a>
          <a className="nav-link" disabled>-</a>

          {/* <a onClick={this.handle} className="nav-link" href="#">Link</a>
          <a onClick={this.handle} className="nav-link disabled" href="#">Disabled</a> */}
        </nav>
      </div>
    );
  }
}

export default SideBar;