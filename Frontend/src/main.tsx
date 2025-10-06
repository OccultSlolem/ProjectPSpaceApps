import './index.css'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'


import { createContext,  } from "react";
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
  const selectedPlanet: Planet = 'Moon'; //Default planet on load
  const [map, setMap] = useState<Map | null>(null);

  return (
    <MapContext.Provider value={{ map, setMap }}>
      <div style={{ height: '100vh', width: '100%' }}>
       <Home planet={selectedPlanet} />
      </div>
    </MapContext.Provider>
  )
}
