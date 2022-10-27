import React from "react";
import Adrian from "../images/adrianKJ.jpg";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Timeline } from "../components/Timeline";

export default function Article4() {
  return (
    <div className={"article"}>
        <h1 className={"articleTitle"}>Planeten koker, er det for sent?</h1>
        <span className={"articleUnderTitle"}>Lorem ipsum dolor sit amet</span>
        <section className={"articleIntro"}>
          lorem
        </section>
      <section className={"articleContent"}>
        <p className={"questionText"}>
          {" "}
          - Hva tenker du er hovedårsaken til den globale oppvarmingen?{" "}
        </p>
        <p>
        - Hoveddriveren er drivhusgassutslipp, gasser som CO2 og metan er de viktigste årsakene til
          endring. Samfunnet vårt bruker teknologi som krever store klimagassutslipp, fossilt brennstoff og
          areal endringer, sier Adrian Kristiansønn Jacobsen (36).
        </p>
        <figure>
          <img className={"portrait"} src={Adrian} alt="" />
          <figcaption>
            Foto: {"    "}
            <a href="https://www.hiof.no/iio/ois/personer/tekn-adm-ansatte/erlendsa/index.html">
              Høgskolen i Østfold
            </a>
          </figcaption>
        </figure> 
        <br></br>
        <h3>Overskrift</h3>
        <p>
          Jacobsen er foreleser i natur, helse og bevegelse innen barnehagelærerutdanningen ved HIOF
          avdeling Halden.
          Jacobsen sier videre at vi ikke skal undervurdere risikoen ved globaloppvarming. Han viser til
          hetebølgen i England i sommer, og konsekvensene denne ene hetebølgen hadde for et samfunn. 
        </p>
        <p>Det er noen modeller som spår at f.eks England kan få slike hetebølger annethvert år. </p> 
      </section>
      <section className={"articleContent"}>
        <article>
          <p>
          En global konsekvens at global oppvarming kan være en mulig matkrise, antar Jacobsen. Han påpeker
          at vi allerede har sett at matproduksjonen har blitt påvirket av dette allerede. Dette er noe vi bør
          være forberedt på, ha noen planer om dette skulle skje sier Jacobsen videre.
          </p>
          <p>
          Når det kommer til konsekvenser for oss i Norge så mistenker Jacobsen at vi vil få mer av de
          klimaendringene vi allerede har fått en liten forsmak på, mindre snø og tørke somre for eksempel.
          Han viser til en furuskog, som er rett ved der han bor, hvor en tredjedel av trærne døde under tørken
          i 2018. Jacobsen antar at skogene vil endre seg ganske mye som en direkte konsekvens av
          klimaendringene. Mer ekstremvær er også en mulig konsekvens mener Jacobsen.
          </p>
          <p>
          Jacobsen har troa på at vi kan løse denne utfordringen. Han tror ikke at alt er fortapt selv om vi ikke
          skulle klare å slutte med drivhusgasser innen 2030, men tolker det dit at konsekvensene vil bli mye
          verre enn de hadde trengt å være om vi ikke greier det.
          </p>
          <p>
          - En grei analogi er jo folk som røyker, man vet at det er skadelig. En person begynner å røyke ti
          sigaretter per dag i en alder av 20, får beskjed av legen at de må slutte før de er 30 år gammel, eller
          så kan det ha dramatiske konsekvenser. 
          <br></br>
          <br></br>
          Så fortsetter denne personen å røyke, kanskje de røyker mer
          til og med, da vil den personen ha passert en såkalt milepæl, hvor det er mye større sjanse for å få
          kreft, men det betyr ikke da at den personen bare kan ignorere problemet, så hvis denne personen
          slutter innen de har nådd 40 så kan de ha unngått noen enda verre konsekvenser.
          </p>
          <p>
          De klimaendringene som har kommet, har nok kommet for å bli sier Jacobsen. Når det sagt så mener
          Jacobsen at om vi legger inn en skikkelig innsats, så kan det forhindre andre store konsekvenser.
          <br></br>
          <br></br>
          Når Jacobsen blir stilt spørsmålet «Har du noen idéer til hva vi vanlig folk kan gjøre» protesterer han
          og sier han ikke er enig i premisset til spørsmålet.
          </p>
          <p>
          - Fordi jeg føler litt det at ansvaret har blitt lagt over på den enkelte, og selv om det er viktig så syntes
          jeg det er viktig å huske at de som må løse dette problemet er statsledere og de som har mest makt i
          samfunnet.
          </p>
          <p>
          Jacobsen sier videre at statslederne bør gjennomføre ambisiøse politikk som gjør det enklere å ta
          miljøvennlige valg, da har en direkte nytte av valgene en tar.
          </p>
          <p>
          - Som for eksempel om miljøvennlig mat skulle bli billigere.
          <br></br>
          Dette mener Jacobsen er en bedre vei å gå, enn at den enkelte i samfunnet har ansvaret. Det leder
          heller til at man kan ende opp med å gå rundt med dårlig samvittighet, fordi utviklingen går som den
          går og man tenker at det er fordi en ikke har nådd målet sitt med å kutte ned. 
          </p>
        </article>
      </section>
      <br></br>
      <section className={"articleContent"}>
        <Timeline />
      </section>
      <br></br>
      <section className={"articleContent"}>
        <article>
          <h3>Overskrift</h3>
          <p>
            Jordens overflatetemperatur har blitt målt systematisk siden 1850. Disse tallene viser at
            gjennomsnittstemperaturen har økt med 1,25°C sammenlignet med gjennomsnittet for førindustriell
            tid. <a href="https://energiogklima.no/klimavakten/global-temperatur/">Talene viser også at de siste syv årene er det varmeste noen gang.< FaExternalLinkAlt className="linkIcon"/></a>
          </p>
          <p>
            Denne temperaturøkningen resulterer i, blant annet, flere og mer intense hetebølger, med færre
            dager hvor det er ekstrem kulde. Dette tror forskerne vil fortsette å utvikle seg, som vi skulle nådd
            målet om å stabilisere økningen på 1,5°C. <a href="https://energiogklima.no/klimavakten/heteboelger/">Hetebølgene har flere konsekvenser, < FaExternalLinkAlt className="linkIcon"/></a>både for samfunn,
            natur, folkehelse, landbruk og økosystemer
          </p>
          <p>
            Flere land ble rammet av hetebølger i sommer, flere av disse hetebølgene knuste tidligere
            varmerekorder verden over. Et av de landene som ble rammet hardest er Kina, som ble rammet av
            den verste hetebølgen i historien. Den varte i over 70 dager, som strakk seg over 1372693 km2
            , det er
            et område på størrelse med Texas. Colorado og California til sammen. 
            <a href="https://www.axios.com/2022/08/22/china-heat-wave-drought-unprecedented">Mer enn 100 millioner
            mennesker ble påvirket av denne hetebølgen< FaExternalLinkAlt className="linkIcon"/></a>
          </p>
          <p>
            Dette har ført til at Kinas største ferskvanns elv, Poyang, har  <a href="https://www.nrk.no/urix/tidenes-hetebolge-rammer-kina-1.16078235">tørket opp og
            blitt redusert med 75%< FaExternalLinkAlt className="linkIcon"/></a>. 
            Dette kan resultere i en mulig matkrise, lite vann fører til dårlig avling
          </p>
        </article>
      </section>
      <br></br>
      <section className={"articleContent"}>
        <article>
          <h3>Overskrift</h3>
          <p>
            Isbreer verden over smelter raskere. 270 milliarder tonn is har smeltet fra verdens isbreer de siste 20
            årene. I Norge har 20 isbreer smeltet bort siden 2006, det tilsvarer et område på 364
            kvadratkilometer. Norges isbreer har blitt 14% mindre. Isbreen i Hordaland, <a href="https://www.nrk.no/norge/20-isbreer-i-norge-er-na-borte-1.15846004">Gråfjellsbrea, har trukket
            seg 979 meter tilbake de siste 20 årene< FaExternalLinkAlt className="linkIcon"/></a>
          </p>
          <p>
            Nigardsbreen, en brearm av Jostedalsbreen, har trukket seg 618 meter i <a href="https://www.nettavisen.no/nyheter/innenriks/norske-isbreer-fortsetter-a-trekke-seg-tilbake/s/12-95-3424188331"> perioden 2001-
            2021< FaExternalLinkAlt className="linkIcon"/></a>, hvor 480 av de var de siste 10 årene.
          </p>
          <p>
            <a href="https://forskning.no/klima-ntb/tyskland-har-mistet-en-av-sine-fem-isbreer/2084603">Forskning.no< FaExternalLinkAlt className="linkIcon"/></a> rapporterte i september
            at Søndre Schneeferner, en av Tysklands fem isbreer, har smeltet så mye at den har mistet sin
            brestatus. Den har smeltet fra 10 meter på det tykkeste, i 2018, til mindre enn 6 meter. 
            Denne smeltetrenden kan ha store konsekvenser, spesielt for vi som bor i Nord-europa.
          </p>
        </article>
      </section>
      <br></br>
      <section className={"articleContent"}>
        <article>
          <h3>Overskrift</h3>
          <p>
            Vi i Nord-Europa har et varmere klima enn vi egentlig burde hatt, dette er på grunn av
            Golfstrømmen. Grønlands innlandsis er i ferd med å smelte, og det kalde smeltevannet kan svekke
            Golfstrømmen, og uten den vil det bli opptil 10 grader kaldere i denne delen av verden. <a href="https://illvit.no/naturen/klimaendringer/smeltevann-kan-slukke-nord-europas-radiator">Dette kan ha
            store konsekvenser for våre liv, < FaExternalLinkAlt className="linkIcon"/></a> det vil påvirke landbruk, dyreliv og strømregning.
          </p>
        </article>
      </section>
    </div>
  );
}
