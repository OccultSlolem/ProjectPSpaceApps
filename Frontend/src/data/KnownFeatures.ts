import type { IPlanetaryFeature } from "../types/DataTypes";

export const KnownLunarFeatures: IPlanetaryFeature[] = [
  {
    "id": "1",
    "name": "Apennine Front",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 15 site.",
    "latitude": 25.92,
    "longitude": 3.68,
    "diameter_meters": 6630,
    "source": "astronaut"
  },
  {
    "id": "2",
    "name": "Baby Ray",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 16 site.",
    "latitude": -9.08,
    "longitude": 15.42,
    "diameter_meters": 170,
    "source": "astronaut"
  },
  {
    "id": "3",
    "name": "Bear Mountain",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 17 site.",
    "latitude": 19.98,
    "longitude": 30.77,
    "diameter_meters": 3460,
    "source": "astronaut"
  },
  {
    "id": "4",
    "name": "Bench",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 12 site.",
    "latitude": -3.02,
    "longitude": -23.43,
    "diameter_meters": 180,
    "source": "astronaut"
  },
  {
    "id": "5",
    "name": "Block",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 12 site.",
    "latitude": -3.01,
    "longitude": -23.42,
    "diameter_meters": 10,
    "source": "astronaut"
  },
  {
    "id": "6",
    "name": "Bowen-Apollo",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 17 site.",
    "latitude": 20.27,
    "longitude": 30.87,
    "diameter_meters": 300,
    "source": "astronaut"
  },
  {
    "id": "7",
    "name": "Bridge",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 15 site.",
    "latitude": 26.04,
    "longitude": 3.51,
    "diameter_meters": 690,
    "source": "astronaut"
  },
  {
    "id": "8",
    "name": "Brontë",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 17 site.",
    "latitude": 20.17,
    "longitude": 30.67,
    "diameter_meters": 210,
    "source": "astronaut"
  },
  {
    "id": "9",
    "name": "Camelot",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 17 site.",
    "latitude": 20.19,
    "longitude": 30.73,
    "diameter_meters": 610,
    "source": "astronaut"
  },
  {
    "id": "10",
    "name": "Cinco",
    "planet": "Moon",
    "description": "Astronaut-named feature, Apollo 16 site.",
    "latitude": -9.1,
    "longitude": 15.52,
    "diameter_meters": 70,
    "source": "astronaut"
  }
];

export const KnownMarsFeatures: IPlanetaryFeature[] = [
  {
    "id": "11",
    "name": "Olympus Mons",
    "planet": "Mars",
    "description": "A massive shield volcano, the tallest planetary mountain in the Solar System.",
    "latitude": 18.65,
    "longitude": -133.8,
    "diameter_meters": 624000,
    "source": "other"
  },
  {
    "id": "12",
    "name": "Valles Marineris",
    "planet": "Mars",
    "description": "A system of canyons that runs along the Martian surface east of the Tharsis bulge.",
    "latitude": -13.9,
    "longitude": -59.2,
    "diameter_meters": 4000000,
    "source": "other"
  },
  {
    "id": "13",
    "name": "Gale Crater",
    "planet": "Mars",
    "description": "A large crater with a central peak, Mount Sharp. Landing site of the Curiosity rover.",
    "latitude": -5.4,
    "longitude": 137.8,
    "diameter_meters": 154000,
    "source": "other"
  },
  {
    "id": "25",
    "name": "Hellas Planitia",
    "planet": "Mars",
    "description": "A vast, circular impact basin in the southern hemisphere, one of the largest in the Solar System.",
    "latitude": -42.4,
    "longitude": 70.5,
    "diameter_meters": 2300000,
    "source": "other"
  },
  {
    "id": "26",
    "name": "Arsia Mons",
    "planet": "Mars",
    "description": "The southernmost of the three Tharsis Montes volcanoes.",
    "latitude": -8.98,
    "longitude": -121.18,
    "diameter_meters": 435000,
    "source": "other"
  },
  {
    "id": "27",
    "name": "Gusev Crater",
    "planet": "Mars",
    "description": "A crater that was once a lakebed, explored by the Spirit rover.",
    "latitude": -14.58,
    "longitude": 175.48,
    "diameter_meters": 166000,
    "source": "other"
  },
  {
    "id": "28",
    "name": "Syrtis Major Planum",
    "planet": "Mars",
    "description": "A prominent dark albedo feature, once thought to be a sea. It is a low-relief shield volcano.",
    "latitude": 8.4,
    "longitude": 69.5,
    "diameter_meters": 1350000,
    "source": "other"
  },
  {
    "id": "29",
    "name": "Utopia Planitia",
    "planet": "Mars",
    "description": "A large plain and impact basin where the Viking 2 lander touched down.",
    "latitude": 46.7,
    "longitude": 117.5,
    "diameter_meters": 3300000,
    "source": "other"
  },
  {
    "id": "30",
    "name": "Pavonis Mons",
    "planet": "Mars",
    "description": "The central of the three Tharsis Montes volcanoes.",
    "latitude": 1.48,
    "longitude": -113.04,
    "diameter_meters": 375000,
    "source": "other"
  },
  {
    "id": "31",
    "name": "Jezero Crater",
    "planet": "Mars",
    "description": "An ancient crater containing a fan-delta deposit. Landing site of the Perseverance rover.",
    "latitude": 18.38,
    "longitude": 77.58,
    "diameter_meters": 49000,
    "source": "other"
  }
];

export const KnownVestaFeatures: IPlanetaryFeature[] = [
  {
    "id": "14",
    "name": "Rheasilvia",
    "planet": "Vesta",
    "description": "A giant impact crater and basin in the southern hemisphere, one of the largest in the Solar System.",
    "latitude": -75.0,
    "longitude": 150.0,
    "diameter_meters": 505000,
    "source": "other"
  },
  {
    "id": "15",
    "name": "Marcia",
    "planet": "Vesta",
    "description": "A large, young crater located within the older Veneneia basin.",
    "latitude": 9.5,
    "longitude": 199.1,
    "diameter_meters": 63000,
    "source": "other"
  },
  {
    "id": "32",
    "name": "Veneneia",
    "planet": "Vesta",
    "description": "A large, ancient impact basin, partially obscured by the younger Rheasilvia impact.",
    "latitude": -52.0,
    "longitude": 178.0,
    "diameter_meters": 395000,
    "source": "other"
  },
  {
    "id": "33",
    "name": "Aelia",
    "planet": "Vesta",
    "description": "A crater named after Aelia Flaccilla, the first wife of Roman Emperor Theodosius I.",
    "latitude": -27.2,
    "longitude": 20.8,
    "diameter_meters": 11000,
    "source": "other"
  },
  {
    "id": "34",
    "name": "Antonia",
    "planet": "Vesta",
    "description": "A crater named after Antonia Minor, a niece of the Emperor Augustus.",
    "latitude": -56.9,
    "longitude": 339.7,
    "diameter_meters": 17000,
    "source": "other"
  },
  {
    "id": "35",
    "name": "Calpurnia",
    "planet": "Vesta",
    "description": "A prominent crater named after the third wife of Julius Caesar.",
    "latitude": 1.1,
    "longitude": 235.8,
    "diameter_meters": 50000,
    "source": "other"
  },
  {
    "id": "36",
    "name": "Claudia",
    "planet": "Vesta",
    "description": "A crater named after Claudia, a Vestal Virgin.",
    "latitude": -9.3,
    "longitude": 323.0,
    "diameter_meters": 500,
    "source": "other"
  },
  {
    "id": "37",
    "name": "Cornelia",
    "planet": "Vesta",
    "description": "A crater named after Cornelia, the mother of the Gracchi brothers.",
    "latitude": 7.3,
    "longitude": 244.5,
    "diameter_meters": 15000,
    "source": "other"
  },
  {
    "id": "38",
    "name": "Helena",
    "planet": "Vesta",
    "description": "A crater named after Helena, mother of Emperor Constantine I.",
    "latitude": -40.6,
    "longitude": 245.9,
    "diameter_meters": 21000,
    "source": "other"
  },
  {
    "id": "39",
    "name": "Severina",
    "planet": "Vesta",
    "description": "A large crater with dark and bright material, named after the wife of Emperor Aurelian.",
    "latitude": 13.5,
    "longitude": 105.7,
    "diameter_meters": 36000,
    "source": "other"
  }
];

export const KnownMercuryFeatures: IPlanetaryFeature[] = [
  {
    "id": "16",
    "name": "Caloris Basin",
    "planet": "Mercury",
    "description": "A large impact basin, one of the largest in the Solar System.",
    "latitude": 30.5,
    "longitude": 161.9,
    "diameter_meters": 1550000,
    "source": "other"
  },
  {
    "id": "17",
    "name": "Rachmaninoff",
    "planet": "Mercury",
    "description": "A peak-ring impact crater, notable for its smooth, bright floor.",
    "latitude": 37.6,
    "longitude": 57.6,
    "diameter_meters": 306000,
    "source": "other"
  },
  {
    "id": "40",
    "name": "Rembrandt",
    "planet": "Mercury",
    "description": "A large and relatively young impact basin, named after Dutch painter Rembrandt van Rijn.",
    "latitude": -33.2,
    "longitude": 87.3,
    "diameter_meters": 716000,
    "source": "other"
  },
  {
    "id": "41",
    "name": "Kuiper",
    "planet": "Mercury",
    "description": "A young, bright crater with a prominent ray system. Named after astronomer Gerard Kuiper.",
    "latitude": -11.3,
    "longitude": 31.2,
    "diameter_meters": 62000,
    "source": "other"
  },
  {
    "id": "42",
    "name": "Beethoven",
    "planet": "Mercury",
    "description": "An ancient, weakly defined impact basin named after the composer Ludwig van Beethoven.",
    "latitude": -20.8,
    "longitude": 123.6,
    "diameter_meters": 625000,
    "source": "other"
  },
  {
    "id": "43",
    "name": "Discovery Rupes",
    "planet": "Mercury",
    "description": "A prominent lobate scarp (cliff) formed by tectonic activity.",
    "latitude": -56.3,
    "longitude": 38.3,
    "diameter_meters": 650000,
    "source": "other"
  },
  {
    "id": "44",
    "name": "Hokusai",
    "planet": "Mercury",
    "description": "A young crater with one of the most extensive ray systems on Mercury.",
    "latitude": 57.8,
    "longitude": 16.9,
    "diameter_meters": 114000,
    "source": "other"
  },
  {
    "id": "45",
    "name": "Debussy",
    "planet": "Mercury",
    "description": "A prominent rayed crater named after the French composer Claude Debussy.",
    "latitude": -33.9,
    "longitude": 347.5,
    "diameter_meters": 85000,
    "source": "other"
  },
  {
    "id": "46",
    "name": "Tolstoj",
    "planet": "Mercury",
    "description": "An ancient, degraded impact basin named after the writer Leo Tolstoy.",
    "latitude": -16.3,
    "longitude": 163.5,
    "diameter_meters": 390000,
    "source": "other"
  },
  {
    "id": "47",
    "name": "Atget",
    "planet": "Mercury",
    "description": "A crater with a dark floor and central peak, named after photographer Eugène Atget.",
    "latitude": -25.6,
    "longitude": 165.7,
    "diameter_meters": 100000,
    "source": "other"
  }
];

export const KnownDioneFeatures: IPlanetaryFeature[] = [
  {
    "id": "18",
    "name": "Amastrus",
    "planet": "Dione",
    "description": "A large crater located in Dione's northern hemisphere.",
    "latitude": 62.1,
    "longitude": 329.0,
    "diameter_meters": 47000,
    "source": "other"
  },
  {
    "id": "48",
    "name": "Latium Chasma",
    "planet": "Dione",
    "description": "A bright, wispy ice cliff, part of a large fracture system.",
    "latitude": -19.6,
    "longitude": 52.8,
    "diameter_meters": 290000,
    "source": "other"
  },
  {
    "id": "49",
    "name": "Aeneas",
    "planet": "Dione",
    "description": "A very large, degraded crater named after the hero of the Aeneid.",
    "latitude": 25.9,
    "longitude": 46.4,
    "diameter_meters": 161000,
    "source": "other"
  },
  {
    "id": "50",
    "name": "Dido",
    "planet": "Dione",
    "description": "A large crater named after the founder and first queen of Carthage.",
    "latitude": -23.4,
    "longitude": 19.3,
    "diameter_meters": 118000,
    "source": "other"
  },
  {
    "id": "51",
    "name": "Eurotas Chasmata",
    "planet": "Dione",
    "description": "A network of bright, linear valleys or canyons.",
    "latitude": 13.9,
    "longitude": 154.2,
    "diameter_meters": 500000,
    "source": "other"
  },
  {
    "id": "52",
    "name": "Turnus",
    "planet": "Dione",
    "description": "A large impact crater with a central peak.",
    "latitude": -16.4,
    "longitude": 343.3,
    "diameter_meters": 101000,
    "source": "other"
  },
  {
    "id": "53",
    "name": "Romulus",
    "planet": "Dione",
    "description": "A crater named after the mythical founder of Rome.",
    "latitude": -9.3,
    "longitude": 28.9,
    "diameter_meters": 76000,
    "source": "other"
  },
  {
    "id": "54",
    "name": "Remus",
    "planet": "Dione",
    "description": "A crater located near its twin, Romulus.",
    "latitude": -12.4,
    "longitude": 29.5,
    "diameter_meters": 74000,
    "source": "other"
  },
  {
    "id": "55",
    "name": "Evander",
    "planet": "Dione",
    "description": "A large, well-defined crater.",
    "latitude": 57.5,
    "longitude": 145.0,
    "diameter_meters": 35000,
    "source": "other"
  },
  {
    "id": "56",
    "name": "Pallas Chasmata",
    "planet": "Dione",
    "description": "A system of bright ice cliffs on the trailing hemisphere.",
    "latitude": -27.6,
    "longitude": 204.6,
    "diameter_meters": 170000,
    "source": "other"
  }
]

export const KnownEnceladusFeatures: IPlanetaryFeature[] = [
  {
    "id": "19",
    "name": "Baghdad Sulcus",
    "planet": "Enceladus",
    "description": "One of the 'tiger stripes', a series of tectonically active fractures in the south polar region.",
    "latitude": -87.2,
    "longitude": 241.1,
    "diameter_meters": 175000,
    "source": "other"
  },
  {
    "id": "57",
    "name": "Damascus Sulcus",
    "planet": "Enceladus",
    "description": "A 'tiger stripe' fracture in the south polar region, a source of geyser-like eruptions.",
    "latitude": -78.4,
    "longitude": 286.0,
    "diameter_meters": 125000,
    "source": "other"
  },
  {
    "id": "58",
    "name": "Cairo Sulcus",
    "planet": "Enceladus",
    "description": "A 'tiger stripe' fracture, parallel to Baghdad and Damascus Sulci.",
    "latitude": -81.6,
    "longitude": 200.7,
    "diameter_meters": 165000,
    "source": "other"
  },
  {
    "id": "59",
    "name": "Alexandria Sulcus",
    "planet": "Enceladus",
    "description": "The easternmost of the four main 'tiger stripe' fractures.",
    "latitude": -74.0,
    "longitude": 302.0,
    "diameter_meters": 111000,
    "source": "other"
  },
  {
    "id": "60",
    "name": "Samarkand Sulci",
    "planet": "Enceladus",
    "description": "A region of parallel grooves and ridges, indicating tectonic activity.",
    "latitude": 30.0,
    "longitude": 327.0,
    "diameter_meters": 612000,
    "source": "other"
  },
  {
    "id": "61",
    "name": "Aladdin",
    "planet": "Enceladus",
    "description": "A large, flattened crater, showing evidence of viscous relaxation.",
    "latitude": 62.4,
    "longitude": 27.2,
    "diameter_meters": 34000,
    "source": "other"
  },
  {
    "id": "62",
    "name": "Dunyazad",
    "planet": "Enceladus",
    "description": "A large crater named after the sister of Shahrazad.",
    "latitude": 41.9,
    "longitude": 200.6,
    "diameter_meters": 31000,
    "source": "other"
  },
  {
    "id": "63",
    "name": "Shahrazad",
    "planet": "Enceladus",
    "description": "A crater named after the storyteller of The Arabian Nights.",
    "latitude": 47.3,
    "longitude": 199.3,
    "diameter_meters": 20000,
    "source": "other"
  },
  {
    "id": "64",
    "name": "Sindbad",
    "planet": "Enceladus",
    "description": "A crater located in the leading hemisphere.",
    "latitude": 67.0,
    "longitude": 212.0,
    "diameter_meters": 29000,
    "source": "other"
  },
  {
    "id": "65",
    "name": "Diyar Planitia",
    "planet": "Enceladus",
    "description": "A relatively smooth, low-lying plain.",
    "latitude": -2.0,
    "longitude": 240.0,
    "diameter_meters": 325000,
    "source": "other"
  }
];

export const KnownIapetusFeatures: IPlanetaryFeature[] = [
  {
    "id": "20",
    "name": "Cassini Regio",
    "planet": "Iapetus",
    "description": "The vast, dark-colored region that covers the leading hemisphere of Iapetus.",
    "latitude": -10.0,
    "longitude": 270.0,
    "diameter_meters": 2201000,
    "source": "other"
  },
  {
    "id": "66",
    "name": "Roncevaux Terra",
    "planet": "Iapetus",
    "description": "The bright, icy region that covers the trailing hemisphere and polar areas.",
    "latitude": 30.0,
    "longitude": 90.0,
    "diameter_meters": 1789000,
    "source": "other"
  },
  {
    "id": "67",
    "name": "Equatorial Ridge",
    "planet": "Iapetus",
    "description": "A massive mountain range running along the equator, reaching up to 20 km high.",
    "latitude": 0.0,
    "longitude": 180.0,
    "diameter_meters": 1300000,
    "source": "other"
  },
  {
    "id": "68",
    "name": "Turgis",
    "planet": "Iapetus",
    "description": "A very large, dark-floored impact basin within Cassini Regio.",
    "latitude": 16.9,
    "longitude": 283.9,
    "diameter_meters": 580000,
    "source": "other"
  },
  {
    "id": "69",
    "name": "Charlemagne",
    "planet": "Iapetus",
    "description": "A large crater in the bright Roncevaux Terra.",
    "latitude": 54.3,
    "longitude": 105.1,
    "diameter_meters": 91000,
    "source": "other"
  },
  {
    "id": "70",
    "name": "Roland",
    "planet": "Iapetus",
    "description": "A very large crater named after the epic's hero.",
    "latitude": 73.3,
    "longitude": 25.1,
    "diameter_meters": 444000,
    "source": "other"
  },
  {
    "id": "71",
    "name": "Ganelon",
    "planet": "Iapetus",
    "description": "A crater named after the knight who betrayed Roland.",
    "latitude": 42.6,
    "longitude": 283.9,
    "diameter_meters": 78000,
    "source": "other"
  },
  {
    "id": "72",
    "name": "Ogier",
    "planet": "Iapetus",
    "description": "A large crater within Cassini Regio.",
    "latitude": 32.5,
    "longitude": 274.6,
    "diameter_meters": 110000,
    "source": "other"
  },
  {
    "id": "73",
    "name": "Malagigi",
    "planet": "Iapetus",
    "description": "A crater located on the border between the dark and bright terrain.",
    "latitude": 10.9,
    "longitude": 235.8,
    "diameter_meters": 60000,
    "source": "other"
  },
  {
    "id": "74",
    "name": "Baligant",
    "planet": "Iapetus",
    "description": "A crater in Roncevaux Terra.",
    "latitude": -1.2,
    "longitude": 122.9,
    "diameter_meters": 71000,
    "source": "other"
  }
];

export const KnownMimasFeatures: IPlanetaryFeature[] = [
  {
    "id": "21",
    "name": "Herschel",
    "planet": "Mimas",
    "description": "A massive impact crater that gives Mimas its distinctive 'Death Star' appearance.",
    "latitude": -1.38,
    "longitude": 111.76,
    "diameter_meters": 139000,
    "source": "other"
  },
  {
    "id": "75",
    "name": "Arthur",
    "planet": "Mimas",
    "description": "A large crater named after the legendary King Arthur.",
    "latitude": -35.2,
    "longitude": 196.1,
    "diameter_meters": 64000,
    "source": "other"
  },
  {
    "id": "76",
    "name": "Gawain",
    "planet": "Mimas",
    "description": "A crater named after a Knight of the Round Table.",
    "latitude": -58.7,
    "longitude": 261.1,
    "diameter_meters": 27000,
    "source": "other"
  },
  {
    "id": "77",
    "name": "Lancelot",
    "planet": "Mimas",
    "description": "A crater named after the famous knight, Sir Lancelot.",
    "latitude": -9.2,
    "longitude": 328.3,
    "diameter_meters": 30000,
    "source": "other"
  },
  {
    "id": "78",
    "name": "Merlin",
    "planet": "Mimas",
    "description": "A crater named after the legendary wizard.",
    "latitude": -38.3,
    "longitude": 218.8,
    "diameter_meters": 31000,
    "source": "other"
  },
  {
    "id": "79",
    "name": "Uther",
    "planet": "Mimas",
    "description": "A crater named after Uther Pendragon, Arthur's father.",
    "latitude": -40.5,
    "longitude": 249.2,
    "diameter_meters": 27000,
    "source": "other"
  },
  {
    "id": "80",
    "name": "Camelot Chasma",
    "planet": "Mimas",
    "description": "A large canyon or chasm.",
    "latitude": -35.0,
    "longitude": 25.0,
    "diameter_meters": 150000,
    "source": "other"
  },
  {
    "id": "81",
    "name": "Avalon Chasma",
    "planet": "Mimas",
    "description": "A chasm named after the mythical island.",
    "latitude": -35.0,
    "longitude": 150.0,
    "diameter_meters": 120000,
    "source": "other"
  },
  {
    "id": "82",
    "name": "Galahad",
    "planet": "Mimas",
    "description": "A crater named after the son of Lancelot.",
    "latitude": -45.4,
    "longitude": 145.3,
    "diameter_meters": 25000,
    "source": "other"
  },
  {
    "id": "83",
    "name": "Igraine",
    "planet": "Mimas",
    "description": "A crater named after the mother of King Arthur.",
    "latitude": -42.2,
    "longitude": 231.8,
    "diameter_meters": 38000,
    "source": "other"
  }
];

export const KnownPhoebeFeatures: IPlanetaryFeature[] = [
  {
    "id": "22",
    "name": "Jason",
    "planet": "Phoebe",
    "description": "The largest crater on Phoebe, named after the leader of the Argonauts.",
    "latitude": 12.0,
    "longitude": 328.5,
    "diameter_meters": 101000,
    "source": "other"
  },
  {
    "id": "84",
    "name": "Leto",
    "planet": "Phoebe",
    "description": "A crater named after the mother of Apollo and Artemis.",
    "latitude": -52.5,
    "longitude": 4.1,
    "diameter_meters": 18000,
    "source": "other"
  },
  {
    "id": "85",
    "name": "Euphemus",
    "planet": "Phoebe",
    "description": "A large crater on the moon's surface.",
    "latitude": -27.2,
    "longitude": 15.6,
    "diameter_meters": 23000,
    "source": "other"
  },
  {
    "id": "86",
    "name": "Hylas",
    "planet": "Phoebe",
    "description": "A crater named after a companion of Heracles.",
    "latitude": 9.4,
    "longitude": 2.5,
    "diameter_meters": 30000,
    "source": "other"
  },
  {
    "id": "87",
    "name": "Erginus",
    "planet": "Phoebe",
    "description": "A well-defined impact crater.",
    "latitude": 44.8,
    "longitude": 285.8,
    "diameter_meters": 36000,
    "source": "other"
  },
  {
    "id": "88",
    "name": "Idmon",
    "planet": "Phoebe",
    "description": "A crater named after the seer of the Argonauts.",
    "latitude": -73.3,
    "longitude": 296.6,
    "diameter_meters": 61000,
    "source": "other"
  },
  {
    "id": "89",
    "name": "Mopsus",
    "planet": "Phoebe",
    "description": "A crater named after another seer on the voyage.",
    "latitude": -11.0,
    "longitude": 116.8,
    "diameter_meters": 37000,
    "source": "other"
  },
  {
    "id": "90",
    "name": "Canthus",
    "planet": "Phoebe",
    "description": "A crater named for an Argonaut who was killed in Libya.",
    "latitude": 46.2,
    "longitude": 211.2,
    "diameter_meters": 44000,
    "source": "other"
  },
  {
    "id": "91",
    "name": "Peleus",
    "planet": "Phoebe",
    "description": "A crater named after the father of Achilles.",
    "latitude": -56.0,
    "longitude": 242.0,
    "diameter_meters": 44000,
    "source": "other"
  },
  {
    "id": "92",
    "name": "Zetes",
    "planet": "Phoebe",
    "description": "A crater named for one of the Boreads, winged sons of the north wind.",
    "latitude": -29.2,
    "longitude": 68.3,
    "diameter_meters": 33000,
    "source": "other"
  }
];

export const KnownRheaFeatures: IPlanetaryFeature[] = [
  {
    "id": "23",
    "name": "Inktomi",
    "planet": "Rhea",
    "description": "A relatively young, bright rayed crater, indicating a recent impact event.",
    "latitude": -14.1,
    "longitude": 112.1,
    "diameter_meters": 47200,
    "source": "other"
  },
  {
    "id": "93",
    "name": "Tirawa",
    "planet": "Rhea",
    "description": "A very large, ancient impact basin.",
    "latitude": 34.0,
    "longitude": 152.1,
    "diameter_meters": 361000,
    "source": "other"
  },
  {
    "id": "94",
    "name": "Mamaldi",
    "planet": "Rhea",
    "description": "The largest impact feature on Rhea, a vast and ancient basin.",
    "latitude": -19.0,
    "longitude": 353.0,
    "diameter_meters": 480000,
    "source": "other"
  },
  {
    "id": "95",
    "name": "Izangi",
    "planet": "Rhea",
    "description": "A large crater named after the Japanese creator god.",
    "latitude": -25.2,
    "longitude": 13.9,
    "diameter_meters": 175000,
    "source": "other"
  },
  {
    "id": "96",
    "name": "Izanami",
    "planet": "Rhea",
    "description": "A large crater near Izanagi, named after the Japanese creator goddess.",
    "latitude": -46.7,
    "longitude": 313.2,
    "diameter_meters": 139000,
    "source": "other"
  },
  {
    "id": "97",
    "name": "Ormazd",
    "planet": "Rhea",
    "description": "A crater named after the Zoroastrian creator deity.",
    "latitude": 51.5,
    "longitude": 357.7,
    "diameter_meters": 155000,
    "source": "other"
  },
  {
    "id": "98",
    "name": "Kunlun Linea",
    "planet": "Rhea",
    "description": "A bright, linear feature, likely a tectonic fracture or ice cliff.",
    "latitude": 40.0,
    "longitude": 290.0,
    "diameter_meters": 300000,
    "source": "other"
  },
  {
    "id": "99",
    "name": "Woyengi",
    "planet": "Rhea",
    "description": "A crater named after a creator goddess from the Ijaw people of Nigeria.",
    "latitude": 13.4,
    "longitude": 305.6,
    "diameter_meters": 91000,
    "source": "other"
  },
  {
    "id": "100",
    "name": "Leza",
    "planet": "Rhea",
    "description": "A crater named after a creator god from Tonga.",
    "latitude": -27.3,
    "longitude": 249.7,
    "diameter_meters": 105000,
    "source": "other"
  },
  {
    "id": "101",
    "name": "Puchou Linea",
    "planet": "Rhea",
    "description": "A set of bright, wispy fractures on the trailing hemisphere.",
    "latitude": 40.0,
    "longitude": 240.0,
    "diameter_meters": 500000,
    "source": "other"
  }
];

export const KnownTethysFeatures: IPlanetaryFeature[] = [
  {
    "id": "24",
    "name": "Odysseus",
    "planet": "Tethys",
    "description": "An enormous impact crater whose diameter is nearly two-fifths that of Tethys itself.",
    "latitude": 32.8,
    "longitude": 128.9,
    "diameter_meters": 445000,
    "source": "other"
  },
  {
    "id": "102",
    "name": "Ithaca Chasma",
    "planet": "Tethys",
    "description": "A vast system of canyons that runs across much of the moon's surface, possibly formed by the Odysseus impact.",
    "latitude": -14.0,
    "longitude": 6.0,
    "diameter_meters": 1100000,
    "source": "other"
  },
  {
    "id": "103",
    "name": "Telemachus",
    "planet": "Tethys",
    "description": "A large crater named after the son of Odysseus.",
    "latitude": 1.7,
    "longitude": 339.4,
    "diameter_meters": 92000,
    "source": "other"
  },
  {
    "id": "104",
    "name": "Penelope",
    "planet": "Tethys",
    "description": "A large crater located within Ithaca Chasma, named after the wife of Odysseus.",
    "latitude": -10.8,
    "longitude": 289.6,
    "diameter_meters": 208000,
    "source": "other"
  },
  {
    "id": "105",
    "name": "Antinous",
    "planet": "Tethys",
    "description": "A well-defined crater named after the leader of Penelope's suitors.",
    "latitude": -58.7,
    "longitude": 286.0,
    "diameter_meters": 138000,
    "source": "other"
  },
  {
    "id": "106",
    "name": "Ajax",
    "planet": "Tethys",
    "description": "A crater named after the Greek hero.",
    "latitude": -33.5,
    "longitude": 283.4,
    "diameter_meters": 90000,
    "source": "other"
  },
  {
    "id": "107",
    "name": "Nestor",
    "planet": "Tethys",
    "description": "A crater named after the wise king of Pylos.",
    "latitude": -63.7,
    "longitude": 59.8,
    "diameter_meters": 109000,
    "source": "other"
  },
  {
    "id": "108",
    "name": "Eumaeus",
    "planet": "Tethys",
    "description": "A crater named after Odysseus' loyal swineherd.",
    "latitude": 23.1,
    "longitude": 44.9,
    "diameter_meters": 30000,
    "source": "other"
  },
  {
    "id": "109",
    "name": "Circe",
    "planet": "Tethys",
    "description": "A crater named after the enchantress who detained Odysseus.",
    "latitude": -12.9,
    "longitude": 75.8,
    "diameter_meters": 79000,
    "source": "other"
  },
  {
    "id": "110",
    "name": "Polyphemus",
    "planet": "Tethys",
    "description": "A crater named after the Cyclops blinded by Odysseus.",
    "latitude": -2.7,
    "longitude": 282.8,
    "diameter_meters": 153000,
    "source": "other"
  }
];

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

