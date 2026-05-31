public:: true

# Cohere
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3c39053f39a8bdcf05b07a21c1c5f8b6a747ea10117a8e7a54279b61ed63f479",
  "@type": "Page",
  "vc:slug": "cohere",
  "title": "Cohere",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:embeddings",
      "vc:label": "Embeddings"
    },
    {
      "@id": "urn:visionflow:linked:semantic-search",
      "vc:label": "Semantic Search"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cohere"
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
  "@id": "urn:ngm:class:cohere",
  "@type": "Class",
  "label": "Cohere",
  "definition": "Cohere is a company that develops large language models and text embedding models offered through an API, with a focus on enterprise applications. Its products include generation, embedding and reranking models.",
  "domain": "natural-language-processing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-models",
      "label": "Large Language Models"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:embeddings",
        "label": "Embeddings"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cohere:72e8088a05b3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3c39053f39a8bdcf05b07a21c1c5f8b6a747ea10117a8e7a54279b61ed63f479"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embeddings]]",
      "resolved": "urn:visionflow:linked:embeddings",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Search]]",
      "resolved": "urn:visionflow:linked:semantic-search",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Retrieval-Augmented Generation]]",
      "resolved": "urn:visionflow:linked:retrieval-augmented-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
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
  - Cohere is a company that develops large language models and text embedding models offered through an API, with a focus on enterprise applications. Its products include generation, embedding and reranking models.

- ### Semantic Classification
  - owl-class:: natural-language-processing:Cohere
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Large Language Models]]
  - bridges-to:: [[Natural Language Processing]], [[Language Model]]
  - requires:: [[Transformer]], [[Embeddings]]
  - enables:: [[Semantic Search]], [[Retrieval-Augmented Generation]]

- ### Content
  - Cohere provides language models for text generation, classification and embedding, marketed for business deployment including private and on-premises options. Its embedding and reranking models are commonly used in retrieval systems.
  - The company positions itself for enterprise data security and integration rather than consumer chat. Models are accessed through a hosted API and cloud marketplace listings.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
