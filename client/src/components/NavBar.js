import React from "react";
import { Link } from "react-router-dom";

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
                {" "}
                <Link to="/about">Über uns</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/past-projects">vergangene Projekte</Link>
                <div>
                  <li id="dropdown-item">
                    <Link to="/past-projects/:id">Project A</Link>
                  </li>
                </div>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/future-projects">zukünftige Projekte</Link>
                <div>
                  <li id="dropdown-item">
                    <Link to="/future-projects/:id">Project B</Link>
                  </li>
                </div>
              </li>
              <li>
                {" "}
                <Link to="/support">Unterstützung</Link>
              </li>
              <li>
                {" "}
                <Link to="/links">Wissenswertes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
