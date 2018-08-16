import React, { Component } from 'react';

export class ShowDescription extends Component {
  render() {
    return (
        <div className="modal fade" id={"description" + this.props.index} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Opis</h3>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.description}</p>
                    </div>
                    <button className="btn btn-secondary" data-dismiss="modal">Exit</button>
                </div>
            </div>
        </div>
    );
  }
}
