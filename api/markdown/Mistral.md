public:: true

# Mistral
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8a1af69e9e61e1d58bea1327b3c702d53382360a647537aa0d99cc8b3b59057",
  "@type": "Page",
  "vc:slug": "mistral",
  "title": "Mistral",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:attention-mechanism",
      "vc:label": "Attention Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:function-calling",
      "vc:label": "Function Calling"
    },
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
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
      "vc:value": "Mistral"
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
  "@id": "urn:ngm:class:mistral",
  "@type": "Class",
  "label": "Mistral",
  "definition": "Mistral is a family of language models from Mistral AI, several released as open weights. The line includes dense models and mixture-of-experts models for text generation and reasoning.",
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
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mistral:920510199770",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d8a1af69e9e61e1d58bea1327b3c702d53382360a647537aa0d99cc8b3b59057"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Attention Mechanism]]",
      "resolved": "urn:visionflow:linked:attention-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Retrieval-Augmented Generation]]",
      "resolved": "urn:visionflow:linked:retrieval-augmented-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Function Calling]]",
      "resolved": "urn:visionflow:linked:function-calling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
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
  - Mistral is a family of language models from Mistral AI, several released as open weights. The line includes dense models and mixture-of-experts models for text generation and reasoning.

- ### Semantic Classification
  - owl-class:: natural-language-processing:Mistral
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Large Language Models]]
  - bridges-to:: [[Language Model]], [[Natural Language Processing]]
  - requires:: [[Transformer]], [[Attention Mechanism]]
  - enables:: [[Retrieval-Augmented Generation]], [[Function Calling]]

- ### Content
  - Mistral models are transformer language models that gained attention for releasing competitive open-weight versions that can be run locally or self-hosted. The range spans smaller dense models and larger mixture-of-experts designs.
  - The models are used for text generation, summarisation and tool-calling agents, and are available both as downloadable weights and through a hosted API. Open releases have made them a common base for fine-tuning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
