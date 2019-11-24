import React, { Component } from 'react';
import {Dropdown} from 'primereact/dropdown';

import './App.css';
import LineChart from './ChartComponents/LineChart';
import BarChart from './ChartComponents/BarChart';
var JSONData = require('./data.json')

class HomeComponent extends Component {

  state = {
    lineCharts:[],
    lineData:{},
    barCharts:[],
    barData:[],
    lineValue:"Select Series",
    barValue:"Select Series",
  }

  constructor(){
    super()
    this.lineChartDrpDown = this.lineChartDrpDown.bind(this);
    this.barChartDrpDown = this.barChartDrpDown.bind(this);
  }

  componentDidMount(){
    
    let lineChartsData =  JSONData.linecharts;
    let barChartsData = JSONData.barcharts;
    
    let showLineCharts = this.getData(lineChartsData);
    let showBarCharts = this.getData(barChartsData);


    this.setState({
      lineCharts: showLineCharts,
      barCharts:showBarCharts
    })
  }

getData(chartData){

  let finalData = [];
  let count = 1;  
  let colors = ["#42A5F5","#FF0000","#FFA500"];

  for (let [key, value] of Object.entries(chartData)) {
    let obj = {
      dropdownValue : `Series ${count}`,
      data: value,
      backgroundColor:colors[count-1]
    }
    finalData.push(obj);
    count++;
  }
  return finalData;
}

lineChartDrpDown(e){
    this.setState({ lineValue:e.value.dropdownValue});

    let barComp = document.getElementById("barDiv");
    barComp.style.display="none";
    let lineCmp = document.getElementById("lineDiv");
    lineCmp.style.display="block";

    this.setState({ barValue:"Select Series"});

    let data =  e.value.data;
    let lblsLength = data.length;
    let labels = []

    for (var i = 1; i <= lblsLength; i++) {
     
        labels.push(i);
     
    } 

    let dataObject = {
      labels: labels,
      datasets: [
          {
              label:e.value.dropdownValue,
              data: data,
              fill: false,
              borderColor: e.value.backgroundColor,
              showLines:false
          }
      ]   
  };

  this.setState({
    lineData:dataObject
  })
  }

  barChartDrpDown(e){
    this.setState({ barValue:e.value.dropdownValue});

    let lineCmp = document.getElementById("lineDiv");
    lineCmp.style.display="none";
    let barComp = document.getElementById("barDiv");
    barComp.style.display="block";

    this.setState({ lineValue:"Select Series"});

    let data =  e.value.data;
    let lblsLength = data.length;
    let labels = []

    for (var i = 1; i < lblsLength; i++) {
     
        labels.push(i);
      
    } 

    let dataObject = {
      labels: labels,
      datasets: [
        {
          label: e.value.dropdownValue,
          backgroundColor: e.value.backgroundColor,
          data: data
      },
      ]   
  };

  this.setState({
    barData:dataObject
  })
  }
  
  render(){
    const { lineCharts, lineData, barCharts, lineValue, barValue, barData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Visualization of Charts
        </header>
        <div className="chartComps">
          <label className="lblName">Line Chart</label>
          <Dropdown optionLabel="dropdownValue" options={lineCharts} onChange={(e) => this.lineChartDrpDown(e)} id="lineChart"
           placeholder={lineValue} value={this.state.lineValue}/>
           <label className="lblName">Bar Chart</label>
          <Dropdown optionLabel="dropdownValue" options={barCharts} onChange={(e) => this.barChartDrpDown(e)} id="barChart"
           placeholder={barValue} value={this.state.barValue}/>
        </div>
        <div id="lineDiv" className="lineChartComp">
              <LineChart lineChartData={lineData}/>
        </div>
        <div id="barDiv" className="barChartComp">
              <BarChart barChartData={barData}/>
        </div>
    </div>
    )
  }
}

export default HomeComponent;