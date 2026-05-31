public:: true

# NVIDIA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6336d1fa27fe165e95877e60a79fc24575de9ca3b0d1cdaa3b197a0f4d33d78",
  "@type": "Page",
  "vc:slug": "nvidia",
  "title": "NVIDIA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:gpu-computing",
      "vc:label": "GPU Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NVIDIA"
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
  "@id": "urn:ngm:class:nvidia",
  "@type": "Class",
  "label": "NVIDIA",
  "definition": "NVIDIA is a technology company that designs graphics processing units and computing platforms used for gaming, professional visualisation, data centres, and machine learning workloads.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gpu-computing",
      "label": "GPU Computing"
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
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nvidia:8d4321d93632",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6336d1fa27fe165e95877e60a79fc24575de9ca3b0d1cdaa3b197a0f4d33d78"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPU Computing]]",
      "resolved": "urn:visionflow:linked:gpu-computing",
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
  - NVIDIA is a technology company that designs graphics processing units and computing platforms used for gaming, professional visualisation, data centres, and machine learning workloads.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:NVIDIA
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[GPU Computing]]
  - bridges-to:: [[Machine Learning]]
  - requires:: [[Hardware]]
  - enables:: [[Deep Learning]]

- ### Content
  - NVIDIA produces graphics processing units and associated software platforms widely used to accelerate parallel computation. Its hardware is a common substrate for training and running deep learning models.
  - The company also supplies systems and libraries for data centre computing, supporting large-scale machine learning and scientific workloads.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
