import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

class LineChart extends Component {

    componentDidMount() {
        console.log(this.props.lineChartData)
    }
    render(){
        const options = {
            responsive : true,
            maintainAspectRatio : false,
            scales : 
             {
                xAxes : [{
                    gridLines : {
                        display : false,
                    }
                }],
                yAxes : [{
                    gridLines : {
                        drawBorder : false,
                    },
                    ticks : {
                        beginAtZero : true,
                        fontSize : 8,
                        fontColor : 'black',
                        padding : 10
                    }
                }]
            }
        }
        return(
            <div>
                <h3>Line Chart</h3>
                <Chart type = "line" data = {this.props.lineChartData !== undefined ? this.props.lineChartData : {}} width = "50%" options = {options} />
            </div>
        );
    }
}

export default LineChart;