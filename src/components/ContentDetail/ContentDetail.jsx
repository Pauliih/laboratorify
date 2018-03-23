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
import Logo from '../Logo/Logo';
import Brackets from '../Brackets/Brackets';

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
        <div id="logo" className="hidden">
          <Logo name="with-phrase"/>
          <Logo name="without-phrase" />
          <Logo name="with-phrase-bk" />
          <Logo name="without-phrase-bk" />
        </div>
        <div id="brackets" className="hidden">
          <Brackets name="yellow-paint2" />
          <Brackets name="yellow-paint1" />
          <Brackets name="yellow-paint" />
          <Brackets name="green-paint2" />
          <Brackets name="green-paint1" />
          <Brackets name="green-paint" />
          <Brackets name="magenta-paint2" />
          <Brackets name="magenta-paint1" />
          <Brackets name="magenta-paint" />
          <Brackets name="white-paint" />
        </div>
      </div>
    );
  }
}

export default ContentDetail;
