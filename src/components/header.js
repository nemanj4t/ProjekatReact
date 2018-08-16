import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="https://image.flaticon.com/icons/svg/54/54804.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                _TClock
            </Link>
            <Link to="/"><img src="https://image.flaticon.com/icons/svg/23/23665.svg" width="30" height="30" className="d-inline-block align-top" alt="Home"/></Link>
            <Link className="btn btn-primary" to="/productivity">Produktivnost</Link>
        </nav>
      </div>
    );
  }
}
