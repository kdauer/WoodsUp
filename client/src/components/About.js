import React from 'react';
import { useTranslation } from "react-i18next"

export default function About() {
  const { t, i18n } = useTranslation("translation");
const changeLanguage = code => {
i18n.changeLanguage(code);
};
  return (
    <div className="about-container home">
      <h1>
        “Wir können nicht länger warten, wir sind die letzte Generation, die
        noch effektiv die Folgen der ökologischen Katastrophe abmildern kann”
        (Carola Rackete)
      </h1>
      <br />
      <p>
      {t("translation:aboutParagraphOne")}
      </p>
      <br />
      <p>
      {t("translation:aboutParagraphTwo")}
      </p>
      <br />
      <p>
      {t("translation:aboutParagraphThree")}
      </p>
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
