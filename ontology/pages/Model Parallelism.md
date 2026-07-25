public:: true

# Model Parallelism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-parallelism",
  "@type": "Page",
  "vc:slug": "model-parallelism",
  "title": "Model Parallelism",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-parallelism",
  "@type": "Class",
  "label": "Model Parallelism",
  "definition": "Model parallelism is a distributed training strategy that splits a single neural network's parameters and computation across multiple accelerators when the model is too large to fit in one device's memory. Variants include tensor parallelism (splitting within layers) and pipeline parallelism (splitting across layers into stages). It is essential for training large language models and is often combined with data parallelism.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-training",
    "label": "Distributed Training"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      },
      {
        "@id": "urn:ngm:class:pipeline-parallelism",
        "label": "Pipeline Parallelism"
      },
      {
        "@id": "urn:ngm:class:expert-parallelism",
        "label": "Expert Parallelism"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3d-parallelism",
        "label": "3D Parallelism"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-cluster",
        "label": "GPU Cluster"
      },
      {
        "@id": "urn:ngm:class:high-bandwidth-interconnect",
        "label": "High-Bandwidth Interconnect"
      },
      {
        "@id": "urn:ngm:class:collective-communication",
        "label": "Collective Communication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model-training",
        "label": "Large Language Model Training"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:mixture-of-experts-architecture",
        "label": "Mixture of Experts"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:nvlink",
        "label": "NVLink"
      },
      {
        "@id": "urn:ngm:class:rdma",
        "label": "RDMA"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:deep-speed",
        "label": "DeepSpeed"
      },
      {
        "@id": "urn:ngm:class:megatron-lm",
        "label": "Megatron-LM"
      },
      {
        "@id": "urn:ngm:class:fsdp",
        "label": "PyTorch FSDP"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:micro-batch-scheduling",
        "label": "Micro-Batch Scheduling"
      },
      {
        "@id": "urn:ngm:class:gradient-checkpointing",
        "label": "Gradient Checkpointing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:hardware-accelerator",
        "label": "Hardware Accelerator"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:inter-device-model-splitting",
      "label": "Inter-Device Model Splitting"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Model parallelism splits one large network's parameters and compute across multiple accelerators that cannot individually hold it. Frameworks like [[DeepSpeed]] implement it atop [[Compute Infrastructure]].
- ### Content
  - Tensor parallelism partitions matrix multiplications across devices within a layer, while pipeline parallelism assigns consecutive layers to different devices and overlaps micro-batches to hide bubbles. Communication overhead and load balancing are the central trade-offs, motivating hybrid 3D strategies combining tensor, pipeline, and data parallelism.
