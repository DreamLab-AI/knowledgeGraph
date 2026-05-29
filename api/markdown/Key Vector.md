public:: true

# Key Vector
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5ca3048e87b3827e894cbdbf229e810570c8a4093d51f468762a3389b81afd82",
  "@type": "Page",
  "vc:slug": "key-vector",
  "title": "Key Vector",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0808"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Key Vector"
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
  "@id": "urn:ngm:class:key-vector",
  "@type": "Class",
  "label": "Key Vector",
  "definition": "In transformer-based neural networks, a Key Vector is one of three learned linear projections of an input token embedding—alongside the Query Vector and Value Vector—that together implement the scaled dot-product attention mechanism. The key vector represents what a given token has to offer: each query–key dot product measures the compatibility or relevance between a querying token and every other token in the sequence, with the resulting attention weights determining how much each value vector contributes to the output representation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network-component",
      "label": "Neural Network Component"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:query-vector", "label": "Query Vector"},
      {"@id": "urn:ngm:class:value-vector", "label": "Value Vector"},
      {"@id": "urn:ngm:class:query-key-value", "label": "Query Key Value"},
      {"@id": "urn:ngm:class:self-attention", "label": "Self Attention"},
      {"@id": "urn:ngm:class:positional-encoding", "label": "Positional Encoding"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:multi-head-attention", "label": "Multi-Head Attention"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:token-embedding", "label": "Token Embedding"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:key-vector:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5ca3048e87b3827e894cbdbf229e810570c8a4093d51f468762a3389b81afd82"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
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
  - Key Vector is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:KeyVector
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Key Vector — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
