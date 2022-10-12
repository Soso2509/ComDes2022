import React from "react";
import Map from "../components/Map";

export default function Article3() {
  return (
    <div className={"article3"}>
      <section className={"plasticBottle"}></section>
      <h1 className={"article3Title"}>Klimagreier</h1>
      <span className={"articleUnderTitle"}>Lorem ipsum dolor sit amet</span>
      <section className={"articleIntro"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </section>
      <section className={"articleContent"}>
        <p>
          Et av de største klimautfordringene ved i dag er plast-forsøpling, og spesielt fordi mye av forsøplingen før eller senere havner på havet. <a href="https://naturvernforbundet.no/plast/">Ifølge naturvernombudet </a> 
          så kaster vi, globalt, ca 6.4 millioner tonn søppel som finner veien til havet hvert år, det meste av dette er plastikk. Det har havnet så store mengder søppel, på havet at det har formet seg flere søppeløyer spredt på de ulike havene. 
          Den største av de finner man i Stillehavet, den er <a href="https://www.nettavisen.no/artikkel/sopleoya-i-stillehavet/s/12-95-1623901">dobbelt så stor som Texas.</a>
          Plastikk bruker mange år, opp til flere hundre år, på å brytes ned, og selv om de til slutt brytes ned så er de ikke ufarlig, snarere tvert imot. 
        </p>
      </section>
      <Map />
      <section className={"articleContent"}>
        <h3>Plastikkpartikler</h3>
        <p>
          Mikroplastikk er plastikk biter på størrelse enn eller mindre enn 5 millimeter. De kan være produsert i denne størrelsen, eller det kan være større plastikkbiter som har blitt brutt ned over tid, de kan brytes ned i enda mindre partikler, nanoplast. 
        </p>
        <br></br>
        <p>
          Disse plastikk partiklene er vanskelig om ikke umulig å rydde opp, og små fisk og andre dyr i havet spiser disse partiklene når de i den tro at de er plankton, det er ikke bare de store plastikkbitene som er farlig for dyrelivet. I følge <a href="https://forskning.no/forurensning-hav-og-fiske-niva/hvor-farlig-er-egentlig-mikroplast/322061">forskning.no</a> så er partiklene så små at de kan gå gjennom cellemembraner, 
          dette kan ha uante og skumle konsekvenser for dyrelivet i havet. Plastikk i havet kan også ha en uforutsett konsekvens for oss mennesker også, 
          når fisk og andre hav-/sjødyr spiser disse plastpartiklene så kan det være at vi får i oss disse partiklene når vi spiser de hav-/sjødyrene. 
          Hvordan dette vil påvirke oss i det lange løp er usikkert, men lab-forsøk, hvor de har gitt dyr store mengder plastpartikler, viser at det har ført til hormonforstyrrelser, kreftdannelser slapphet og nedsatt reproduksjons evne.
        </p>
      </section>
      <section className={"articleContent"}>
        <h3>Korallrev og plastikk</h3>
        <p>
          Havet er kanskje det viktigste økosystemet på jorda, det produserer 50% av oksygenet vi trenger og mye av maten vi er avhengig av kommer fra havet. Mye av dyrelivet i havet er avhengig av korallrevet, som er døende som følge av forurensning og plastikk. Skulle korallrevene forsvinne så har det ikke bare en konsekvens for dyrelivet, det vil også gå utover oss mennesker. Korallrevene beskytter kystbyer mot erosjon og stormer, det er en kilde til mat og medisin. 
          Over 500 millioner mennesker er avhengig av korallrev, verden over. 
        </p>
        <p>
        Plasten kan bære på bakterier som er farlige for korallrevet, når de har vært i kontakt med plastikk er sjansen 20 ganger større for at de kan bli syke. Samtidig så kan plastikk være skarpt så det kan såre korallene og dermed gjøre de sårbare for sykdom.
        </p>
      </section>
      <section className={"articleContent"}>
        <h3>Tiltak</h3>
        <p>
          Plastikkforurensning har blitt et verdensomspennende problem, og vi trenger ulike tiltak for å gjøre situasjonen bedre.  Et mulig tiltak har en gruppe amerikanske og britiske forskere kommet opp med noe som kan øke mulighetene for å resirkulere plast. De har kombinert enzymet fra en bakterie med et annet enzym og kommet opp med et enzym som bryter ned plastikk til bygningsblokker, som man kan bruke igjen til å lage ny plast. Dette kan sterkt redusere plast avfallet.
          Flere selskaper har begynt arbeidet med å samle inn den allerede eksisterende plasten fra verdens hav.
        </p>
        <p>
         The Ocean Cleanup er ett av dem, de har satt seg mål at de skulle rydde opp i verdens største samling av plast, «The Great Pacific garbage patch». De har bygget en samlings mekanisme, som er 600 met er lang, og 3 meter under overflaten, som skal brukes til å samle store mengder plast og annen søppel, som så skal flyttes over på skip og fraktes vekk. 
        </p>
      </section>
    </div>
  );
}
