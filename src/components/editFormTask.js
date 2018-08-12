import React, { Component } from 'react';

export class EditFormTask extends Component {
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
                  id="editIme"  value={this.props.editIme} 
                  placeholder="Ime" 
                  onChange={(event) => this.props.editOnChangeIme(event)} 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="editProcenjenoVreme" 
                  value={this.props.editProcenjenoVreme} 
                  placeholder="Unesite procenjeno vreme završetka" 
                  onChange={(event) => this.props.editOnChangeProcenjenoVreme(event)} 
                />
              </div>
              <div className="form-group">
                <textarea 
                  type="text" 
                  className="form-control" 
                  id="editOpis" value={this.props.editOpis} 
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
                          procenjenoVreme: document.getElementById("editProcenjenoVreme").value
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