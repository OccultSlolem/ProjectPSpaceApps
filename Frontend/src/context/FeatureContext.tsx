import { createContext, useState, useContext, type ReactNode } from 'react';
import type { Planet, IPlanetaryFeature } from '../types/DataTypes';

import {
  KnownLunarFeatures,
  KnownMarsFeatures,
  KnownVestaFeatures,
  KnownMercuryFeatures,
  KnownDionFeatures,
  KnownEnceladusFeatures,
  KnownIapetusFeatures,
  KnownMimasFeatures,
  KnownPhoebeFeatures,
  KnownRheaFeatures,
  KnownTethysFeatures
} from '../data/KnownFeatures';

interface IFeatureContext {
    featuresByPlanet: Map<Planet, IPlanetaryFeature[]>;
    addPlanetFeatures: (planet: Planet, features: IPlanetaryFeature[]) => void;
}

export const featureContext = createContext<IFeatureContext | null>(null);

export const FeatureProvider = ({ children }: { children: ReactNode }) => {

    const [featuresByPlanet, setFeaturesByPlanet] = useState<Map<Planet, IPlanetaryFeature[]>>(
        new Map([
            ['Moon', KnownLunarFeatures],
            ['Mars', KnownMarsFeatures],
            ['Vesta', KnownVestaFeatures],
            ['Mercury', KnownMercuryFeatures],
            ['Dion', KnownDionFeatures],
            ['Enceladus', KnownEnceladusFeatures],
            ['Iapetus', KnownIapetusFeatures],
            ['Mimas', KnownMimasFeatures],
            ['Phoebe', KnownPhoebeFeatures],
            ['Rhea', KnownRheaFeatures],
            ['Tethys', KnownTethysFeatures]
        ])
    );

    const addPlanetFeatures = (planet: Planet, features: IPlanetaryFeature[]) => {
        setFeaturesByPlanet(prevMap => {
            const newMap = new Map(prevMap);
            newMap.set(planet, features);
            return newMap;
        })
    }

    const value = {
        featuresByPlanet,
        addPlanetFeatures
    };

    return (
        <featureContext.Provider value = {value}>
            {children}
        </featureContext.Provider>
    );
}

export const useFeatures = () => {
    const context = useContext(featureContext);

    if (!context) {
        throw new Error ('useFeatures must be used within FeatureProvider');
    }

    return context;
}