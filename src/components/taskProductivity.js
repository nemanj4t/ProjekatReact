import React, { Component } from 'react';
import { ShowDescription } from './showDescription';

export class TaskProductivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
        greenBackgroundColor : (this.toSeconds() < this.props.task.vreme) ? false : true,
    }
  }

  toSeconds() {
    return Number.parseInt(this.props.task.procenjenoVreme.slice(-2),10) + Number.parseInt(this.props.task.procenjenoVreme.slice(3, 5), 10)  * 60 + Number.parseInt(this.props.task.procenjenoVreme.slice(0, 2), 10) * 3600;
  }

  getSeconds(time) {
    return ('0' + (time % 60)).slice(-2);
  }

  getMinutes(time) {
      return ('0' + (Math.floor(time / 60) % 60)).slice(-2);
  }

  getHours(time) {
      return ('0' + (Math.floor(time / 3600))).slice(-2);
  }

  taskProductivityLogic() {
    return this.getHours(Math.abs(this.toSeconds() - this.props.task.vreme))+":"+this.getMinutes(Math.abs(this.toSeconds() - this.props.task.vreme))+":"+this.getSeconds(Math.abs(this.toSeconds() - this.props.task.vreme));
  }

  render() {
    return (
      <tr id={"row" + this.props.index}>
        <th scope="row">{this.props.index + 1}</th>
        <td>{this.props.task.ime}</td>
        <td>
          <button 
            className="btn btn-primary" 
            href="#aboutModal" 
            data-toggle="modal" 
            data-target={"#description" + this.props.index}
          >
            >
          </button>
          <ShowDescription 
            index={this.props.index} 
            description={this.props.task.opis}
          />
        </td>
        <td>{this.props.task.procenjenoVreme}</td>
        <td>
           {this.getHours(this.props.task.vreme)}:{this.getMinutes(this.props.task.vreme)}:{this.getSeconds(this.props.task.vreme)}
        </td>
        <td 
          id={"bilans" + this.props.index} 
          style={{backgroundColor: this.state.greenBackgroundColor ? 'green' : 'red', color: "white"}}
        >
          {this.state.greenBackgroundColor ? '-' : '+'} {this.taskProductivityLogic()}
        </td>
      </tr>
    );
  }
}