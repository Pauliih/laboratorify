import React, { Component } from 'react';
//Components
import LabButton from "./../LabButton";
import LabButtonGreen from "./../LabButtonGreen";
import LabButtonPink from "./../LabButtonPink";
import LabCard from "../LabCard";
import './styles.css';

class ContentDetail extends Component {
  render() {
    return (
      <div>
        <div className="content-detail col-sm-10">
          <LabButton className="lab-lg">Large Button</LabButton>
          <LabButton>Default Button</LabButton>
          <LabButton className="lab-sm">Small Button</LabButton>
        </div>
        <div className="content-detail col-sm-10">
          <LabButtonGreen className="lab-lg">Large Button</LabButtonGreen>
          <LabButtonGreen>Default Button</LabButtonGreen>
          <LabButtonGreen className="lab-sm">Small Button</LabButtonGreen>
        </div>
        <div className="content-detail col-sm-10">
          <LabButtonPink className="lab-lg">Large Button</LabButtonPink>
          <LabButtonPink>Default Button</LabButtonPink>
          <LabButtonPink className="lab-sm">Small Button</LabButtonPink>
          <LabCard />
        </div>
      </div>
    );
  }
}

export default ContentDetail;
