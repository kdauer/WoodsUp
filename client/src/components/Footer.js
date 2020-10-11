import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"


export default function Footer() {
  const { t, i18n } = useTranslation("translation");
const changeLanguage = code => {
i18n.changeLanguage(code);
};
  return (
    <div className="Footer">
<div className="lang-container">
      <button className="lang-btn" type="button" onClick={() => changeLanguage("de")}>
        {t("translation:de")}
      </button>

      <button className="lang-btn" type="button" onClick={() => changeLanguage("en")}>
        {t("translation:en")}
</button>
      
      <p>
        Copyright © 2020 Woods Up e.V.{' '}
        <div className="foot-infos">
        <Link to="/privacypolicy">{t("translation:privacypolicy")}</Link>
        <Link to="/legalnotice">{t("translation:legalnotice")}</Link>
        <Link to="/contact">{t("translation:supportContact")}</Link>
        </div>
      </p>
      </div>
    </div>
  );
}
