public:: true

# Satellite Imagery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e9c930c66658717e2191c28a6c9ebf053932d8c1e880e0e39f3f01af08064be6",
  "@type": "Page",
  "vc:slug": "satellite-imagery",
  "title": "Satellite Imagery",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:remote-sensing",
      "vc:label": "Remote Sensing"
    },
    {
      "@id": "urn:visionflow:linked:geospatial-data",
      "vc:label": "Geospatial Data"
    },
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:satellite-imagery",
  "@type": "Class",
  "label": "Satellite Imagery",
  "definition": "Imagery of the Earth's surface captured by sensors aboard orbiting satellites, spanning optical, multispectral, hyperspectral, thermal, and synthetic-aperture radar modalities at spatial resolutions from kilometres to tens of centimetres. Georeferenced and revisited on regular orbits, satellite imagery is the primary raster substrate of geospatial analysis, feeding mapping, agriculture, climate monitoring, disaster response, and defence, and — via open programmes such as Landsat and Sentinel — machine learning at planetary scale.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:remote-sensing",
    "label": "Remote Sensing"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:geospatial-data",
        "label": "Geospatial Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Imagery of the Earth's surface captured by sensors aboard orbiting satellites, spanning optical, multispectral, hyperspectral, thermal, and synthetic-aperture radar modalities at spatial resolutions from kilometres to tens of centimetres. Georeferenced and revisited on regular orbits, satellite imagery is the primary raster substrate of geospatial analysis, feeding mapping, agriculture, climate monitoring, disaster response, and defence, and — via open programmes such as Landsat and Sentinel — machine learning at planetary scale."

- ### Semantic Classification
  - owl-class:: spatial-computing:SatelliteImagery
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Remote Sensing]]
  - part-of:: [[Geospatial Data]]
  - uses:: [[Image Processing]]
  - related-to:: [[Computer Vision]]

- ### Content

  ## Definition

  **Satellite imagery** is the raster record of Earth as seen from orbit. Since Landsat 1 (1972) began systematic civilian observation, constellations public and private have imaged the planet across the electromagnetic spectrum: panchromatic and multispectral optical sensors, hyperspectral instruments resolving hundreds of narrow bands, thermal infrared for surface temperature, and synthetic-aperture radar (SAR), which images through cloud and darkness by actively illuminating the ground with microwaves. Each image is characterised by four resolutions — spatial (ground sample distance), spectral (number and width of bands), temporal (revisit rate), and radiometric (bit depth) — and modern systems trade these against one another, from Sentinel-2's 10 m, five-day global coverage to commercial 30 cm imagery tasked on demand.

  Raw pixels become usable [[Geospatial Data]] through a processing chain rooted in [[Image Processing]]: radiometric calibration to physical radiance, atmospheric correction to surface reflectance, orthorectification against terrain models, and georeferencing into map coordinates — with rigorous sensor and lens calibration determining the geometric accuracy of every downstream measurement. Analysis-ready products stack these corrected scenes into time series, from which indices such as NDVI (vegetation vigour) and NDWI (water) are computed per pixel.

  The field's centre of gravity has shifted from photo-interpretation to [[Computer Vision]] at scale: deep networks now perform land-cover classification, building and road extraction, ship and aircraft detection, change detection, cloud masking, and super-resolution over petabyte archives, and geospatial foundation models pre-trained on unlabelled satellite archives (Prithvi, SatMAE, Clay) transfer to downstream tasks with limited labels.

  ## Current Landscape

  - **Open programmes**: NASA/USGS Landsat (50+ year archive) and ESA's Copernicus Sentinels provide free global imagery; cloud platforms (Google Earth Engine, Microsoft Planetary Computer, AWS Open Data) make the archives analysable without download.
  - **Commercial constellations**: Planet images the whole landmass daily at ~3 m; Maxar and Airbus supply 30-50 cm tasked imagery; ICEYE, Capella, and Umbra fly SAR smallsat fleets with sub-metre resolution and rapid revisit.
  - **Applications**: precision agriculture and crop forecasting, deforestation and methane monitoring, insurance and disaster assessment (floods, wildfires), maritime domain awareness, urban growth mapping, and humanitarian response — with imagery-derived evidence increasingly used in climate policy and conflict documentation.
  - **UK context**: the UK hosts Airbus Defence and Space's optical imaging heritage in Stevenage, SAR pioneer SSTL in Guildford, and analytics firms clustered around the Harwell space campus and the Satellite Applications Catapult.
  - **Standards and formats**: cloud-optimised GeoTIFF (COG) and the SpatioTemporal Asset Catalog (STAC) specification have become the de facto interfaces for discovering and streaming imagery at scale.
  - **Geospatial foundation models (2024-2026)**: NASA and IBM open-sourced Prithvi-EO-2.0 (a vision transformer with 3D spatiotemporal embeddings pre-trained on 7+ years of Harmonized Landsat-Sentinel data, ~4.2M samples, released under Apache 2.0 on Hugging Face); a unified Copernicus-FM foundation model trained on 18.7M aligned Sentinel images was presented at ICCV 2025.
  - **Generative AI reasoning layer (2025)**: Google introduced remote-sensing foundation models and a "Geospatial Reasoning" research effort pairing them with Gemini, with Airbus, Maxar and Planet Labs among inaugural trusted testers.
  - **Benchmarks maturing**: Landsat-Bench (2025) established standardised evaluation for Landsat-pretrained models, showing self-supervised geospatial pretraining beats ImageNet transfer by roughly +4% overall accuracy on land-cover tasks.

  **Sources**:
  - https://research.ibm.com/publications/prithvi-eo-an-open-access-geospatial-foundation-model-advancing-earth-science-through-global-collaboration
  - https://research.google/blog/geospatial-reasoning-unlocking-insights-with-generative-ai-and-multiple-foundation-models/
  - https://openaccess.thecvf.com/content/ICCV2025/papers/Wang_Towards_a_Unified_Copernicus_Foundation_Model_for_Earth_Vision_ICCV_2025_paper.pdf
  - https://arxiv.org/html/2506.08780v1

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
