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
  "subClassOf": {
    "@id": "urn:ngm:class:robotics",
    "label": "Robotics"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:radar", "label": "Radar"},
      {"@id": "urn:ngm:class:camera", "label": "Camera"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:robotic-system", "label": "Robotic System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"},
      {"@id": "urn:ngm:class:analog-to-digital-conversion", "label": "Analog-to-Digital Conversion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:real-time-control", "label": "Real-Time Control"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:hardware-interface", "label": "Hardware Interface"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ros-robot-operating-system", "label": "ROS (Robot Operating System)"},
      {"@id": "urn:ngm:class:ieee-1451", "label": "IEEE 1451"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:actuators", "label": "Actuators"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:transducer", "label": "Transducer"},
    {"@id": "urn:ngm:class:sensing-device", "label": "Sensing Device"}
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

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
