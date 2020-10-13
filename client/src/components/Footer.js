import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer">      
      <p>
        Copyright © 2020 Woods Up e.V.{' '}
        <div className="foot-infos">
        <Link to="/privacypolicy">Datenschutzerklärung</Link>
        <Link to="/legalnotice">Impressum</Link>
        <Link to="/contact">Kontakt</Link>
        </div>
      </p>
      </div>
  );
}
