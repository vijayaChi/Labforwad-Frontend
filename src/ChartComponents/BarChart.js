import React, {Component} from 'react';
import { Chart } from 'primereact/chart';

class BarChart extends Component {
    render(){
        const options = {
            responsive : true,
            maintainAspectRatio : false,
            scales : {
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
                        maxTicksLimit : 1,
                        padding : 10
                    }
                }]
            }
        }
        return(<div>
            <h3>Bar Chart</h3>
            <Chart  type = "bar" data = {this.props.barChartData !== undefined ? this.props.barChartData : {}} width = "50%" options = {options}/>
        </div>);
    }
}

export default BarChart;