import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function Layout() {
  // hentet fra https://stackoverflow.com/questions/64438927/how-to-close-react-burger-menu-when-link-click-in-a-component
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className={"navigation"}>
        <Menu
          noOverlay
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
        >
          <ul>
            <li className={"homeButton"}>
              <Link to="/" onClick={closeSideBar}>
                <FaHome /> Hjem
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/sjokkbeskjed-for-torvbyens-ansatte"
                onClick={closeSideBar}
              >
                Sjokkbeskjed for Torvbyens ansatte
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/renteokning" onClick={closeSideBar}>
                Kort forklart: Renteøkningen
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/et-hav-av-plast" onClick={closeSideBar}>
                Et hav av plast
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/planeten-koker-er-det-for-sent" onClick={closeSideBar}>
                Planeten koker, er det for sent?
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/en-moderne-dyrevise" onClick={closeSideBar}>
                En moderne dyrevise
              </Link>
            </li>
          </ul>
        </Menu>
      </nav>
    </>
  );
}
