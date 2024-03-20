import { Layer } from "ol/layer";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import "ol/ol.css";
import "./mapApplicationcss.css";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { map, mapContext } from "./mapContext";

export function MapApplication() {
  const [layers, setLayers] = React.useState<Layer[]>([
    new TileLayer({
      source: new OSM(),
    }),
  ]);
  useEffect(() => map.setLayers(layers), [layers]);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => map.setTarget(mapRef.current), []);

  return (
    <mapContext.Provider value={{ map, layers, setLayers }}>
      <header>
        <h3>Map</h3>
      </header>
      <main>
        <div ref={mapRef} className="mapContainer" />
      </main>
    </mapContext.Provider>
  );
}
