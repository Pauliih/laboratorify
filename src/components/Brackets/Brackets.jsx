import React, { Component } from 'react';
import './styles.css';

class Brackets extends Component {
  render() {

    switch (this.props.name) {
      case 'yellow-paint2':
        return <img className="brackets" alt="brackets1" src={window.location.origin + '/brackets/brackets-01.png'} />
      case 'yellow-paint1':
        return <img className="brackets" alt="brackets2" src={window.location.origin + '/brackets/brackets-02.png'} />
      case 'yellow-paint':
        return <img className="brackets" alt="brackets3" src={window.location.origin + '/brackets/brackets-03.png'} />
      case 'green-paint2':
        return <img className="brackets" alt="brackets4" src={window.location.origin + '/brackets/brackets-04.png'} />
      case 'green-paint1':
        return <img className="brackets" alt="brackets5" src={window.location.origin + '/brackets/brackets-05.png'} />
      case 'green-paint':
        return <img className="brackets" alt="brackets6" src={window.location.origin + '/brackets/brackets-06.png'} />
      case 'magenta-paint2':
        return <img className="brackets" alt="brackets7" src={window.location.origin + '/brackets/brackets-07.png'} />
      case 'magenta-paint1':
        return <img className="brackets" alt="brackets8" src={window.location.origin + '/brackets/brackets-08.png'} />
      case 'magenta-paint':
        return <img className="brackets" alt="brackets9" src={window.location.origin + '/brackets/brackets-09.png'} />
      case 'white-paint':
        return <img className="brackets bracket-white" alt="brackets10" src={window.location.origin + '/brackets/brackets-10.png'} />
      default:
        break;
    }
  }
}

export default Brackets;