import React from 'react';

export default function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </label>
      </div>
      <div className="nav-links">
        <a href="/about">Über Uns</a>
        <a href="/projects">Projekte</a>
        <a href="/support">Unterstützung</a>
        <a href="/links">Motivation</a>
      </div>
    </div>
  );
}
