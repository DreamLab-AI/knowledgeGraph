public:: true

# vLLM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:125b1f9c58db2101ddcebd38915a1a8af42181d9481b2e1638548da01b421a02",
  "@type": "Page",
  "vc:slug": "v-llm",
  "title": "vLLM",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:kv-cache",
      "vc:label": "KV Cache"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:model-serving",
      "vc:label": "Model Serving"
    },
    {
      "@id": "urn:visionflow:linked:inference-serving",
      "vc:label": "Inference Serving"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "vLLM"
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
  "@id": "urn:ngm:class:v-llm",
  "@type": "Class",
  "label": "vLLM",
  "definition": "vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation by managing attention KV cache in fixed-size blocks analogous to virtual memory paging.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:inference-serving",
      "label": "Inference Serving"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      },
      {
        "@id": "urn:ngm:class:inference-serving",
        "label": "Inference Serving"
      },
      {
        "@id": "urn:ngm:class:continuous-batching",
        "label": "Continuous Batching"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:paged-attention",
        "label": "Paged Attention"
      },
      {
        "@id": "urn:ngm:class:openai-research-organisation-api",
        "label": "OpenAI API"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:python",
        "label": "Python"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:memory-management",
        "label": "Memory Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:speculative-decoding",
        "label": "Speculative Decoding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:triton-inference-server",
        "label": "Triton Inference Server"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantization"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:vllm-inference-engine",
      "label": "vLLM Inference Engine"
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
  "@id": "urn:visionflow:annotation:link-resolutions:v-llm:a0457cac6130",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:125b1f9c58db2101ddcebd38915a1a8af42181d9481b2e1638548da01b421a02"
  },
  "vc:resolutions": [
    {
      "raw": "[[KV Cache]]",
      "resolved": "urn:visionflow:linked:kv-cache",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Serving]]",
      "resolved": "urn:visionflow:linked:model-serving",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference Serving]]",
      "resolved": "urn:visionflow:linked:inference-serving",
      "kind": "StubLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
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
  - vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation.

- ### Semantic Classification
  - owl-class:: natural-language-processing:vLLM
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Inference Serving]]
  - bridges-to:: [[Large Language Models]], [[Latency]]
  - requires:: [[KV Cache]], [[GPU]]
  - enables:: [[Model Serving]], [[Inference Serving]]

- ### Content
  - vLLM serves language models with high throughput by managing the attention key-value cache in fixed-size blocks, an approach called paged attention that mirrors virtual memory paging. This reduces fragmentation and allows many requests to share memory efficiently.
  - The library supports continuous batching, where new requests join an in-flight batch as slots free up, which keeps the accelerator busy. It is widely used to deploy open-weight models and exposes an interface compatible with common API conventions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
