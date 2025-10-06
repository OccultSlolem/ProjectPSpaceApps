
import { Map } from "ol";
import React, {  useRef, useEffect, useContext } from "react";
import { PLANET_MAP_URLS, PLANET_MAP_LAYERS } from "../types/DataTypes";

import View from 'ol/View'
import WMTS from 'ol/source/WMTS';
import { getTopLeft } from 'ol/extent';
import TileLayer from "ol/layer/Tile";
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import { get as getProjection } from 'ol/proj';
import type { Planet } from "../types/DataTypes";
import { MapContext } from "../main.tsx";

interface IWmtsMapProps {
  planet: Planet;
  children?: React.ReactNode;
}

export function WmtsMap({ planet, children }: IWmtsMapProps) {
  const htmlMapRef = useRef<HTMLDivElement | null>(null);
  const { setMap } = useContext(MapContext);

  useEffect(() => {
    const mapUrl = PLANET_MAP_URLS.get(planet);
    const layer = PLANET_MAP_LAYERS.get(planet);
    const projection = getProjection('EPSG:4326');
    const extent = [-180, -90, 180, 90];

    if (!htmlMapRef.current) {
      console.error('No html map reference found')
      return;
    }

    if (!projection) {
      console.error('No projection found')
      return;
    }

    if (!mapUrl || !layer) {
      console.error('No map url or layer found');
      return;
    }

    console.log(`Loading map for planet: ${planet} from url: ${mapUrl}`);
    projection.setExtent(extent);
    const projectionExtent = projection.getExtent();

    //Defines the tile grid resolution and matrix ids
    //Start res = width / (tile size * num tiles @ zoom(0))
    const startResolution = 360 / (256 * 2);
    const resolutions = new Array(8);
    const matrixIds = new Array(8);

    for (let i = 0; i < 8; ++i) {
      resolutions[i] = startResolution / Math.pow(2, i);
      matrixIds[i] = i;
    }

    //Creates the WMTS source
    const wmtsSource = new WMTS({
      url: mapUrl,
      layer: layer,
      matrixSet: 'default028mm',
      format: 'image/jpeg',
      projection: projection,
      requestEncoding: 'REST',
      style: 'default',
      wrapX: false,

      tileGrid: new WMTSTileGrid({
        origin: getTopLeft(projectionExtent),
        resolutions: resolutions,
        matrixIds: matrixIds,
        tileSize: 256,
        extent: projectionExtent,
      }),
    });

    const mapInstance = new Map({
      target: htmlMapRef.current,

      layers: [
        new TileLayer({
          source: wmtsSource,
        }),
      ],

      view: new View({
        projection: projection,
        center: [0,0],
        zoom: 2
      }),
    });

    mapInstance.getView().fit(extent);

    setMap(mapInstance);

    return () => {
      mapInstance.setTarget(undefined);
    }
  }, [planet]);

  return (
    <div ref={htmlMapRef} style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  )
}


