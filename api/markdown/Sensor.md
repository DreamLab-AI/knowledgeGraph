public:: true

# Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c961e17db1610d147ee11300eaadbc6a3c13dc6f689247828c51e1505082d66e",
  "@type": "Page",
  "vc:slug": "sensor",
  "title": "Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0601"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Sensor"
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
  "@id": "urn:ngm:class:sensor",
  "@type": "Class",
  "label": "Sensor",
  "definition": "Sensors are devices and systems that enable robots to perceive and measure their environment through the detection of physical phenomena.",
  "domain": "robotics",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:hardware-component",
        "label": "Hardware Component"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:robotics-systems",
        "label": "Robotics Systems"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c961e17db1610d147ee11300eaadbc6a3c13dc6f689247828c51e1505082d66e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
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
  - Sensors are devices and systems that enable robots to perceive and measure their environment through the detection of physical phenomena. In robotics, sensors include LiDAR for spatial mapping, cameras for visual perception, IMUs for motion sensing, force-torque sensors for manipulation, and encoders for position feedback.

- ### Semantic Classification
  - owl-class:: robotics:Sensor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics Systems]]

- ### Relationships
  - is-subclass-of:: [[Robotics Systems]]

- ### Content
  Sensor — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
