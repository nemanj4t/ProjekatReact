import React, { Component } from 'react';
import { Task } from './task';

export class Tasks extends Component {
  render() {
    return (
      <div >
        <table className="table table-hover">
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Ime</th>
                    <th>Opis</th>
                    <th>Procenjeno vreme</th>
                    <th>Vreme</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                {this.props.tasks.map((task, i) => {
                  return (
                  <Task 
                    task={task}
                    index={i}
                    key={i}
                    delete={this.props.deleteTask}
                    findLastToEdit={this.props.findLastToEdit}
                  />);
                })}
            </tbody>
        </table>
      </div>
    );
  }
}