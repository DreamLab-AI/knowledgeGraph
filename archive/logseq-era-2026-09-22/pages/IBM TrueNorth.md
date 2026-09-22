public:: true

# IBM TrueNorth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:372c1cf0b8ce4362c47057d3b07c3f94e1c0fcca3120ab4d6e7962b3276102e7",
  "@type": "Page",
  "vc:slug": "ibm-true-north",
  "title": "IBM TrueNorth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:neuromorphic-computing",
      "vc:label": "Neuromorphic Computing"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IBM TrueNorth"
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
  "@id": "urn:ngm:class:ibm-true-north",
  "@type": "Class",
  "label": "IBM TrueNorth",
  "definition": "IBM TrueNorth is a neuromorphic processor developed by IBM that implements spiking neural network architecture in hardware.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neuromorphic-computing",
      "label": "Neuromorphic Computing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:neuromorphic-computing",
        "label": "Neuromorphic Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ibm-true-north:06fdc7e812b5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:372c1cf0b8ce4362c47057d3b07c3f94e1c0fcca3120ab4d6e7962b3276102e7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neuromorphic Computing]]",
      "resolved": "urn:visionflow:linked:neuromorphic-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
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
  - IBM TrueNorth is a neuromorphic processor developed by IBM that implements spiking neural network architecture in hardware.

- ### Semantic Classification
  - owl-class:: robotics:IBMTrueNorth
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Neuromorphic Computing]]
  - bridges-to:: [[Neural Network]]
  - requires:: [[Hardware]]
  - enables:: [[Neuromorphic Computing]]

- ### Content
  - IBM TrueNorth is a neuromorphic chip designed to emulate the event-driven, spiking behaviour of biological neurons in hardware.
  - It was developed as a research platform for low-power, brain-inspired computing and neural network processing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
