import React, { Component } from 'react';

import { Tasks } from '../components/tasks-list';
import { FormTask } from '../components/formTask';
import { EditFormTask } from '../components/editFormTask';


export class Main extends Component {
  render() {
    return (
      <div className="container">
        <hr />        
        <button className="btn btn-secondary col-md-12" data-toggle="collapse" data-target="#showAddTaskForm">Dodaj novi task</button>
        <div id="showAddTaskForm" className="collapse">
          <br />
          <FormTask addNewTask={this.props.addNewTask} />
        </div>

        
        <br />
        <EditFormTask 
          lastToEdit={this.props.lastToEdit} 
          task={this.props.tasks[this.props.lastToEdit]} 
          editTask={this.props.editTask}
          editOpis={this.props.editOpis}
          editProcenjenoVreme={this.props.editProcenjenoVreme}
          editIme={this.props.editIme}
          editOnChangeIme={this.props.editOnChangeIme}
          editOnChangeOpis={this.props.editOnChangeOpis}
          editOnChangeProcenjenoVreme={this.props.editOnChangeProcenjenoVreme}
        />
        <Tasks 
          tasks={this.props.tasks} 
          deleteTask={this.props.deleteTask}
          findLastToEdit={this.props.findLastToEdit}
        />
      </div>
    );
  }
}



