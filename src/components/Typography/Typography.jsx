import React, { Component } from 'react';
import './Typography.css';

class Typography extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Typografías</h2>
          <p>Laboratoria cuenta con dos tipos de tipografías. La primera es Bitter Regular, que se utilizará para títulos y otros mensajes que merecen ser destacados como pueden ser sumillas o testimoniales.</p>
          <h2>LAB</h2>
          <p>Bitter Regular</p>
          <p>La otra tipografía complementaria de Laboratoria es Open Sans Regular, que se utilizará para números que sean titulares y cuerpos de texto.</p>
          <p>123</p>
          <p>Open Sans Regular</p>
        </div>
        <div>
          <h2>Títulos</h2>
          <p>Los títulos se deben realizar con la tipografía Bitter Regular</p>
          <p>Bitter</p>
          <p>Títulos</p>
          <p>Encabezados</p>
          <div>
            <p>font-size: 42px</p>
            <p>line-height: 44px</p>
            <p>font-weight: 500</p>
          </div>
        </div>
      </div>

    );
  }
}

export default Typography;