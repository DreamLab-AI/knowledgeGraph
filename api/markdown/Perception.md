public:: true

# Perception
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:252ad11d1616c49b332acac5352425f59fe31323912aa0f6bd00aa1c6369677f",
  "@type": "Page",
  "vc:slug": "perception",
  "title": "Perception",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor",
      "vc:label": "Sensor"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Perception"
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
  "@id": "urn:ngm:class:perception",
  "@type": "Class",
  "label": "Perception",
  "definition": "In artificial intelligence, the capability of a system to acquire and interpret sensory input, such as images, audio or other signals, to build an internal representation of its environment.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:perception:9327b46b590a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:252ad11d1616c49b332acac5352425f59fe31323912aa0f6bd00aa1c6369677f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensor]]",
      "resolved": "urn:visionflow:linked:sensor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - In artificial intelligence, the capability of a system to acquire and interpret sensory input, such as images, audio or other signals, to build an internal representation of its environment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Perception
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Computer Vision]]
  - requires:: [[Sensor]]
  - enables:: [[Robotics]]

- ### Content
  - Perception is the stage at which raw sensor data is converted into structured information that downstream reasoning, planning or control can use. In vision systems this includes detecting objects and estimating scene geometry, while in audio systems it includes recognising speech or sounds.
  - Perception is a component of larger agent architectures, sitting between sensing and decision-making. Modern perception relies heavily on learned models such as convolutional and transformer networks, which map high-dimensional sensory input to semantic outputs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
