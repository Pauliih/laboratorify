import React, { Component } from 'react';
import './styles.css';

class SideBar extends Component {
  handleBtns = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const colors = document.getElementById('colors');

    content.classList.add('hidden');
    buttons.classList.remove('hidden');
    cards.classList.add('hidden');
    typography.classList.add('hidden');
    colors.classList.add('hidden');
  }
  handleCards = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const colors = document.getElementById('colors');

    buttons.classList.add('hidden');
    content.classList.add('hidden');
    cards.classList.remove('hidden');
    typography.classList.add('hidden');
    colors.classList.add('hidden');
  }
  handleTypography = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const colors = document.getElementById('colors');

    buttons.classList.add('hidden');
    cards.classList.add('hidden');
    content.classList.add('hidden');
    typography.classList.remove('hidden');
    colors.classList.add('hidden');
  }
  handleColors = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const colors = document.getElementById('colors');

    buttons.classList.add('hidden');
    cards.classList.add('hidden');
    content.classList.add('hidden');
    typography.classList.add('hidden');
    colors.classList.remove('hidden');
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
          <a onClick={this.handleTypography} className="nav-link">Typography</a>
          <a onClick={this.handleColors} className="nav-link">Colors</a>
          <a className="nav-link" disabled>-</a>

          {/* <a onClick={this.handle} className="nav-link" href="#">Link</a>
          <a onClick={this.handle} className="nav-link disabled" href="#">Disabled</a> */}
        </nav>
      </div>
    );
  }
}

export default SideBar;