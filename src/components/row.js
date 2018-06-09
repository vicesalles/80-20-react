import React,{Component} from 'react';

class Row extends Component{
    render(){

        return(
            <tr className={this.props.isTwenty ? "tr is-selected" : "tr"}>
                <td>{this.props.position}</td>
                <td>{this.props.universe}</td>
                <td>{this.props.value}</td>
                <td>{this.props.cumulative}</td>
                <td>{this.props.percentage}</td>
                <td>{this.props.cumulativePercentage}</td>                
            </tr>
        )
    }
}

export default Row;