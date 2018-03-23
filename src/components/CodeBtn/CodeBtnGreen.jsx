import React, { Component } from 'react';

class CodeBtnGreen extends Component {
  render() {
    return (
      <figure>
        <pre>
          <code>
            <span>&lt;LabButtonGreen className="lab-lg"&gt;</span>
            <span>Large Button</span>
           <span>&lt;LabButtonGreen/&gt;</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>&lt;LabButtonGreen&gt;</span>
            <span>Default Button</span>
            <span>&lt;LabButtonGreen/&gt;</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>&lt;LabButtonGreen className="lab-sm"&gt;</span>
            <span>Small LabButtonGreen</span>
            <span>&lt;LabButtonGreen/&gt;</span>
          </code>
        </pre>
      </figure>
    );
  }
}

export default CodeBtnGreen;