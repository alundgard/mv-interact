import React, { Component } from 'react';
import Artboard from './Artboard';
import '../css/Workspace.css';

class Workspace extends Component {
    render() {
      return(
          <div className="Workspace">
          <Artboard></Artboard>
          <Artboard></Artboard>
          <Artboard></Artboard>
          </div>
      )
    }
}
export default Workspace;
