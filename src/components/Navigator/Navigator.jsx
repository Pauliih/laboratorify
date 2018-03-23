import React, { Component } from 'react';
import './styles.css';

class Navigator extends Component {
  handleContent = (event) => {
    const buttons = document.getElementById('buttons');
    const cards = document.getElementById('cards');
    const content = document.getElementById('content');
    const typography = document.getElementById('typography');

    typography.classList.add('hidden');
    content.classList.remove('hidden');
    buttons.classList.add('hidden');
    cards.classList.add('hidden');
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-lab navHorizontal">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">Laboratorify</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a onClick={this.handleContent} className="nav-link" href="#">Contenido <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Visuales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Componentes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recursos adicionales</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigator;