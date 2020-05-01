import React from 'react';

export default function Navbar()
{
    return (
      <nav className="navbar navbar-fixed-top navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="#">The Perk</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Learn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Create Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Visual</a>
          </li>
        </ul>
      </div>
    </nav>
    

    )
}