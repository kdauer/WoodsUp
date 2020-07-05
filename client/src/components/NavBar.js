import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <div className="ham">
          <label htmlFor="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div className="menu">
            <ul>
              <li>
                {' '}
                <Link to="/about">Über uns</Link>
              </li>
              <li className="dropdown">
                {' '}
                <Link to="/projects">Projekte</Link>
              </li>
              <li>
                {' '}
                <Link to="/history">Historie</Link>
              </li>
              <li>
                {' '}
                <Link to="/support">Unterstützung</Link>
              </li>
              <li>
                {' '}
                <Link to="/links">Wissenswertes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
