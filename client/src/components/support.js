import React from 'react';
import { useTranslation } from "react-i18next"

export default function Support() {
  const { t, i18n } = useTranslation("translation");
  const changeLanguage = code => {
    i18n.changeLanguage(code);
    };
  return (
    <div className="support-container home">
      <h1>{t("translation:support")}</h1>
      <p>
        <b>
        {t("translation:supportParagraphOne")}
        </b>
      </p>
      <p>{t("translation:supportParagraphTwo")}</p>
      <p>
        <b>
          Woods Up e.V. <br />
          BIC: HOLVDEB1
          <br />
          IBAN: DE 68 1001 7997 8678 3814 89
        </b>
      </p>
      <p>
      {t("translation:supportContact")} <a href="woodsup@posteo.de">woodsup@posteo.de</a>
      </p>
      <div className="paypal">
        <img src="/QR-Code.png" alt="QR-Code" />
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
          className="donate-btn"
        >
          {t("translation:donate")}
        </a>
      </div>
      <div className="lang-container">
      <button className="lang-btn" type="button" onClick={() => changeLanguage("de")}>
        {t("translation:de")}
      </button>

      <button className="lang-btn" type="button" onClick={() => changeLanguage("en")}>
        {t("translation:en")}
</button>
</div>
      <div className="space"></div>
    </div>
  );
}
