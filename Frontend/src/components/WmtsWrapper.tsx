/*
  Moon: {
    'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
  } 

  Mars: {
    'https://trek.nasa.gov/tiles/Mars/EQ/msss_atlas_simp_clon/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png'
  }

  Vesta: {
    'https://trek.nasa.gov/tiles/Vesta/EQ/VestaHAMOLAMOBlend.eq/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png'
  }

  Ceres: {
    'https://trek.nasa.gov/tiles/Ceres/EQ/Ceres_Dawn_FC_DLR_global_20ppd_Oct2015/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
  }

  Mercury: {
    'https://trek.nasa.gov/tiles/Mercury/EQ/Mercury_MESSENGER_MDIS_Basemap_EnhancedColor_Mosaic_Global_665m/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
  }

  Icy Moons: {
    Dion: 'https://trek.nasa.gov/tiles/Dione/EQ/Dione_Cassini_Voyageglobal_154m/1.0.0//default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
    Enceladus: 'https://trek.nasa.gov/tiles/Enceladus/EQ/Enceladus_Cassini_ISS_Global_Mosaic_100m_HPF/1.0.0//default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png'
    Lapetus: 'https://trek.nasa.gov/tiles/Iapetus/EQ/Iapetus_Cassini_Voyager_mosaic_global_783m/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
    Mimas: 'https://trek.nasa.gov/tiles/Mimas/EQ/MI_170630_DLR_basemap/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
    Phoebe: 'https://trek.nasa.gov/tiles/Phoebe/EQ/PH_060315_DLR_basemap/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
    Rhea: 'https://trek.nasa.gov/tiles/Rhea/EQ/RH_120803_DLR_basemap/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
    Tethys: 'https://trek.nasa.gov/tiles/Tethys/EQ/Tethys_Cassini_mosaic_global_293m/1.0.0//default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
  }
*/

import { Map } from "ol";
import { useRef, useEffect } from "react";



import View from 'ol/View'
import WMTS from 'ol/source/WMTS';
import { getTopLeft } from 'ol/extent';
import TileLayer from "ol/layer/Tile";
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import { get as getProjection } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';


export type wmtsSourceProps = {
    wmtsUrl: string;
}

export type planetaryFeatureProps = {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  diameter_meters: number;
  source: 'astronaut' | 'usgs' | 'user' | 'other';
  created_at: string; 
}

export type wmtsMapProps = {
    source: wmtsSourceProps;
    features?: planetaryFeatureProps[] | undefined;
}

export function wmtsMap ({ source, features }: wmtsMapProps ) {
    const htmlMapRef = useRef<HTMLDivElement | null>(null);
    const openLayerMapRef = useRef<Map | null>(null);

    useEffect (() => {
        const projection = getProjection('EPSG:4326');
        const extent = [-180, -90, 180, 90];

        if (!htmlMapRef.current) {
            return;
        }

        if (!projection) {
            return;
        }

        projection.setExtent(extent);
        const projectionExtent = projection.getExtent();

        //-------------------------------

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
            url: source.wmtsUrl,
            layer: 'LRO_WAC_Mosaic_Global_303ppd_v02',
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

        //-------------------------------

        //Pin Vectors:
        const vectorSource = new VectorSource({features: []});
        const vectorLayer = new VectorLayer({source: vectorSource});

        const map = new Map({
            target: htmlMapRef.current,

            layers: [
                new TileLayer({source: wmtsSource}),
                vectorLayer
            ],

            view: new View({
                projection: projection
            }),
        });

        map.getView().fit(projectionExtent);
        openLayerMapRef.current = map;

        return () => {
            map.setTarget(undefined);
            openLayerMapRef.current = null;
        }

    }, []);

    return (
        <div 
            ref={htmlMapRef}
            style={{width: '100%', height: '100%'}}
        />
    )
}   

