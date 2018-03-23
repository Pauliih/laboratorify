import React, { Component } from 'react';
//Components
import LabButton from "./../Buttons/LabButton";
import LabButtonGreen from "./../Buttons/LabButtonGreen";
import LabButtonMagenta from "./../Buttons/LabButtonMagenta";
import LabCard from "../LabCards/LabCard";
import Typography from '../Typography/Typography';
import CodeBtn from './../CodeBtn/CodeBtn.jsx';
import CodeBtnGreen from './../../components/CodeBtn/CodeBtnGreen.jsx';
import CodeBtnMagneta from './../../components/CodeBtn/CodeBtnMagenta.jsx';
import Content from '../Content/Content';
import Colors from '../Colors/Colors';
import LabCardUx from '../LabCards/LabCardUx';
import './styles.css';

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
            <CodeBtn/>
          </div>
          <div className="col-12">
            <LabButtonGreen className="lab-lg">Large Button</LabButtonGreen>
            <LabButtonGreen>Default Button</LabButtonGreen>
            <LabButtonGreen className="lab-sm">Small Button</LabButtonGreen>
            <CodeBtnGreen/>
          </div>
          <div className="col-12">
            <LabButtonMagenta className="lab-lg">Large Button</LabButtonMagenta>
            <LabButtonMagenta>Default Button</LabButtonMagenta>
            <LabButtonMagenta className="lab-sm">Small Button</LabButtonMagenta>
            <CodeBtnMagneta/>
          </div>
        </div>
        <div id="cards" className="hidden">
          <LabCard />
          <LabCardUx />
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
