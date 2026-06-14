public:: true

# JAX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7d2edcdc11232c191a98693ae70bebdf5d5fb4c528e49117d512ffe625c1591b",
  "@type": "Page",
  "vc:slug": "jax",
  "title": "JAX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automatic-differentiation",
      "vc:label": "Automatic Differentiation"
    },
    {
      "@id": "urn:visionflow:linked:hardware-acceleration",
      "vc:label": "Hardware Acceleration"
    },
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:py-torch",
      "vc:label": "PyTorch"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "JAX"
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
  "@id": "urn:ngm:class:jax",
  "@type": "Class",
  "label": "JAX",
  "definition": "A Python library from Google for high-performance numerical computing and machine learning research, combining NumPy-style array operations with automatic differentiation and just-in-time compilation targeting CPUs, GPUs, and TPUs via the XLA compiler.",
  "domain": "machine-learning",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:deep-learning",
    "label": "Deep Learning"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:python",
        "label": "Python"
      },
      {
        "@id": "urn:ngm:class:xla-compiler",
        "label": "XLA Compiler"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:just-in-time-compilation",
        "label": "Just-in-Time Compilation"
      },
      {
        "@id": "urn:ngm:class:vectorised-computation",
        "label": "Vectorised Computation"
      },
      {
        "@id": "urn:ngm:class:large-scale-model-training",
        "label": "Large-Scale Model Training"
      },
      {
        "@id": "urn:ngm:class:functional-programming",
        "label": "Functional Programming"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:numpy-api",
        "label": "NumPy API"
      },
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:tensor-processing-unit",
        "label": "Tensor Processing Unit"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:neural-network-training",
        "label": "Neural Network Training"
      },
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:flax",
        "label": "Flax"
      },
      {
        "@id": "urn:ngm:class:haiku",
        "label": "Haiku"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:py-torch",
        "label": "PyTorch"
      },
      {
        "@id": "urn:ngm:class:tensorflow",
        "label": "TensorFlow"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:numerical-computing",
        "label": "Numerical Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:google-jax",
      "label": "Google JAX"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:jax:72345e06ed6f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7d2edcdc11232c191a98693ae70bebdf5d5fb4c528e49117d512ffe625c1591b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automatic Differentiation]]",
      "resolved": "urn:visionflow:linked:automatic-differentiation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware Acceleration]]",
      "resolved": "urn:visionflow:linked:hardware-acceleration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PyTorch]]",
      "resolved": "urn:visionflow:linked:py-torch",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning Domain]]",
      "resolved": "urn:visionflow:linked:deep-learning",
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
  - A Python library from Google for high-performance numerical computing and machine learning research, combining NumPy-style array operations with automatic differentiation and just-in-time compilation.

- ### Semantic Classification
  - owl-class:: deep-learning:JAX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Deep Learning Domain]]
  - bridges-to:: [[PyTorch]]
  - requires:: [[Automatic Differentiation]], [[Hardware Acceleration]]
  - enables:: [[Backpropagation]]

- ### Content
  - JAX provides composable function transformations, including grad for differentiation, jit for just-in-time compilation through XLA, and vmap and pmap for automatic vectorisation and parallelisation. It follows a functional programming style with immutable arrays and pure functions.
  - The compilation backend targets CPUs, GPUs and TPUs, which makes JAX attractive for large-scale research and high-performance experimentation. Higher-level neural network libraries such as Flax and Haiku build on JAX to provide model abstractions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
