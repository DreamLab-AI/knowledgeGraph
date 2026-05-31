public:: true

# Foundation Model Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:459a9fba5b35d3f47cb88a9c5fd1cb8a8004849d1dd02306c952affb45a3cfd5",
  "@type": "Page",
  "vc:slug": "foundation-model-layer",
  "title": "Foundation Model Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:training-layer",
      "vc:label": "Training Layer"
    },
    {
      "@id": "urn:visionflow:linked:model-architecture-layer",
      "vc:label": "Model Architecture Layer"
    },
    {
      "@id": "urn:visionflow:linked:model-layer",
      "vc:label": "Model Layer"
    },
    {
      "@id": "urn:visionflow:linked:inference-layer",
      "vc:label": "Inference Layer"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:self-supervised-learning",
      "vc:label": "Self-Supervised Learning"
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
      "vc:value": "Foundation Model Layer"
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
  "@id": "urn:ngm:class:foundation-model-layer",
  "@type": "Class",
  "label": "Foundation Model Layer",
  "definition": "The Foundation Model Layer is the stratum that holds large, broadly pretrained models intended for adaptation to many downstream tasks. It sits above the Training Layer that produced it and below the Model and Inference Layers that specialise and serve it. It contains base model weights, pretraining configurations, and adaptation interfaces.",
  "domain": "foundation-model",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:training-layer",
        "label": "Training Layer"
      },
      {
        "@id": "urn:ngm:class:model-architecture-layer",
        "label": "Model Architecture Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-layer",
        "label": "Model Layer"
      },
      {
        "@id": "urn:ngm:class:inference-layer",
        "label": "Inference Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:foundation-model-layer:af4a70856126",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:459a9fba5b35d3f47cb88a9c5fd1cb8a8004849d1dd02306c952affb45a3cfd5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Training Layer]]",
      "resolved": "urn:visionflow:linked:training-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Architecture Layer]]",
      "resolved": "urn:visionflow:linked:model-architecture-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Layer]]",
      "resolved": "urn:visionflow:linked:model-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference Layer]]",
      "resolved": "urn:visionflow:linked:inference-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Supervised Learning]]",
      "resolved": "urn:visionflow:linked:self-supervised-learning",
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
  - The Foundation Model Layer is the stratum that holds large, broadly pretrained models intended for adaptation to many downstream tasks. It sits above the Training Layer that produced it and below the Model and Inference Layers that specialise and serve it. It contains base model weights, pretraining configurations, and adaptation interfaces.

- ### Semantic Classification
  - owl-class:: ml:FoundationModelLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Transfer Learning]], [[Self-Supervised Learning]]
  - requires:: [[Training Layer]], [[Model Architecture Layer]]
  - enables:: [[Model Layer]], [[Inference Layer]]

- ### Content
  - The Foundation Model Layer holds general-purpose models trained on broad data at scale, intended to be adapted rather than used unchanged. Typical members include base weight sets, pretraining objectives and corpora descriptions, and interfaces for fine-tuning, prompting, or adapter insertion. It provides a reusable starting point for many tasks.
  - It requires the Training Layer that performed costly pretraining and the Model Architecture Layer that defined its structure. It enables the Model Layer, which specialises it, and the Inference Layer, which serves derived variants. Capabilities and biases of the base propagate to every adaptation.
  - The layer bridges to transfer learning and self-supervised learning, the techniques that make broad pretraining useful. Documentation of training data and known limitations here is essential for safe downstream reuse.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
