import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label for="nav-check">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </label>
      </div>
      <div className="nav-links">
        <Link to="/about">Über uns</Link>
        <Link to="/projects">Projekte</Link>
        <Link to="/support">Unterstützung</Link>
        <Link to="/links">Motivation</Link>
      </div>
    </div>
  );
}
