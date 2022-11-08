import React from "react";
import { ChartSRenteMnd } from "../components/ChartSRenteMnd";
import { ChartSRenteÅr } from "../components/ChartSRenteÅr";
import { FaExternalLinkAlt } from 'react-icons/fa';
import InfographDesktop from "../images/infographic1.png";
import InfographMobile from "../images/infographMobile.png";
import Erlend from "../images/erlend.png";

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
        konsekvenser for den norske økonomien. Erlend Sand Aas (43)
      </section>
      <section className={"articleContent"}>
        <p className="quote">
          - Energibehov og kapitalbehov er de viktigste faktorene innen økonomi. Aas (43)
        </p>
        <h2>Dette sier eksperten</h2>
        <figure>
          <img className={"portrait"} src={Erlend} alt="" />
          <figcaption>
            Foto: {"    "}
            <a href="https://www.hiof.no/iio/ois/personer/tekn-adm-ansatte/erlendsa/index.html">
              Høgskolen i Østfold
            </a>
          </figcaption>
        </figure>
        <p>
          Erlend Sand Aas er høgskolelektor ved Høgskolen i Østfold og har 15 års erfaring innen finans.
        </p>
        <p className={"questionText"}>
          {" "}
          - Kan du forklare hva en renteøkning egentlig er?
        </p>
        <p>
          - Renten blir satt opp for at vi skal brukere mindre ressurser, for vi
          har beskrakning på hvor mye ressurser vi har tilgjengelig. Ønsket er
          at vi skal bruke mindre penger for å legge mindre press på det vi har.{" "}
        </p>
        {/* <p className={"questionText"}>
          {" "}
          - Hva betyr renteøkningen for nordmenns økonomi?
        </p>
        <p>- Sentralbanken/myndigheten vil at vi skal bruke mindre penger.</p> */}
 {/*        <p className={"questionText"}>
          {" "}
          - Hvordan vil det påvirke norsk økonomi framover?{" "}
        </p> */}
        <p>
          Aas forteller at det har vært en kort resesjon etter korona-pandemien. 
          Denne ble stimulert kraftig i form av støttepakker og en rente som ble satt til 0%.
          Perioden vi befant oss i etter korona var tilgangen til penger enkel.
          Grunnen til at pengene var så enkelt å få tak i var nettopp på grunn av de lave rentene.
          Den lave renten var til for å få start på verden igjen. 
          Produksjonen har ikke gått som planlagt og vi er nå i situasjon med for mye penger og for lite varer. 
          Nordmenns økonomi vil bli påvirket av dette nå og vil bli det i tiden fremover.{" "}
        </p>
        <p>
          - På grunn av krigen i Ukraina har vi en energikrise i Europa, hvor
          det ikke er nok strøm. Så vi er i en situasjon hvor vi ikke har nok
          varer og ikke nok strøm, da satte man opp renten og leie prisen for
          penger, for at folk skulle bruke mindre. For å redusere presset på
          ressursene vi har. Det her er bærekraft, vi har hatt for lett tilgang
          på penger etter korona. Blir som en ketsjup flaske hvor trykket har
          vært stort så har alt blitt presset ut, nå handler det om å få alt inn
          i flasken igjen.{" "} 
        </p>
        <p>
          Den eksplosive renteøkningen kommer i all hovedsak av korona-pandemien.
          For at rentene skal bli som normalt igjen, må rentene først opp for å dempe kjøpekraften.
        </p>
        {/* <p className={"questionText"}>
          {" "}
          - Hva kommer den eksplosive renteøkningen av?
        </p>
        <p>
          - Vi hadde en eksplosiv nedgang i rentene etter koronaen, nå må den
          opp igjen.{" "}
        </p> */}
        <p className={"questionText"}>
          {" "}
          - Hvor mye vil renten øke før den jevner seg ut?
        </p>
        <p>
          - Styringsrente estimatet er at renten vil ende på 4.5% i løpet av
          mars eller april neste år. Nå vil bil-, hytte-, og huspriser stupe,
          alt som har steget unormalt mye etter koronaen skal reverseres, når
          det skjer så trenger man ikke så høy rente lenger. Max 2023 så vil
          renten gå ned igien, tror til og med tidligere.{" "}
        </p>
        <p>
          Aas har aldri sett en slik effekt av det han kaller for "demand reduction". De høye rentene, 
          strøm- og matvareprisene har resultert i en stor nedgang i nordmenns kjøpekraft og kjøpevilje. 
          Dette gjør at renteøkningen ikke vil vare lenge.
        </p>
        {/* <p>
          - Jeg har aldri sett så stor “demand reduction”. Den effekten de høye
          rentene og de høye strøm- og matprisene har hatt har jeg
          aldri sett kjappere bortgang av kjøpekraft eller vilje til å kjøpe
          varer enn akkurat nå. Folk struper helt igjen. Rente økningen vil ikke
          da vare så lenge som følge av det.
        </p> */}
        <p>
          Målet er å gjøre at vi bruker mindre penger og dette har aldri blitt oppnådd fortere sier Aas avslutningsvis. 
        </p>
        {/* <p className={"questionText"}> - Ja det stopper på en måte seg selv?</p>
        <p>
          - Ja, målet er å stoppe at folk bruker mye penger. Det har aldri
          skjedd fortere enn man ser nå.{" "}
        </p> */}
        <br></br>
        <h2>Den eksplosive økningen</h2>
        <p>
          Det er 11 år siden styringsrenten har vært så høy som den er i dag, i
          dag den er på 2.25%. Det har vært en historisk stor renteøkning det
          siste året hvor styringsrenten har økt med hele 2%, på{" "}
          <a href="https://www.norges-bank.no/tema/pengepolitikk/Styringsrenten/Styringsrenten-Oversikt-over-rentemoter-og-endringer-i-styringsrenten-/">
            Norges bank sine sider < FaExternalLinkAlt className="linkIcon"/>
          </a>{" "}
          kan man se hvordan renten har forandret seg gjennom tidene.{" "}
        </p>
        <ChartSRenteMnd />
        <p>
          Denne eksplosive renteøkningen har kommet som et sjokk på mange, siden
          vi har i en lengre periode hatt en rente som var nesten på 0%,
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
            bank.< FaExternalLinkAlt className="linkIcon"/>
          </a>{" "}
          Folk har litt dårligere råd og handler dermed mindre, da blir prisene
          lavere og lønninger reduseres. Dermed blir inflasjon dempet.
        </p>
        <img className={"infographMobile"} src={InfographMobile} alt="" />
        <img className={"infographDesktop"} src={InfographDesktop} alt="" />
      </section>
    </div>
  );
}
