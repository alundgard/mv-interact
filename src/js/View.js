import React, { Component } from 'react';
import '../css/View.css';
import vegaEmbed from 'vega-embed';
import * as vl from 'vega-lite';
import * as vega from 'vega';
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
      let opt = { "renderer": "svg" }; 
      let spec = Spec[this.state.number];
      let id = '#' + this.state.name;
      vegaEmbed(id, spec, opt);
      let vgSpec = vl.compile(spec).spec;
      let runtime = vega.parse(vgSpec);
      var view = new vega.View(runtime)
        .logLevel(vega.Warn) // set view logging level
        .initialize(document.querySelector(id)) // set parent DOM element
        .renderer('svg') // set render type (defaults to 'canvas')
        .hover() // enable hover event processing
        .run(); // update and render the view
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
