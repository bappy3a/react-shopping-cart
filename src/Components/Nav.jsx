import React from 'react'
import logo from '../logo.svg';

export default function Nav(props) {
  return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" />
                Bootstrap
            </a>
            <dev class="d-flex">
                <button class="btn btn-outline-success" type="button">{props.count}</button>
            </dev>
        </nav>
    )
}
