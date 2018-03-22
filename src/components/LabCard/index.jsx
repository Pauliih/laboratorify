import React, { Component } from 'react';
import './styles.css';
import example_img from './../../assets/img/example_img.png';

class LabCard extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={example_img} alt="example img"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
  }
}

export default LabCard;