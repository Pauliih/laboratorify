import React, { Component } from 'react';

class CodigoBTN extends Component {
  render() {
    return (
      <figure>
        <pre>
          <code>
            <span>&lt;LabButton className="lab-lg"&gt;</span>
            <span>Large Button</span>
           <span>&lt;LabButton/&gt;</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>&lt;LabButton&gt;</span>
            <span>Default Button</span>
            <span>&lt;LabButton/&gt;</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>&lt;LabButton className="lab-sm"&gt;</span>
            <span>Small Button</span>
            <span>&lt;LabButton/&gt;</span>
          </code>
        </pre>
      </figure>
    );
  }
}

export default CodigoBTN;