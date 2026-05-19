schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#MultiHeadAttention
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:multi-head-attention
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-0c54a878c2f3"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#MultiHeadAttention"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0810"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi-Head Attention"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:multi-head-attention"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:multi-head-attention"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8a6c4ce13aa6040a766f5ea60e3a3fd78030b1e13923dc1b91813ed7cf7020e0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "definition": "An extension of the attention mechanism that allows the model to jointly attend to information from different representation subspaces at different positions, using multiple attention heads in parallel.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:attention-mechanism",
      "label": "Attention Mechanism"
    }
  ],
  "quality": 0.35,
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8a6c4ce13aa6040a766f5ea60e3a3fd78030b1e13923dc1b91813ed7cf7020e0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
