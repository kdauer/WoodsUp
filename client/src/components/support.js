import React from 'react';

export default function support() {
  return (
    <div className="support-container">
      <h1>Unterstützung</h1>
      <p>
        <b>
          Wir freuen uns über Jede*, die mitmachen möchte. Wir benötigen aber
          auch bepflanzbare Flächen und Baumsetzlinge. Die Aktionen werden durch
          Geldspenden ermöglicht.
        </b>
      </p>
      <p>
        Als gemeinnütziger Verein können wir auch Spendenquittungen für das
        Finanzamt ausstellen. Woods Up ist ein 2018 gegründeter gemeinnütziger
        Verein mit dem Sitz in Potsdam.
      </p>
      <p>
        <b>
          Woods Up e.V. <br />
          BIC: HOLVDEB1
          <br />
          IBAN: DE 68 1001 7997 8678 3814 89
        </b>
      </p>
      <p>
        Kontakt: <a href="woodsup@posteo.de">woodsup@posteo.de</a>
      </p>
      <div className="paypal">
        <img src="/QR-Code.png" alt="QR-Code" />
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
          className="donate-btn"
        >
          Spenden mit Paypal
        </a>
      </div>
    </div>
  );
}
