import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright © 2020 Woods Up e.V.{' '}
        <Link to="/privacypolicy">Datenschutz</Link>
        <Link to="/legalnotice">Impressum</Link>
        <Link to="/contact">Kontakt</Link>
      </p>
    </div>
  );
}
