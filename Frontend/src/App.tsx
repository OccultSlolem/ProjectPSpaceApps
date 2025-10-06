import './App.css'

import { FeatureProvider } from './context/FeatureContext';
import { FeatureVectorLayer } from "./components/FeatureVectorLayer";
import NavigationPanel from "./components/NavigationPanel";
import { WmtsMap } from './components/WmtsMap';
import { type IHomeProps } from './main';


export function Home ({ planet }: IHomeProps) {
  

  //Only assembles the layers for the map
  //Does not render its own html

  return (  
    <>
      <NavigationPanel />

      <WmtsMap planet={planet}>
        <FeatureProvider>
          <FeatureVectorLayer planet={planet} />
        </FeatureProvider>
      </WmtsMap>
    </>
  )
}