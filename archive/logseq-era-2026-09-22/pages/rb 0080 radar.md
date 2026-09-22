public:: true

# rb 0080 radar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3fd95f1d5013233a6f25384f173dae838286340ce55744846d2efd3d0a77a5d",
  "@type": "Page",
  "vc:slug": "rb-0080-radar",
  "title": "rb 0080 radar",
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
      "vc:value": "RB-0080"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0080 radar"
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
  "@id": "urn:ngm:class:rb-0080-radar",
  "@type": "Class",
  "label": "rb 0080 radar",
  "definition": "Radar (Radio Detection and Ranging) is an active sensing technology that emits radio-frequency electromagnetic pulses and detects reflected returns to measure the range, velocity, and bearing of objects in the environment. In robotics, radar sensors provide reliable obstacle detection and velocity estimation across diverse weather and lighting conditions where cameras and LiDAR may degrade, making them particularly valuable for autonomous ground vehicles, drones, and safety-critical proximity monitoring in industrial settings.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "quality": 0.7,
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"},
      {"@id": "urn:ngm:class:rb-0075-range-finder", "label": "rb 0075 range finder"},
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0052-collision-avoidance", "label": "rb 0052 collision avoidance"},
      {"@id": "urn:ngm:class:proximity-detection", "label": "Proximity Detection"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0077-depth-camera", "label": "rb 0077 depth camera"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticMatch"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0080-radar:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c3fd95f1d5013233a6f25384f173dae838286340ce55744846d2efd3d0a77a5d"
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
  - Radar (Radio Detection and Ranging) is an active sensing technology that emits radio-frequency electromagnetic pulses and detects reflected returns to measure range, velocity, and bearing of objects. In robotics, radar sensors operate reliably in fog, rain, dust, and darkness where cameras and LiDAR performance degrades significantly. Modern FMCW (frequency-modulated continuous-wave) radar modules used in robotics can simultaneously measure range and Doppler velocity at high update rates, enabling both static obstacle detection and dynamic object tracking.

- ### Semantic Classification
  - owl-class:: robotics:rb0080radar
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[rb 0066 robot sensor]]
  - related-to:: [[rb 0069 lidar]], [[rb 0075 range finder]], [[Sensor Fusion]]
  - enables:: [[rb 0052 collision avoidance]], [[Proximity Detection]], [[Object Detection]]
  - contrasts-with:: [[rb 0077 depth camera]]

- ### Content
  - Radar complements LiDAR and depth cameras in robot perception stacks through sensor fusion, compensating for their weaknesses in adverse environmental conditions. Unlike LiDAR which produces dense point clouds, radar returns are sparser but provide direct velocity measurement via Doppler effect, making it valuable for detecting and tracking moving humans or vehicles in safety-critical collaborative robot environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
