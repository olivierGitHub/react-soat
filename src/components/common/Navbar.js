import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';

function Navbar() {
  return (
      <nav className="navbar navbar-expand-sm navbar-color">
        <div className="container">
          <NavLink to="/" className="nav-link">
            <img className="soat-logo" src="soat-logo.png" />
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/presentation" className="nav-link" activeClassName="activeRoute">Présentons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/formation" className="nav-link" activeClassName="activeRoute">Formons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/partage" className="nav-link" activeClassName="activeRoute">Partageons</NavLink>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="rechercher" />
            <button className="btn btn-info" type="submit">Recherche</button>
          </form>
        </div>
      </nav>
    );
}

export default Navbar;
