public:: true

# Autoregressive Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b6f0cecc5184d5dda9bdea6049fcb6b58ad6cd3e792003f96f57b5f9130c525e",
  "@type": "Page",
  "vc:slug": "autoregressive-model",
  "title": "Autoregressive Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probabilistic-model",
      "vc:label": "Probabilistic Model"
    },
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Autoregressive Model"
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
  "@id": "urn:ngm:class:autoregressive-model",
  "@type": "Class",
  "label": "Autoregressive Model",
  "definition": "A model that generates a sequence by predicting each element conditioned on the previously generated elements, factorising the joint distribution into a product of conditional distributions.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
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
  "@id": "urn:visionflow:annotation:link-resolutions:autoregressive-model:fcc227515c0f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b6f0cecc5184d5dda9bdea6049fcb6b58ad6cd3e792003f96f57b5f9130c525e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probabilistic Model]]",
      "resolved": "urn:visionflow:linked:probabilistic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
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
  - A model that generates a sequence by predicting each element conditioned on the previously generated elements, factorising the joint distribution into a product of conditional distributions.

- ### Semantic Classification
  - owl-class:: machine-learning:AutoregressiveModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative Model]]
  - bridges-to:: [[Transformer]]
  - requires:: [[Probabilistic Model]]
  - enables:: [[Language Model]]

- ### Content
  - Autoregressive models decompose the probability of a sequence using the chain rule, modelling each token given its predecessors. This formulation underlies most large language models, which generate text one token at a time, as well as autoregressive models for audio and images.
  - Generation is inherently sequential, which limits parallelism at inference time, but the approach gives exact likelihoods and a simple training objective. Transformers are the dominant architecture for autoregressive sequence modelling because they handle long-range dependencies efficiently during training.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
