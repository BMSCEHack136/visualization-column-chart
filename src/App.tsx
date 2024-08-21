import React from 'react';
import './App.css';
import { BaseChart } from './highcharts/base-chart';


function App() {

  const OPTIONS = {
    "chart": {
      "type": "column",
    },
    "legend": {
      "enabled": true,
      "floating": true,
      "symbolHeight": 0,
      "symbolWidth": 0,
      "useHTML": true
    },
    "plotOptions": {
      "series": {
        "pointPadding": 0,
        "groupPadding": 0,
        "borderWidth": 0,
        "cursor": "pointer",
        "point": {
          "events": {}
        }
      }
    },
    "series": [
      {
        "color": "rgba(114,90,237, 1)",
        "data": [
          {
            "name": "don:core:dvrv-us-1:devo/787:product/605",
            "y": 142
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/536",
            "y": 252
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/627",
            "y": 51
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/614",
            "y": 54
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/657",
            "y": 69
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:feature/1684",
            "y": 44
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:capability/634",
            "y": 55
          }
        ]}],
    
    "tooltip": {
      "shared": false,
      "padding": 0,
      "shadow": {
        "opacity": 0.1
      },
      "style": {
        "width": 200
      },
      "useHTML": true
    },
    "xAxis": [
      {
        CustomComponent:({tick}:{tick:any})=>{
          const value = tick?.axis?.names?.[tick.pos] ?? tick?.axis.categories?.[tick.pos] ?? tick?.pos;
          return  value
        },
        "labels": {
          "y": 20,
          "useHTML": true,
          formatter: function () {
            return '';
          },
        },
        "lineColor": "rgba(205,206,214, 1)",
        "tickLength": 0,
        "categories":[
          "don:core:dvrv-us-1:devo/787:product/605",
          "don:core:dvrv-us-1:devo/787:product/536",
          "don:core:dvrv-us-1:devo/787:product/627",
          "don:core:dvrv-us-1:devo/787:product/614",
          "don:core:dvrv-us-1:devo/787:product/657",
          "don:core:dvrv-us-1:devo/787:feature/1684",
          "don:core:dvrv-us-1:devo/787:capability/634",
        ]
        ,
        "type": "category"
      }
    ],
    "yAxis": [
      {
        CustomComponent:({tick}:{tick:any})=>{
          const value = tick?.axis?.names?.[tick.pos] ?? tick?.axis.categories?.[tick.pos] ?? tick?.pos;
          return  value
        },
        "allowDecimals": false,
        "gridLineColor": "rgba(205,206,214, 1)",
        "gridLineDashStyle": "Dot",
        "gridLineWidth": 1,
        "labels": {
          "x": 20,
          "useHTML": true,
          formatter: function () {
            return '';
          },
        },
        "tickAmount": 5,
        "title": {},
        "opposite": true,
        "type": "linear"
      }
    ]
  }


  return (
   <div className="flex flex-col">
       <BaseChart options={OPTIONS} />
   </div>
  );  
}

export default App;
