import React from "react";
import { Timeline } from "../components/Timeline";
import isBjorn2 from "../images/isBjorn2.jpg";
import Video from "../images/stormVideo.mp4";
import Map from "../components/Map";
import Accordion from "../components/Accordion";

export default function ArticleLong() {
  const aTitle1 = "j";
  const aContent1 = "hælla";

  const aTitle2 = "I";
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
            <img className={"portrait"} src={isBjorn2} alt="" />
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
          <Timeline />
          <Map />
        </section>
        <section className={"parallax5"}>
          <div className={"textBox"}>
            <h2>Overskrift</h2>
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
          <h2>Overskrift</h2>
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
