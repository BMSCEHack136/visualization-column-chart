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
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/599",
            "y": 46
          },
          {
            "name": "-",
            "x": "-",
            "y": 383
          },
          {
            "name": "dashboard__others",
            "y": 1643
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/700",
            "y": 130
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/701",
            "y": 120
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/702",
            "y": 110
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/703",
            "y": 100
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/704",
            "y": 90
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/705",
            "y": 80
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/706",
            "y": 70
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/707",
            "y": 60
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/708",
            "y": 50
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/709",
            "y": 40
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/710",
            "y": 30
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/711",
            "y": 20
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/712",
            "y": 10
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/713",
            "y": 5
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/714",
            "y": 15
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/715",
            "y": 25
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/716",
            "y": 35
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/717",
            "y": 45
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/718",
            "y": 55
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/719",
            "y": 65
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/720",
            "y": 75
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/721",
            "y": 85
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/722",
            "y": 95
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/723",
            "y": 105
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/724",
            "y": 115
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/725",
            "y": 125
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/726",
            "y": 135
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/727",
            "y": 145
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/728",
            "y": 155
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/729",
            "y": 165
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/730",
            "y": 175
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/731",
            "y": 1385
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/732",
            "y": 195
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/733",
            "y": 205
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/734",
            "y": 215
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/735",
            "y": 225
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/736",
            "y": 235
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/737",
            "y": 245
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/738",
            "y": 255
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/739",
            "y": 2365
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/740",
            "y": 275
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/741",
            "y": 285
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/742",
            "y": 295
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/743",
            "y": 305
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/744",
            "y": 315
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/745",
            "y": 325
          },
          {
            "name": "don:core:dvrv-us-1:devo/787:product/746",
            "y": 335
          },
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
        scrollbar: {
          enabled: true,
        },
        min:0,
        max:10,
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
          "don:core:dvrv-us-1:devo/787:product/599",
          "-",
          "dashboard__others",
          "don:core:dvrv-us-1:devo/787:product/700",
          "don:core:dvrv-us-1:devo/787:product/701",
          "don:core:dvrv-us-1:devo/787:product/702",
          "don:core:dvrv-us-1:devo/787:product/703",
          "don:core:dvrv-us-1:devo/787:product/704",
          "don:core:dvrv-us-1:devo/787:product/705",
          "don:core:dvrv-us-1:devo/787:product/706",
          "don:core:dvrv-us-1:devo/787:product/707",
          "don:core:dvrv-us-1:devo/787:product/708",
          "don:core:dvrv-us-1:devo/787:product/709",
          "don:core:dvrv-us-1:devo/787:product/710",
          "don:core:dvrv-us-1:devo/787:product/711",
          "don:core:dvrv-us-1:devo/787:product/712",
          "don:core:dvrv-us-1:devo/787:product/713",
          "don:core:dvrv-us-1:devo/787:product/714",
          "don:core:dvrv-us-1:devo/787:product/715",
          "don:core:dvrv-us-1:devo/787:product/716",
          "don:core:dvrv-us-1:devo/787:product/717",
          "don:core:dvrv-us-1:devo/787:product/718",
          "don:core:dvrv-us-1:devo/787:product/719",
          "don:core:dvrv-us-1:devo/787:product/720",
          "don:core:dvrv-us-1:devo/787:product/721",
          "don:core:dvrv-us-1:devo/787:product/722",
          "don:core:dvrv-us-1:devo/787:product/723",
          "don:core:dvrv-us-1:devo/787:product/724",
          "don:core:dvrv-us-1:devo/787:product/725",
          "don:core:dvrv-us-1:devo/787:product/726",
          "don:core:dvrv-us-1:devo/787:product/727",
          "don:core:dvrv-us-1:devo/787:product/728",
          "don:core:dvrv-us-1:devo/787:product/729",
          "don:core:dvrv-us-1:devo/787:product/730",
          "don:core:dvrv-us-1:devo/787:product/731",
          "don:core:dvrv-us-1:devo/787:product/732",
          "don:core:dvrv-us-1:devo/787:product/733",
          "don:core:dvrv-us-1:devo/787:product/734",
          "don:core:dvrv-us-1:devo/787:product/735",
          "don:core:dvrv-us-1:devo/787:product/736",
          "don:core:dvrv-us-1:devo/787:product/737",
          "don:core:dvrv-us-1:devo/787:product/738",
          "don:core:dvrv-us-1:devo/787:product/739",
          "don:core:dvrv-us-1:devo/787:product/740",
          "don:core:dvrv-us-1:devo/787:product/741",
          "don:core:dvrv-us-1:devo/787:product/742",
          "don:core:dvrv-us-1:devo/787:product/743",
          "don:core:dvrv-us-1:devo/787:product/744",
          "don:core:dvrv-us-1:devo/787:product/745",
          "don:core:dvrv-us-1:devo/787:product/746"
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
