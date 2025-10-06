import { useContext, useEffect } from 'react';
import { useFeatures } from '../context/FeatureContext';
import type { Planet, IPlanetaryFeature } from '../types/DataTypes';

import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapContext } from '../main.tsx';


interface IFeatureVectorLayerProps {
    planet: Planet
};

export function FeatureVectorLayer({ planet }: IFeatureVectorLayerProps) {
    const { map } = useContext(MapContext); //Gets map instance from context
    const { featuresByPlanet } = useFeatures(); //Initiate feature context

    useEffect(() => {
        console.log('running on effect')
        const featuresForPlanet = featuresByPlanet.get(planet);

        if (!featuresForPlanet) {
            console.error('No features for planet found');
            return;
        }

        if (!map) {
            console.warn("No map instance found yet");
            return;
        } 

        console.log(`${planet} map has loaded`);

        const featureStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: '/nasa.svg', 
                scale: 1
            })
        })

        const openLayerFeatures = featuresForPlanet.map((featureData: IPlanetaryFeature) => {

            const featurePoint = new Feature({
                geometry: new Point([featureData.longitude, featureData.latitude]),
                name: featureData.name,
                description: featureData.description,
                diameter_meters: featureData.diameter_meters
            });

            featurePoint.setStyle(featureStyle);
            return featurePoint;
        });

        const vectorSource = new VectorSource({ features: openLayerFeatures });
        const vectorLayer = new VectorLayer({ source: vectorSource });
        map.addLayer(vectorLayer);

        return () => {
            map.removeLayer(vectorLayer); //Run when component unmounts
        }

    }, [map]);

    //just manages map layers, does not render html
    return null;
}