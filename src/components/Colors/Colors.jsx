import React, { Component } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css'

class Colors extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-left">Colores</h2>
            <p className="text-justify border-bottom">Evaluación de nuestra identidad visual, para que se comunique mejor todo lo que somos y queremos llegar a ser.</p>
          </div>
        </div>   
        <div className="row"> 
          <div className="col-sm-12">
            <div className="col-sm-5 title1">
              <h2 className="text-left">Jerarquía de Colores</h2>
              <p className="text-justify">La marca Laboratoria tiene un color principal que es el amarillo, pero además cuenta con otros colores de uso secundario como el magenta, menta y negro.</p>
            </div>
            <div className="col-sm-6 title1">
              <div className=" yellow">
              </div>
              <div className=" magenta">
              </div>
              <div className=" green">
              </div>
            </div>  
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-left">Paleta de Colores</h2>
            <div>
              <div className="line yellow2">Amarillo<p>#FFE521</p></div>
              <div className="line black2">Negro<p>#FFE521</p></div>
              <div className="line magenta2">Magenta<p>#FFE521</p></div>
              <div className="line green2">Verde<p>#FFE521</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;