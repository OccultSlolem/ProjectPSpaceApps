import { createContext, useState } from "react";
import { Map } from "ol";
import { FeatureVectorLayer } from "./components/FeatureVectorLayer";
import type { Planet } from "./types/DataTypes";

interface IHomeProps {
  planet: Planet;
}

interface IMapContext {
  map: Map | null;
  setMap: (map: Map) => void;
}

export const MapContext = createContext<IMapContext>({
  map: null,
  setMap: () => {}
})

export function Home ({ planet }: IHomeProps) {
  const [map, setMap] = useState<Map | null>(null);

  //Only assembles the layers for the map
  //Does not render its own html

  return (

    <MapContext.Provider value={{ map, setMap }}>
      <FeatureVectorLayer planet={planet} />
    </MapContext.Provider>
  )
}