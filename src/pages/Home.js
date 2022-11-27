import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import TorvbyenPhoto from "../images/IMG_0787.png";
import InfographDesktop from "../images/infographic1.png";
import PlasticInOcean from "../images/oceanMan.jpeg";
import GlobalWarming from "../images/globalWarming.webp";
import ClimateImage from "../images/refleksjonDesktop.png"

export default function Home() {
  return (
    <div className={"homePage"}>
      <h1 className={"homeTitle"}>Anbefalte artikler</h1>
      <div className={"homeGrid"}>
        <section className={"item"}>
          <img className={"itemPic"} src={TorvbyenPhoto} alt="" />
          <h2 className={"itemTitle"}>Sjokkbeskjed for Torvbyens ansatte</h2>
          <p>
            Nordmandseth jobber for Eurosko i Torvbyen Fredrikstad. Den 24 mai fikk hun beskjed om at de skulle jobbe ut dagen,
            men at de måtte stenge for en periode mens det ble gjort undersøkelser i Torvbyens bygningmasse.
          </p>
          <Link to="/sjokkbeskjed-for-torvbyens-ansatte">
            <p>
              Les <FaArrowRight />
            </p>
          </Link>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={InfographDesktop} alt="" />
          <h2 className={"itemTitle"}>Kort forklart: Renteøkningen</h2>
          <p>
            Folk flest ser kanskje på renteøkning som et rent negativt tema,
            hvor man da ender opp med å betale mer for lån, og dermed blir
            lommeboken trangere, men det er ikke uten grunn at renten økes og
            senkes.
          </p>
          <Link to="/renteokning">
            <p>
              Les <FaArrowRight />
            </p>
          </Link>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={PlasticInOcean} alt="" />
          <h2 className={"itemTitle"}>Et hav av plast</h2>
          <p>
            Plastikk har også endel egenskaper når det kommer til å trekke til
            seg miljøgifter, og man er bekymret for at de som får i plast også
            får i seg disse miljøgiftene.
          </p>
          <Link to="/et-hav-av-plast">
            <p>
              Les <FaArrowRight />
            </p>
          </Link>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={GlobalWarming} alt="" />
          <h2 className={"itemTitle"}>Planeten koker, er det for sent?</h2>
          <p>
            En grei analogi er jo folk som røyker, man vet at det er skadelig.
            En person begynner å røyke ti sigaretter per dag i en alder av 20,
            får beskjed av legen at de må slutte før de er 30 år gammel, eller
            så kan det ha dramatiske konsekvenser [...]
          </p>
          <Link to="/planeten-koker-er-det-for-sent">
            <p>
              Les <FaArrowRight />
            </p>
          </Link>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={ClimateImage} alt="" />
          <h2 className={"itemTitle"}>En moderne dyrevise</h2>
          <p>
            Det er ei lita dyrevise som du nå får høre, om dyrene i verden og hvor lite de kan gjøre ...            
          </p>
          <Link to="/en-moderne-dyrevise">
            <p>
              Les <FaArrowRight />
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}
