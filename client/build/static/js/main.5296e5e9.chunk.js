(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},41:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(30),i=n.n(l),s=(n(40),n(8)),o=n(9),c=n(11),u=n(10),m=n(12),h=n(4),d=n(13),g=(n(41),n(31)),p=n.n(g);function b(){return a.a.createElement("div",{className:"nav"},a.a.createElement("input",{type:"checkbox",id:"nav-check"}),a.a.createElement("div",{className:"nav-btn"},a.a.createElement("label",{htmlFor:"nav-check"},a.a.createElement("span",{className:"line1"}),a.a.createElement("span",{className:"line2"}),a.a.createElement("span",{className:"line3"}))),a.a.createElement("div",{className:"nav-links"},a.a.createElement("a",{href:"/about"},"\xdcber uns"),a.a.createElement("a",{href:"/projects"},"Projekte"),a.a.createElement("a",{href:"/support"},"Unterst\xfctzung"),a.a.createElement("a",{href:"/links"},"Motivation")))}function f(){return a.a.createElement("div",{className:"welcome"}," ")}function E(){return a.a.createElement("div",{className:"about-container home"},a.a.createElement("h3",null,"\u201cWir k\xf6nnen nicht l\xe4nger warten, wir sind die letzte Generation, die noch effektiv die Folgen der \xf6kologischen Katastrophe abmildern kann\u201d (Carola Rackete)"),a.a.createElement("br",null),a.a.createElement("p",null,"Woodsup ist ein geimeinn\xfctziger Verein, der sich f\xfcr den Klima- und Umweltschutz einsetzt. Dieses Ziel wird durch Planung, Koordination und Durchf\xfchrung von Aufforstungs- und Baumpflanzprojekten, Pflegema\xdfnahmen sowie Umweltbildungsprojekten verwirklicht."),a.a.createElement("br",null),a.a.createElement("p",null,"Wir verstehen uns als selbsbestimmte Gruppe, die unabh\xe4ngig von Parteipolitik agiert. Unser Ziel ist es, schnell und effektiv in der bestehenden Klimakatastrophe zu intervenieren. Wir m\xf6chten m\xf6glichst viele B\xe4ume zur Bindung von CO2 gedeihen lassen."),a.a.createElement("br",null),a.a.createElement("p",null,"Mit W\xe4ldern lie\xdfe sich ein erheblicher Anteil des menschengemachten CO2-Aussto\xdfes kompensieren. Die Aufforstung von \xd6dland bindet aber nicht nur CO2 aus der Atmosph\xe4re, sondern schafft Lebensraum f\xfcr Tiere und Pflanzen. Die Artenvielfalt wird erh\xf6ht, der Boden vor Erosion gesch\xfctzt, die Luft gereinigt und der Wasserhaushalt positiv beeinflusst."),a.a.createElement("div",{className:"space"}))}var w=n(6),k=n.n(w),v=function(e){return e.projects.map((function(e){return a.a.createElement("div",{key:e._id},e.image?a.a.createElement("div",{className:"box"},a.a.createElement("img",{className:"projectImg",src:e.image,alt:"Projectpicture"}),a.a.createElement("div",{className:"mask"},a.a.createElement(h.b,{to:"/projects/".concat(e._id),props:e.image,className:"link"},a.a.createElement("p",{className:"project_title"},e.title)))):a.a.createElement("div",{className:"project-heading"},a.a.createElement(h.b,{to:"/projects/".concat(e._id),props:e.image,className:"link-without-image"},a.a.createElement("p",null,"\u2022 ",e.title))))}))},z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={projects:[]},n.getData=function(){k.a.get("/api/projects").then((function(e){n.setState({projects:e.data})}))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return a.a.createElement("div",{className:"home"},a.a.createElement(v,{projects:this.state.projects}))}}]),t}(r.Component),D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={project:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;k.a.get("/api/projects/".concat(t)).then((function(t){console.log("single project here",t.data),e.setState({project:t.data})}))}},{key:"render",value:function(){var e=this.state.project;return e?a.a.createElement("div",{className:"detail-container"},a.a.createElement("h2",null,e.title),e.image?a.a.createElement("img",{src:e.image,alt:e.title}):a.a.createElement("div",null),a.a.createElement("p",null,e.content)):a.a.createElement("div",null,"Loading")}}]),t}(r.Component),S=n(34),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:"",image:"",content:""},n.handleChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),console.log("Form submitted"),k.a.post("/api/projects",{title:n.state.title,image:n.state.image,content:n.state.content}).then((function(){console.log("Response received, calling getData in <Projects/>"),n.setState({title:"",image:"",content:""})}))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{className:"create-project",onSubmit:this.handleSubmit},a.a.createElement("label",{htmlFor:"title"},"Title"),a.a.createElement("input",{id:"title",name:"title",placeholder:"e.g. Woods",value:this.state.title,onChange:this.handleChange}),a.a.createElement("label",{htmlFor:"image"},"Image URL:"),a.a.createElement("input",{id:"image",name:"image",placeholder:"https://www.facebook.com/Islacoffeeberlin",value:this.state.image,onChange:this.handleChange}),a.a.createElement("label",{htmlFor:"content"},"Content"),a.a.createElement("textarea",{name:"content",id:"content",className:"paragraph-input",rows:"4",cols:"80",placeholder:"What is the project about?",value:this.state.content,onChange:this.handleChange}),a.a.createElement("button",{className:"create-btn"},"New Project"))}}]),t}(r.Component);function I(){return a.a.createElement("div",{className:"support-container home"},a.a.createElement("h1",null,"Unterst\xfctzung"),a.a.createElement("p",null,a.a.createElement("b",null,"Wir freuen uns \xfcber Jede*, die mitmachen m\xf6chte. Au\xdferdem ben\xf6tigen wir bepflanzbare Fl\xe4chen und Baumsetzlinge. Pflanzungen werden durch Geldspenden erm\xf6glicht.")),a.a.createElement("p",null,"Als gemeinn\xfctziger Verein k\xf6nnen wir Spendenquittungen ausstellen."),a.a.createElement("p",null,a.a.createElement("b",null,"Woods Up e.V. ",a.a.createElement("br",null),"BIC: HOLVDEB1",a.a.createElement("br",null),"IBAN: DE 68 1001 7997 8678 3814 89")),a.a.createElement("p",null,"Kontakt: ",a.a.createElement("a",{href:"woodsup@posteo.de"},"woodsup@posteo.de")),a.a.createElement("div",{className:"paypal"},a.a.createElement("img",{src:"/QR-Code.png",alt:"QR-Code"}),a.a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url",className:"donate-btn"},"Spenden mit Paypal")),a.a.createElement("div",{className:"space"}))}function j(){return a.a.createElement("div",{className:"home space"},a.a.createElement("ul",{className:"motivation"},a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://ethz.ch/de/news-und-veranstaltungen/eth-news/news/2019/07/wie-baeume-das-klima-retten-koennten.html"},"Wie B\xe4ume helfen k\xf6nnten, das Klima zu retten")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.freitag.de/autoren/der-freitag/der-planet-schlaegt-zurueck?fbclid=IwAR1EvFlBD_ilv21F_GnXVnaK5mqHBEjBDNKLEa_QbZa6iqyUlC8--NSYvnY"},"Der Planet schl\xe4gt zur\xfcck")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.nzz.ch/wissenschaft/was-waelder-zum-klimaschutz-beitragen-koennen-ld.1402068?fbclid=IwAR3s-AQUOMfrybcWJ-hAh25rfPst33Ld1lzYhSUPQppfP4wH7XH9GE5pHN4"},"W\xe4lder k\xf6nnen einen riesigen Beitrag zum Klimaschutz leisten")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.nytimes.com/interactive/2017/10/20/climate/iceland-trees-reforestation.html?fbclid=IwAR2Qh2wNo9p-H27bjOaJXLbgQc4IDPoDWF_ZzxH6za7bevF4Yo5oGjk7fOk"},"Vikings Razed the Forests. Can Iceland Regrow Them?")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.skogur.is/en/forestry/forestry-in-a-treeless-land/forestry-and-climate-change?fbclid=IwAR1D6jLuX8fpq7YxqRiuxIkNlgQ0WZ0DORXN9XCDnx1ASp42P8T71xcuQ0c"},"Forestry and Climate Change")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.tagesschau.de/ausland/klimawandel-aufforstung-eth-101.html?fbclid=IwAR3r_R_k-h3g4A2N1Eky-1CJSAPa4yEHN7C5ZxOv7CqZRKDENuTusbUyGo8"},"Aufforstung w\xe4re effektivster Klimaschutz")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.thinkinghumanity.com/2019/07/for-the-first-time-ever-scientists-can-tell-where-and-how-many-trees-should-be-planted-to-stop-climate-crisis.html?fbclid=IwAR1uVOCV-YQobY2akoI_jSTSgqZUEox4ygoGGOEBaQMVS-T4NROBx-8xVmk"},"For The First Time Ever, Scientists Can Tell Where And How Many Trees Should Be Planted To Stop Climate Crisis")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.youtube.com/watch?v=pnRNdbqXu1I&fbclid=IwAR1jzXILfwlt0WZeUKD_Ip8Wx3hA5y1joy_4wat7TlV82cGFIDDbLkYREdo"},"Iceland Is Growing New Forests for the First Time in 1,000 Years")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.spiegel.de/wissenschaft/natur/klimaschutz-unzureichend-forscher-warnen-vor-weltweitem-klimanotstand-a-1294979.html?fbclid=IwAR1soHHad347RLSzFR49SDC3BFtEpFPl6Ix9zXjtvhbZF0sMZwCEyVCDtBs"},"11.000 Wissenschaftler warnen vor weltweitem Klimanotstand")),a.a.createElement("li",null,a.a.createElement("a",{rel:"noopener noreferrer",target:"blank",href:"https://www.ecowatch.com/climate-change-planting-trees-2639092782.html?rebelltitem=1#rebelltitem1"},"Planting Billions of Trees Is the 'Best Climate Change Solution Available Today,' Study Finds"))))}var y=n(19),W=function(e){var t=Object(r.useState)(""),n=Object(y.a)(t,2),l=n[0],i=n[1],s=Object(r.useState)(""),o=Object(y.a)(s,2),c=o[0],u=o[1];return a.a.createElement("div",{className:"login"},a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),k.a.post("/api/auth/login",{username:l,password:c}).then((function(t){e.history.push("/add-project")})).catch((function(e){console.log(e)}))}},a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"email"}),a.a.createElement("input",{type:"text",id:"username",name:"username",placeholder:"Username",value:l,onChange:function(e){i(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"password"}),a.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Password",value:c,onChange:function(e){u(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Log in"))))},N=function(e){return a.a.createElement("div",{className:"login"})};function C(){return a.a.createElement("div",{className:"Footer"},a.a.createElement("p",null,"Copyright \xa9 2020 Woods Up e.V."," ",a.a.createElement(h.b,{to:"/privacypolicy"},"Datenschutz"),a.a.createElement(h.b,{to:"/legalnotice"},"Impressum"),a.a.createElement(h.b,{to:"/contact"},"Kontakt")))}function B(){return a.a.createElement("div",{className:"impress"},a.a.createElement("h3",null,"WoodsUp e.V."),a.a.createElement("p",null,"Wollestra\xdfe 52",a.a.createElement("br",null),"14482 Potsdam"),a.a.createElement("p",null,"Mail: ",a.a.createElement("a",{href:"woodsup@posteo.de"},"woodsup@posteo.de")),a.a.createElement("br",null),a.a.createElement("h3",null,"Haftungsausschluss"),a.a.createElement("h5",null,"Inhalt des Onlineangebotes"),a.a.createElement("p",null,"Dieser Internetauftritt wurde mit \xe4u\xdferster Sorgfalt erstellt, dennoch wird daraufhingewiesen, dass keinerlei Gew\xe4hr f\xfcr die Aktualit\xe4t, Korrektheit, Vollst\xe4ndigkeit oder Qualit\xe4t der bereitgestellten Informationen \xfcbernommen wird. Haftungsanspr\xfcche jeglicher Art durch die Nutzung oder die Nichtnutzung dieser Informationen bzw. durch die Nutzung fehlerhafter und unvollst\xe4ndiger Informationen werden ausgeschlossen. Der Anbieter dieses Internetauftritts beh\xe4lt sich das Recht vor, Teile der Seiten oder das gesamte Angebot ohne Ank\xfcndigung zu ver\xe4ndern."),a.a.createElement("h5",null,"Verweise und Links"),a.a.createElement("p",null,"Verweise und Links, die auf WoodsUp verwendet werden, wurden inhaltlich gepr\xfcft und waren zum Zeitpunkt der Linksetzung frei von illegalen Inhalten. Es wird daraufhingewiesen, dass der Anbieter keinen Einfluss auf die aktuelle und zuk\xfcnftige Gestaltung und auf die Inhalte der verlinkten Seiten hat. Daher distanziert sich der Anbieter hiermit ausdr\xfccklich von den Inhalten aller verlinkten Seiten, die auf WoodsUp zu finden sind."),a.a.createElement("h5",null,"Urheberrecht"),a.a.createElement("p",null,"S\xe4mtliche Grafiken, Fotos, Logos und Texte unterliegen dem Urheberschutzgesetz und anderen Schutzgesetzen. Eine Vervielf\xe4ltigung oder Verwendung solcher Grafiken, Fotos, Logos und Texte, ob in gedruckter oder elektronischer Form ist ohne ausdr\xfcckliche Zustimmung des Anbieters nicht gestattet. Alle anderen innerhalb dieses Internetangebots genannten Marken und Warenzeichen sind Eigentum der jeweiligen Inhaber und unterliegen Schutzrechten der jeweiligen eingetragenen Eigent\xfcmer."),a.a.createElement("h5",null,"Rechtswirksamkeit"),a.a.createElement("p",null,"Sollte eines der oben genannten Teile dieses Haftungsausschlusses/Disclaimers unwirksam sein, so ber\xfchrt es die \xfcbrigen Bestimmungen nicht."))}function F(){return a.a.createElement("div",{className:"DSGVO"},a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement("big",null,"Datenschutzerkl\xe4rung"))),a.a.createElement("h5",null,"Allgemeiner Hinweis und Pflichtinformationen"),a.a.createElement("h5",null,"Benennung der verantwortlichen Stelle"),a.a.createElement("p",null,"Die verantwortliche Stelle f\xfcr die Datenverarbeitung auf dieser Website ist:"),a.a.createElement("p",null,a.a.createElement("span",{id:"s3-t-firma"},"WoodsUp e.V."),a.a.createElement("br",null),a.a.createElement("span",{id:"s3-t-ansprechpartner"},"Ansprechpartner"),a.a.createElement("br",null),a.a.createElement("span",{id:"s3-t-strasse"},"Wollestra\xdfe 52"),a.a.createElement("br",null),a.a.createElement("span",{id:"s3-t-plz"},"14482")," ",a.a.createElement("span",{id:"s3-t-ort"},"Potsdam")),a.a.createElement("p",null,"Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen \xfcber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. \xc4.)."),a.a.createElement("h5",null,"Widerruf Ihrer Einwilligung zur Datenverarbeitung"),a.a.createElement("p",null,"Nur mit Ihrer ausdr\xfccklichen Einwilligung sind einige Vorg\xe4nge der Datenverarbeitung m\xf6glich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m\xf6glich. F\xfcr den Widerruf gen\xfcgt eine formlose Mitteilung per E-Mail. Die Rechtm\xe4\xdfigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xfchrt."),a.a.createElement("h5",null,"Recht auf Beschwerde bei der zust\xe4ndigen Aufsichtsbeh\xf6rde"),a.a.createElement("p",null,"Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Versto\xdfes ein Beschwerderecht bei der zust\xe4ndigen Aufsichtsbeh\xf6rde zu. Zust\xe4ndige Aufsichtsbeh\xf6rde bez\xfcglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:"," ",a.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html",target:"_blank"},"https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"),"."),a.a.createElement("h5",null,"Recht auf Daten\xfcbertragbarkeit"),a.a.createElement("p",null,"Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xfcllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aush\xe4ndigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte \xdcbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."),a.a.createElement("h5",null,"Recht auf Auskunft, Berichtigung, Sperrung, L\xf6schung"),a.a.createElement("p",null,"Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft \xfcber Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empf\xe4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L\xf6schung dieser Daten. Diesbez\xfcglich und auch zu weiteren Fragen zum Thema personenbezogene Daten k\xf6nnen Sie sich jederzeit \xfcber die im Impressum aufgef\xfchrten Kontaktm\xf6glichkeiten an uns wenden."),a.a.createElement("h5",null,"SSL- bzw. TLS-Verschl\xfcsselung"),a.a.createElement("p",null,"Aus Sicherheitsgr\xfcnden und zum Schutz der \xdcbertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschl\xfcsselung. Damit sind Daten, die Sie \xfcber diese Website \xfcbermitteln, f\xfcr Dritte nicht mitlesbar. Sie erkennen eine verschl\xfcsselte Verbindung an der \u201ehttps://\u201c Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile."),a.a.createElement("h5",null,"Kontaktformular"),a.a.createElement("p",null,"Per Kontaktformular \xfcbermittelte Daten werden einschlie\xdflich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu k\xf6nnen oder um f\xfcr Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt."),a.a.createElement("p",null,"Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschlie\xdflich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m\xf6glich. F\xfcr den Widerruf gen\xfcgt eine formlose Mitteilung per E-Mail. Die Rechtm\xe4\xdfigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg\xe4nge bleibt vom Widerruf unber\xfchrt."),a.a.createElement("p",null,"\xdcber das Kontaktformular \xfcbermittelte Daten verbleiben bei uns, bis Sie uns zur L\xf6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unber\xfchrt."),a.a.createElement("h5",null,"Cookies"),a.a.createElement("p",null,"Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endger\xe4t speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen."," "),a.a.createElement("p",null,"Einige Cookies sind \u201cSession-Cookies.\u201d Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gel\xf6scht. Hingegen bleiben andere Cookies auf Ihrem Endger\xe4t bestehen, bis Sie diese selbst l\xf6schen. Solche Cookies helfen uns, Sie bei R\xfcckkehr auf unserer Website wiederzuerkennen."),a.a.createElement("p",null,"Mit einem modernen Webbrowser k\xf6nnen Sie das Setzen von Cookies \xfcberwachen, einschr\xe4nken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schlie\xdfen des Programms von selbst gel\xf6scht werden. Die Deaktivierung von Cookies kann eine eingeschr\xe4nkte Funktionalit\xe4t unserer Website zur Folge haben."),a.a.createElement("p",null,"Das Setzen von Cookies, die zur Aus\xfcbung elektronischer Kommunikationsvorg\xe4nge oder der Bereitstellung bestimmter, von Ihnen erw\xfcnschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. f\xfcr Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerkl\xe4rung separat behandelt."),a.a.createElement("h5",null,"Server-Log-Dateien"),a.a.createElement("p",null,"In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns \xfcbermittelt. Dies sind:"),a.a.createElement("ul",null,a.a.createElement("li",null,"Besuchte Seite auf unserer Domain"),a.a.createElement("li",null,"Datum und Uhrzeit der Serveranfrage"),a.a.createElement("li",null,"Browsertyp und Browserversion"),a.a.createElement("li",null,"Verwendetes Betriebssystem"),a.a.createElement("li",null,"Referrer URL"),a.a.createElement("li",null,"Hostname des zugreifenden Rechners"),a.a.createElement("li",null,"IP-Adresse")),a.a.createElement("h5",null,"Google Web Fonts"),a.a.createElement("p",null,"Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA."),a.a.createElement("p",null,"Durch den Einsatz dieser Web Fonts wird es m\xf6glich Ihnen die von uns gew\xfcnschte Darstellung unserer Website zu pr\xe4sentieren, unabh\xe4ngig davon welche Schriften Ihnen lokal zur Verf\xfcgung stehen. Dies erfolgt \xfcber den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der optimalen Darstellung und \xdcbertragung unseres Webauftritts."),a.a.createElement("p",null,'Das Unternehmen Google ist f\xfcr das us-europ\xe4ische Datenschutz\xfcbereinkommen "Privacy Shield" zertifiziert. Dieses Datenschutz\xfcbereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus gew\xe4hrleisten.'),a.a.createElement("p",null,"Einzelheiten \xfcber Google Web Fonts finden Sie unter:"," ",a.a.createElement("a",{href:"https://www.google.com/fonts#AboutPlace:about"},"https://www.google.com/fonts#AboutPlace:about")," ","und weitere Informationen in den Datenschutzbestimmungen von Google:"," ",a.a.createElement("a",{href:"https://policies.google.com/privacy/partners?hl=de"},"https://policies.google.com/privacy/partners?hl=de")))}function O(){return a.a.createElement("div",null,a.a.createElement("h3",null,"WoodsUp e.V."),a.a.createElement("p",null,"Wollestra\xdfe 52",a.a.createElement("br",null),"14482 Potsdam"),a.a.createElement("p",null,"Mail: ",a.a.createElement("a",{href:"woodsup@posteo.de"},"woodsup@posteo.de")))}var R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={user:n.props.user},n.setUser=function(e){n.setState({user:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log("<App/> render: ",this.state.user),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"nav-img"},a.a.createElement("h1",{className:"logo"},a.a.createElement(h.b,{to:"/"},a.a.createElement("img",{src:"/IMG_2825.JPG",alt:"Logo",className:"logo-img"}))),a.a.createElement(b,null)),a.a.createElement(d.c,null,a.a.createElement(d.a,{exact:!0,path:"/",component:f}),a.a.createElement(d.a,{path:"/signup",render:function(t){return a.a.createElement(N,{history:t.history,setUser:e.setUser})}}),a.a.createElement(d.a,{path:"/login",render:function(t){return a.a.createElement(W,{history:t.history,setUser:e.setUser})}}),a.a.createElement(d.a,{exact:!0,path:"/about",component:E}),a.a.createElement(d.a,{exact:!0,path:"/projects",component:z}),a.a.createElement(d.a,{exact:!0,path:"/projects/:id",render:function(t){return a.a.createElement(D,Object.assign({},t,{isLoggedIn:Boolean(e.state.user)}))}}),a.a.createElement(d.a,{exact:!0,path:"/add-project",render:function(t){return a.a.createElement(A,{history:t.history,setUser:e.setUser})}}),a.a.createElement(d.a,{exact:!0,path:"/support",component:I}),a.a.createElement(d.a,{exact:!0,path:"/links",component:j}),a.a.createElement(d.a,{path:"/legalnotice",component:B}),a.a.createElement(d.a,{path:"/privacypolicy",component:F}),a.a.createElement(d.a,{path:"/contact",component:O})),a.a.createElement(p.a,{location:"bottom",buttonText:"Accept",cookieName:"myAwesomeCookieName2",style:{background:"#2B373B"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150},"Diese Website nutzt Cookies im Sinne der",a.a.createElement(h.b,{to:"/privacypolicy",style:{textDecoration:"none",color:"lightblue"}},'"Darenschutzerkl\xe4rung"')," ",a.a.createElement("span",{style:{fontSize:"10px"}},"(Akzeptieren um fortzufahren)")),a.a.createElement(C,null))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));k.a.get("/api/auth/loggedin").then((function(e){i.a.render(a.a.createElement(h.a,null,a.a.createElement(R,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.5296e5e9.chunk.js.map