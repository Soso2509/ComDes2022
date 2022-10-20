import React from "react";
import Timeline from "../components/Timeline";

export default function Article4() {
  return (
    <div className={"article"}>
      <h1 className={"articleTitle"}>Title 4</h1>
      <span className={"articleUnderTitle"}>Lorem ipsum dolor sit amet</span>
      <section className={"articleIntro"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </section>
      <section className={"articleContent"}>
        <Timeline />
      </section>
    </div>
  );
}
