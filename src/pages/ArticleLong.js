import React from "react";
import { Timeline } from "../components/Timeline";

import polarBear from "../images/polarBear.jpg";
import seaTurtle from "../images/seaTurtle.jpg";
import babyPanda from "../images/babyPanda.jpg";
import coral from "../images/coralReef.jpg";
import whale from "../images/whale.jpg";

import arktis from "../images/arktis.png";
import kina from "../images/kina.png";
import australia from "../images/australia.png";

import iG1M from "../images/refleksjonMobile.png";
import iG1D from "../images/refleksjonDesktop.png";
import iG2M from "../images/stralerMobile.png";
import iG2D from "../images/stralerDesktop.png";

import Video from "../images/stormVideo.mp4";
import Map from "../components/Map";
import Accordion from "../components/Accordion";

export default function ArticleLong() {
  const aTitle1 = "Isbjørn (trykk) ";
  const aContent1 = "lorem";

  const aTitle2 = "I ";
  const aContent2 = "cursed";
  return (
    <div className={"article"}>
      <section className={"article5Area"}>
        <section className={"isbjorn"}></section>
        <section className={"articleContent"}>
          <h1 className={"article5Title"}>Miljø</h1>
          <span className={"articleUnderTitle"}>
            Lorem ipsum dolor sit amet
          </span>
          <section className={"articleIntro"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </section>
          <figure>
            <img className={"portrait"} src={polarBear} alt="" />
          </figure>
          <div className="accordion">
            <Accordion title={aTitle1} content={aContent1} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis. Nunc sed augue
            lacus viverra vitae congue eu consequat. Donec pretium vulputate
            sapien nec sagittis aliquam malesuada. Magna fermentum iaculis eu
            non diam phasellus. Condimentum mattis pellentesque id nibh tortor.
          </p>
          <div className="accordion">
            <Accordion title={aTitle2} content={aContent2} />
          </div>
          <img className={"infographMobile"} src={iG1M} alt="" />
          <img className={"infographDesktop"} src={iG1D} alt="" />
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis. Nunc sed augue
            lacus viverra vitae congue eu consequat. Donec pretium vulputate
            sapien nec sagittis aliquam malesuada. Magna fermentum iaculis eu
            non diam phasellus. Condimentum mattis pellentesque id nibh tortor.
          </p>
          <img className={"infographMobile"} src={iG2M} alt="" />
          <img className={"infographDesktop"} src={iG2D} alt="" />
          <Timeline />
          <Map />
          <img className={"testBilde"}src={kina} alt="" />
        </section>
        <section className={"parallax5"}>
          <div className={"textBox"}>
            <h2>Overskrift</h2>
            <figure>
              <img className={"portrait"} src={coral} alt="" />
            </figure>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
              nec feugiat nisl pretium. Adipiscing enim eu turpis egestas
              pretium aenean pharetra magna ac. Scelerisque felis imperdiet
              proin fermentum. Duis at tellus at urna condimentum mattis.
            </p>
          </div>
        </section>
        <section className={"articleContent"}>
          <img className={"testBilde"}src={arktis} alt="" />
          <h2>Overskrift</h2>
          <figure>
            <img className={"portrait"} src={babyPanda} alt="" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
        </section>
        <section className={"articleContent"}>
          <img className={"testBilde"}src={australia} alt="" />
          <h2>Overskrift</h2>
          <figure>
            <img className={"portrait"} src={seaTurtle} alt="" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
          <video loop autoPlay muted className={"plasticBottle"}>
            <source src={Video} type="video/mp4" />
          </video>
        </section>
      </section>
    </div>
  );
}
