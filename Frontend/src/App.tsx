// import { useState } from 'react'
import './App.css'
import TileLayer from 'ol/layer/Tile'
import { OSM, WMTS } from 'ol/source'
import { get as getProjection } from 'ol/proj'
import { getTopLeft, getWidth } from 'ol/extent'
import Map from 'ol/Map'
import View from 'ol/View'
import WMTSTileGrid from 'ol/tilegrid/WMTS'

export function Home() {
  const projection = getProjection('EPSG:3857');
  const projectionExtent = projection!.getExtent(); // FIXME: Object is possibly 'null'.
  const size = getWidth(projectionExtent) / 256;
  const resolutions = new Array(19);
  const matrixIds = new Array(19);
  for (let z = 0; z < 19; ++z) {
    // generate resolutions and matrixIds arrays for this WMTS
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = z;
  }
  // const [count, setCount] = useState(0)
  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new WMTS({
          url: 'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/0/0/0.jpg',
          layer: 'LRO_WAC_Mosaic_Global_303ppd_v02',
          matrixSet: 'default028mm',
          format: 'image/jpeg',
          tileGrid: new WMTSTileGrid({
            origin: getTopLeft(projectionExtent),
            resolutions: resolutions,
            matrixIds: matrixIds,
          }),
          style: 'default',
          wrapX: true,
        })
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  })

  return (
    <>
      {/* <div id="map" className="map" style={{ width: '100%', height: '400px' }}></div> */}
    </>
  )
}
