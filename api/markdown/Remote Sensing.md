public:: true

# Remote Sensing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:remote-sensing",
  "@type": "Page",
  "vc:slug": "remote-sensing",
  "title": "Remote Sensing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:remote-sensing",
  "@type": "Class",
  "label": "Remote Sensing",
  "definition": "Remote sensing is the acquisition of information about physical objects or phenomena from a distance, typically using sensors mounted on satellites, aircraft, drones, or ground-based platforms, without direct physical contact with the subject. It encompasses passive sensing (measuring reflected or emitted electromagnetic radiation across optical, infrared, and microwave bands) and active sensing (radar and LiDAR, which emit and measure return signals). Remote sensing data underpins earth observation, environmental monitoring, precision agriculture, disaster response, urban planning, and military reconnaissance.",
  "domain": "science",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:image-processing", "label": "Image Processing"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:geospatial-technology", "label": "Geospatial Technology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:object-recognition", "label": "Object Recognition"},
      {"@id": "urn:ngm:class:mapping", "label": "Mapping"},
      {"@id": "urn:ngm:class:environmental-assessment", "label": "Environmental Assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:geospatial-information", "label": "Geospatial Information"},
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Remote Sensing]] is the science and technology of acquiring data about the Earth's surface and atmosphere using sensors at a distance — via satellite, aircraft, or drone — encompassing passive optical and thermal imaging as well as active [[Lidar]] and radar systems to produce [[Geospatial Information]] for [[Mapping]] and analysis.

- ### Relationships
  - Remote sensing integrates [[Lidar]] for topographic and structural measurement, [[Image Processing]] and [[Deep Learning]] for automated interpretation, and [[Geospatial Technology]] for spatial reference and analysis. It enables [[Object Recognition]] in satellite imagery for land cover classification and [[Mapping]] of terrain, vegetation, and infrastructure. [[Environmental Assessment]] applications leverage spectral data to monitor deforestation, water quality, and carbon stocks. [[Autonomous Vehicle]] systems employ short-range remote sensing via [[Perception System]] architectures, with [[Point Cloud]] data from LiDAR as a primary input.

- ### Content
  - Modern remote sensing emerged from aerial photography in World War I, formalised for cartography in the 1950s-60s. The Landsat programme, launched in 1972, established civilian multispectral satellite observation as a scientific standard. Subsequent systems (SPOT, ERS, MODIS, Sentinel series) progressively improved spatial, temporal, and spectral resolution. The declassification of military-grade imaging technologies in the 1990s and the commercialisation of satellite imagery (DigitalGlobe, Planet Labs) democratised access.

  - Remote sensing instruments span several modalities. Multispectral and hyperspectral sensors measure reflectance in tens to hundreds of discrete wavelength bands, enabling vegetation index (NDVI), mineral mapping, and water quality assessment. Synthetic Aperture Radar (SAR) penetrates clouds and operates day or night, making it essential for flood mapping and deforestation monitoring. LiDAR emits laser pulses and measures return times to produce dense three-dimensional point clouds of terrain, buildings, and vegetation canopy structure. Thermal infrared sensors detect land surface temperature, supporting urban heat island analysis and wildfire detection.

  - Applications span every domain where spatial knowledge at scale is needed: agricultural yield estimation and irrigation optimisation, disaster damage assessment (earthquake, flood, landslide), illegal deforestation and mining detection, maritime vessel tracking, urban growth modelling, ice sheet mass balance monitoring, and military intelligence. In autonomous systems, short-range LiDAR and radar sensing is the primary spatial awareness modality for self-driving vehicles and delivery robots.

  - As of 2024-2025, the convergence of small satellite constellations (Planet's Dove fleet providing daily global coverage), cloud-native geospatial processing (Google Earth Engine, AWS Ground Station), and deep learning-based analysis is transforming remote sensing from a specialist discipline into a broadly accessible data infrastructure layer. Foundation models such as Prithvi (NASA/IBM) pre-trained on multi-year multi-spectral Landsat archives enable few-shot adaptation to new Earth observation tasks. Synthetic Aperture Radar change detection and fusion with optical data is enabling near-continuous monitoring of critical ecosystems at sub-metre resolution.

