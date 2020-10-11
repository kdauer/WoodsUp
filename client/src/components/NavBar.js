import React from 'react';
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t } = useTranslation("translation");
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
        <a href="/about">{t("translation:about")}</a>
        <a href="/projects">{t("translation:projects")}</a>
        <a href="/support">{t("translation:support")}</a>
        <a href="/links">{t("translation:links")}</a>
      </div>
    </div>
  );
}
