import React, { Component } from 'react';
import './Typography.css';
import 'bootstrap/dist/css/bootstrap.css'

class Typography extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-left">Typografías</h2>
            <p className="text-justify">Laboratoria cuenta con dos tipos de tipografías. La primera es Bitter Regular, que se utilizará para títulos y otros mensajes que merecen ser destacados como pueden ser sumillas o testimoniales.</p>
            <div className="col-sm-3 lab">
              <h2 className="bitterRegular">LAB</h2>
              <p>Bitter Regular</p>
            </div>
            <p className="text-justify">La otra tipografía complementaria de Laboratoria es Open Sans Regular, que se utilizará para números que sean titulares y cuerpos de texto.</p>
            <div className="col-sm-3 lab">
              <p className="openRegular">123</p>
              <p>Open Sans Regular</p>
            </div>
          </div>
        <div classname="col-sm-12">
          <h2 className="text-left">Títulos</h2>
          <p className="text-justify">Los títulos se deben realizar con la tipografía Bitter Regular</p>
          <div className="col-sm-3">
            <p className="bitterRegular">Bitter</p>
            <p className="bitterRegular">Títulos</p>
          </div>  
          <p>Encabezados</p>
          <div className="list-group-item text-justify">
            <p>font-size: 42px</p>
            <p>line-height: 44px</p>
            <p>font-weight: 500</p>
          </div>
        </div>
        </div>
      </div>

    );
  }
}

export default Typography;