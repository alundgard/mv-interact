import React, { Component } from 'react';
import Artboard from './Artboard';
import '../css/Workspace.css';

class Workspace extends Component {
    render() {
      return(
          <div className="Workspace">
          <Artboard {...this.props} name='1' />
          <Artboard {...this.props} name='2' />
          <Artboard {...this.props} name='3' />
          </div>
      )
    }
}
export default Workspace;
