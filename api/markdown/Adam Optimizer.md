public:: true

# Adam Optimizer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a38d8fcbf3334697767875dcb55c6ea8c771b10889366d736fb1b6c227dfaec",
  "@type": "Page",
  "vc:slug": "adam-optimizer",
  "title": "Adam Optimizer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gradient-descent",
      "vc:label": "Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-gradient-descent",
      "vc:label": "Stochastic Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:optimization-algorithm",
      "vc:label": "Optimization Algorithm"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Adam Optimizer"
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
  "@id": "urn:ngm:class:adam-optimizer",
  "@type": "Class",
  "label": "Adam Optimizer",
  "definition": "An optimisation algorithm widely used to train neural networks, combining momentum with per-parameter adaptive learning rates derived from estimates of the first and second moments of the gradients. Its name stands for adaptive moment estimation.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimization-algorithm",
      "label": "Optimization Algorithm"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:adam-optimizer:d20744a94110",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2a38d8fcbf3334697767875dcb55c6ea8c771b10889366d736fb1b6c227dfaec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Gradient Descent]]",
      "resolved": "urn:visionflow:linked:gradient-descent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stochastic Gradient Descent]]",
      "resolved": "urn:visionflow:linked:stochastic-gradient-descent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimization Algorithm]]",
      "resolved": "urn:visionflow:linked:optimization-algorithm",
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
  - An optimisation algorithm widely used to train neural networks, combining momentum with per-parameter adaptive learning rates derived from estimates of the first and second moments of the gradients. Its name stands for adaptive moment estimation.

- ### Semantic Classification
  - owl-class:: machine-learning:AdamOptimizer
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Optimization Algorithm]]
  - bridges-to:: [[Stochastic Gradient Descent]]
  - requires:: [[Gradient Descent]]
  - enables:: [[Deep Learning]]

- ### Content
  - The Adam optimiser, introduced by Diederik Kingma and Jimmy Ba in 2014, maintains exponentially decaying averages of past gradients and squared gradients. It uses these moment estimates to scale the learning rate for each parameter individually.
  - Adam combines ideas from momentum and adaptive learning rate methods such as RMSProp, and it is a default choice for training many deep learning models because it often converges quickly with little tuning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
