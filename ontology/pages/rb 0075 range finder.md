public:: true

# rb 0075 range finder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9b8bb9137e62ea4e888444c01a6af94a61a42a50e20455f5454487de69df5fe8",
  "@type": "Page",
  "vc:slug": "rb-0075-range-finder",
  "title": "rb 0075 range finder",
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
      "vc:value": "RB-0075"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0075 range finder"
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
  "@id": "urn:ngm:class:rb-0075-range-finder",
  "@type": "Class",
  "label": "rb 0075 range finder",
  "definition": "A range finder is an exteroceptive sensor that measures the distance between a robot and surrounding objects or surfaces by emitting a signal (laser, ultrasonic, or infrared) and timing its return. Range finders are fundamental to obstacle detection, safety zone monitoring, and environment mapping in mobile and collaborative robots.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:exteroceptive-sensor",
      "label": "Exteroceptive Sensor"
    }
  ],
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"},
      {"@id": "urn:ngm:class:rb-0078-infrared-sensor", "label": "rb 0078 infrared sensor"},
      {"@id": "urn:ngm:class:rb-0080-radar", "label": "rb 0080 radar"},
      {"@id": "urn:ngm:class:proximity-sensor", "label": "Proximity Sensor"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0095-safety-zone", "label": "rb 0095 safety zone"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticRefinement"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0075-range-finder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9b8bb9137e62ea4e888444c01a6af94a61a42a50e20455f5454487de69df5fe8"
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
  - A **range finder** measures the distance from a robot to objects in its environment using time-of-flight or phase-shift techniques with laser, infrared, or ultrasonic signals. Range finders span from single-beam infrared distance sensors to multi-layer laser scanners (LiDAR), providing the raw distance data that feeds obstacle detection, safety zone enforcement, and SLAM algorithms.

- ### Semantic Classification
  - owl-class:: robotics:rb0075rangefinder
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Enables safety zone detection (rb 0095) and is a core component of LiDAR systems (rb 0069).
  - Outputs are typically processed as point clouds and fused with IMU and camera data (sensor fusion) for robust environment models.
  - Complements infrared sensors (rb 0078) and radar (rb 0080) in multi-modal sensing configurations.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
