public:: true

# Laser Scanner
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d4eed809e1057cdce52030f9016fa0d1596780aa7b589debd583eb1560945574",
  "@type": "Page",
  "vc:slug": "laser-scanner",
  "title": "Laser Scanner",
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
      "vc:value": "RB-0098"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Laser Scanner"
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
  "@id": "urn:ngm:class:laser-scanner",
  "@type": "Class",
  "label": "Laser Scanner",
  "definition": "A Laser Scanner is a sensor that emits laser pulses and measures the time-of-flight or phase-shift of the returned signal to compute precise distance measurements across a scene, generating dense point clouds. In robotics and spatial computing, laser scanners serve as primary perception instruments for environment mapping, obstacle detection, and the construction of digital twins via LiDAR-based SLAM pipelines.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:laser-scanner:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d4eed809e1057cdce52030f9016fa0d1596780aa7b589debd583eb1560945574"
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
  - **Laser Scanner** - A sensor that emits laser pulses and measures the time-of-flight or phase-shift of the returned signal to compute precise distance measurements across a scene, generating dense point clouds. In robotics and spatial computing, laser scanners serve as primary perception instruments for environment mapping, obstacle detection, and the construction of digital twins via LiDAR-based SLAM pipelines.

- ### Semantic Classification
  - owl-class:: robotics:LaserScanner
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Enables [[SLAM]]
  - Enables [[Point Cloud]]
  - Enables [[Spatial Mapping]]
  - Uses [[Lidar]]
  - Related To [[Photogrammetry]]
  - Related To [[Sensor Fusion]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
