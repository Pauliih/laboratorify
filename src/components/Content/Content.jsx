import React, { Component } from 'react';
import './styles.css';
import logoActual from './../../assets/img/logos/logo-02.png';

class Content extends Component {
  render() {
    return (
      <div className="content text-left">
        <p>Contenido>Contenido del producto</p>
        <br/>
        <h2 className="title">Contenido del producto</h2>
        <br/>
        <p className="textSize line">Evolución de nuestra identidad visual, para que comunique mejor todo lo que somos y queremos llegar a ser.</p>
        <br/>
        <p className="textSize">Nuestros estándares de contenido lo ayudarán a comprender cómo pensar estratégicamente para entregar un mejor producto. También te darán sugerencias claras y tácticas diseñadas para ayudarte a usar el lenguaje para crear mejores experiencias.</p>
        <br/>
        <div className="row justify-content-center">
          <div className="col-4">
            <img className="img-fluid" src={logoActual} alt="Logo antiguo" />
            <p className="text-center">Logo antigüo</p>
          </div>
          <div className="col-4">
            <img className="img-fluid" src={logoActual} alt="Logo actual" />
            <p className="text-center">Logo nuevo</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;