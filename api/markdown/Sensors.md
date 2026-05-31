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
      "@id": "urn:visionflow:linked:robotics-domain",
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
  "definition": "Sensors are devices that measure physical quantities and convert them into signals a robot or system can process, providing the perceptual input for estimation, control and decision making.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics-domain",
      "label": "Robotics Domain"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
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
      "resolved": "urn:visionflow:linked:robotics-domain",
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
