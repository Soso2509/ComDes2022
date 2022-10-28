import React from "react";

import { FaHome } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <nav className={"navigation"}>
        <ul>
          <li className={"homeButton"}>
            <Link to="/"><FaHome /></Link>
          </li>
          <li>
            <Link to="/sjokkbeskjed-for-torvbyens-ansatte">Sjokkbeskjed for Torvbyens ansatte</Link>
          </li>
          <li>
            <Link to="/renteokning">Kort forklart: Renteøkningen</Link>
          </li>
          <li>
            <Link to="/et-hav-av-plast">Et hav av plast</Link>
          </li>
          <li>
            <Link to="/planeten-koker-er-det-for-sent">Planeten koker, er det for sent?</Link>
          </li>
          <li>
            <Link to="/article-long">Article-Long</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
