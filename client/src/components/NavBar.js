import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <header class="header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <Link to="/about">Über uns</Link>
          </li>
          <li>
            <Link to="/projects">Projekte</Link>
          </li>
          <li>
            <Link to="/history">Historie</Link>
          </li>
          <li>
            <Link to="/support">Unterstützung</Link>
          </li>
          <li>
            {' '}
            <Link to="/links">Wissenswertes</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
