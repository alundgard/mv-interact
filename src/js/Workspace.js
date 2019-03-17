import React, { Component } from 'react';
import Artboard from './Artboard';
import '../css/Workspace.css';
import * as $ from 'jquery';

class Workspace extends Component {
    componentDidMount() {
      // $("role-legend").hover(() => {
      //   console.log($(this))
      //   $(this).style.stroke = "blue";
      // }, () => {})
      // document.getElementsByClassName("role-legend")[0].style.stroke = "blue";
      
      // $("g.mark-group > *").on('click', () => {
      //   console.log("Clicked!");
      // });

      // $("g.role-legend").each((e,i) => {
      //   i.style.pointerEvents = 'auto';
      // });

      $("g.role-legend-title").each((e,i) => {
        i.style.pointerEvents = 'auto';
      });

      $("g.mark-text.role-legend-title").on('click', (e) => {
        $("g.mark-text.role-legend-title").each((e,i) => {
          i.style.stroke = "red";
          i.style.fill = "red";
        });
      });

    }

    render() {
      return(
          <div className="Workspace">
          <Artboard {...this.props} number='0' />
          <Artboard {...this.props} number='1' />
          <Artboard {...this.props} number='2' />
          <Artboard {...this.props} number='3' />
          <Artboard {...this.props} number='4' />
          <Artboard {...this.props} number='5' />
          </div>
      )
    }
}
export default Workspace;
