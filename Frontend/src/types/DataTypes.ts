export type Planet = 
    'Moon' | 'Mars' | 'Vesta' | 'Ceres' | 'Mercury' | 
    'Dion' | 'Enceladus' | 'Mimas' | 'Phoebe' | 'Rhea' | 'Tethys' |
    'Iapetus' 
;

export type PlanetarySource = 
    'astronaut' | 'usgs' | 'user' | 'other'
;

export interface IPlanetaryFeature {
    id: string;
    name: string;
    planet: Planet;
    description: string;
    latitude: number;
    longitude: number;
    diameter_meters: number;
    source: PlanetarySource
}

export const PLANET_MAP_URLS: Map<Planet, string> = new Map([
    ['Moon', 'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Mars', 'https://trek.nasa.gov/tiles/Mars/EQ/msss_atlas_simp_clon/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png'],
    ['Vesta', 'https://trek.nasa.gov/tiles/Vesta/EQ/VestaHAMOLAMOBlend.eq/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png'],
    ['Ceres', 'https://trek.nasa.gov/tiles/Ceres/EQ/Ceres_Dawn_FC_DLR_global_20ppd_Oct2015/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Mercury', 'https://trek.nasa.gov/tiles/Mercury/EQ/Mercury_MESSENGER_MDIS_Basemap_EnhancedColor_Mosaic_Global_665m/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Dion', 'https://trek.nasa.gov/tiles/Dione/EQ/Dione_Cassini_Voyageglobal_154m/1.0.0//default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Enceladus', 'https://trek.nasa.gov/tiles/Enceladus/EQ/Enceladus_Cassini_ISS_Global_Mosaic_100m_HPF/1.0.0//default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png'],
    ['Iapetus', 'https://trek.nasa.gov/tiles/Iapetus/EQ/Iapetus_Cassini_Voyager_mosaic_global_783m/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Mimas', 'https://trek.nasa.gov/tiles/Mimas/EQ/MI_170630_DLR_basemap/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Phoebe', 'https://trek.nasa.gov/tiles/Phoebe/EQ/PH_060315_DLR_basemap/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Rhea', 'https://trek.nasa.gov/tiles/Rhea/EQ/RH_120803_DLR_basemap/1.0.0/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'],
    ['Tethys', 'https://trek.nasa.gov/tiles/Tethys/EQ/Tethys_Cassini_mosaic_global_293m/1.0.0//default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg']
]);

export const PLANET_MAP_LAYERS: Map<Planet, string> = new Map([
  ['Moon', 'LRO_WAC_Mosaic_Global_303ppd_v02'],
  ['Mars', 'msss_atlas_simp_clon'],
  ['Vesta', 'VestaHAMOLAMOBlend.eq'],
  ['Ceres', 'Ceres_Dawn_FC_DLR_global_20ppd_Oct2015'],
  ['Mercury', 'Mercury_MESSENGER_MDIS_Basemap_EnhancedColor_Mosaic_Global_665m'],
  ['Dion', 'Dione_Cassini_Voyageglobal_154m'], // key mirrors your first map
  ['Enceladus', 'Enceladus_Cassini_ISS_Global_Mosaic_100m_HPF'],
  ['Iapetus', 'Iapetus_Cassini_Voyager_mosaic_global_783m'],
  ['Mimas', 'MI_170630_DLR_basemap'],
  ['Phoebe', 'PH_060315_DLR_basemap'],
  ['Rhea', 'RH_120803_DLR_basemap'],
  ['Tethys', 'Tethys_Cassini_mosaic_global_293m'],
]);