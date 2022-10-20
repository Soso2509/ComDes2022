import React from "react";
import { Chrono } from "react-chrono";

const data = [
  {
    title: "first",
    media: {
      name: "Cat Ipsum",
      source: {
        url: "https://placekitten.com/640/360",
      },
      type: "IMAGE",
    },
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
  },
  {
    title: "second",
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
    media: {
      name: "Cat Ipsum",
      source: {
        url: "https://placekitten.com/700/700",
      },
      type: "IMAGE",
    },
  },
  {
    title: "Third",
    media: {
      name: "Cat Ipsum",
      source: {
        url: "https://placekitten.com/600/500",
      },
      type: "IMAGE",
    },
  },
  {
    title: "Forth",
    cardTitle: "Ipsum",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mattis velit, condimentum imperdiet nulla. Sed sodales tincidunt nibh at efficitur. Proin pulvinar massa sapien, id varius diam luctus non. Fusce et condimentum magna. Cras dictum massa at ligula maximus vehicula. In varius ante eget massa suscipit laoreet. Cras auctor erat a mi rhoncus, sed laoreet nibh pharetra. Quisque ut fringilla ipsum. Nunc diam augue, tempus ac mollis vitae, mattis eu sapien. Praesent finibus dignissim tortor, ut aliquam arcu euismod hendrerit. Suspendisse tristique volutpat cursus. Maecenas congue, purus eget eleifend ullamcorper, metus arcu dictum lectus, at consectetur leo risus ac elit. ",
  },
];

export default function Timeline() {
  return (
    <div className={"timeline"} style={{ maxWidth: "2000px", height: "auto" }}>
      <Chrono
        items={data}
        mode="HORIZONTAL"
        useReadMore={false}
        cardPositionHorizontal="TOP"
        disableNavOnKey={false}
        hideControls={true}
        disableAutoScrollOnClick={false}
      />
    </div>
  );
}
