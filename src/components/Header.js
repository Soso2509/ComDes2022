import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className={"headerTekst"}><Link to="/">Kommunikasjonsdesign</Link></h1>
    </header>
  );
}
