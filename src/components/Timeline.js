import React from "react";
import { Chrono } from "react-chrono";

const data = [
  {
    title: "lorem",
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
  },
  {
    title: "Lorem",
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
  },
  {
    title: "Lorem",
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
  },
  {
    title: "Lorem",
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
  },
];

export default function Timeline() {
  return (
    <div
      className={"timeline"}
      style={{ maxWidth: "100rem", height: "1000px" }}
    >
      <Chrono
        items={data}
        mode="VERTICAL"
        useReadMore={true}
        cardHeight={100}
        fontSizes={{
          cardSubtitle: "0.8rem",
          cardText: "0.8rem",
          cardTitle: "1rem",
          title: "1rem",
        }}
      />
    </div>
  );
}
