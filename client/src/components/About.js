import React from 'react';
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation("translation");
  return (
    <div className="about-container home">
      <h3>
        “Wir können nicht länger warten, wir sind die letzte Generation, die
        noch effektiv die Folgen der ökologischen Katastrophe abmildern kann”
        (Carola Rackete)
      </h3>
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
      <div className="space"></div>
    </div>
  );
}
