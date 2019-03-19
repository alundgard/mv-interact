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
      })

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
      })

    }

    render() {
      return(
          <div className="Workspace">
          <div id="clickRight"></div>
          <div id="clickBottom"></div>
          <Artboard {...this.props} number='0' />
          <Artboard {...this.props} number='1' />
          <Artboard {...this.props} number='2' />
          </div>
      )
    }
}
export default Workspace;
