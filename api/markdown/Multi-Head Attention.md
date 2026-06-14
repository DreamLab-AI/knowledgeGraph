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
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
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
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:attention-mechanism",
    "label": "Attention Mechanism"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:attention-head", "label": "Attention Head"},
      {"@id": "urn:ngm:class:scaled-dot-product-attention", "label": "Scaled Dot Product Attention"},
      {"@id": "urn:ngm:class:attention-weight", "label": "Attention Weight"},
      {"@id": "urn:ngm:class:query-key-value-projection", "label": "Query Key Value Projection"},
      {"@id": "urn:ngm:class:output-projection-matrix", "label": "Output Projection Matrix"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:encoder-decoder-architecture", "label": "Encoder Decoder Architecture"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:softmax-function", "label": "Softmax Function"},
      {"@id": "urn:ngm:class:linear-projection", "label": "Linear Projection"},
      {"@id": "urn:ngm:class:matrix-multiplication", "label": "Matrix Multiplication"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:long-range-dependency-modelling", "label": "Long Range Dependency Modelling"},
      {"@id": "urn:ngm:class:contextual-representation-learning", "label": "Contextual Representation Learning"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:positional-encoding", "label": "Positional Encoding"},
      {"@id": "urn:ngm:class:layer-normalisation", "label": "Layer Normalisation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:residual-connection", "label": "Residual Connection"},
      {"@id": "urn:ngm:class:feed-forward-network", "label": "Feed Forward Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:recurrent-neural-network", "label": "Recurrent Neural Network"},
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:self-attention", "label": "Self Attention"},
      {"@id": "urn:ngm:class:cross-attention", "label": "Cross Attention"},
      {"@id": "urn:ngm:class:grouped-query-attention", "label": "Grouped Query Attention"},
      {"@id": "urn:ngm:class:flash-attention", "label": "Flash Attention"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:bert", "label": "BERT"},
      {"@id": "urn:ngm:class:vision-transformer", "label": "Vision Transformer"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-attention-mechanism", "label": "Spatial Attention Mechanism"},
      {"@id": "urn:ngm:class:graph-attention-network", "label": "Graph Attention Network"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:mha", "label": "MHA"},
    {"@id": "urn:ngm:class:multi-head-self-attention", "label": "Multi Head Self Attention"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
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
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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
