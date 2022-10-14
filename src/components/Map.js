import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const markers = [
  {
    markerOffset: -15,
    name: "North Atlantic Gyre",
    coordinates: [-39.0401, 35.2199],
  },
  {
    markerOffset: -15,
    name: "South Atlantic Gyre",
    coordinates: [-23.69528, -7.81363],
  },
  {
    markerOffset: -15,
    name: "Indian Ocean Gyre",
    coordinates: [77.72614, -23.44047],
  },
  {
    markerOffset: 25,
    name: "West Pacific Gyre",
    coordinates: [155.35338, 24.66421],
  },
  {
    markerOffset: -20,
    name: "East Pacific Gyre",
    coordinates: [-134.40217, 21.60536],
  },
  {
    markerOffset: -15,
    name: "South Pacific Gyre",
    coordinates: [-88.15101, -40.30398],
  },
];

export default function Map() {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [100, 0, 0],
        scale: 100,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#58808e"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#3beaed" stroke="#3beaed" strokeWidth={2} />
          <text textAnchor="middle" y={markerOffset} className="MapText">
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
