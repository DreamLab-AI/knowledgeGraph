public:: true

# Tensor Parallelism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tensor-parallelism",
  "@type": "Page",
  "vc:slug": "tensor-parallelism",
  "title": "Tensor Parallelism",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tensor-parallelism",
  "@type": "Class",
  "label": "Tensor Parallelism",
  "definition": "Tensor parallelism is a model-parallel training and inference technique that splits individual weight tensors, and the matrix multiplications that use them, across multiple accelerators so that each device holds and computes a shard of every layer. Partial results are combined with collective communication such as all-reduce. It lets models whose layers exceed a single device's memory run at scale, and is typically combined with data and pipeline parallelism.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:3d-parallelism",
        "label": "3D Parallelism"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:high-bandwidth-interconnect",
        "label": "High-Bandwidth Interconnect"
      },
      {
        "@id": "urn:ngm:class:gpu-cluster",
        "label": "GPU Cluster"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:distributed-inference",
        "label": "Distributed Inference"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:matrix-multiplication",
        "label": "Matrix Multiplication"
      },
      {
        "@id": "urn:ngm:class:collective-communication",
        "label": "Collective Communication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:megatron-lm",
        "label": "Megatron-LM"
      },
      {
        "@id": "urn:ngm:class:deep-speed",
        "label": "DeepSpeed"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:nvlink",
        "label": "NVLink"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      },
      {
        "@id": "urn:ngm:class:pipeline-parallelism",
        "label": "Pipeline Parallelism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:expert-parallelism",
        "label": "Expert Parallelism"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:intra-layer-model-parallelism",
      "label": "Intra-Layer Model Parallelism"
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

- ### Definition
  - Tensor parallelism shards individual weight matrices across accelerators so each holds part of every layer, a core technique in large-scale [[Model Training]] on distributed [[Compute Infrastructure]].
- ### Content
  - Within a layer, weight matrices are partitioned along rows or columns so each device computes a slice of the matrix multiplication, after which an all-reduce or all-gather combines the partial outputs. This keeps per-device memory bounded but introduces communication on the critical path, so it is usually confined to the high-bandwidth interconnect within a single node. Frameworks such as Megatron-LM popularised the approach, and it composes with pipeline and data parallelism in 3D-parallel training of frontier models.
