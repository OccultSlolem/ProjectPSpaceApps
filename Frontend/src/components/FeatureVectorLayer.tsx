import { useContext, useEffect, useState } from 'react'; // Import useState
import { useFeatures } from '../context/FeatureContext';
import type { Planet, IPlanetaryFeature } from '../types/DataTypes';

// OpenLayers imports
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { unByKey } from 'ol/Observable';
import { MapContext } from '../main.tsx';

import './components.css';

interface IFeatureVectorLayerProps {
    planet: Planet
};

export function FeatureVectorLayer({ planet }: IFeatureVectorLayerProps) {
    const { map } = useContext(MapContext);
    const { featuresByPlanet } = useFeatures();

    const [selectedFeature, setSelectedFeature] = useState<IPlanetaryFeature | null>(null);

    useEffect(() => {
        if (!map) return;

        const featuresForPlanet = featuresByPlanet.get(planet);
        if (!featuresForPlanet) return;

        const featureStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: '/nasa.svg',
                scale: 1
            })
        });

        const openLayerFeatures = featuresForPlanet.map((featureData) => {
            const featurePoint = new Feature({
                geometry: new Point([featureData.longitude, featureData.latitude]),
                featureData: featureData, // Store the raw data object
            });
            featurePoint.setStyle(featureStyle);
            return featurePoint;
        });

        const vectorSource = new VectorSource({ features: openLayerFeatures });
        const vectorLayer = new VectorLayer({ source: vectorSource });
        map.addLayer(vectorLayer);

        //Update click handler to use the local state setter
        const clickListenerKey = map.on('singleclick', (evt) => {
            const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => f);
            if (feature) {
                const clickedFeatureData = feature.get('featureData');
                setSelectedFeature(clickedFeatureData); // Open the modal with data
            } else {
                setSelectedFeature(null); // Close modal if clicking on the map
            }
        });

        return () => {
            if (map) {
                map.removeLayer(vectorLayer);
                unByKey(clickListenerKey);
            }
        };

    }, [map, planet, featuresByPlanet]);

    //Render the modal JSX directly from this component
    if (!selectedFeature) {
        return null; // Render nothing if no feature is selected
    }

    // Format data for display
    const lon = selectedFeature.longitude.toFixed(2);
    const lat = selectedFeature.latitude.toFixed(2);
    const diameterKm = (selectedFeature.diameter_meters / 1000).toLocaleString();

    return (
        <div className="modal-backdrop" onClick={() => setSelectedFeature(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedFeature.name}</h2>
                <p>{selectedFeature.description}</p>
                <hr />
                <ul>
                    <li><strong>Coordinates:</strong> [{lon}, {lat}]</li>
                    <li><strong>Planet:</strong> {selectedFeature.planet}</li>
                    <li><strong>Diameter:</strong> {diameterKm} km</li>
                </ul>
                <button onClick={() => setSelectedFeature(null)}>Close</button>
            </div>
        </div>
    );
}