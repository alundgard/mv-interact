import React, { Component } from 'react';
import '../css/Artboard.css';
import vegaEmbed from 'vega-embed';

const cars = require('../data/cars.json');

class Artboard extends Component {
    constructor(props) {

      let number = 'vis' + Math.floor(Math.random() * 100);
      super(props);
      this.state = {
        number: number
      }
    }

    componentDidMount() {
      var opt = {
        "renderer": "svg"
      }
      var yourVlSpec = 
      {
        "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
        "description": "A scatterplot showing horsepower and miles per gallons.",
        "data": {"values": cars},
        "mark": "point",
        "encoding": {
          "x": {"field": "Horsepower", "type": "quantitative"},
          "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
          "color": {"field": "Origin", "type": "nominal"},
          "shape": {"field": "Origin", "type": "nominal"}
        }
      };
      
      let id = '#' + this.state.number;
      vegaEmbed(id, yourVlSpec, opt);
    }

    render() {
      return(
      <div className="Artboard">
        <div id={this.state.number}></div>
      </div>
      )
    }
}
export default Artboard;
