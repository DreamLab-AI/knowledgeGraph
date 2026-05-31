public:: true

# AI Energy Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:712518f397e886760fc6d69a083eddf926917d82b7bd72a6de1fdfbcfe147321",
  "@type": "Page",
  "vc:slug": "ai-energy-optimisation",
  "title": "AI Energy Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hardware-acceleration",
      "vc:label": "Hardware Acceleration"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-distillation",
      "vc:label": "Knowledge Distillation"
    },
    {
      "@id": "urn:visionflow:linked:edge-ai",
      "vc:label": "Edge AI"
    },
    {
      "@id": "urn:visionflow:linked:edge-computing",
      "vc:label": "Edge Computing"
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
      "vc:value": "AI Energy Optimisation"
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
  "@id": "urn:ngm:class:ai-energy-optimisation",
  "@type": "Class",
  "label": "AI Energy Optimisation",
  "definition": "The set of techniques and engineering practices that reduce the energy consumed by training and running artificial intelligence systems while preserving acceptable task performance.",
  "domain": "artificial-intelligence",
  "maturity": "growing",
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
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-energy-optimisation:62267576960d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:712518f397e886760fc6d69a083eddf926917d82b7bd72a6de1fdfbcfe147321"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hardware Acceleration]]",
      "resolved": "urn:visionflow:linked:hardware-acceleration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Distillation]]",
      "resolved": "urn:visionflow:linked:knowledge-distillation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge AI]]",
      "resolved": "urn:visionflow:linked:edge-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Computing]]",
      "resolved": "urn:visionflow:linked:edge-computing",
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
  - The set of techniques and engineering practices that reduce the energy consumed by training and running artificial intelligence systems while preserving acceptable task performance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIEnergyOptimisation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Edge Computing]]
  - requires:: [[Hardware Acceleration]], [[Knowledge Distillation]]
  - enables:: [[Edge AI]]

- ### Content
  - AI energy optimisation addresses the electricity and cooling costs of large models by acting at several levels, including model architecture, training schedules, hardware selection and data centre operation. Methods such as quantisation, pruning and distillation reduce the compute required per inference, while scheduling work to match low-carbon grid periods lowers the associated emissions.
  - The motivation is both economic and environmental. Training large models can consume substantial energy, and inference at scale dominates lifetime cost for widely deployed systems. Measuring energy use accurately, rather than relying on theoretical floating-point counts, is a precondition for meaningful optimisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
