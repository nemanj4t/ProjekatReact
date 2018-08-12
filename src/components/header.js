import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="">
                <img src="https://image.flaticon.com/icons/svg/54/54804.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                _TClock
            </a>
        </nav>
      </div>
    );
  }
}
