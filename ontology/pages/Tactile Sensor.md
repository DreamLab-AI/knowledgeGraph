public:: true

# Tactile Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b996933043776390dd3212df9c6f2d4945fc81bafe506bbc9ea57df5d449cb05",
  "@type": "Page",
  "vc:slug": "tactile-sensor",
  "title": "Tactile Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:exteroceptive-sensor",
      "vc:label": "Exteroceptive Sensor"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0164"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tactile Sensor"
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
  "@id": "urn:ngm:class:tactile-sensor",
  "@type": "Class",
  "label": "Tactile Sensor",
  "definition": "A sensor embedded in a robot's end-effector or body surface that measures contact forces, pressure distributions, vibrations, and slip, enabling dexterous manipulation and safe physical interaction. Tactile sensing complements proprioception and vision to provide robots with fingertip-level awareness analogous to the human sense of touch.",
  "domain": "robotics",
  "maturity": "established",
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
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:pressure-sensor", "label": "Pressure Sensor"},
      {"@id": "urn:ngm:class:proximity-sensor", "label": "Proximity Sensor"},
      {"@id": "urn:ngm:class:proprioceptive-sensor", "label": "Proprioceptive Sensor"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:tactile-sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b996933043776390dd3212df9c6f2d4945fc81bafe506bbc9ea57df5d449cb05"
  },
  "vc:resolutions": [
    {
      "raw": "[[Exteroceptive Sensor]]",
      "resolved": "urn:visionflow:owl:class:exteroceptive-sensor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
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
  - Tactile sensor provides touch sensing capability similar to human fingertips.

- ### Semantic Classification
  - owl-class:: robotics:TactileSensor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Exteroceptive Sensor]]

- ### Content
  Tactile Sensor — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
