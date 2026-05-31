public:: true

# State Space Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:73cbfefcd4d4bc1f5cc9907d818a1e542119bb349547e73892ca48357a5258af",
  "@type": "Page",
  "vc:slug": "state-space-model",
  "title": "State Space Model",
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
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "State Space Model"
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
  "@id": "urn:ngm:class:state-space-model",
  "@type": "Class",
  "label": "State Space Model",
  "definition": "A class of sequence model that represents a system through a latent state evolving over time according to linear dynamics, recently adapted as an efficient alternative to attention for long sequences.",
  "domain": "deep-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network",
      "label": "Neural Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:state-space-model:8dbc67381924",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:73cbfefcd4d4bc1f5cc9907d818a1e542119bb349547e73892ca48357a5258af"
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
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
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
  - A class of sequence model that represents a system through a latent state evolving over time according to linear dynamics, recently adapted as an efficient alternative to attention for long sequences.

- ### Semantic Classification
  - owl-class:: deep-learning:StateSpaceModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Neural Network]]
  - bridges-to:: [[Transformer]]
  - requires:: [[Probabilistic Model]]
  - enables:: [[Language Model]]

- ### Content
  - State space models describe sequences using a hidden state that is updated by linear recurrence and mapped to outputs. Classical formulations appear in control and time series analysis, where the Kalman filter is a well-known inference method.
  - Recent deep learning variants, including structured state space models and selective designs such as Mamba, parameterise these dynamics so that they can be trained efficiently and capture long-range dependencies. They offer near-linear scaling in sequence length, which contrasts with the quadratic cost of self-attention.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
