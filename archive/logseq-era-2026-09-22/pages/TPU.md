public:: true

# TPU
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:02c19b1a9b6d3879ec3afd8b904a60e40b3370e26c807f593061029d6ce70541",
  "@type": "Page",
  "vc:slug": "tpu",
  "title": "TPU",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:google-cloud",
      "vc:label": "Google Cloud"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-hardware",
      "vc:label": "AI Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9004"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "TPU"
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
  "@id": "urn:ngm:class:tpu",
  "@type": "Class",
  "label": "TPU",
  "definition": "Tensor Processing Unit — Google's custom ASIC optimised for the dense matrix multiplications that dominate neural network training and inference. TPUs use systolic arrays to achieve high throughput on 8-bit and 16-bit arithmetic at significantly lower energy per FLOP than general-purpose GPUs, and are available via Google Cloud as Cloud TPUs for large-scale model training.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    },
    {
      "@id": "urn:ngm:class:ai-hardware",
      "label": "AI Hardware"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"},
      {"@id": "urn:ngm:class:edge-ai-accelerator", "label": "Edge AI Accelerator"},
      {"@id": "urn:ngm:class:fpga", "label": "FPGA"},
      {"@id": "urn:ngm:class:npu", "label": "NPU"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:tpu:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:02c19b1a9b6d3879ec3afd8b904a60e40b3370e26c807f593061029d6ce70541"
  },
  "vc:resolutions": [
    {
      "raw": "[[Google Cloud]]",
      "resolved": "urn:visionflow:linked:google-cloud",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Hardware]]",
      "resolved": "urn:visionflow:owl:class:ai-hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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
  - Tensor Processing Unit, Google's custom-developed application-specific integrated circuit (ASIC) optimized for neural network machine learning workloads.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TPU
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  TPU — content pending enrichment.

- ### Provenance
  - sources:: [[Google Cloud]], [[AI Hardware]]
  - migration-date:: 2026-04-26T00:00:00Z
