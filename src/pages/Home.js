import React from "react";
import placeHolder300 from "../images/placeHolder-300x300.svg";
import { FaArrowRight } from "react-icons/fa";
import TorvbyenPhoto from "../images/IMG_0787.png";
import InfographDesktop from "../images/infographic1.png";
import PlasticInOcean from "../images/oceanMan.jpeg";
import GlobalWarming from "../images/globalWarming.webp";

export default function Home() {
  return (
    <div className={"homePage"}>
      <h1 className={"homeTitle"}>Anbefalte artikler</h1>
      <div className={"homeGrid"}>
        <section className={"item"}>
          <img className={"itemPic"} src={TorvbyenPhoto} alt="" />
          <h2 className={"itemTitle"}>Sjokkbeskjed for Torvbyens ansatte</h2>
          <p>
            Den 24 mai så eksperter seg nødt til å stenge den delen av senteret
            for å undersøke bygningsmassen nærmere. Resulterte i at 5 butikker og
            en hovedinngang måtte stenge 
          </p>
          <p>Les <FaArrowRight/></p>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={InfographDesktop} alt="" />
          <h2 className={"itemTitle"}>Kort forklart: Renteøkningen</h2>
          <p>
            Folk flest ser kanskje på renteøkning som et rent negativt tema, hvor
            man da ender opp med å betale mer for lån, og dermed blir lommeboken
            trangere, men det er ikke uten grunn at renten økes og senkes.
          </p>
          <p>Les <FaArrowRight/></p>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={PlasticInOcean} alt="" />
          <h2 className={"itemTitle"}>Et hav av plast</h2>
          <p>
            Plastikk har også endel egenskaper når det kommer til å trekke til seg
            miljøgifter, og man er bekymret for at de som får i plast også får i seg
            disse miljøgiftene
          </p>
          <p>Les <FaArrowRight/></p>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={GlobalWarming} alt="" />
          <h2 className={"itemTitle"}>Planeten koker, er det for sent?</h2>
          <p>
            En grei analogi er jo folk som røyker, man vet at det er skadelig. En person begynner å røyke ti
            sigaretter per dag i en alder av 20, får beskjed av legen at de må slutte før de er 30 år gammel, eller
            så kan det ha dramatiske konsekvenser [...]
          </p>
          <p>Les <FaArrowRight/></p>
        </section>
        <section className={"item"}>
          <img className={"itemPic"} src={placeHolder300} alt="" />
          <h2 className={"itemTitle"}>Artikkel 5</h2>
          <p>

          </p>
          <p>Les <FaArrowRight/></p>
        </section>
      </div>
    </div>
  );
}
