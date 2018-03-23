import React, { Component } from 'react';
//Components
import LabButton from "./../LabButton";
import LabButtonGreen from "./../LabButtonGreen";
import LabButtonMagenta from "./../LabButtonMagenta";
import LabCard from "../LabCard";
import Typography from '../Typography/Typography';
import CodigoBTN from './../CodigoBTN/CodigoBTN.jsx';
import CodigoBTNGreen from './../../components/CodigoBTN/CodigoBTNGreen.jsx';
import CodigoBTNMagneta from './../../components/CodigoBTN/CodigoBTNMagenta.jsx';
import './styles.css';
import Content from '../Content/Content';
import Colors from '../Colors/Colors';

class ContentDetail extends Component {
  render() {
    return (
      <div className="content-detail col-sm-10">
        <div id="content">
          <Content />
        </div>
        <div id="buttons" className="row hidden">
          <div className="col-12">
            <LabButton className="lab-lg">Large Button</LabButton>
            <LabButton>Default Button</LabButton>
            <LabButton className="lab-sm">Small Button</LabButton>
            <CodigoBTN/>
          </div>
          <div className="col-12">
            <LabButtonGreen className="lab-lg">Large Button</LabButtonGreen>
            <LabButtonGreen>Default Button</LabButtonGreen>
            <LabButtonGreen className="lab-sm">Small Button</LabButtonGreen>
            <CodigoBTNGreen/>
          </div>
          <div className="col-12">
            <LabButtonMagenta className="lab-lg">Large Button</LabButtonMagenta>
            <LabButtonMagenta>Default Button</LabButtonMagenta>
            <LabButtonMagenta className="lab-sm">Small Button</LabButtonMagenta>
            <CodigoBTNMagneta/>
          </div>
        </div>
        <div id="cards" className="hidden">
          <LabCard />
        </div>
        <div id="typography" className="hidden">
          <Typography />
        </div>
        <div id="colors" className="hidden">
          <Colors />
        </div>
      </div>
    );
  }
}

export default ContentDetail;
