import { useContext, useEffect } from 'react';
import { useFeatures } from '../context/FeatureContext';
import type { Planet, IPlanetaryFeature } from '../types/DataTypes';

import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapContext } from '../App';


interface IFeatureVectorLayerProps {
    planet: Planet
};

export function FeatureVectorLayer({ planet }: IFeatureVectorLayerProps) {
    const { map } = useContext(MapContext); //Gets map instance from context
    const { featuresByPlanet } = useFeatures(); //Initiate feature context

    useEffect(() => {
        const featuresForPlanet = featuresByPlanet.get(planet);

        if (!featuresForPlanet) {
            console.error('No features for planet found');
            return;
        }

        if (!map) {
            console.error('No map instance found in FeatureVectorLayer');
            return;
        }

        const featureStyle = new Style({
            image: new Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: '/icon.png', 
            })
        })

        const openLayerFeatures = featuresForPlanet.map((featureData: IPlanetaryFeature) => {

            const featurePoint = new Feature({
                geometry: new Point([featureData.longitude, featureData.latitude]),
                name: featureData.name,
                description: featureData.description,
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

    }, [map, planet, featuresByPlanet]);

    //just manages map layers, does not render html
    return null;
}