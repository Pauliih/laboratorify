import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class LabButtonPink extends Component {
  render() {
    var laboratorify = {};

    switch (this.props.className) {
      case 'lab-lg':
        laboratorify = {
          cursor: 'pointer',
          backgroundColor: '#FF009E',
          borderColor: '#FF009E',
          fontFamily: 'Open Sans',
          color: '#000',
          display: 'inline-block',
          weight: 800,
          textAlign: 'center',
          verticalAlign: 'middle',
          padding: '0.5rem 1rem',
          fontSize:'1.25rem',
          lineHeight: 1.5,
          borderRadius: '0.3rem'
        }
        break;
      case 'lab-sm':
        laboratorify = {
          cursor: 'pointer',
          backgroundColor: '#FF009E',
          borderColor: '#FF009E',
          fontFamily: 'Open Sans',
          color: '#000',
          display: 'inline-block',
          weight: 800,
          textAlign: 'center',
          verticalAlign: 'middle',
          padding: '0.25rem 0.5rem',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          borderRadius: '0.2rem'
        }
        break;
      default:
        laboratorify = {
          cursor: 'pointer',
          backgroundColor: '#FF009E',
          borderColor: '#FF009E',
          fontFamily: 'Open Sans',
          color: '#000',
          display: 'inline-block',
          weight: 800,
          textAlign: 'center',
          verticalAlign: 'middle',
          padding: '0.375rem 0.75rem',
          fontSize: '1rem',
          lineHeight: 1.5,
          borderRadius: '0.25rem'
        }
        break;
    }

    // Proptypes
    LabButtonPink.propTypes = {
      laboratorify: PropTypes.shape({
        cursor: PropTypes.string,
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
        fontFamily: PropTypes.string,
        color: PropTypes.string,
        display: PropTypes.string,
        weight: PropTypes.number,
        textAlign: PropTypes.string,
        verticalAlign: PropTypes.string,
        padding: PropTypes.string,
        fontSize: PropTypes.string,
        lineHeight: PropTypes.number,
        borderRadius: PropTypes.string
      })
    };

    return (
      <button style={laboratorify}>
        {this.props.children}
      </button>
    );
  }
}

export default LabButtonPink;