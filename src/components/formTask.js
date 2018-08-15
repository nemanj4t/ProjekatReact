import React, { Component } from 'react';

export class FormTask extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" className="form-control" id="ime" placeholder="Ime" />
        </div>
        <label>Unesite procenjeno vreme završetka (hh:mm:ss):  </label>
        <div className="form-group container row">
          <input type="number" id="hours" min={0} className="form-control col-md-2" placeholder="hh"/>
          <input type="number" id="minutes" min={0} max={59} className="form-control col-md-2" placeholder="mm"/>
          <input type="number" id="seconds" min={0} max={59} className="form-control col-md-2" placeholder="ss"/>
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
                    procenjenoVreme: ('00'+ document.getElementById("hours").value).slice(-2) + ':' + ('00'+ document.getElementById("minutes").value).slice(-2) + ':' + ('00' + document.getElementById("seconds").value).slice(-2)
                  }
                )
                document.getElementById("ime").value = "";
                document.getElementById("opis").value = "";
                document.getElementById("hours").value = "";
                document.getElementById("minutes").value = "";
                document.getElementById("seconds").value = "";
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
