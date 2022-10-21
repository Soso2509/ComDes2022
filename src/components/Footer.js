import React from "react";
import { FaAngleUp } from 'react-icons/fa';



export default function Footer() {
  /*Hentet fra https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/ */
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <button onClick={goToTop} className={"upButton"}><FaAngleUp /><p className={"upButtonText"}>Til toppen</p></button>
      <h3>Newsroom 3 Team 4, Ivo Eilertsen, Joachim Fjell, Sofie Karlsen</h3>
    </footer>
  );
}
