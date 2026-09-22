public:: true

# Lidar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f47c81dfaf0524515fcb1a75a340ae98fdc4aa940039a805d4d29fcc14fed97",
  "@type": "Page",
  "vc:slug": "lidar",
  "title": "Lidar",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9519"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Lidar"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lidar",
  "@type": "Class",
  "label": "Lidar",
  "definition": "Lidar (Light Detection and Ranging) is an active remote-sensing technology that emits pulsed laser light and measures the time-of-flight of returning reflections to compute precise three-dimensional point-cloud representations of the surrounding environment. Operating across wavelengths from near-infrared to ultraviolet, it achieves centimetre-scale spatial accuracy and is robust to many lighting conditions where camera-based systems degrade. Lidar is a foundational sensor modality in autonomous vehicles, aerial surveying, robotics, and spatial-computing applications, commonly fused with IMU, camera, and GNSS data to enable localisation, mapping, and obstacle detection.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sensor",
      "label": "Sensor"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:light-detection-and-ranging",
      "label": "Light Detection and Ranging"
    },
    {
      "@id": "urn:ngm:class:laser-scanner",
      "label": "Laser Scanner"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:time-of-flight-sensor",
        "label": "Time-of-Flight Sensor"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:sensor-suite",
        "label": "Autonomous Vehicle Sensor Suite"
      },
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Robotic Perception System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:point-cloud-processing",
        "label": "Point Cloud Processing"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:obstacle-detection",
        "label": "Obstacle Detection"
      },
      {
        "@id": "urn:ngm:class:3-d-scene-reconstruction",
        "label": "3D Scene Reconstruction"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:time-of-flight-sensor",
        "label": "Time-of-Flight Measurement"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:infrared-light-source",
        "label": "Infrared Laser"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:environment-mapping",
        "label": "Environment Mapping"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:radar",
        "label": "Radar"
      },
      {
        "@id": "urn:ngm:class:camera-sensor",
        "label": "Camera Sensor"
      },
      {
        "@id": "urn:ngm:class:ultrasonic-sensor",
        "label": "Ultrasonic Sensor"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:3d-mapping",
        "label": "3D Mapping"
      },
      {
        "@id": "urn:ngm:class:geospatial-data",
        "label": "Geospatial Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:gnss",
        "label": "GNSS"
      },
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:lidar:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8f47c81dfaf0524515fcb1a75a340ae98fdc4aa940039a805d4d29fcc14fed97"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Lidar (Light Detection and Ranging) is an active [[Remote Sensing]] technology that emits pulsed laser light and measures the precise time-of-flight of returning reflections to build dense three-dimensional [[Point Cloud]] representations of the environment. Unlike passive [[Camera Sensor]] systems, it generates its own illumination and therefore maintains accuracy in low-light or high-contrast conditions. Lidar underpins modern [[Autonomous Navigation]], [[Simultaneous Localisation and Mapping]], and [[Spatial Computing]] workflows by providing centimetre-scale depth measurements at high update rates.

- ### Overview
  - Lidar functions by projecting narrow laser pulses — typically in the near-infrared spectrum (905 nm or 1550 nm) — toward the scene and timing the round-trip travel of photons with a high-precision clock. The measured time divided by twice the speed of light yields range; combining range with azimuth and elevation angles produces a 3D coordinate for each return pulse.
  - Modern systems sample millions of points per second, generating [[Point Cloud]] data that capture geometry, surface normals, and in some configurations intensity and multi-echo information.
  - Lidar is routinely fused with [[Inertial Measurement Unit]] data, [[GNSS]] signals, and [[Camera Sensor]] imagery in a [[Sensor Fusion]] pipeline to compensate for motion distortion and to associate colour or semantic labels with geometric measurements.
  - The technology has matured from bulky rotating assemblies to compact solid-state units, driving adoption in consumer vehicles, mobile robots, UAVs, and infrastructure inspection platforms.

- ### Key Components
  - **Laser Emitter** — produces collimated pulses, typically a [[Infrared Laser]] diode or fibre laser; wavelength choice affects eye safety ratings and atmospheric penetration.
  - **Photodetector / Receiver** — commonly an [[Avalanche Photodiode]] (APD) or Single-Photon Avalanche Diode (SPAD) that converts returning photons to an electrical signal with sub-nanosecond timing resolution.
  - **[[Time-of-Flight Sensor]] / TDC** — a Time-to-Digital Converter latches the pulse departure and return timestamps to compute range.
  - **Scanning Mechanism** — mechanical: [[Rotating Mirror]] or spinning head; MEMS mirror; optical-phased-array (solid-state); flash lidar (no moving parts, illuminates the full scene simultaneously).
  - **[[Signal Processing]] Pipeline** — peak detection, noise filtering, multi-return processing, and range walk correction convert raw waveforms to calibrated point coordinates.
  - **[[Point Cloud Processing]] Stack** — downstream software (PCL, Open3D, ROS point-cloud tools) performs registration, segmentation, ground removal, and object detection on the raw 3D data.

- ### Lidar Architectures
  - **Spinning / Mechanical** — 360° horizontal field of view via rotating head; mature, high point density; mechanically complex (e.g., Velodyne HDL-64E).
  - **MEMS Lidar** — micro-mirror steers beam in 2D; smaller, lower power; limited FoV.
  - **Solid-State / Optical Phased Array** — no moving parts; electronically steered beam; rapidly scaling towards automotive cost targets.
  - **Flash Lidar** — full-frame 3D capture in a single pulse; low latency; short range; suited to [[Augmented Reality]] and gesture sensing.
  - **FMCW Lidar** — Frequency-Modulated Continuous Wave; simultaneously measures range and radial velocity per point; more robust to interference; growing adoption in automotive.

- ### Applications
  - **[[Autonomous Driving]]** — primary long-range obstacle detection and free-space mapping sensor; combined with [[Radar]] and [[Camera Sensor]] in redundant perception stacks.
  - **Mobile Robotics / [[Autonomous Navigation]]** — ground and aerial robots use spinning or solid-state lidar for real-time [[SLAM]] and path planning.
  - **Aerial Surveying (ALS)** — airborne lidar mounted on fixed-wing or rotary UAVs captures sub-decimetre [[Geospatial Data]] for forestry, archaeology, and infrastructure.
  - **Terrestrial Laser Scanning (TLS)** — static tripod-mounted scanners produce millimetre-accuracy [[3D Mapping]] of buildings, tunnels, and heritage sites.
  - **[[Digital Twin]] Construction** — as-built scans feed [[3D Scene Reconstruction]] pipelines feeding BIM and city-scale [[Spatial Computing]] platforms.
  - **Atmospheric Science** — Doppler lidar measures wind profiles and aerosol backscatter in the lower troposphere.
  - **Industrial Inspection** — detecting deformation, cracks, and volumetric changes in pipelines, turbine blades, and civil structures.
  - **[[Augmented Reality]] / XR** — iPhone and iPad Pro use a flash ToF lidar for rapid room-scale meshing and occlusion in ARKit.

- ### Relationships
  - partOf:: [[Robotic Perception System]]
  - partOf:: [[Autonomous Vehicle Sensor Suite]]
  - hasPart:: [[Laser Emitter]]
  - hasPart:: [[Photodetector]]
  - hasPart:: [[Time-of-Flight Sensor]]
  - hasPart:: [[Rotating Mirror]]
  - requires:: [[Point Cloud Processing]]
  - requires:: [[Signal Processing]]
  - enables:: [[Simultaneous Localisation and Mapping]]
  - enables:: [[Obstacle Detection]]
  - enables:: [[3D Scene Reconstruction]]
  - enables:: [[Autonomous Navigation]]
  - dependsOn:: [[Time-of-Flight Measurement]]
  - uses:: [[Infrared Laser]]
  - uses:: [[Avalanche Photodiode]]
  - supports:: [[Sensor Fusion]]
  - supports:: [[Digital Twin]]
  - supports:: [[Environment Mapping]]
  - contrastsWith:: [[Radar]]
  - contrastsWith:: [[Camera Sensor]]
  - contrastsWith:: [[Ultrasonic Sensor]]
  - bridgesTo:: [[Spatial Computing]]
  - bridgesTo:: [[3D Mapping]]
  - bridgesTo:: [[Geospatial Data]]
  - relatedTo:: [[SLAM]]
  - relatedTo:: [[Inertial Measurement Unit]]
  - relatedTo:: [[GNSS]]
  - relatedTo:: [[Autonomous Driving]]

- ### Standards & Context
  - **IEC 60825** — laser safety classification (Class 1 eye-safe requirements drive 1550 nm wavelength adoption in automotive lidar).
  - **SAE J3016** — autonomous driving levels context within which lidar sensor requirements are derived.
  - **ROS 2 / sensor_msgs/PointCloud2** — de facto interface standard for lidar data exchange in robotic middleware.
  - **LAS / LAZ (ASPRS)** — open binary formats for storing aerial and terrestrial lidar point clouds; widely used in [[Geospatial Data]] workflows.
  - **Open3D, PCL (Point Cloud Library)** — open-source reference implementations for [[Point Cloud Processing]] algorithms.
  - **ADAS regulation** — EU and UNECE regulations for automated driving (UN-R157 ALKS) implicitly require redundant sensing including lidar-class ranging.
  - Industry bodies including the **LiDAR Association** and **IEEE Sensors Council** drive interoperability and benchmarking standards.

- ### Provenance
  - sources:: IEC 60825; ASPRS LAS specification; SAE J3016; IEEE Sensors Journal; Open3D documentation; ROS 2 sensor interfaces
  - updated:: 2026-06-13
