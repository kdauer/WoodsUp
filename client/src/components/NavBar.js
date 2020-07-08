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
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
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
