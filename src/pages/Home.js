import React from "react";
import placeHolder300 from "../images/placeHolder-300x300.svg";

export default function Home() {
  return (
    <div className={"homePage"}>
      <h1 className={"articleTitle"}>Anbefalte artikler</h1>
      <section className={"item"}>
        <img src={placeHolder300} alt="" />
        <h1>Sjokkbeskjed for Torvbyens ansatte</h1>
      </section>
      <section className={"item"}>
        <img src={placeHolder300} alt="" />
        <h1>Kort forklart: Renteøkningen</h1>
      </section>
      <section className={"item"}>
        <img src={placeHolder300} alt="" />
        <h1>Et hav av plast</h1>
      </section>
      <section className={"item"}>
        <img src={placeHolder300} alt="" />
        <h1>Artikkel 4</h1>
      </section>
      <section className={"item"}>
        <img src={placeHolder300} alt="" />
        <h1>Artikkel 5</h1>
      </section>
    </div>
  );
}
