import React, { Component } from 'react';
import { Stopwatch } from './stopwatch';
import { ShowDescription } from './showDescription';

export class Task extends Component {

  onHandlePausePlay() {
    this.props.editOnChangePausePlay(this.props.index)
    this.child.stopwatchLogic();
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
        <Stopwatch 
          stopwatchIncrement={this.props.stopwatchIncrement}
          task={this.props.task}
          vreme={this.props.task.vreme} 
          index={this.props.index}
          ref={(instance) => {this.child = instance}} 
        />
        <td>
          <button 
            className={this.props.task.btn} 
            onClick={() => this.onHandlePausePlay()}
          > 
            <img src={this.props.task.img} width="30" height="30" className="d-inline-block align-top" alt="" />
          </button>
        </td>
        <td>
          <button 
            className="btn btn-primary" 
            href="#aboutModal" data-toggle="modal" 
            data-target="#myModal" 
            onClick={() => this.props.findLastToEdit(this.props.index)}
          >
            <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/pencil-art-draw-design-sketch-stationary-tool-3b225aa02dd4e31d-512x512.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </button>
        </td>
        <td>
          <button 
            className="btn btn-danger" 
            onClick={() => {this.props.delete(this.props.index)}}
          >
            <img src="https://cdn4.iconfinder.com/data/icons/hand-drawn-ui/100/ikonka_002-512.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </button>
        </td>
      </tr>
    );
  }
}