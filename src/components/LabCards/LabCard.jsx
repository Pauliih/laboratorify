import React, { Component } from 'react';
import './styles.css';
import front_card from './../../assets/img/front_card.jpeg';
import brackets from './../../assets/img/brackets/brackets-07.png';
import logo from './../../assets/img/logos/logo-04-04.png'

class LabCard extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={front_card} alt="Front Card"/>
        <div className="card-body">
          {/* Ocupar componente de titulo */}
          <h5 className="card-title">Front-end Developer</h5>
          <div className="card-text row">
            <p className="col-4 text-left">Una front se preocupa de la visibilidad y la interacción que tiene una página o appcación web, </p>
            <p className="col-4 text-left">
              desde adentro. ¿Cómo? creando el código que los navegadores interpretan para mostrarlo visualmente.
            </p>
            <p className="col-4 text-left">
              Si no sabes anda de código, no te preocupes, en Laboratoria te lo enseñamos desde 0.
            </p>
          </div>
          <img className="card-bg-img  text-right" src={brackets} alt="brackets" />
          <img className="card-img-logo" src={logo} alt="Logo Lab" />
        </div>
      </div>
    )
  }
}

export default LabCard;