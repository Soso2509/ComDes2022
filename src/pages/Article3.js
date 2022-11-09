import React from "react";
import Map from "../components/Map";
import Alming from "../images/intervjuPerson.jpg";
import Video from "../images/movingWater.mp4";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Article3() {
  return (
    <div className={"article3"}>
      <section className={"plasticBottle"}>
        <video loop autoPlay muted className={"plasticBottle"}>
          <source src={Video} type="video/mp4" />
        </video>
      </section>
      <h1 className={"article3Title"}>Et hav av plast</h1>
      <span className={"articleUnderTitle"}>Tekst av Joachim Fjell</span>
      <section className={"articleIntro"}>
        - Plastikk har også endel egenskaper når det kommer til å trekke til seg
        miljøgifter, og man er bekymret for at de som får i plast også får i seg
        disse miljøgiftene. Terje Franklin-Alming (33)
      </section>
      <br></br>
      <section className={"articleContent"}>
        <h3>Marinebiologen svarer</h3>
        <figure>
          <img className={"portrait"} src={Alming} alt="" />
          <figcaption>Foto : Privat{"    "}</figcaption>
        </figure>
        <p>
          Terje Franklin-Alming (33) er utdannet marinbiolog. 
        </p>
        <p className={"questionText"}>
          {" "}
          - Hva er farene ved at det er så mye plastikk i havet?{" "}
        </p>
        <p>
          {" "}
          - Den største bekymringen er at det skal komme inn i diverse dyr, vi
          har sett effekten av det på hval og særlig sjøfugl. Hvor det har ført
          til blokkeringer i tarmsystemer og de ikke kan få i seg næring og dør,
          det er det som kanskje synes best og gjør mest inntrykk på folk.{" "}
        </p>
        <p>
          {" "}
          Franklin-Alming sier videre at skulle zooplankton spise mikroplast,
          og bli mette av dette så kan de dø av mangel på næring. Zooplankton
          er grunnlaget for liv i havet, uten de kan hele systemet kollapse.{" "}
        </p>
        <p>
          {" "}
          - Plastikk har også en del egenskaper når det kommer til å trekke til
          seg miljøgifter, og man er bekymret for at de som får i plast også får
          i seg disse miljøgiftene. Selv om da plasten kanskje ikke er farlig
          for dem, så kan miljøutgiftene være skadelig.
        </p>
        {/* <p className={"questionText"}>
          {" "}
          - Hvordan tror du at mikroplast kan påvirke cellene til levende
          organismer?{" "}
        </p> */}
        <p>
          {" "}
          Han har ikke hørt at det er hvordan mikroplast kan påvirke celler til 
          levende organismer man er mest bekymret for. Når det kommer til 
          miljøgifter så vil det ende opp i cellene. Han tror ikke dette er det største problemet, 
          men kan ikke si det med sikkerhet. 
          Han sier også at han ikke er godt nok belest i dette feltet.{" "}
        </p>
        <p className={"questionText"}>
          {" "}
          - Hvordan vil plastikken i havet påvirke oss mennesker?
        </p>
        <p>
          {" "}
          - Vi spiser en del ting som lever i havet. Fisk ligger høyt oppe i
          næringsnettet, så alt akkumulerer seg i fisken.{" "}
        </p>
        <p>
          {" "}
          Han forklarer det slik, plasten zooplanktonen
          har fått i seg får fisken også i seg når den spiser zooplanktonen, denne
          plasten får også vi i oss når vi til slutt spiser fisken. Så om plasten har
          hatt en negativ effekt på fisken, er det mulig den har samme effekt
          på oss.{" "}
        </p>
        <p>
          {" "}
          Hvis plasten fisken har fått i seg har hatt store mengder miljøgifter, 
          så vil vi også få i
          oss disse miljøgiftene. Konsekvensene avhenger av hvilke miljøutgifter
          det er snakk om, men det kan være alt fra sykdom til i verste fall
          død, sier Franklin-Alming.{" "}
        </p>
        <p className={"questionText"}>
          {" "}
          - Så det er ikke plastikken i seg selv som er hovedproblemet?
        </p>
        <p>
          {" "}
          - Når det kommer til hvordan det kommer til å påvirke oss direkte så
          vil jeg tro at det er den større risikoen, vi spiser jo ikke
          innvollene til fisken.{" "}
        </p>
        <p>
          {" "}
          Franklin-Alming sier at via andre dyr, dyr som filtrerer vannet for
          å få i seg mat, som for eksempel blåskjell, de får i seg de minste
          partiklene. Mulige partikler er da mikroplastikk, da har dette blitt
          tatt opp av dyret, dette er en del av utfordringen.
        </p>
        <p>
          {" "}
          Vi får i oss et kredittkort vært av plast i året.
          Det virker ikke som om dette har noen korttidseffekt på menneskers
          helse, men langtidseffekten, hvordan dette vil utarte seg om 20-30 år
          det vet man ikke, sier han.{" "}
        </p>
        {/* <p className={"questionText"}>
          {" "}
          - Mulige tiltak for å redusere, evnt rydde opp i havet?
        </p> */}
        <p>
          {" "}
          Det er mange forskjellige tiltak som har blitt forsøkt gjennomført
          med varierende grad av suksess og andre konsekvenser. Ett av
          tiltakene vi vet har positiv effekt med veldig få negative bi-effekter
          er strandrydding.{" "}
        </p>
          <p>
            {" "}
            For å understreke hvor viktig det er å stoppe tilførselen av plast
            til havet er sier han «Hvis du kommer inn på badet og
            kranen står på og badekaret er tett, og det renner over, er ikke det første
            du gjør å spå vann, det første du gjør er å lukke
            krana».{" "}
          </p>
        <p>
          {" "}
          - Det er mange land som ikke har infrastrukturen til å håndtere
          avfallet sitt, man kaster søppelet på gaten, da blir dette tatt med av
          regnvann og havner til slutt på havet hvor nedbrytingen til mikroplast
          begynner
        </p>
        <p>
          {" "}
          Han påpeker at plast har sin rolle, det har sine
          fordeler, det holder mat fersk lengre og dermed reduserer mat
          avfallet for eksempel. Problemet er hvordan det blir kastet og
          hvordan plasten blir laget.{" "}
        </p>
        <p>
          - Det er viktig å ha gode systemer på plass for å håndtere og
          resirkulere denne plasten. Vi må bli flinkere til å bruke plast som
          lar seg resirkulere. Mye plast er vanskelig om ikke umulig å
          resirkulere på grunn av måten det er konstruert, det kan være bygd opp
          av flere typer plast.{" "}
        </p>
        {/* <p className={"questionText"}>
          {" "}
          - Jeg har hørt at forskere har kommet med en blanding av enzymer som
          kan bryte ned plast til sine byggeklosser, hva tenker du om det?
        </p> */}
        <p>
          {" "}
          NMU er en av de som jobber også med enzymer som
          kan bryte ned plast, de jobber med å bruke et enzym fra en
          type møll som kan bryte ned plast. Plast er hydrogen- og karbonatomer i
          lange kjeder, men siden disse kjedene er så lange er de vanskelige å
          bryte ned.{" "}
        </p>
        <p>
          {" "}
          Franklin-Alming sier videre at så lenge dette forskes videre på så kan
          det utvikles flere enzymer.{" "}
        </p>
        <p>
          {" "}
          - Dette må da implementeres i samfunnets resirkulerings system. Mange
          av de landene hvor plast problemer er mye større enn i Norge, så er
          hovedproblemet mangel på god infrastruktur for resirkulering.{" "}
        </p>
      </section>
      <section className={"articleContent"}>
        <h3>De store plastøyene</h3>
        <p>
          Et av de største klimautfordringene ved i dag er plastforsøpling, og
          spesielt fordi mye av forsøplingen før eller senere havner på havet. 
          Plastikk bruker mange år, opp til flere hundre år, på å brytes ned, og
          selv om de til slutt brytes ned så er de ikke ufarlig, snarere tvert
          imot.
          {" "}
        </p>
        <p>
          <a href="https://naturvernforbundet.no/plast/">
            I følge naturvernombudet <FaExternalLinkAlt className="linkIcon" />
          </a>
          så kaster vi, globalt, ca 6.4 millioner tonn søppel som finner veien
          til havet hvert år, det meste av dette er plastikk. Det har havnet så
          store mengder søppel, på havet at det har formet seg flere søppeløyer
          spredt på de ulike havene. Den største av de finner man i Stillehavet,
          den er{" "}
          <a href="https://www.nettavisen.no/artikkel/sopleoya-i-stillehavet/s/12-95-1623901">
            dobbelt så stor som Texas.
            <FaExternalLinkAlt className="linkIcon" />
          </a>
        </p>
        <p>
          Disse øyene er store nok til at de kan vises på et kart. 
          Kartet under viser hvor de største "øyene" befinner seg.
        </p>
      </section>
      <Map />
      <section className={"articleContent"}>
        <h3>Plastikkpartikler</h3>
        <p>
          Mikroplastikk er plastikkbiter på størrelse enn eller mindre enn 5
          millimeter. De kan være produsert i denne størrelsen, eller det kan
          være større plastikkbiter som har blitt brutt ned over tid, de kan
          brytes ned i enda mindre partikler, nanoplast.
        </p>
        <p>
          Disse plastikkpartiklene er vanskelig om ikke umulig å rydde opp, og
          små fisk og andre dyr i havet spiser disse partiklene når de i den tro
          at de er plankton, det er ikke bare de store plastikkbitene som er
          farlig for dyrelivet. I følge{" "}
          <a href="https://forskning.no/forurensning-hav-og-fiske-niva/hvor-farlig-er-egentlig-mikroplast/322061">
            forskning.no
            <FaExternalLinkAlt className="linkIcon" />
          </a>{" "}
          så er partiklene så små at de kan gå gjennom cellemembraner, dette kan
          ha uante og skumle konsekvenser for dyrelivet i havet. Plastikk i
          havet kan også ha en uforutsett konsekvens for oss mennesker også, når
          fisk og andre hav- og sjødyr spiser disse plastpartiklene så kan det
          være at vi får i oss disse partiklene når vi spiser de. Hvordan dette
          vil påvirke oss i det lange løp er usikkert, men lab-forsøk, hvor de
          har gitt dyr store mengder plastpartikler, viser at det har ført til{" "}
          <a href="https://forskning.no/forurensning-hav-og-fiske-niva/hvor-farlig-er-egentlig-mikroplast/322061">
            hormonforstyrrelser, kreftdannelser slapphet og nedsatt
            reproduksjonsevne
            <FaExternalLinkAlt className="linkIcon" />
          </a>
        </p>
      </section>
      <section className={"articleContent"}>
        <h3>Korallrev og plastikk</h3>
        <p>
          Havet er kanskje det viktigste økosystemet på jorda, det produserer
          50% av oksygenet vi trenger og mye av maten vi er avhengig av kommer
          fra havet. Mye av dyrelivet i havet er avhengig av korallrevet, som er
          døende som følge av forurensning og plastikk. Skulle korallrevene
          forsvinne så har det ikke bare en konsekvens for dyrelivet, det vil
          også gå utover oss mennesker. Korallrevene beskytter kystbyer mot
          erosjon og stormer, det er en kilde til mat og medisin.
          <a href="https://www.noaa.gov/education/resource-collections/marine-life/coral-reef-ecosystems">
            Over 500 millioner mennesker er avhengig av korallrev, verden over.
            <FaExternalLinkAlt className="linkIcon" />
          </a>
        </p>
        <p>
          Plasten kan bære på bakterier som er farlige for korallrevet, når de
          har vært i kontakt med plastikk er sjansen 20 ganger større for at de
          kan bli syke.{" "}
          <a href="https://forskning.no/forurensning-havforskning-plast/koraller-blir-lettere-syke-i-naerheten-av-plast/293531">
            Samtidig så kan plastikk være skarpt så det kan såre korallene og
            dermed gjøre de sårbare for sykdom
            <FaExternalLinkAlt className="linkIcon" />
          </a>
        </p>
      </section>
      <section className={"articleContent"}>
        <h3>Tiltak</h3>
        <p>
          Plastikkforurensning har blitt et verdensomspennende problem, og vi
          trenger ulike tiltak for å gjøre situasjonen bedre. Et mulig tiltak
          har en gruppe amerikanske og britiske forskere kommet opp med noe som
          kan øke mulighetene for å resirkulere plast. De har kombinert enzymet
          fra en bakterie med et annet enzym og kommet opp med et enzym som
          bryter ned plastikk til bygningsblokker, som man kan bruke igjen til å
          lage ny plast.{" "}
          <a href="https://verdensbestenyheter.no/nyheter/forskere-skaper-superenzym-som-spiser-plast/">
            Dette kan sterkt redusere plastavfallet
            <FaExternalLinkAlt className="linkIcon" />
          </a>
          . Flere selskaper har begynt arbeidet med å samle inn den allerede
          eksisterende plasten fra verdens hav.
        </p>
        <p>
          <a href="https://www.nettavisen.no/nyheter/denne-skal-kunne-rydde-havet-for-tonnevis-med-plast/s/12-95-3423857420">
            The Ocean Cleanup
            <FaExternalLinkAlt className="linkIcon" />
          </a>{" "}
          er ett av dem, de har satt seg mål at de skulle rydde opp i verdens
          største samling av plast, «The Great Pacific garbage patch». De har
          bygget en samlingsmekanisme, som er 600 met er lang, og 3 meter under
          overflaten, som skal brukes til å samle store mengder plast og annen
          søppel, som så skal flyttes over på skip og fraktes vekk.
        </p>
      </section>
    </div>
  );
}
