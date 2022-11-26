import { FaExternalLinkAlt } from "react-icons/fa";
import React, { useState } from "react";
import { TimelineWorld } from "../components/TimelineWorld";

import polarBear from "../images/polarBear.jpg";
import seaTurtle from "../images/seaTurtle.jpg";
import coral from "../images/coralReef.jpg";
import fish from "../images/fish.jpg";

import arktis from "../images/arktis.png";
import verdenshavene from "../images/verdenshavene.png";
import australia from "../images/australia.png";

import iG1M from "../images/refleksjonMobile.png";
import iG1D from "../images/refleksjonDesktop.png";
import iG2M from "../images/stralerMobile.png";
import iG2D from "../images/stralerDesktop.png";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../components/Modal";
import ModalButton from "../components/ModalButton";

export default function ArticleLong() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={"article"}>
      <section className={"article5Area"}>
        <section className={"isbjorn"}></section>
        <section className={"articleContent"}>
          <h1 className={"article5Title"}>Miljø</h1>
          <span className={"articleUnderTitle"}>
            Tekst av Joachim Fjell
          </span>
          <section className={"articleIntro"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </section>
          <article>
            <img className={"geoImage"} src={arktis} alt="" />
            <figure>
              <img
                className={"portrait"}
                src={polarBear}
                alt="Maleri av en isbjørn"
              />
              <figcaption>
                Illustrasjon: {"    "}
                <a href="https://pngimg.com/download/23503">
                  pngimg.com <FaExternalLinkAlt className="linkIcon" />
                </a>
              </figcaption>
            </figure>
            <h2>Overskrift</h2>
            <div>
              {/* Modal-kode hentet fra https://github.com/trananhtuat/react-modal */}
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>Fakta om isbjørn</h2>
                </ModalHeader>
                <ModalBody>
                  <ul style={{ textAlign: "justify"}}>
                    <li style={{padding:"0.5rem"}}>Isbjørnen er det største land-rovdyret i verden. </li>
                    <li style={{padding:"0.5rem"}}>De kan bli opptil 260cm lange og 170cm høy, hvor hannen kan veie så mye som 800kg og hunner kan veie opp 350kg.</li> 
                    <li style={{padding:"0.5rem"}}>I motsetning til andre bjørner så spiser isbjørner nesten utelukkende bare kjøtt.</li> 
                    <li style={{padding:"0.5rem"}}>De holder til stort sett nord for den Nordlige polarsirkelen, i områdene i Arktis hvor det er havis, på Svalbard, Alaska, Canada, Russland og Grønland.</li> 
                    <li style={{padding:"0.5rem"}}>De er ikke regnet som utrydningstruet, ikke enda, men de er regnet som sårbare. Det er antatt å være rundt <a href="https://snl.no/isbj%C3%B8rn">25 000 isbjørner i verden < FaExternalLinkAlt className="linkIcon"/></a></li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={() => setShowModal(false)}>
                    {" "}
                    Close{" "}
                  </ModalButton>
                </ModalFooter>
              </Modal>
            </div>
            <p>
              De siste årene har isbjørnen Asbjørn merket store endringer i hjemområdet sitt, på havisen i Arktis. Han har tilbrakt hele livet sitt i dette området, fra han var en liten bjørnunge i hiet til moren til han våget seg ut på egenhånd. 
              Han har alltid hatt store områder å boltre seg på, med lett tilgang på god sel når han ble sulten. Men det siste årene har han hatt betydelig mindre område å gå på, og han får tak i betydelig mindre mat enn før. 
              Det har blitt så ille at Asbjørn ikke har spist ordentlig på flere uker, han kjenner ikke lenger igjen sitt eget speilbilde. Hva kommer denne endringen av? Og er Asbjørn den eneste som sliter?
            </p>
            <p>
              Amundsen er professor i biologi ved NTNU, han jobber med atferd og økologi, akkurat nå jobber han med klimaeffekt og småfisk. 
            </p>
            <p>
              Amundsen sier videre at isbjørnen er sterkt knyttet til isen, og er derfor spesielt utsatt for temperatur økningen, sier Amundsen videre. De kan ikke jakte på isen som før, med mindre og mindre sjøis, 
              så må isbjørnen i større grad gå på land. 
            </p>
            <p>
              Reinsdyrene på Svalbard er et annet Arktisk dyr som har blitt påvirket av temperaturøkningen, og på en overraskende måte sier han. 
              Forskere har oppdaget at med perioder med mildvær om vinteren kan føre til at snøen smelter og igjen fryser så det blir et hardt dekke oppå vegetasjonen. 
              Dette sier Amundsen har ført til at reinsdyrene på Svalbard sliter med å få tak i maten på vinteren. Vanligvis så ville de lett gravd seg gjennom snøen. 
              Dette er et problem som har dukket opp de siste årene og Amundsen mener dette har en sammenheng med klimaendringene. 
            </p>
            <p>
              Amundsen spekulerer at det blir store konsekvenser for isbjørnen om isen skulle bli borte.
            </p>
            <p>
              -	Det er jo sannsynlig at det blir mye mindre isbjørn, og at isbjørnen blir begrenset til områder på land hvor den kan leve, sier Amundsen.
            </p>
            <p>
              Videre ser han at isbjørner vil nok trekke mer mot bebodde områder på leting etter mat. 
              Han viser også til hypoteser at isbjørnen vil trekke lenger og lenger på land, nærmere folk og andre bjørnearter, som grizzlybjørn. Som følge av det er en det bekymring for hybridisering mellom grizzlybjørn og isbjørn sier Amundsen. 
            </p>
            <br></br>
            <h2>Overskrift</h2>
            <p>
              Om isen smelter som den har gjort de siste årene, tror man at isbjørnbestanden vil bli redusert med 
              <a href="https://www.regjeringen.no/no/tema/svalbard-og-polaromradene/innsiktsartikler-polaromradene/miljovern-og-miljoutfordringer-i-nordomradene/id2076662/"> to tredjedeler innen de neste 30 årene.< FaExternalLinkAlt className="linkIcon"/></a> 
            </p>
            <ModalButton onClick={() => setShowModal(true)}>Isbjørn-fakta (trykk for å lese)</ModalButton>
            <p>
              De jakter på havisen, isbjørnen spiser mest sel og den holder til på havisen. De reiser mellom hiområdet sitt og jaktområdet, over isen. Når isen smelter så blir det vanskeligere for de å jakte, også forflytte seg. 
              Det betyr altså at de vil <a href="https://www.npolar.no/arter/isbjorn/"> slite med å få tak i mat og kan få problemer med å reprodusere om de ikke kommer seg til hiområdene sine < FaExternalLinkAlt className="linkIcon"/></a>
            </p>
            <p>
              Issmeltingen kan også føre til at selene vil slite,  
              de er avhengig av snøhuler for å formere seg, beskytte selungene, hamskifte og for å hvile. Når isen smelter så påvirker dette deres mulighet til å lage disse hulene, 
              og dermed kan de <a href="https://www.earthreminder.com/how-does-global-warming-affect-seals/"> resultere i færre av dem og dermed mindre mat til isbjørn. < FaExternalLinkAlt className="linkIcon"/></a>
            </p>
            <p>
              Dette betyr at verdens største land-rovdyr er svært utsatt for temperaturøkningene. De er en av dyrerasene som kan dø ut som et er resultat av klimaendringene, i dette tilfellet, global oppvarming. 
            </p>
            <TimelineWorld />
            <p>
              Det er tydelig at planeten stadig blir varmere, siden 1850 har gjennomsnittstemperaturen <a href="https://energiogklima.no/klimavakten/global-temperatur/"> økt med 1,25°C grader. < FaExternalLinkAlt className="linkIcon"/></a>
            </p>
            <p>
              Temperaturen på Arktis øker raskere enn resten av verden. Hvordan dette vil påvirke Arktis i framtiden er tydelig og skremmende, for hvert tiår smelter omtrent 13% av isen, 
              hvor den tykkeste og eldste isen har smeltet med nesten 95% de siste 30 årene. Isen på Arktis, og alle andre store områder med is, som isbreer, har en viktig rolle når det kommer til å kjøle ned planeten, 
              snøen og isen reflekterer mye solens varmestråler ut i verdensrommet igjen. Når isen smelter så blir det mindre overflate som reflekterer strålene som igjen gjør at temperaturen øker, og enda mer is smelter, 
              resultatet er <a href="https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone"> en ond sirkel. < FaExternalLinkAlt className="linkIcon"/></a>
            </p>
            <br></br>
            <img
              className={"infographMobile"}
              src={iG1M}
              alt="Infografikk som viser farene med at isbreene smelter"
            />
            <img
              className={"infographDesktop"}
              src={iG1D}
              alt="Infografikk som viser farene med at isbreene smelter"
            />
            <br></br>
            <p>
              Ifølge forskning så er det forventet at Arktis vil være helt fri for is om sommeren i 2050, selv om vi skulle greie redusere våre utslipp av drivhusgassene. 
              Den samme forskningen viser at om vi skulle fortsetter med høye utslipp av drivhusgasser er det fullt mulig at <a href="https://climate.esa.int/en/projects/sea-ice/news-and-events/news/simulations-suggest-ice-free-arctic-summers-2050/">Arktis vil få isfrie vintere også. < FaExternalLinkAlt className="linkIcon"/></a>
              Artikkelen er basert på <a href="https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2019GL086749"> denne forskningsartikkelen. < FaExternalLinkAlt className="linkIcon"/></a>
            </p>
            <p>
              Blant klimaendringene så er det mest fokus på globaloppvarming, men det er ikke den eneste, og isbjørnen er ikke de eneste som sliter.
            </p>
            <p>
              Asbjørn har venner verden over som sliter som følge av klimaendringene, en av de er skilpadden Frank som holder til like utenfor Australia, i «The Great Barrier Reef».
            </p>
          </article>
        </section>
        <section className={"articleContent"}>
          <article>
            <img className={"geoImage"} src={verdenshavene} alt="" />
            <h2>Overskrift</h2>
            <figure>
              <img
                className={"portrait"}
                src={seaTurtle}
                alt="Maleri av en skilpadde"
              />
              <figcaption>
                Illustrasjon: {"    "}
                <a href="https://fineartamerica.com/profiles/irina-sztukowski">
                  Irina Sztukowski <FaExternalLinkAlt className="linkIcon" />
                </a>
              </figcaption>
            </figure>
            <p>
              Frank har levd i «The Great Barrier Reef» hele livet. Han har svømt, lekt og gjemt seg i korallene med vennene sine og søsknene sine siden han ble klekt. 
              Han fylte nylig 45 og kan se hvordan korallrevet har forandret seg siden han var ung. Når han var ung så kunne han ikke se enden på revet, i dag så er den et steinkast unna. 
              Den har blitt mye mindre og mistet mye av fargen, det ser ut som det visner bort, han er bekymret for sin familie og barn om hvordan de vil klare seg om dette fortsetter.
            </p>
            <figure>
              <img className={"portrait"} src={coral} alt="Maleri av koraller" />
              <figcaption>
                Illustrasjon: {"    "}
                <a href="https://chloez-battle.blogspot.com/2021/06/coral-reef-painting-watercolor-coral.html">
                  Ukjent <FaExternalLinkAlt className="linkIcon" />
                </a>
              </figcaption>
            </figure>
            <p>
              Korallrevet spiller en viktigrolle for dyreartene i havet, sier Amundsen, med et biologisk mangfold som er større enn en regnskog. 
            </p>
            <p>
              -	Hvis du tar en bit av et korallrev på størrelse med en fotballbane, så er det flere fiskearter der enn det er dyrearter i en bit av Amazonas på tilsvarende fotballbane, sier Amundsen
            </p>
            <p>
              Han informerer om at korallrevene inneholder omtrent 25% av alle havets fiskeslag, 1 million dyrearter og omtrent 10% av verdens dyrearter. 
            </p>
            <div>
                {/* Modal-kode hentet fra https://github.com/trananhtuat/react-modal */}
                <Modal
                  show={showModal}
                  setShow={setShowModal}
                  // hideCloseButton
                >
                  <ModalHeader>
                    <h2>Fakta om isbjørn</h2>
                  </ModalHeader>
                  <ModalBody>
                    <ul style={{ textAlign: "justify"}}>
                      <li style={{padding:"0.5rem"}}>Isbjørnen er det største land-rovdyret i verden. </li>
                      <li style={{padding:"0.5rem"}}>De kan bli opptil 260cm lange og 170cm høy, hvor hannen kan veie så mye som 800kg og hunner kan veie opp 350kg.</li> 
                      <li style={{padding:"0.5rem"}}>I motsetning til andre bjørner så spiser isbjørner nesten utelukkende bare kjøtt.</li> 
                      <li style={{padding:"0.5rem"}}>De holder til stort sett nord for den Nordlige polarsirkelen, i områdene i Arktis hvor det er havis, på Svalbard, Alaska, Canada, Russland og Grønland.</li> 
                      <li style={{padding:"0.5rem"}}>De er ikke regnet som utrydningstruet, ikke enda, men de er regnet som sårbare. Det er antatt å være rundt <a href="https://snl.no/isbj%C3%B8rn">25 000 isbjørner i verden < FaExternalLinkAlt className="linkIcon"/></a></li>
                    </ul>
                  </ModalBody>
                  <ModalFooter>
                    <ModalButton onClick={() => setShowModal(false)}>
                      {" "}
                      Close{" "}
                    </ModalButton>
                  </ModalFooter>
                </Modal>
              </div>
              <p>
                Amundsen har forsket på korallrev og har sett hvordan de blir påvirket. Han sier hvis temperaturen øker med flere grader på land så vil det skje en endring, men sakte og jevnt. 
                For korallrevene er det ikke slik, forteller han videre, når de blir utsatt for høyere temperaturer enn den de er tilpasset så skjer det som Amundsen kaller <ModalButton onClick={() => setShowModal(true)}>Korallbleking (trykk for å lese)</ModalButton>. 
                De vil dø hvis det ikke blir kaldere i løpet av få måneder, sier Amundsen. Det tar tid før de kommer tilbake, det kan ta opp til 15 år. 
              </p>
              <p>
                Gjennom sin egen forskning så har han sett hvor fort korallrev kan forandre seg. 
              </p>
              <p>
                -	Jeg har forsket på korallrev som har vært utrolig rike, også har jeg sett hva som har skjedd etter en hetebølge, som vi ser i dag, og som det blir flere og flere av, 
                plutselig så er 80-90% av korallrevet døde året etter, da tar det lang tid før det kommer tilbake. 
                Kommer det en ny hetebølge tilbake så kan de som evnt ikke døde under forrige stå i fare for å dø, sier Amundsen
              </p>
              <p>
                Ifølge Amundsen så er korallene ikke så gode til å tilpasse seg den nye temperaturen. Det er forsøk på å utvikle nye koraller sier han, koraller som skal tåle varmere vann, 
                men han sier også det ikke er mye vi kan gjøre for å redde korallene i dag, annet enn å begrense temperaturøkningen.
              </p>
              <br></br>
                <img
                  className={"infographMobile"}
                  src={iG2M}
                  alt="Infografikk som viser hvordan klimagassutslipp fører til temperaturøkning"
                />
                <img
                  className={"infographDesktop"}
                  src={iG2D}
                  alt="Infografikk som viser hvordan klimagassutslipp fører til temperaturøkning"
                />
              <br></br>
              <p>
                Selv om vi skulle greie å stoppe temperaturøkningen i dag, så sier han, at det vil ta flere tiår før temperaturen har stabilisert seg, så vi vil fortsatt føle på følgene de første par tiårene.
              </p>
              <p>
                Amundsen sier at det helt klart største problemet for korallrevene i dag, er temperaturøkningene. 
              </p>
            </article>
          </section>
        <section className={"parallax5"}>
          <div className={"textBox"}>
            <p>
              -	Det forventes at den skal over det vi kaller blekningsterskelen. Hvor vi får det som en del forskere kaller «annual sever bleaching», det betyr årlig kritisk blekning, ofte med korall død som følge, 
              og hvis det skjer for ofte så får det ikke tid til å reetablere seg. 
            </p>
          </div>
        </section>
        <section className={"articleContent"}>
          <article>
            <p>
              Det er ikke bare temperaturen som har påvirket korallene gjennom tidene påpeker Amundsen, samtidig som han understreker at det er den største trusselen i dag og i fremtiden, 
              noe som har skadet korallene gjennom tidene er utslipp av næringsstoffer, som nitrogen og fosfor. Han sier at dette komme blant annet fra utslipp av kloakk, og fra store elver som renner forbi gårder og skogbruksområder, 
              dette ender til slutt i havene. 
            </p>
            <p>
              Vannet blir grumsete, det blir utviklet fint trådete alger. Han kaller det en slags gjødsling. En annen faktor er nedslam sier Amundsen, også kalt sedimentering, 
              små partikler som føres ut på havet av elver, og legger seg som et teppe oppå korallrev, og gir grobunn til annen alger som vokser over korallene. Han sier at dette har ført til korallrevene i verden har blitt ødelagt, 
              og i løpet av de siste 100 årene etter at Europeerne kom til Australia forteller Amundsen, så har rundt halvparten av «The Great Barrier Reef» blitt ødelagt. 
            </p>
            <p>
              Når det kommer til fremtiden for korallrev så understreker han at ingen har noen fasit på hva som kan skje, men forskning har skapt et mørkt bilde. Han sier at mesteparten av verden rev er truet, 
              eller kan bli ødelagt ved 1.5 - 2 graders oppvarming, dette kan gå fort sier Amundsen, noen få tiår spår han.
            </p>
            <p>
              Han tror ikke at alle rev vil bli borte, men han mener korallene kan være den naturtypen som er mest truet, også viser han til temperatur målene som forskerne har satt, 1.5 grader, 2 grader.
            </p>
            <p>
              -	Nå snakker forskerne om 2.5 grader, og hvis de har rett så kommer de fleste korallrevene til å være enten helt ødelagt eller veldig ødelagt, sier Amundsen
            </p>
            <p>
              Amundsen påpeker at dette vil ha store konsekvenser for dyrelivet i havet.
            </p>
          </article>
        </section>
        <section className={"parallax5"}>
          <div className={"textBox"}>
            <p>
              -	Som jeg fortalte så har revene ca 1 million arter, som er ca 10% av alle artene på kloden. 
              Av fisk så har revene ca 25% av alle marine fiskearter. 
              Jeg tror ikke noen kan si sikkert hvor stor andel av disse artene som vil klare seg uten korallrev, men veldig mange er tilpasset lit på revet og vil slite, 
              mange vil dø ut, andre vil bli mye mindre tallrike. 
            </p>
          </div>
        </section>

            <div>
              {/* Modal-kode hentet fra https://github.com/trananhtuat/react-modal */}
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>Fakta om isbjørn</h2>
                </ModalHeader>
                <ModalBody>
                  <ul style={{ textAlign: "justify"}}>
                    <li style={{padding:"0.5rem"}}>Isbjørnen er det største land-rovdyret i verden. </li>
                    <li style={{padding:"0.5rem"}}>De kan bli opptil 260cm lange og 170cm høy, hvor hannen kan veie så mye som 800kg og hunner kan veie opp 350kg.</li> 
                    <li style={{padding:"0.5rem"}}>I motsetning til andre bjørner så spiser isbjørner nesten utelukkende bare kjøtt.</li> 
                    <li style={{padding:"0.5rem"}}>De holder til stort sett nord for den Nordlige polarsirkelen, i områdene i Arktis hvor det er havis, på Svalbard, Alaska, Canada, Russland og Grønland.</li> 
                    <li style={{padding:"0.5rem"}}>De er ikke regnet som utrydningstruet, ikke enda, men de er regnet som sårbare. Det er antatt å være rundt <a href="https://snl.no/isbj%C3%B8rn">25 000 isbjørner i verden < FaExternalLinkAlt className="linkIcon"/></a></li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={() => setShowModal(false)}>
                    {" "}
                    Close{" "}
                  </ModalButton>
                </ModalFooter>
              </Modal>
            </div>

            <div>
              {/* Modal-kode hentet fra https://github.com/trananhtuat/react-modal */}
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>Fakta om isbjørn</h2>
                </ModalHeader>
                <ModalBody>
                  <ul style={{ textAlign: "justify"}}>
                    <li style={{padding:"0.5rem"}}>Isbjørnen er det største land-rovdyret i verden. </li>
                    <li style={{padding:"0.5rem"}}>De kan bli opptil 260cm lange og 170cm høy, hvor hannen kan veie så mye som 800kg og hunner kan veie opp 350kg.</li> 
                    <li style={{padding:"0.5rem"}}>I motsetning til andre bjørner så spiser isbjørner nesten utelukkende bare kjøtt.</li> 
                    <li style={{padding:"0.5rem"}}>De holder til stort sett nord for den Nordlige polarsirkelen, i områdene i Arktis hvor det er havis, på Svalbard, Alaska, Canada, Russland og Grønland.</li> 
                    <li style={{padding:"0.5rem"}}>De er ikke regnet som utrydningstruet, ikke enda, men de er regnet som sårbare. Det er antatt å være rundt <a href="https://snl.no/isbj%C3%B8rn">25 000 isbjørner i verden < FaExternalLinkAlt className="linkIcon"/></a></li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={() => setShowModal(false)}>
                    {" "}
                    Close{" "}
                  </ModalButton>
                </ModalFooter>
              </Modal>
            </div>

        <section className={"articleContent"}>
          <article>
            <img className={"geoImage"} src={verdenshavene} alt="" />
            <h2>Overskrift</h2>
            <p>
              Korallrevene blir ofte omtalt som havets regnskog, grunnet sitt biologiske mangfold er de uvurderlige for biomangfoldet på kloden. 
              Vi antar hvor mange forskjellige arter som er å finne i korallrevene, forskerne ved ikke, det blir hele tiden oppdaget nye arter. 
              Som nevnt tidligere i artikkelen så lever korallene i en symbiose med visse alger, disse algene lever inni, og blir beskyttet av korallene, 
              og via fotosyntese så blir det <a href="https://education.nationalgeographic.org/resource/coral-reefs"> produserer algene mat til korallene.<FaExternalLinkAlt className="linkIcon" /></a>
            </p>
            <p>
              Korallene består av kalkskjelleter, som kommer fra koralldyr og andre organismer som har kalkalger. Korallene sitter oppå gamle alger sine kalkskall, det er slik de vokser. 
              Korallrevene kan deles inn i to hovedgrupper, <ModalButton onClick={() => setShowModal(true)}>Tropisk korallrev (trykk for å lese)</ModalButton> og 
              <ModalButton onClick={() => setShowModal(true)}>Kaldtvannskorallrev (trykk for å lese)</ModalButton>
            </p>
          </article>
        </section>
        <section className={"articleContent"}>
          <article>
            <h2>Havdyr</h2>
            <figure>
              <img className={"portrait"} src={fish} alt="Maleri av to fisker" />
              <figcaption>
                Illustrasjon: {"    "}
                <a href="https://theartsherpa.com/videos/1362/clownfish-easy-how-to-paint-watercolor-step-by-step-the-art-sherpa">
                  The Art Sherpa <FaExternalLinkAlt className="linkIcon" />
                </a>
              </figcaption>
            </figure>
            <p>
              Sam fortalte at hun hadde vært ute og utforsket og svømt bort fra stimen sin, hun var, etter noen minutter så ser hun noe stort som farer over hodet hennes som beveger seg i retning stimen hennes. 
              Hun svømmer så raskt hun kan tilbake, men rekker ikke fram i tide, hun ser hele stimen hennes, alle hun kjenner, bli fanget og blir dratt vekk. 
              Ensom, alene og redd har hun svømt rundt, i villrede på hva hun skal gjøre nå.
            </p>
            <p>
              Amundsen forteller at en av de største miljøutfordringene for dyrene i havet er overfiske. Han sier at fiskebestanden er enten overbeskattet, eller beskattet på ikke bærekraftige måter.
            </p>
            <p>
              -	Klassiske eksempler er hai fiske, med haifinne industri, veldig mange haiarter er sterkt truet på verdensbasis i dag.
            </p>
            <p>
              Han informerer om at det er veldig mange fiskearter som er sterkt nedfisket i dag. 
            </p>
            <p>
              Når det kommer til regulering og lover om fiske så er det svært vanskelig å overholde, spesielt i internasjonalt farvann.
            </p>
            <p>
              -	Havet er et felles matfat på en måte, sånn at på mange steder på kloden så er det villvest og fritt frem for å fiske, med lite regulering, sier Amundsen. 
            </p>
            <br></br>
            <h2>Overskrift</h2>
            <p>
              Det er ikke nødvendigvis negativt med fisking, det er en viktig matkilde for mange, problemet kommer når vi fisker for mye og for ofte slik at bestanden ikke rekker å bygge seg opp igjen. 
              Problemet er spesielt stort når det kommer til alle <a href="https://www.worldwildlife.org/threats/overfishing">de ekstra havdyrene som fiskerne plukker opp mens de er på leting etter en type fisk. <FaExternalLinkAlt className="linkIcon" /> </a>
            </p>
            <p>
              Dette forstyrrer den naturlige og skjøre økologiske balansen i havet, med mindre av de små fiskene så er det mindre mat til de større hav dyrene som igjen kan føre til at det blir færre av de større dyrene. Alt henger sammen. 
            </p>
            <p>
              Man kan spore overfisking tilbake til 1800 tallet. Det startet med hvalfiske for olje, som førte til at de nesten ble totalt utryddet i noen deler av verden. 
              På 1900 tallet økte etterspørselen etter noen fiskearter i Amerika som førte til at de nesten ble utryddet, dette var blant annet sardiner. 
              Fisk er en billig, sunt og lett tilgjengelig kilde på mat, derfor ble dette mye av søkelyset på 1900 tallet. Innen 2003 så er det rapportert at det bare var rundt 10% av de store fiskene igjen i verdens havene, 
              sammenlignet med så mange det var før industrialiseringen. Siden det nå var langt mindre av de store fiskene i havene så fokuserte fiskeriene på de mindre fiskene, som var katastrofalt for den biologiske balansen. 
            </p>
            <p>
              Som et eksempel så kan man se på hvordan det påvirket korallrevet, det er fisk bland korallene som spiser alger og dermed hjelper til med å holde korallene sunne. 
              Ved å fiske for mange av disse så kan det virkelig svekke korallene og gjøre de skjøre. 
              Samtidig så kan <a href="https://www.nationalgeographic.com/environment/article/critical-issues-overfishing">utstyret fiskerne bruker skade korallene. <FaExternalLinkAlt className="linkIcon" /></a> 
            </p>
          </article>
        </section>
      </section>
    </div>
  );
}
