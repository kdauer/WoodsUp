import React from 'react';
import { Link } from 'react-router-dom';

// const navSlide = () => {
//   nav.classlist.toggle('nav-active');
// };

// navLinks.forEach((link, index)=> {
//   if (link.style.animation) {
//     link.style.animation = ""
// } else {
//   link.style.animation = `navLinksFade 0.5s ease forward ${index / 7 + 0.3}s`

// }
// burger.classlist.toggle("toggle")
// })

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="/about" className="nav-links">
              Über uns
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-links">
              Projekte
            </Link>
          </li>
          <li>
            <Link to="/history" className="nav-links">
              Historie
            </Link>
          </li>
          <li>
            <Link to="/support" className="nav-links">
              Unterstützung
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/links" className="nav-links">
              Wissenswertes
            </Link>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}
