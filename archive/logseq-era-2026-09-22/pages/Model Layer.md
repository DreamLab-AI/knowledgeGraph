public:: true

# Model Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e50077ebe2a5c65ac4ad4af19ac91c70f3feb7c14dc697fbca064fb44ed5bf9a",
  "@type": "Page",
  "vc:slug": "model-layer",
  "title": "Model Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:algorithm-layer",
      "vc:label": "Algorithm Layer"
    },
    {
      "@id": "urn:visionflow:linked:training-layer",
      "vc:label": "Training Layer"
    },
    {
      "@id": "urn:visionflow:linked:inference-layer",
      "vc:label": "Inference Layer"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:model-registry",
      "vc:label": "Model Registry"
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
      "vc:value": "Model Layer"
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
  "@id": "urn:ngm:class:model-layer",
  "@type": "Class",
  "label": "Model Layer",
  "definition": "The Model Layer is the stratum that holds trained machine learning models as deployable artefacts with fixed parameters. In the canonical stack it sits above the Algorithm Layer and below the Inference Layer, packaging learned functions for use. It contains weight sets, model metadata, and the serialised representations that inference engines load.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:algorithm-layer",
        "label": "Algorithm Layer"
      },
      {
        "@id": "urn:ngm:class:training-layer",
        "label": "Training Layer"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:model-layer:ca12f8f17b93",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e50077ebe2a5c65ac4ad4af19ac91c70f3feb7c14dc697fbca064fb44ed5bf9a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Algorithm Layer]]",
      "resolved": "urn:visionflow:linked:algorithm-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Training Layer]]",
      "resolved": "urn:visionflow:linked:training-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inference Layer]]",
      "resolved": "urn:visionflow:linked:inference-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Registry]]",
      "resolved": "urn:visionflow:linked:model-registry",
      "kind": "StubLink"
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
  - The Model Layer is the stratum that holds trained machine learning models as deployable artefacts with fixed parameters. In the canonical stack it sits above the Algorithm Layer and below the Inference Layer, packaging learned functions for use. It contains weight sets, model metadata, and the serialised representations that inference engines load.

- ### Semantic Classification
  - owl-class:: ml:ModelLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Machine Learning Discipline]], [[Model Registry]]
  - requires:: [[Algorithm Layer]], [[Training Layer]]
  - enables:: [[Inference Layer]]

- ### Content
  - The Model Layer is where a learned function becomes a concrete, versioned artefact. Typical members include parameter tensors, tokenizer and preprocessing configurations, model cards, and registry entries that track lineage and evaluation results. It represents the captured result of learning rather than the process of learning.
  - It requires the Algorithm Layer for the operations the model is built from and the Training Layer that fitted its parameters. It enables the Inference Layer above, which executes the model to produce predictions. The model's measured quality and limits travel with it as metadata.
  - The layer bridges to machine learning and to the concept of a model registry, which governs versioning, approval, and rollback. Reproducibility and provenance recorded here let downstream consumers trust and audit the artefacts they deploy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
