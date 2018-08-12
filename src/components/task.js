import React, { Component } from 'react';
import { Stopwatch } from './stopwatch';
export class Task extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.broj + 1}</th>
        <td>{this.props.task.ime}</td>
        <td>{this.props.task.opis}</td>
        <td>{this.props.task.procenjenoVreme}</td>
        <td><Stopwatch /></td>
        <td>
          <button className="btn btn-warning"> 
            <img src="https://png.icons8.com/metro/1600/pause.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </button>
        </td>
        <td>
          <button className="btn btn-primary" href="#aboutModal" data-toggle="modal" data-target="#myModal" onClick={() => this.props.findLastToEdit(this.props.broj)}>
            <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/pencil-art-draw-design-sketch-stationary-tool-3b225aa02dd4e31d-512x512.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => this.props.delete(this.props.broj)}>
            <img src="https://cdn4.iconfinder.com/data/icons/hand-drawn-ui/100/ikonka_002-512.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </button>
        </td>
      </tr>
    );
  }
}