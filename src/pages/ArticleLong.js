import React from "react";
import { Timeline } from "../components/Timeline";
import Map from "../components/Map";

export default function ArticleLong() {
  return (
     <div className={"article"}>
      <section className={"article5Area"}>
        <section className={"isbjorn"}></section>
        <section className={"articleContent"}>
          <h1 className={"article5Title"}>Miljø</h1>
          <span className={"articleUnderTitle"}>Lorem ipsum dolor sit amet</span>
          <section className={"articleIntro"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
            platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat
            nisl pretium. Adipiscing enim eu turpis egestas pretium aenean
            pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis
            at tellus at urna condimentum mattis. Nunc sed augue lacus viverra
            vitae congue eu consequat. Donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Magna fermentum iaculis eu non diam phasellus.
            Condimentum mattis pellentesque id nibh tortor.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
            platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat
            nisl pretium. Adipiscing enim eu turpis egestas pretium aenean
            pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis
            at tellus at urna condimentum mattis. Nunc sed augue lacus viverra
            vitae congue eu consequat. Donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Magna fermentum iaculis eu non diam phasellus.
            Condimentum mattis pellentesque id nibh tortor.
          </p>
          <Timeline />
          <Map />
        </section>
        <section className={"parallax5"}>
            <div className={"textBox"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
                platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat
                nisl pretium. Adipiscing enim eu turpis egestas pretium aenean
                pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis
                at tellus at urna condimentum mattis.
              </p>
            </div>
            <div className={"textBox2"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
                platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat
                nisl pretium. Adipiscing enim eu turpis egestas pretium aenean
                pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis
                at tellus at urna condimentum mattis.
              </p>
            </div>
            <div className={"textBox3"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
                platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat
                nisl pretium. Adipiscing enim eu turpis egestas pretium aenean
                pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis
                at tellus at urna condimentum mattis.
              </p>
            </div>
        </section>
        
      </section>
    </div>
  );
}
