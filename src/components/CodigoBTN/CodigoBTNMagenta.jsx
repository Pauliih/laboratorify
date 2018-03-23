import React, { Component } from 'react';

class CodigoBTNMagneta extends Component {
  render() {
    return (
      <figure>
        <pre>
          <code>
            <span>&lt;LabButtonMagenta className="lab-lg"&gt;</span>
            <span>Large Button</span>
           <span>&lt;LabButtonMagenta/&gt;</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>&lt;LabButtonMagenta&gt;</span>
            <span>Default Button</span>
            <span>&lt;LabButtonMagenta/&gt;</span>
          </code>
        </pre>
        <pre>
          <code>
            <span>&lt;LabButtonMagenta className="lab-sm"&gt;</span>
            <span>Small Button</span>
            <span>&lt;LabButtonMagenta/&gt;</span>
          </code>
        </pre>
      </figure>
    );
  }
}

export default CodigoBTNMagneta;