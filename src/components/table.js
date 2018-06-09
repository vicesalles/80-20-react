import React,{Component} from 'react';
import * as utils from '../utils';
import Row from './row';

class Table extends Component{
    populate = () =>{
        
        const data = this.props.data;
        const universe = this.props.universe;
        const field = this.props.field;
        const total = utils.getTotal(data,field);
        const twenty = utils.getTwenty(data);
     
        const population = data.map((o,i)=>{
           let isTwenty = i === twenty;
           return  <Row
            key={o[universe]+""+i}
            isTwenty={isTwenty}
            position={i+1}
            universe={o[universe]}
            value={o[field]}
            cumulative={utils.cumulative(i,data,field)}
            percentage={`${utils.getPercentage(o[field],total)}%`}
            cumulativePercentage={`${utils.cumulativePercentage(i,data,field,total)}%`}
            />
         

        });

        return population;

    }
    render(){
       
        return(
            <table className="table">
            <thead className="thead">             
                <tr>
                    <th>Position</th>
                    <th>{this.props.universe}</th>
                    <th>{this.props.field}</th>
                    <th>Cumulate</th>
                    <th>Percentage</th>
                    <th>Cumulative %</th>
                </tr>
            </thead>
            <tbody className="tbody">
                {this.populate()}
            </tbody>
            </table>
        )
    }
}

export default Table;