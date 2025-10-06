import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Home } from './App.tsx'
import { WmtsMap } from './components/WmtsMap.tsx'
import { FeatureProvider } from './context/FeatureContext.tsx'
import type { Planet } from './types/DataTypes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  const selectedPlanet: Planet = 'Mercury';


  return (
    <FeatureProvider>
      <div style={{ height: '100vh', width: '100%' }}>
        <WmtsMap planet={selectedPlanet}>
          <Home planet={selectedPlanet} />
        </WmtsMap>
      </div>
    </FeatureProvider>
  )
}
