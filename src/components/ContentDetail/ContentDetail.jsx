import React, { Component } from 'react';
//Components
import LabButton from "./../LabButton";
import LabCard from "../LabCard";
import './styles.css';

class ContentDetail extends Component {
  render() {
    return (
      <div className="content-detail col-sm-10">
        <LabButton className="lab-lg">Large Button</LabButton>
        <LabButton>Default Button</LabButton>
        <LabButton className="lab-sm">Small Button</LabButton>
        <LabCard />
      </div>
    );
  }
}

export default ContentDetail;
