import React, { Component } from 'react';
import '../css/Artboard.css';
import vegaEmbed from 'vega-embed';
import Spec from '../data/spec.js';

class Artboard extends Component {
    constructor(props) {
      let number = props.number;
      let name = 'vis' + number;
      super(props);
      this.state = {
        number: number,
        name: name
      }
    }

    componentDidMount() {
      var opt = { "renderer": "svg" }; 
      var spec = Spec[this.state.number];
      let id = '#' + this.state.name;
      vegaEmbed(id, spec, opt);
    }

    render() {
      return(
      <div className="Artboard">
        <div id={this.state.name}></div>
      </div>
      )
    }
}
export default Artboard;
