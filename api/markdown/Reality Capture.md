public:: true
alias:: RealityCapture

# Reality Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reality-capture",
  "@type": "Page",
  "vc:slug": "reality-capture",
  "title": "Reality Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reality-capture",
  "@type": "Class",
  "label": "Reality Capture",
  "definition": "Reality capture is the process of digitising the physical world into accurate, measurable 3D representations using sensors such as LiDAR scanners, photogrammetric camera arrays, and depth cameras, producing point clouds, textured meshes, or digital twin models. It encompasses the full workflow from on-site data acquisition to processing, georeferencing, and delivery of survey-grade or visualisation-grade 3D assets. Reality capture is foundational to construction, heritage preservation, urban digital twins, and spatial computing content pipelines.",
  "domain": "spatial",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:etsi-domain-reality-capture", "label": "ETSI_Domain_Reality_Capture"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:lidar-scanning", "label": "Lidar Scanning"},
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:multi-view-stereo", "label": "Multi-View Stereo"},
      {"@id": "urn:ngm:class:laser-scanner", "label": "Laser Scanner"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:point-cloud-processing", "label": "Point Cloud Processing"},
      {"@id": "urn:ngm:class:environmental-mapping", "label": "Environmental Mapping"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:geospatial-technology", "label": "Geospatial Technology"},
      {"@id": "urn:ngm:class:3-d-scanning", "label": "3D Scanning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Reality capture is the systematic digitisation of physical environments into metrically accurate 3D models using active sensors ([[Lidar Scanning]], [[Laser Scanner]]) and passive imaging techniques ([[Photogrammetry]], [[Multi-View Stereo]]). The resulting data — typically dense [[Point Cloud]] datasets and registered textured meshes — preserves spatial geometry, surface appearance, and geographic context. Reality capture workflows are the primary means of populating [[Environmental Mapping]] databases and generating photorealistic assets for spatial computing, construction management, and heritage documentation.

- ### Relationships
  - Reality capture orchestrates [[Lidar Scanning]] and [[Photogrammetry]] as complementary acquisition methods: LiDAR provides metric accuracy and performs well in low texture or low light, while photogrammetry delivers dense colour information. [[Multi-View Stereo]] algorithms process the photographic component. Output data undergoes [[Point Cloud Processing]] before delivery. The discipline relates to [[Geospatial Technology]] through georeferencing and coordinate system alignment, and to [[3D Scanning]] as a broader category of digitisation techniques.

- ### Content
  - Reality capture has its roots in terrestrial surveying and aerial mapping, disciplines that have existed for centuries. The pivotal shift to digital 3D capture began in the 1990s with the commercialisation of laser range finders and early structured-light scanners. By the mid-2000s, ground-based LiDAR scanners capable of capturing millions of points per second became affordable for construction and forensic applications. Simultaneously, photogrammetric software matured to the point where ordinary cameras could produce survey-grade outputs, democratising 3D capture.

  - A modern reality capture workflow typically involves: sensor selection and calibration (terrestrial laser scanner, drone-mounted LiDAR or camera, hand-held scanner); systematic data acquisition following overlap and ground control point protocols; pre-processing including noise filtering, registration of multiple scans, and photogrammetric reconstruction; georeferencing to a coordinate reference system; and delivery in standard formats (LAS/LAZ point clouds, E57, OBJ, IFC) for downstream BIM, GIS, or visualisation workflows. Accuracy achievable ranges from centimetre-level for terrestrial laser scanning to sub-centimetre for close-range photogrammetry with ground control.

  - The construction and engineering industries have adopted reality capture as a standard workflow for as-built documentation, quantity surveying, clash detection, and progress monitoring. Cultural heritage institutions use it to create permanent archival records of fragile or threatened structures. Film and game studios rely on reality capture to produce photorealistic environments and prop scans. Emerging drone survey regulations in most jurisdictions have standardised beyond-visual-line-of-sight (BVLOS) permissions, enabling large-scale infrastructure surveys that were previously cost-prohibitive.

  - Between 2023 and 2025, neural radiance fields and [[3D Gaussian Splatting]] have begun to complement traditional reality capture pipelines, offering faster reconstruction and higher visual fidelity for visualisation applications at the cost of metric accuracy. Mobile reality capture using smartphone LiDAR (iPhone Pro, iPad Pro) and apps such as Matterport, Polycam, and RealityKit has made entry-level 3D capture accessible to non-specialists. The convergence of reality capture with digital twin platforms and AI-driven change detection — automatically identifying differences between successive captures of the same site — is driving adoption in infrastructure monitoring and smart city applications.

