import React, { Component } from 'react';

export class FormTask extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" className="form-control" id="ime" placeholder="Ime" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="procenjenoVreme" placeholder="Unesite procenjeno vreme završetka" />
        </div>
        <div className="form-group">
          <textarea type="text" className="form-control" id="opis" placeholder="Opis" />
        </div>
        <div className="form-group">
          <button 
            className="btn btn-primary" 
            onClick={
              () => { this.props.addNewTask(
                  {
                    ime:  document.getElementById("ime").value,
                    opis: document.getElementById("opis").value,
                    procenjenoVreme: document.getElementById("procenjenoVreme").value
                  }
                )
                document.getElementById("ime").value = "";
                document.getElementById("opis").value = "";
                document.getElementById("procenjenoVreme").value = "";
              }
            }
          >
            Dodaj
          </button>
        </div>
      </div>
    );
  }
}
