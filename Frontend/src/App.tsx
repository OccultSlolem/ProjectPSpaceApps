import './App.css'
import 'ol/ol.css'
import { Map } from 'ol';
import { useEffect, useRef } from 'react'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import { get as getProjection } from 'ol/proj';
import { getTopLeft } from 'ol/extent';

interface PlanetaryFeature {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  diameter_meters: number;
  source: 'astronaut' | 'usgs' | 'user' | 'other';
  created_at: string; // ISO date string
}

export function Home() {
  const mapRef = useRef(null);

  useEffect(() => {

    if (!mapRef.current) {
      return;
    }

    // 1. Define the projection and its properties
    const projection = getProjection('EPSG:4326');

    if (!projection) {
      return;
    }

    const extent = [-180, -90, 180, 90];
    projection.setExtent(extent);
    const projectionExtent = projection.getExtent();

    // 2. Manually define the tile grid resolutions and matrix IDs
    // ✅ **THE FIX:** Calculate the base resolution correctly
    const startResolution = 360 / (256 * 2); // Extent width / (tile size * num tiles at zoom 0)
    const resolutions = new Array(8);
    const matrixIds = new Array(8);
    for (let z = 0; z < 8; ++z) {
      resolutions[z] = startResolution / Math.pow(2, z);
      matrixIds[z] = z;
    }

    // 3. Manually create the WMTS source
    const wmtsSource = new WMTS({
      url: 'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg',
      layer: 'LRO_WAC_Mosaic_Global_303ppd_v02',
      matrixSet: 'default028mm',
      format: 'image/jpeg',
      projection: projection,
      requestEncoding: 'REST',
      style: 'default',
      tileGrid: new WMTSTileGrid({
        origin: getTopLeft(projectionExtent),
        resolutions: resolutions,
        matrixIds: matrixIds,
        tileSize: 256,
        extent: projectionExtent,
      }),
      wrapX: false,
    });

    // 4. Create the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: wmtsSource,
        }),
      ],
      view: new View({
        projection: projection,
      }),
    });

    map.getView().fit(projectionExtent);

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '100vh', width: '100%', position: 'relative' }}
    />
  )
}