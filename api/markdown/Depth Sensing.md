public:: true

# Depth Sensing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a969e21e19aa81cd23e7e5adb4520206e594d1fd06bf06ba1b98012a092b8b4",
  "@type": "Page",
  "vc:slug": "depth-sensing",
  "title": "Depth Sensing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9567"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Depth Sensing"
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
  "@id": "urn:ngm:class:depth-sensing",
  "@type": "Class",
  "label": "Depth Sensing",
  "definition": "Depth Sensing is the measurement and capture of per-pixel distance information from a sensor to surfaces in the environment, producing depth maps or point clouds. Technologies include structured light, time-of-flight (ToF), active stereoscopy, and LiDAR. Depth sensing is foundational to augmented reality occlusion, robotic navigation, 3D scene reconstruction, and gesture recognition in spatial computing systems.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:stereo-camera", "label": "Stereo Camera"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:depth-sensing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2a969e21e19aa81cd23e7e5adb4520206e594d1fd06bf06ba1b98012a092b8b4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
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
  - Depth Sensing is the measurement and capture of per-pixel distance information from a sensor to surfaces in the environment, producing depth maps or point clouds. Technologies include structured light, time-of-flight (ToF), active stereoscopy, and LiDAR. Depth sensing is foundational to augmented reality occlusion, robotic navigation, 3D scene reconstruction, and gesture recognition in spatial computing systems.

bridges-to:: [[Sensor Input]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DepthSensing
  - owl-role:: concept

- ### Relationships
  - uses [[Lidar]]
  - uses [[Stereo Camera]]
  - enables [[3D Reconstruction]]
  - enables [[Point Cloud]]
  - enables [[SLAM]]
  - relatedTo [[Depth Estimation]]

- ### Content

  ## Overview

  Depth Sensing represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
