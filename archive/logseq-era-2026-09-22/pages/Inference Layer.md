public:: true

# Inference Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:718b5caad35483acb13912850d283291d81cc426b839378ec3c716da212eb08d",
  "@type": "Page",
  "vc:slug": "inference-layer",
  "title": "Inference Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:model-layer",
      "vc:label": "Model Layer"
    },
    {
      "@id": "urn:visionflow:linked:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:model-serving",
      "vc:label": "Model Serving"
    },
    {
      "@id": "urn:visionflow:linked:quantisation",
      "vc:label": "Quantisation"
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
      "vc:value": "Inference Layer"
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
  "@id": "urn:ngm:class:inference-layer",
  "@type": "Class",
  "label": "Inference Layer",
  "definition": "The Inference Layer is the stratum that executes trained models to produce predictions from new inputs. In the canonical stack it sits above the Model Layer and below the Middleware Layer, turning static artefacts into a live serving capability. It contains serving runtimes, batching and caching logic, and the request handling that delivers predictions.",
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
        "@id": "urn:ngm:class:model-layer",
        "label": "Model Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:middleware-layer",
        "label": "Middleware Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:inference-layer:90b6862346ce",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:718b5caad35483acb13912850d283291d81cc426b839378ec3c716da212eb08d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Model Layer]]",
      "resolved": "urn:visionflow:linked:model-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:linked:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Serving]]",
      "resolved": "urn:visionflow:linked:model-serving",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quantisation]]",
      "resolved": "urn:visionflow:linked:quantisation",
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
  - The Inference Layer is the stratum that executes trained models to produce predictions from new inputs. In the canonical stack it sits above the Model Layer and below the Middleware Layer, turning static artefacts into a live serving capability. It contains serving runtimes, batching and caching logic, and the request handling that delivers predictions.

- ### Semantic Classification
  - owl-class:: ml:InferenceLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Model Serving]], [[Quantisation]]
  - requires:: [[Model Layer]]
  - enables:: [[Middleware Layer]], [[Application Layer]]

- ### Content
  - The Inference Layer runs a trained model against fresh inputs and returns outputs within latency and throughput constraints. Typical members include serving runtimes, request batchers, key-value and result caches, and accelerators configured for low-latency execution. Its concern is efficient, reliable prediction rather than learning.
  - It requires the Model Layer for the artefacts it loads and serves, and it enables the Middleware and Application Layers, which consume predictions as a service. Latency, cost, and availability defined here shape the experiences built above.
  - The layer bridges to model serving and to optimisation techniques such as quantisation and distillation. Trade-offs made here between accuracy, speed, and resource use directly affect what applications can promise their users.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
