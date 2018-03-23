import React, { Component } from 'react';
import './styles.css';
import front_card from './../../assets/img/front_card.jpeg';
import brackets from './../../assets/img/brackets/brackets-04.png';
import logo from './../../assets/img/logos/logo-04-04.png'

class LabCardUx extends Component {
  render() {
    return (
      <div className="card card-ux">
        <img className="card-img-top" src={front_card} alt="Front Card" />
        <div className="card-body">
          {/* Ocupar componente de titulo */}
          <h5 className="card-title">UX Design</h5>
          <div className="card-text row">
            <p className="col-6 text-left">Una UX Design tiene como objetivo esencial la investigación, comprender el comportamiento de los usuarios, además de 
            descubrir problemáticas para darle soluciones digitales. Diseñan experiencias digitales y funcionales de diversas páginas y aplicaciones, para ser probadas y</p>
            <p className="col-6 text-left">
              continuar mejorando la navegación del producto.
              Con esta modalidad las grandes empresas ahorran recursos, ya que con las metodologías ágiles se puede "probar antes de crear", descartando así ideas que 
              no funcionarán y potenciando otras.
            </p>
            {/* <p className="col-4 text-left">
              Con esta modalidad las grandes empresas ahorran recursos, ya que con las metodologías ágiles se puede "probar antes de crear", descartando así ideas que 
              no funcionarán y potenciando otras.
            </p> */}
          </div>
          <img className="card-bg-img  text-right" src={brackets} alt="brackets" />
          <img className="card-img-logo" src={logo} alt="Logo Lab" />
        </div>
      </div>
    )
  }
}

export default LabCardUx;