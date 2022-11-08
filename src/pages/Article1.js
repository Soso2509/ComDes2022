import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Article1() {
  return (
    <div className={"article1"}>
      <h1 className={"articleTitle"}>Sjokkbeskjed for Torvbyens ansatte</h1>
      <span className={"articleUnderTitle"}>Foto av Joachim Fjell</span>
      <section className={"articleIntro"}>
        <p>- Det har vært tungt både psykisk og fysisk, sier Stine Nordmandseth (47)</p>
      </section>
      <section className={"articleContent"}>
        <p>
          Nordmandseth jobber for Eurosko i Torvbyen Fredrikstad. Den 24 mai fikk hun beskjed om at de skulle jobbe ut dagen, 
          men at de måtte stenge for en periode mens det ble gjort undersøkelser i Torvbyens bygningmasse. 
        </p>
      </section>
      <section className={"parallax1"}>
        <div className={"textBox"}>
          - Det var mye diskusjoner om eventuelle løsninger, 
          men endte opp med å flytte lageret, som var bakerst i butikken, ned i kjelleren. Nordmandseth (47)
        </div>
      </section>
      <section className={"articleContent"}>
        <p>
          Nordmandseth sier at de kunne åpne halve butikken i midten av Juni, 
          men etter en uke og en dag måtte vi stenge hele butikken. 
          Noen dager senere fikk de nytt lokale i tredje etasje. 
          To måneder etter at de stengte kunne de endelig åpne dørene igjen i nytt lokale. 
        </p>
        <p>
          Hun sier at det nye lokalet ikke ligger like sentralt som det gamle, 
          og mistenker at de har gått glipp av en del impulskjøp. 
          Nå må kundene vite hvor butikken ligger. 
        </p>
        <p>- Senterledelsen har gjort sitt beste for å beholde butikkene i senteret</p>
      </section>
      <section className={"parallax2"}>
        <div className={"textBox"}>
          <p>- Det har vært tungt både psykisk og fysisk.</p>
        </div>
      </section>
      <section className={"articleContent"}>
        <p>
          Hun sier videre at det ble mye flytting, først tømme lageret i butikken, 
          flytte varene ned på et annet lager også flytte varene inn i nytt lokale. 
          Det blir mye gåing for de, i dag har de varene spredt på 3 lagre, 
          ett bak i butikken, ett i samme etasjen og ett i kjelleren. 
        </p>
        <p>
          Hvordan dette blir framover, sier hun at de er veldig spent på, både for butikken og senteret 
          generelt. De lurer på om senteret vil åpne for fullt igjen før det nye senteret på Kråkerøy 
          er ferdig. 
        </p>
      </section>
      <section className={"articleContent"}>
        <h3>Stengte butikker</h3>
        <p>
          Den 24 mai så ut til å bli en vanlig arbeidsdag for de ansatte i Torvbyen kjøpesenter, 
          men endte opp med å bli noe helt annet. De ansatte i Junkyard, Clas Ohlson, Bikbok, Eurosko, 
          samt en inngang, skulle holde åpent ut dagen, for så å måtte stenge i en ukjent periode.
        </p>
        <p>
          Senere måtte Narvesen, Vita og Touch stenge. Grunnen til at butikkene måtte stenge er at det 
          ble oppdaget setningsskader i bygget nærmest Glemmen kirke, det kom av store bevegelser i 
          bygningsmassen.
        </p>
        <p>
          Ekspertene så seg nødt til å <a href="https://www.f-b.no/venter-pa-risikoanalyse-i-torvbyen/s/5-59-2611139">
            stenge ned delen av bygget som er mot Gunnar Nilsens gate< FaExternalLinkAlt className="linkIcon"/></a>.
        </p>
      </section>
      <section className={"parallax3"}>
        <div className={"textBox"}>
          <h3>Nye lokaler</h3>
          <p>
            Fredrikstad blad rapporterte den 23 juni at BikBok og Junkyard hadde fått et nye lokaler. 
            Bikbok fikk helt nytt lokale på Store Torv, og Junkyard tok over de gamle lokalene til 
            Gamestop.  
          </p>
          <p>
            På <a href="https://m.facebook.com/story.php?story_fbid=pfbid02bQcKzqrZYGR69f2dx2C7U7pfFJxBrg94RTHKHXv6vYseiyQSNRin3Pq7EnSKjLU2l&id=145215378951"> 
            Torvbyens FaceBook-side< FaExternalLinkAlt className="linkIcon"/></a> 
            kunne man den 17 august se at Eurosko hadde åpnet i nytt lokale i tredje etasje, 
            mellom Intersport og Kitchen.
          </p>
        </div>
      </section>
    </div>
  );
}
