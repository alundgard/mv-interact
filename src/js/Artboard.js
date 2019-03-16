import React, { Component } from 'react';
import '../css/Artboard.css';
import vegaEmbed from 'vega-embed';

class Artboard extends Component {
    constructor(props) {
      let number = 'vis' + Math.floor(Math.random() * 100);
      super(props);
      this.state = {
        number: number
      }
    }

    componentDidMount() {
      var yourVlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
        description: 'A simple bar chart with embedded data.',
        data: {
          values: [
            {a: 'A', b: 28},
            {a: 'B', b: 55},
            {a: 'C', b: 43},
            {a: 'D', b: 91},
            {a: 'E', b: 81},
            {a: 'F', b: 53},
            {a: 'G', b: 19},
            {a: 'H', b: 87},
            {a: 'I', b: 52}
          ]
        },
        mark: 'bar',
        encoding: {
          x: {field: 'a', type: 'ordinal'},
          y: {field: 'b', type: 'quantitative'}
        }
      };
      let id = '#' + this.state.number;
      vegaEmbed(id, yourVlSpec);
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
