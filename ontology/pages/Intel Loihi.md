public:: true

# Intel Loihi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5a1d1d99a097b6bc239fe9266ea4b5937c24c3384b9b074d0b2221daf07c50ad",
  "@type": "Page",
  "vc:slug": "intel-loihi",
  "title": "Intel Loihi",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neuromorphic-computing",
      "vc:label": "Neuromorphic Computing"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:neuromorphic-chip",
      "vc:label": "Neuromorphic Chip"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Intel Loihi"
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
  "@id": "urn:ngm:class:intel-loihi",
  "@type": "Class",
  "label": "Intel Loihi",
  "definition": "A research neuromorphic processor developed by Intel that implements spiking neural networks in hardware with on-chip learning.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neuromorphic-chip",
      "label": "Neuromorphic Chip"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:neuromorphic-computing",
        "label": "Neuromorphic Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:intel-loihi:fbe72b3d9c5b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5a1d1d99a097b6bc239fe9266ea4b5937c24c3384b9b074d0b2221daf07c50ad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neuromorphic Computing]]",
      "resolved": "urn:visionflow:linked:neuromorphic-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neuromorphic Chip]]",
      "resolved": "urn:visionflow:linked:neuromorphic-chip",
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
  - A research neuromorphic processor developed by Intel that implements spiking neural networks in hardware with on-chip learning.

- ### Semantic Classification
  - owl-class:: general:IntelLoihi
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Neuromorphic Chip]]
  - bridges-to:: [[Neuromorphic Chip]]
  - requires:: [[Neuromorphic Computing]]
  - enables:: [[Neural Network]]

- ### Content
  - Intel Loihi is a neuromorphic research chip that models networks of spiking neurons using event-driven, asynchronous computation rather than the clocked dense arithmetic of conventional processors. It supports on-chip plasticity, allowing networks to adapt during operation.
  - Loihi is used to investigate energy-efficient computation for tasks such as sensing, optimisation and adaptive control, and it is a vehicle for studying how brain-inspired architectures might handle workloads poorly suited to standard hardware.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
