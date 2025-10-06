import './index.css'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createContext } from "react";
import { Map } from "ol";
import type { Planet } from "./types/DataTypes";
import { Home } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)

export interface IHomeProps {
  planet: Planet;
}

export interface IMapContext {
  map: Map | null;
  setMap: (map: Map) => void;
}

export const MapContext = createContext<IMapContext>({
  map: null,
  setMap: () => {}
})

function Main() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>('Moon');
  const [map, setMap] = useState<Map | null>(null);

  const planetOptions: Planet[] = [
    'Moon', 'Mars', 'Mercury', 'Vesta', 'Ceres', 'Dione',
    'Enceladus', 'Mimas', 'Phoebe', 'Rhea', 'Tethys', 'Iapetus'
  ];

  return (
    <MapContext.Provider value={{ map, setMap }}>
      
      <div className="map-container">
        <select
          value={selectedPlanet}
          onChange={(e) => setSelectedPlanet(e.target.value as Planet)}
          className="planet-selector" 
        >
          {planetOptions.map(planet => (
            <option key={planet} value={planet}>
              {planet}
            </option>
          ))}
        </select>
        
        <Home planet={selectedPlanet} />
      </div>
    </MapContext.Provider>
  )
}