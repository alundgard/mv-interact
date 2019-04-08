import React, { Component } from 'react';
import View from './View';
import '../css/Workspace.css';
import * as $ from 'jquery';

class Workspace extends Component {
    componentDidMount() {

      $("g.role-legend-title").each((e,i) => {
        i.style.pointerEvents = 'auto';
      });

      $("g.mark-text.role-legend-title").on('click', (e) => {
        $("g.mark-text.role-legend-title").each((e,i) => {
          i.style.stroke = "green";
          i.style.fill = "green";
        });
      });

      $(".vis1").hide();
      $(".vis2").hide();

      $("#clickRight").click(() => {
        if (window.confirm("Facet Origin horizontally?")) { 
          $(".vis0").hide();
          $(".vis2").animate({width:'toggle'},500);
          $("#clickRight").hide();
          $("#clickBottom").hide();

          $("g.mark-text.role-legend-title").each((e,i) => {
            i.style.stroke = "black";
            i.style.fill = "black";
          });
        }
      });

      $("#clickBottom").click(() => {
        if (window.confirm("Facet Origin vertically?")) { 
          $(".vis0").hide();
          $(".vis1").animate({height:'toggle'},500);
          $("#clickRight").hide();
          $("#clickBottom").hide();

          $("g.mark-text.role-legend-title").each((e,i) => {
            i.style.stroke = "black";
            i.style.fill = "black";
          });  
        }
      });

      $("#reset").click(() => {
        $(".vis0").show();
        $(".vis1").hide();
        $(".vis2").hide();
        $("#clickRight").show();
        $("#clickBottom").show();

        $("g.mark-text.role-legend-title").each((e,i) => {
          i.style.stroke = "black";
          i.style.fill = "black";
        });
      });

    }

    render() {
      return(
          <div className="Workspace">
            <button id="reset">Reset</button>
            <div id="clickRight"></div>
            <div id="clickBottom"></div>
            <View {...this.props} number='0' />
            <View {...this.props} number='1' />
            <View {...this.props} number='2' />
          </div>
      )
    }
}
export default Workspace;
