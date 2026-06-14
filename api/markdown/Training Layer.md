public:: true

# Training Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa51285de6edb628cd9664fc7724096709b3e8d876521e62541ec5cd7488e337",
  "@type": "Page",
  "vc:slug": "training-layer",
  "title": "Training Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:linked:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:linked:model-layer",
      "vc:label": "Model Layer"
    },
    {
      "@id": "urn:visionflow:linked:foundation-model-layer",
      "vc:label": "Foundation Model Layer"
    },
    {
      "@id": "urn:visionflow:linked:gradient-descent",
      "vc:label": "Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Training Layer"
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
  "@id": "urn:ngm:class:training-layer",
  "@type": "Class",
  "label": "Training Layer",
  "definition": "The Training Layer is the stratum that fits model parameters from data using optimisation procedures. It sits above the Compute and Data strata it consumes and below the Model and Foundation Model strata that hold its results. It contains training loops, optimisers, loss functions, and the orchestration of large-scale learning runs.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "Ai Technique"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      },
      {
        "@id": "urn:ngm:class:data-layer",
        "label": "Data Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-layer",
        "label": "Model Layer"
      },
      {
        "@id": "urn:ngm:class:foundation-model-layer",
        "label": "Foundation Model Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:training-layer:89119c35c30f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aa51285de6edb628cd9664fc7724096709b3e8d876521e62541ec5cd7488e337"
  },
  "vc:resolutions": [
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:linked:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:linked:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Layer]]",
      "resolved": "urn:visionflow:linked:model-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Foundation Model Layer]]",
      "resolved": "urn:visionflow:linked:foundation-model-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gradient Descent]]",
      "resolved": "urn:visionflow:linked:gradient-descent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Training Layer is the stratum that fits model parameters from data using optimisation procedures. It sits above the Compute and Data strata it consumes and below the Model and Foundation Model strata that hold its results. It contains training loops, optimisers, loss functions, and the orchestration of large-scale learning runs.

- ### Semantic Classification
  - owl-class:: ml:TrainingLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Gradient Descent]], [[Backpropagation]]
  - requires:: [[Compute Layer]], [[Data Layer]]
  - enables:: [[Model Layer]], [[Foundation Model Layer]]

- ### Content
  - The Training Layer is where learning happens: parameters are adjusted to minimise a loss over data. Typical members include training loops, optimisers, loss and regularisation functions, learning-rate schedules, and the distributed orchestration that scales runs across many devices. It is concerned with producing models rather than serving them.
  - It requires the Compute Layer for the substantial resources learning demands and the Data Layer for the examples it learns from. It enables the Model and Foundation Model Layers, which hold the resulting weights. Data quality and optimisation choices here determine what those models can do.
  - The layer bridges to gradient descent and backpropagation, the mechanisms that make large-scale learning tractable. Reproducibility of training, including seeds and data versions, is essential for trustworthy downstream artefacts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
