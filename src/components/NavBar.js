import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            {" "}
            <Link to="/about">Über uns</Link>
          </li>
          <li>
            {" "}
            <Link to="/past-projects">vergangene Projekte</Link>
          </li>
          <li>
            {" "}
            <Link to="/future-projects">zukünftige Projekte</Link>
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
      </nav>
    </div>
  );
}
