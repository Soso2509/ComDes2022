import React from "react";
import { ChartSRenteMnd } from "../components/ChartSRenteMnd";
import { ChartSRenteÅr } from "../components/ChartSRenteÅr";
/* import InfographDesktop from "../images/infographic1.png"; */
import Erlend from "../images/erlend.png";
import InfographMobile from "../images/infographMobile.png";

export default function Article2() {
  return (
    <div className={"article2"}>
      <h1 className={"articleTitle"}>Kort forklart: Renteøkningen</h1>
      <span className={"articleUnderTitle"}>
        Illustrasjoner av Sofie Karlsen og Ivo Eilertsen
      </span>
      <section className={"articleIntro"}>
        Folk flest ser kanskje på renteøkning som et rent negativt tema, hvor
        man da ender opp med å betale mer for lån, og dermed blir lommeboken
        trangere, men det er ikke uten grunn at renten økes og senkes. Økonomien
        vil ikke klare seg med kun lav rente, over tid så kan det ha store
        konsekvenser for den norske økonomien.
      </section>
      <section className={"articleContent"}>
        <p className="quote">
          - Energibehov og kapitalbehov er de viktigste faktorene innen økonomi,
          Erlend Sand Aas (43).
        </p>
        <br></br>
        <h2>Eksplosiv økning</h2>
        <p>
          Det er 11 år siden styringsrenten har vært så høy som den er i dag, i
          dag den er på 2.25%. Det har vært en historisk stor renteøkning det
          siste året hvor styringsrenten har økt med hele 2%, på{" "}
          <a href="https://www.norges-bank.no/tema/pengepolitikk/Styringsrenten/Styringsrenten-Oversikt-over-rentemoter-og-endringer-i-styringsrenten-/">
            Norges bank sine sider
          </a>{" "}
          kan man se hvordan renten har forandret seg gjennom tidene.{" "}
        </p>
        <ChartSRenteMnd />
        <p>
          Denne eksplosive renteøkningen har kommet som et sjokk på mange, siden
          vi har i en lengre periode hatt en rente som var nesten nede på 0%,
          som følge av pandemien.{" "}
        </p>
        <br></br>
        <h2>Styringsrentens oppgave</h2>
        <p>
          Det er styringsrenten som sørger for at inflasjonen holder seg lav, og
          stabil. Dette er hovedoppgaven til den norske bank som øker eller
          senker styringsrenten. Det denne som «bestemmer» rentene bankene
          tilbyr på sine lån.
        </p>
        <ChartSRenteÅr />
        <p>
          Lavere rente gjør at lån blir billigere, da har folk også mer penger å
          rutte med og dermed bruker mer penger, samtidig som det ikke lønner
          seg så mye ved å spare pengene i banken. Bedrifter ansetter flere.
          Over tid vil dette føre til at arbeidsledigheten synker og for at
          bedriftene få ansatt flere må de øke lønningene. Nå har vi to ting som
          over tid resulterer i økt inflasjon, det er økt etterspørsel og økte
          lønninger. Det er her styringsrenten kommer inn.
        </p>
        <p>
          <a href="https://www.ungokonomi.no/inflasjon/">
            Med økt rente blir lån dyrere, man sparer mer ved å ha penger i
            bank.
          </a>{" "}
          Folk har litt dårligere råd og handler dermed mindre, da blir prisene
          lavere og lønninger reduseres. Dermed blir inflasjon dempet.
        </p>
        <img className={"infograph"} src={InfographMobile} alt="" />
        <br></br>
        <h2>Dette sier eksperten</h2>
        <img className={"portrait"} src={Erlend} alt="" />
        <figcaption>
          Bilde fra{" "}
          <a href="https://www.hiof.no/iio/ois/personer/tekn-adm-ansatte/erlendsa/index.html">
            Høgskolen i Østfold
          </a>
        </figcaption>
        <p>
          Vi har vært i kontakt med Erlend (43), utdannet sivilingeniør fra
          NTNU, med 15 års erfaring innen finans.
        </p>
        {/* <img className={"image"} src={Erlend} alt="" /> */}
        <p className={"questionText"}>
          {" "}
          - Kan du forklare hva en renteøkning egentlig er?
        </p>
        <p>
          - Renten blir satt opp for at vi skal brukere mindre ressurser, for vi
          har beskrakning på hvor mye ressurser vi har tilgjengelig. Ønsket er
          at vi skal bruke mindre penger for å legge mindre press på det vi har.{" "}
        </p>
        <p className={"questionText"}>
          {" "}
          - Hva betyr renteøkningen for nordmenns økonomi?
        </p>
        <p>- Sentralbanken/myndigheten vil at vi skal bruke mindre penger.</p>
        <p className={"questionText"}>
          {" "}
          - Hvordan vil det påvirke norsk økonomi framover?{" "}
        </p>
        <p>
          - Etter koronaen har vi hatt en kort resesjon, det stimuleres kraftig
          med mange støttepakker, renten ble satt ned nesten til 0%. I perioden
          etter hadde vi lett tilgang på penger på grunn av den unormale lave
          renten for å få i gang verden etter Korona. Siden produksjonen ikke
          kom i gang som planlagt, har vi hatt for lite varer og for mye penger.{" "}
        </p>
        <p>
          - På grunn av krigen i Ukraina har vi en energi krise i Europa, hvor
          det ikke er nok strøm. Så vi er i en situasjon hvor vi ikke har nok
          varer og ikke nok strøm, da satte man opp renten og leie prisen for
          penger, for at folk skulle bruke mindre. For å redusere presset på
          ressursene vi har. Det her er bærekraft, vi har hatt for lett tilgang
          på penger etter korona. Blir som en ketsjup flaske hvor trykket har
          vært stort så har alt blitt presset ut, nå handler det om å få alt inn
          i flasken igjen.{" "}
        </p>
        <p className={"questionText"}>
          {" "}
          - Hva kommer den eksplosive renteøkningen av?
        </p>
        <p>
          - Vi hadde en eksplosiv nedgang i rentene etter koronaen, nå må den
          opp igjen.{" "}
        </p>
        <p className={"questionText"}>
          {" "}
          - Hvor mye vil renten øke før den jevner seg ut?
        </p>
        <p>
          - Styringsrente estimatet er at renten vil ende på 4.5% i løpet av
          mars eller april neste år. Nå vil bil-, hytte-, og hus priser stupe,
          alt som har steget unormalt mye etter koronaen skal reverseres, når
          det skjer så trenger man ikke så høy rente lenger. Max 2023 så vil
          renten gå ned igien, tror til og med tidligere.{" "}
        </p>
        <p>
          - Jeg har aldri sett så stor “demand reduction”. Den effekten de høye
          rentene, de høye strøm prisene og de høye mat prisene har hatt, jeg
          har aldri sett kjappere bortgang av kjøpekraft eller vilje til å kjøpe
          varer enn akkurat nå. Folk struper helt igjen. Rente økningen vil ikke
          da vare så lenge som følge av det.
        </p>
        <p className={"questionText"}> - Ja det stopper på en måte seg selv?</p>
        <p>
          - Ja, målet er å stoppe at folk bruker mye penger. Det har aldri
          skjedd fortere enn man ser nå.{" "}
        </p>
      </section>
    </div>
  );
}
