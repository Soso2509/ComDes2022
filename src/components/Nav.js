import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className={"navigation"}>
        <Menu
          noOverlay

        >
          <ul>
            <li className={"homeButton"}>
              <Link to="/">
                <FaHome /> Hjem
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/sjokkbeskjed-for-torvbyens-ansatte">
                Sjokkbeskjed for Torvbyens ansatte
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/renteokning">Kort forklart: Renteøkningen</Link>
            </li>
            <li className="menu-item">
              <Link to="/et-hav-av-plast">Et hav av plast</Link>
            </li>
            <li className="menu-item">
              <Link to="/planeten-koker-er-det-for-sent">
                Planeten koker, er det for sent?
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/article-long">Article-Long</Link>
            </li>
          </ul>
        </Menu>
      </nav>
    </>
  );
}
