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
  "definition": "vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation.",
  "domain": "natural-language-processing",
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
