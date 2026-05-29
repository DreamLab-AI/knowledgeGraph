public:: true

# Multi-Head Attention
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8a6c4ce13aa6040a766f5ea60e3a3fd78030b1e13923dc1b91813ed7cf7020e0",
  "@type": "Page",
  "vc:slug": "multi-head-attention",
  "title": "Multi-Head Attention",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:attention-mechanism",
      "vc:label": "Attention Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0810"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi-Head Attention"
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
  "@id": "urn:ngm:class:multi-head-attention",
  "@type": "Class",
  "label": "Multi-Head Attention",
  "definition": "An extension of scaled dot-product attention that runs multiple attention operations in parallel over distinct learned projection subspaces, then concatenates and linearly projects the results. Multi-head attention enables Transformer models to capture diverse dependency patterns across positions and representation subspaces simultaneously, and is foundational to modern large language models.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    },
    {
      "@id": "urn:ngm:class:attention-mechanism",
      "label": "Attention Mechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:attention-head", "label": "Attention Head"},
      {"@id": "urn:ngm:class:scaled-dot-product-attention", "label": "Scaled Dot Product Attention"},
      {"@id": "urn:ngm:class:attention-weight", "label": "Attention Weight"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:self-attention", "label": "Self Attention"},
      {"@id": "urn:ngm:class:cross-attention", "label": "Cross Attention"},
      {"@id": "urn:ngm:class:grouped-query-attention", "label": "Grouped Query Attention"},
      {"@id": "urn:ngm:class:flash-attention", "label": "Flash Attention"},
      {"@id": "urn:ngm:class:positional-encoding", "label": "Positional Encoding"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:multi-head-attention:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8a6c4ce13aa6040a766f5ea60e3a3fd78030b1e13923dc1b91813ed7cf7020e0"
  },
  "vc:resolutions": [
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Attention Mechanism]]",
      "resolved": "urn:visionflow:owl:class:attention-mechanism",
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
  - An extension of the attention mechanism that allows the model to jointly attend to information from different representation subspaces at different positions, using multiple attention heads in parallel.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MultiHeadAttention
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Attention Mechanism]]

- ### Content
  Multi-Head Attention — content pending enrichment.

- ### Provenance
  - sources:: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762 (2017)
  - migration-date:: 2026-04-26T00:00:00Z
