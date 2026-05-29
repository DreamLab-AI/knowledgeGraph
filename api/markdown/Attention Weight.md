public:: true

# Attention Weight
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a4acc9eef31246577bd0585054c055e1afc9ed69a39c0592361ee56e10c75c7",
  "@type": "Page",
  "vc:slug": "attention-weight",
  "title": "Attention Weight",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0806"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Attention Weight"
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
  "@id": "urn:ngm:class:attention-weight",
  "@type": "Class",
  "label": "Attention Weight",
  "definition": "A scalar coefficient produced by an attention mechanism that quantifies the relevance of one position (key/value) to another (query) in a sequence or across modalities. Attention weights are computed via a softmax over scaled dot-products of query and key vectors, and govern how much each value contributes to the output representation. They are the core computational primitive of Transformer-based models.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:self-attention", "label": "Self Attention"},
      {"@id": "urn:ngm:class:multi-head-attention", "label": "Multi-Head Attention"},
      {"@id": "urn:ngm:class:cross-attention", "label": "Cross Attention"},
      {"@id": "urn:ngm:class:query-key-value", "label": "Query Key Value"},
      {"@id": "urn:ngm:class:positional-encoding", "label": "Positional Encoding"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:attention-weight:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a4acc9eef31246577bd0585054c055e1afc9ed69a39c0592361ee56e10c75c7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Weights computed by attention mechanisms.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AttentionWeight
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]] (domain: tc)

- ### Content
  Attention Weight — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
