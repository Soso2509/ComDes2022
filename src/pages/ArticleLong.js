import { FaExternalLinkAlt } from 'react-icons/fa';
import React, { useState } from "react";
import { TimelineWorld } from "../components/TimelineWorld";

import polarBear from "../images/polarBear.jpg";
import seaTurtle from "../images/seaTurtle.jpg";
import coral from "../images/coralReef.jpg";
import whale from "../images/whale.jpg";
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
          <img className={"geoImage"}src={arktis} alt="" />
          <figure>
            <img className={"portrait"} src={polarBear} alt="Maleri av en isbjørn" />
            <figcaption>
              Illustrasjon: {"    "}
              <a href="https://pngimg.com/download/23503">
                pngimg.com < FaExternalLinkAlt className="linkIcon"/>
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
                <h2>Modal header</h2>
              </ModalHeader>
              <ModalBody>
                <p style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt maxime dolorem asperiores laboriosam ad delectus ea.
                  Tempora tempore repellendus laudantium fugiat saepe mollitia
                  eius illo possimus laborum consequuntur, tenetur neque.
                </p>
                <img className={"geoImage"}src={arktis} alt="" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis <ModalButton onClick={() => setShowModal(true)}>Trykk</ModalButton> imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis. Nunc sed augue
            lacus viverra vitae congue eu consequat. Donec pretium vulputate
            sapien nec sagittis aliquam malesuada. Magna fermentum iaculis eu
            non diam phasellus. Condimentum mattis pellentesque id nibh tortor.
          </p>
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
          <br></br>
          <img className={"infographMobile"} src={iG1M} alt="Infografikk som viser farene med at isbreene smelter" />
          <img className={"infographDesktop"} src={iG1D} alt="Infografikk som viser farene med at isbreene smelter" />
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
          <TimelineWorld />
          {/* <Map /> */}
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
        <section className={"parallax6"}>
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
          <img className={"geoImage"}src={verdenshavene} alt="" />
          <h2>Overskrift</h2>
          {/* <figure>
            <img className={"portrait"} src={whale} alt="" />
            <figcaption>
              Illustrasjon: {"    "}
              <a href="https://fineartamerica.com/profiles/olechka-design">
                Olga Shvartsur < FaExternalLinkAlt className="linkIcon"/>
              </a>
            </figcaption>
          </figure> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
          <figure>
            <img className={"portrait"} src={fish} alt="Maleri av to fisker" />
            <figcaption>
              Illustrasjon: {"    "}
              <a href="https://theartsherpa.com/videos/1362/clownfish-easy-how-to-paint-watercolor-step-by-step-the-art-sherpa">
                The Art Sherpa < FaExternalLinkAlt className="linkIcon"/>
              </a>
            </figcaption>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus est. In massa tempor
            nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium
            aenean pharetra magna ac. Scelerisque felis imperdiet proin
            fermentum. Duis at tellus at urna condimentum mattis.
          </p>
        </section>
        <section className={"articleContent"}>
          <img className={"geoImage"} src={australia} alt="" />
          <h2>Overskrift</h2>
          <figure>
            <img className={"portrait"} src={seaTurtle} alt="Maleri av en skilpadde" />
            <figcaption>
              Illustrasjon: {"    "}
              <a href="https://fineartamerica.com/profiles/irina-sztukowski">
                Irina Sztukowski < FaExternalLinkAlt className="linkIcon"/>
              </a>
            </figcaption>
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
          <img className={"infographMobile"} src={iG2M} alt="Infografikk som viser hvordan klimagassutslipp fører til temperaturøkning" />
          <img className={"infographDesktop"} src={iG2D} alt="Infografikk som viser hvordan klimagassutslipp fører til temperaturøkning" />
          <br></br>
          <figure>
              <img className={"portrait"} src={coral} alt="Maleri av koraller" />
              <figcaption>
                Illustrasjon: {"    "}
                <a href="https://chloez-battle.blogspot.com/2021/06/coral-reef-painting-watercolor-coral.html">
                  Ukjent < FaExternalLinkAlt className="linkIcon"/>
                </a>
              </figcaption>
          </figure>
          <br></br>
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
          <br></br>
        </section>
      </section>
    </div>
  );
}
