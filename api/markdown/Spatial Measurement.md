public:: true

# Spatial Measurement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c09a4daae951f561b39673b4ea1fb4e3eefa1a750e68ff28d166f780573629c1",
  "@type": "Page",
  "vc:slug": "spatial-measurement",
  "title": "Spatial Measurement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-environment-mapping",
      "vc:label": "3D Environment Mapping"
    },
    {
      "@id": "urn:visionflow:owl:class:depth-sensing",
      "vc:label": "Depth Sensing"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10060"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Measurement"
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
  "@id": "urn:ngm:class:spatial-measurement",
  "@type": "Class",
  "label": "Spatial Measurement",
  "definition": "Technology for determining distances, depths, and dimensional properties in physical and virtual environments using sensors such as Time-of-Flight cameras, structured light sensors, and LiDAR, enabling accurate 3D surface mapping, obstacle detection, and gesture tracking in AR/VR applications.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    },
    {
      "@id": "urn:ngm:class:depth-sensing",
      "label": "Depth Sensing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-environment-mapping",
        "label": "3D Environment Mapping"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-measurement:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c09a4daae951f561b39673b4ea1fb4e3eefa1a750e68ff28d166f780573629c1"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Environment Mapping]]",
      "resolved": "urn:visionflow:linked:3-d-environment-mapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[Depth Sensing]]",
      "resolved": "urn:visionflow:owl:class:depth-sensing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Technology for determining distances, depths, and dimensional properties in physical and virtual environments using sensors such as Time-of-Flight cameras, structured light sensors, and LiDAR, enabling accurate 3D surface mapping, obstacle detection, and gesture tracking in AR/VR applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialMeasurement
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Depth Sensing]]
  - enables:: [[3D Environment Mapping]]

- ### Content

  - #### Key Technologies
		- Time-of-Flight (ToF) sensors
		- Structured light depth cameras
		- LiDAR scanning systems
		- Stereo vision depth estimation
		- Infrared depth sensing
  - #### Market Context
		- 3D sensor market $6.05 billion (2024)
		- Projected $27.33 billion by 2032
		- ToF sensors largest market segment
		- VR/AR headset integration growing
		- Healthcare and robotics applications

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
