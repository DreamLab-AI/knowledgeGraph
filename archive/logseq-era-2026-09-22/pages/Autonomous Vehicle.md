public:: true
alias:: Autonomous Vehicles

# Autonomous Vehicle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ac07d2d76c49d24b79950a99dcb14134a98ecb1a0a5e38c9d6f6574e9584b189",
  "@type": "Page",
  "vc:slug": "autonomous-vehicle",
  "title": "Autonomous Vehicle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-21448",
      "vc:label": "ISO 21448"
    },
    {
      "@id": "urn:visionflow:linked:iso-26262",
      "vc:label": "ISO 26262"
    },
    {
      "@id": "urn:visionflow:owl:class:adas",
      "vc:label": "ADAS"
    },
    {
      "@id": "urn:visionflow:owl:class:agents",
      "vc:label": "Agents"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:perception-system",
      "vc:label": "Perception System"
    },
    {
      "@id": "urn:visionflow:owl:class:self-driving-car",
      "vc:label": "Self Driving Car"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:owl:class:social-contract-and-jobs",
      "vc:label": "Social contract and jobs"
    },
    {
      "@id": "urn:visionflow:owl:class:some-legacy-linked-json",
      "vc:label": "Some legacy Linked-JSON"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0346"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Autonomous Vehicle"
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
  "@id": "urn:ngm:class:autonomous-vehicle",
  "@type": "Class",
  "label": "Autonomous Vehicle",
  "definition": "An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:autonomous-robot",
    "label": "Autonomous Robot"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:robotaxi",
        "label": "Robotaxi"
      },
      {
        "@id": "urn:ngm:class:last-mile-delivery",
        "label": "Last-Mile Delivery"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:adas",
        "label": "ADAS"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:sae-j-3016",
        "label": "SAE J3016"
      },
      {
        "@id": "urn:ngm:class:iso-26262",
        "label": "ISO 26262"
      },
      {
        "@id": "urn:ngm:class:iso-21448",
        "label": "ISO 21448"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:remotely-operated-vehicle-rov",
        "label": "Remote Operated Vehicle"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-city-infrastructure",
        "label": "Smart City Infrastructure"
      },
      {
        "@id": "urn:ngm:class:v2x-communication",
        "label": "V2X Communication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:self-driving-car",
        "label": "Self Driving Car"
      },
      {
        "@id": "urn:ngm:class:ground-robot",
        "label": "Unmanned Ground Vehicle"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:self-driving-car",
      "label": "Self Driving Car"
    },
    {
      "@id": "urn:ngm:class:driverless-vehicle",
      "label": "Driverless Vehicle"
    },
    {
      "@id": "urn:ngm:class:automated-vehicle",
      "label": "Automated Vehicle"
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
  "@id": "urn:visionflow:annotation:link-resolutions:autonomous-vehicle:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ac07d2d76c49d24b79950a99dcb14134a98ecb1a0a5e38c9d6f6574e9584b189"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 21448]]",
      "resolved": "urn:visionflow:linked:iso-21448",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 26262]]",
      "resolved": "urn:visionflow:linked:iso-26262",
      "kind": "StubLink"
    },
    {
      "raw": "[[ADAS]]",
      "resolved": "urn:visionflow:owl:class:adas",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agents]]",
      "resolved": "urn:visionflow:owl:class:agents",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:owl:class:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perception System]]",
      "resolved": "urn:visionflow:owl:class:perception-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self Driving Car]]",
      "resolved": "urn:visionflow:owl:class:self-driving-car",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Employment Social Contract Under Automation]]",
      "resolved": "urn:visionflow:owl:class:social-contract-and-jobs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Entity Schema Archive]]",
      "resolved": "urn:visionflow:owl:class:some-legacy-linked-json",
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
  - An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).

- ### Semantic Classification
  - owl-class:: robotics:AutonomousVehicle
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[Autonomous Robot]] (rb)
  - requires:: [[Sensor Fusion]]
  - requires:: [[Perception System]]
  - uses:: [[SLAM]]
  - uses:: [[Motion Planning]]
  - enables:: [[Autonomous Navigation]]
  - relatedTo:: [[Path Planning]]

- ### Content
  - An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).

  ## Core Characteristics

  - **Sensor Fusion**: Integration of camera, lidar, radar, and GPS data
  - **Perception System**: Object detection, tracking, and scene understanding
  - **Localisation**: Precise positioning using SLAM and HD maps
  - **Path Planning**: Route planning and trajectory optimisation
  - **Motion Control**: Steering, acceleration, and braking control
  - **Decision Making**: Real-time tactical and strategic driving decisions

  ## Applications

  1. **Passenger Transportation**: Robotaxis, autonomous shuttles
  2. **Freight and Logistics**: Autonomous trucks, delivery vehicles
  3. **Public Transit**: Autonomous buses, metro systems
  4. **Agricultural Automation**: Autonomous tractors, harvesters
  5. **Mining and Construction**: Autonomous heavy machinery
  6. **Last-Mile Delivery**: Autonomous delivery robots
  7. **Parking Automation**: Valet parking systems
  8. **Military and Defence**: Unmanned ground vehicles

  ## Key Literature

  1. Paden, B., et al. (2016). "A survey of motion planning and control techniques for self-driving urban vehicles." *IEEE Transactions on Intelligent Vehicles*, 1(1), 33-55.

  2. Badue, C., et al. (2021). "Self-driving cars: A survey." *Expert Systems with Applications*, 165, 113816.

  3. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles." SAE J3016.

  4. Grigorescu, S., et al. (2020). "A survey of deep learning techniques for autonomous driving." *Journal of Field Robotics*, 37(3), 362-386.

  ## See Also

  - [[Self Driving Car]]
  - [[ADAS]]
  - [[Perception System]]
  - [[Sensor Fusion]]
  - [[Path Planning]]

- ### Provenance
  - sources:: [[ISO 21448]], [[ISO 26262]]
  - migration-date:: 2026-04-26T00:00:00Z
