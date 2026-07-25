public:: true

# Rdma

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:rdma",
  "@type": "Page",
  "title": "Rdma",
  "vc:slug": "rdma",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rdma",
  "@type": "Class",
  "label": "Rdma",
  "definition": "Remote Direct Memory Access (RDMA) is a networking capability that lets one computer read from or write to the memory of another without involving either machine's operating system or CPU on the data path. By bypassing kernel buffering and copying, RDMA delivers very low latency and high throughput, which is essential for the collective communication patterns of large-scale distributed training. It is exposed through fabrics such as InfiniBand and RoCE and underpins high-performance computing clusters.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:networking",
      "label": "Networking"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:networking",
      "label": "Networking"
    },
    "dependsOn": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:collective-communication",
        "label": "Collective Communication"
      },
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low Latency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      },
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      },
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - RDMA is a [[Networking]] technology that bypasses the CPU on the data path for [[Low Latency]] transfers.
  - It accelerates [[Collective Communication]] in [[Distributed Training]].
  - It underpins [[Model Parallelism]] and [[Tensor Parallelism]] across [[GPU]] clusters.
- ### Overview
  - RDMA hardware moves data directly between the memory regions of two hosts, eliminating kernel involvement and extra copies.
  - This zero-copy, kernel-bypass path drives the all-reduce and all-gather operations that dominate distributed deep-learning traffic.
  - Fabrics such as InfiniBand and RoCE provide the transport, while GPUDirect lets accelerators exchange data without staging through host memory.
- ### Mechanisms
  - Kernel-bypass data path with direct memory placement.
  - Zero-copy transfers between registered memory regions.
  - Queue-pair work-request model for asynchronous operations.
  - GPUDirect RDMA for accelerator-to-accelerator transfers.
- ### Applications
  - Synchronising gradients in large-scale model training.
  - High-performance computing simulations and storage fabrics.
  - Low-latency inference serving and parameter exchange.
- ### Performance factors
  - Latency is dominated by fabric quality and topology.
  - Bandwidth scales with link width and congestion control.
  - Memory registration overhead must be amortised across transfers.
- ### Relationships
  - partOf:: [[Networking]]
  - dependsOn:: [[Compute Infrastructure]]
  - dependsOn:: [[Memory Bandwidth]]
  - uses:: [[Bandwidth]]
  - uses:: [[Network Protocol]]
  - enables:: [[Distributed Training]]
  - enables:: [[Collective Communication]]
  - enables:: [[Low Latency]]
  - supports:: [[Model Parallelism]]
  - supports:: [[Data Parallelism]]
  - supports:: [[Tensor Parallelism]]
  - relatedTo:: [[High-Performance Computing]]
  - relatedTo:: [[GPU]]
  - bridgesTo:: [[Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
