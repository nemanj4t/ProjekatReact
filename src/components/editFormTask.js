import React, { Component } from 'react';

export class EditFormTask extends Component { 
  getSeconds(str) {
    return Number.parseInt(str.slice(-2), 10);
  }

  getMinutes(str) {
    return Number.parseInt(str.slice(3,5), 10);
  }

  getHours(str) {
    console.log(Number.parseInt(str.slice(0,2), 10));
    return Number.parseInt(str.slice(0,2), 10);
  }
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Izmenite</h3>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="editIme"  
                  value={this.props.editIme} 
                  placeholder="Ime" 
                  onChange={(event) => this.props.editOnChangeIme(event)} 
                />
              </div>
              <div className="form-group">
                <label>Unesite procenjeno vreme završetka (hh:mm:ss):  </label>
                <div className="form-group container row">
                  <input 
                    type="number" 
                    id="editHours" 
                    value={this.props.editHours} 
                    min={0} 
                    className="form-control col-md-2" 
                    placeholder="hh"
                    onChange={(event) => this.props.editOnChangeHours(event)}
                  />
                  <input 
                    type="number" 
                    id="editMinutes" 
                    value={this.props.editMinutes} 
                    min={0} 
                    max={59} 
                    className="form-control col-md-2" 
                    placeholder="mm"
                    onChange={(event) => this.props.editOnChangeMinutes(event)}
                  />
                  <input 
                    type="number" 
                    id="editSeconds" 
                    value={this.props.editSeconds} 
                    min={0} 
                    max={59} 
                    className="form-control col-md-2" 
                    placeholder="ss"
                    onChange={(event) => this.props.editOnChangeSeconds(event)}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  type="text" 
                  className="form-control" 
                  id="editOpis" 
                  value={this.props.editOpis} 
                  placeholder="Opis" 
                  onChange={(event) => this.props.editOnChangeOpis(event)} 
                />
              </div>
              <div className="form-group">
                <button 
                  className="btn btn-primary" 
                  onClick={
                    () => { this.props.editTask(
                        {
                          ime:  document.getElementById("editIme").value,
                          opis: document.getElementById("editOpis").value,
                          procenjenoVreme: ('00'+ document.getElementById("editHours").value).slice(-2) + ':' + ('00'+ document.getElementById("editMinutes").value).slice(-2) + ':' + ('00' + document.getElementById("editSeconds").value).slice(-2),
                          vreme: this.props.editVreme,
                          paused: true,
                          btn: "btn btn-success",
                          img: "https://png.icons8.com/metro/1600/play.png",
                        },
                        this.props.lastToEdit
                      )
                    }
                  }
                  data-dismiss="modal"
                >
                  Izmeni
                </button>
                <span> </span>
                <button
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Otkaži
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}