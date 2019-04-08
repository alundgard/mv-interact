import React, { Component } from 'react';
import '../css/View.css';
import vegaEmbed from 'vega-embed';
import Spec from '../data/spec.js';

class View extends Component {
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
      let classname = "View " + this.state.name;
      return(
      <div className={classname}>
        <div id={this.state.name}></div>
        {/* <svg class="box"></svg> */}
      </div>
      )
    }
}
export default View;
