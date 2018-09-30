import React, { Component } from 'react';
import { TaskProductivity } from './taskProductivity';

export class Productivity extends Component {
  render() {
    return (
        <div className="container">
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Ime</th>
                        <th>Opis</th>
                        <th>Procenjeno vreme</th>
                        <th>Vreme</th>
                        <th></th>
                    </tr>
                    {this.props.tasks.map((task, i) => {
                    return (
                        <TaskProductivity
                            task={task}
                            index={i}
                            key={i}
                        />);
                    })}
                </tbody>
            </table>
        </div>
    );
  }
}


