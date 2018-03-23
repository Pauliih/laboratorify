import React, { Component } from 'react';
import './styles.css';

class Documentation extends Component {
  render() {
    return (
      <div className="text-left">
        <h2>Documentation</h2>
        <h3>Cómo utilizar Laboratorify!</h3>
        <p>es muy simple!</p>
        <p>Simplifica tu gestión en unos simples pasos.</p>

        <ul>Componentes</ul>
        <li> Primero debes posicionarte en la carpeta de tu proyecto, abrir una terminal y escribir el siquiente comando: </li>
        <p className="text-center"><code>npm install --save laboritorify</code></p>
        <li> Debes seleccionar dentro del Menú la categoría del componente que desea usar.</li>
        <li> Luego visualizar lo que te gustaría ver reflejado en web de laboratoria.</li>
        <li> Importar el componente en el archivo donde lo necesitas, de la siguiente manera:</li>
        <p className="text-center"><code>import ElComponente from 'laboritorify';</code></p>

        <li> Por último, copiar el código que figura debajo del componente, y copiar en tu editor de texto. </li>

        <h4>!BAM! tendrás el nuevo estilo de laboratoria en tu web.</h4>
        <h3>Cards</h3>
        <p>Las tarjetas que hemos diseñado para ti, ya viene con un mensaje potente con el lenguaje que queremos transmitir de manera global, generar una explicación simple de los conceptos clave de laboratoria. </p>

        <li>1- Debes seleccionar dentro del Menú la categoría Cards con el concepto que desea transmitir.</li>
        <li>2- Copiar el código que figura al lado derecho de la imagen. </li>
        <li>3- Copiar en tu editor de texto. </li>
        <p>¡BAM! ya tienes un mensaje visual que transmitir. </p>
      </div>
    )
  }
}

export default Documentation;