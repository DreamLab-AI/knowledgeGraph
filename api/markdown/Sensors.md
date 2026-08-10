public:: true

# Sensors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9d81be709be7c21b21e3b19733710cee781f76f6453dd07f46792834ca748c8d",
  "@type": "Page",
  "vc:slug": "sensors",
  "title": "Sensors",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:perception-system",
      "vc:label": "Perception System"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:lidar",
      "vc:label": "Lidar"
    },
    {
      "@id": "urn:visionflow:linked:radar",
      "vc:label": "Radar"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Sensors"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensors",
  "@type": "Class",
  "label": "Sensors",
  "definition": "Sensors are devices that transduce physical quantities—distance, force, temperature, orientation, light, electromagnetic fields—into electrical or digital signals that a robot or computational system can process, providing the perceptual input for state estimation, control, and decision making.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:sensor-technology",
      "label": "Sensor Technology"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:radar",
        "label": "Radar"
      },
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      },
      {
        "@id": "urn:ngm:class:imu",
        "label": "IMU"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:robotic-system",
        "label": "Robotic System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:analog-to-digital-converter",
        "label": "Analog-to-Digital Conversion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:state-estimation",
        "label": "State Estimation"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "ROS (Robot Operating System)"
      },
      {
        "@id": "urn:ngm:class:ieee-1451",
        "label": "IEEE 1451"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:actuators",
        "label": "Actuators"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transducer",
      "label": "Transducer"
    },
    {
      "@id": "urn:ngm:class:sensing-device",
      "label": "Sensing Device"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:sensors:e22dfb01a00b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9d81be709be7c21b21e3b19733710cee781f76f6453dd07f46792834ca748c8d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Perception System]]",
      "resolved": "urn:visionflow:linked:perception-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lidar]]",
      "resolved": "urn:visionflow:linked:lidar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Radar]]",
      "resolved": "urn:visionflow:linked:radar",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Sensors are devices that measure physical quantities and convert them into signals a robot or system can process, providing the perceptual input for estimation, control and decision making.

- ### Semantic Classification
  - owl-class:: robotics:Sensors
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Lidar]], [[Radar]]
  - enables:: [[Perception System]], [[Sensor Fusion]]

- ### Content
  - Sensors transduce quantities such as distance, force, temperature, orientation and light into electrical signals that downstream systems interpret. In robotics they are divided into proprioceptive sensors that measure internal state and exteroceptive sensors that observe the environment.
  - Multiple sensors are commonly combined through sensor fusion to produce estimates that are more accurate and reliable than any single source. The choice and placement of sensors strongly shapes a system's perception and control capabilities.

- ### Current Landscape (2026)
  - Fully solid-state digital LiDAR is now the robotics baseline: RoboSense launched its E1R (world-first fully solid-state digital LiDAR for robotics, 120 degrees by 90 degrees FoV) and the ping-pong-ball-sized Airy 192-line hemispherical unit at CES 2025, while solid-state MEMS and optical-phased-array modules that cost over 75,000 USD in 2016 have fallen below 500 USD per unit in volume by 2025, with a further 30-40 per cent cost reduction reported across 2026.
  - Robotics LiDAR shipments exploded on humanoid and quadruped demand: Hesai shipped 239,273 robotics LiDAR units in 2025 (up 425.8 per cent on 45,503 in 2024) and RoboSense shipped roughly 303,000 (up over 1,140 per cent year-on-year), with RoboSense reporting robotics exceeding 50 per cent of total shipments for the first time in Q1 2026.
  - Tactile sensing is the breakout 2026 trend: XELA Robotics scaled magnetic 3D "taxel"/uSkin sensors to full-hand coverage (shown at COMPUTEX 2025), Sanctuary AI integrated advanced tactile sensors into its Phoenix humanoid, and Chinese platforms such as Fourier GR3 and Astribot now carry sensory skins with up to ~2,000 tactile points per palm.
  - Event (neuromorphic) cameras moved from lab to deployment, with University of Zurich's Davide Scaramuzza's IROS 2025 keynote showcasing ~1 milliwatt event sensors paired with spiking processors for ultra-low-latency SLAM, high-speed inspection (Boeing wing scanning) and vision-based tactile feedback, alongside emerging event-LiDAR hybrid fusion imaging systems (2025).
  - Market sizing and adoption firmed up: IDTechEx pegs the humanoid-sensor component market at roughly 10 billion USD within ten years, Mordor Intelligence sizes the robotic sensors market at 0.83 billion USD in 2026, and per-humanoid sensor content runs 8,000-25,000 USD in 2025; the USPTO granted 340 tactile-sensing patents in 2025, up 22 per cent year-on-year.
  - Key players by layer are consolidating: Ouster and RoboSense/Hesai (LiDAR), Sony (vision), XELA Robotics, Bosch, AIDIN Robotics and Sanctuary AI (tactile), with Tesla's Optimus a notable camera-only outlier; Figure AI introduced a next-gen sensor suite claiming 60 per cent wider field of view in 2025.
  - Open challenges as of 2026 are tactile-skin durability and coverage economics (roughly 0.4-1.2 USD per square millimetre), the lack of standardised modular sensor interfaces and datasets for touch, and sensor-fusion latency for full LiDAR-vision-haptic "physical AI" stacks needed to handle fragile or deformable objects.

- ### References
  - 1. IDTechEx / edge-ai-vision.com (2025). Humanoid Robots to Have a 14-fold Market Expansion in 5 Years. https://www.edge-ai-vision.com/2025/06/humanoid-robots-to-have-a-14-fold-market-expansion-in-5-years/
  - 2. RoboticsTomorrow (2025). RoboSense Unveils AI Robotics Strategy and Cutting-Edge Innovations at 2025 Global Launch Event. https://www.roboticstomorrow.com/news/2025/01/03/robosense-unveils-ai-robotics-strategy-and-cutting-edge-innovations-at-2025-global-launch-event/23793/
  - 3. TheDynamics.ai (2026). Sensors & Perception for Robots: Market Size and the LiDAR Race. https://thedynamics.ai/articles/sensor-perception
  - 4. Securities.io (2026). The Sensor Layer: LiDAR, Vision, and the Gift of Touch (2026). https://www.securities.io/the-sensor-layer-lidar-vision-and-the-gift-of-touch-2026/
  - 5. Mordor Intelligence (2026). Robotic Sensors Market Size, Share, Growth Report Forecast 2026-2031. https://www.mordorintelligence.com/industry-reports/robotic-sensors-market

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
