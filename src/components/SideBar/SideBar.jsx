import React, { Component } from 'react';
import './styles.css';

class SideBar extends Component {
  handleBtns = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const colors = document.getElementById('colors');
    const logo = document.getElementById('logo');
    const brackets = document.getElementById('brackets');

    brackets.classList.add('hidden');
    logo.classList.add('hidden');
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
    const logo = document.getElementById('logo');
    const brackets = document.getElementById('brackets');

    brackets.classList.add('hidden');
    logo.classList.add('hidden');
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
    const logo = document.getElementById('logo');
    const brackets = document.getElementById('brackets');

    brackets.classList.add('hidden');
    logo.classList.add('hidden');
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
    const logo = document.getElementById('logo');
    const brackets = document.getElementById('brackets');

    brackets.classList.add('hidden');
    logo.classList.add('hidden');
    buttons.classList.add('hidden');
    cards.classList.add('hidden');
    content.classList.add('hidden');
    typography.classList.add('hidden');
    colors.classList.remove('hidden');    
  }

  handleLog = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const colors = document.getElementById('colors');
    const logo = document.getElementById('logo');
    const brackets = document.getElementById('brackets');

    brackets.classList.add('hidden');
    logo.classList.remove('hidden');
    buttons.classList.add('hidden');
    cards.classList.add('hidden');
    content.classList.add('hidden');
    typography.classList.add('hidden');
    colors.classList.add('hidden');    
  }
  handleBra = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const typography = document.getElementById('typography');
    const content = document.getElementById('content');
    const logo = document.getElementById('logo');
    const brackets = document.getElementById('brackets');

    brackets.classList.remove('hidden');
    logo.classList.add('hidden');
    buttons.classList.add('hidden');
    cards.classList.add('hidden');
    content.classList.add('hidden');
    typography.classList.add('hidden');
  }

  render() {
    return (
      <div className="col-sm-2 verticalNav">
        <nav className="nav flex-column fixed-left col-sm-2">
          <a onClick={this.handleBtns} className="nav-link active">Botones</a>
          <a onClick={this.handleCards} className="nav-link">Tarjetas</a>
          <a onClick={this.handleTypography} className="nav-link">Tipografía</a>
          <a onClick={this.handleColors} className="nav-link">Colores</a>
          <a onClick={this.handleLog} className="nav-link">Logos</a>
          <a onClick={this.handleBra} className="nav-link">Brackets</a>
          <a className="nav-link x">-</a>
        </nav>
      </div>
    );
  }
}

export default SideBar;