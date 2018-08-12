import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Header } from './components/header';
import { Main } from './containers/main';
import { addNewTask, deleteTask, editTask, findLastToEdit, editOnChangeIme, editOnChangeProcenjenoVreme, editOnChangeOpis} from './actions/taskActions';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />       
        <Main 
          tasks={this.props.task.tasks}
          lastToEdit={this.props.task.lastToEdit}
          editIme={this.props.task.editIme}
          editOpis={this.props.task.editOpis}
          editProcenjenoVreme={this.props.task.editProcenjenoVreme}
          findLastToEdit={this.props.findLastToEdit}
          addNewTask={this.props.addNewTask}
          deleteTask={this.props.deleteTask}
          editTask={this.props.editTask}
          editOnChangeIme={this.props.editOnChangeIme}
          editOnChangeOpis={this.props.editOnChangeOpis}
          editOnChangeProcenjenoVreme={this.props.editOnChangeProcenjenoVreme}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (task) => {
      dispatch(addNewTask(task));
    },

    deleteTask: (index) => {
      dispatch(deleteTask(index));
    },

    editTask: (task, index) => {
      dispatch(editTask(task, index));
    },

    findLastToEdit: (index) => {
      dispatch(findLastToEdit(index))
    },

    editOnChangeIme: (event) => {
      dispatch(editOnChangeIme(event))
    },

    editOnChangeOpis: (event) => {
      dispatch(editOnChangeOpis(event))
    },

    editOnChangeProcenjenoVreme: (event) => {
      dispatch(editOnChangeProcenjenoVreme(event))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); 

