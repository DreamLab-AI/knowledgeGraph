public:: true

# rb 0073 imu
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6f3472ed2dcbdc41b33921c05073d2a1e0e4116b4276b441a95c8dcc236c64af",
  "@type": "Page",
  "vc:slug": "rb-0073-imu",
  "title": "rb 0073 imu",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0073"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0073 imu"
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
  "@id": "urn:ngm:class:rb-0073-imu",
  "@type": "Class",
  "label": "rb 0073 imu",
  "definition": "An Inertial Measurement Unit (IMU) is an electronic device that measures and reports a body's specific force, angular rate, and sometimes magnetic field using a combination of accelerometers, gyroscopes, and optional magnetometers. In robotics, IMUs provide high-frequency proprioceptive feedback for state estimation, pose tracking, and stabilisation control, and are commonly fused with odometry or SLAM algorithms to reduce drift.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:inertial-measurement-unit",
      "label": "Inertial Measurement Unit"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticRefinement"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:accelerometer", "label": "Accelerometer"},
      {"@id": "urn:ngm:class:gyroscope", "label": "Gyroscope"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:localization", "label": "Localization"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"},
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0073-imu:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6f3472ed2dcbdc41b33921c05073d2a1e0e4116b4276b441a95c8dcc236c64af"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - An **Inertial Measurement Unit (IMU)** is an electronic device combining accelerometers, gyroscopes, and optionally magnetometers to measure a body's specific force, angular rate, and orientation. In robotics, IMUs provide high-frequency proprioceptive feedback for state estimation, pose tracking, and stabilisation control, and are commonly fused with odometry or SLAM algorithms to reduce drift.

- ### Semantic Classification
  - owl-class:: robotics:rb0073imu
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
