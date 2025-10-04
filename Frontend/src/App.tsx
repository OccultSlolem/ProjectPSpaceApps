import './App.css'
import 'ol/ol.css'
import { Map } from 'ol';
import { useEffect, useRef } from 'react'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { get as getProjection } from 'ol/proj'
import XYZ from 'ol/source/XYZ';


export function Home() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/{z}/{y}/{x}.jpg',
            wrapX: false,
          }),

        }),
      ],
      view: new View({
        projection: getProjection('EPSG:4326')!, // Geographic coordinates (FIXME: non-null assertion)
        center: [0, 0], // Center on the moon's equator
        zoom: 2,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '100vh', width: '100%', position: 'relative' }}
    />
  )
}
