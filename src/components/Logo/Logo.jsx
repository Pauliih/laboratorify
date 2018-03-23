import React, { Component } from 'react';
import './styles.css';

class Logo extends Component {
  render() {

    switch (this.props.name) {
      case 'with-phrase':
        return <img className="logo" alt="logotypo1" src={window.location.origin + '/logos/logo-01.png'} />    
      
      case 'without-phrase':
        return <img className="logo" alt="logotypo2" src={window.location.origin + '/logos/logo-02.png'} />
      
      case 'with-phrase-bk':
        return <img className="logo" alt="logotypo3" src={window.location.origin + '/logos/logo-03.png'} />

      case 'without-phrase-bk':
        return <img className="logo" alt="logotypo4" src={window.location.origin + '/logos/logo-04.png'} />

      default:
      break;
    }
  }
}

export default Logo;