public:: true

# Infiniband

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:infiniband",
  "@type": "Page",
  "title": "Infiniband",
  "vc:slug": "infiniband",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:infiniband",
  "@type": "Class",
  "label": "Infiniband",
  "definition": "InfiniBand is a high-throughput, low-latency switched-fabric interconnect standard used to connect servers, storage, and accelerators in high-performance computing and large-scale AI training clusters. It provides remote direct memory access (RDMA) that bypasses the operating system kernel, enabling near-wire-speed data movement between nodes. InfiniBand is widely deployed as the backbone fabric for GPU clusters where collective communication bandwidth determines training scalability.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    },
    {
      "@id": "urn:ngm:class:interconnect",
      "label": "Interconnect"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:rdma",
        "label": "RDMA"
      },
      {
        "@id": "urn:ngm:class:network-fabric",
        "label": "Network Fabric"
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
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      },
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:nvlink",
        "label": "NVLink"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      },
      {
        "@id": "urn:ngm:class:parallel-processing",
        "label": "Parallel Processing"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:checkpoints",
        "label": "Checkpoints"
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
  - InfiniBand is a switched-fabric interconnect for [[High-Performance Computing]] and AI clusters.
  - It delivers low [[Latency]] and high [[Throughput]] via kernel-bypass [[RDMA]].
  - It underpins [[Distributed Training]] by accelerating [[Collective Communication]].
  - It contrasts with conventional Ethernet [[Network Fabric]] in latency-sensitive workloads.
- ### Overview
  - InfiniBand uses a credit-based flow-control fabric that avoids packet loss under congestion.
  - RDMA lets one node read or write another node's memory directly, removing CPU and kernel overhead.
  - It is a dominant interconnect for GPU supercomputers training large neural networks.
  - Topologies such as fat-tree provide non-blocking bisection bandwidth across thousands of nodes.
- ### Key aspects
  - Kernel-bypass RDMA moves data without CPU involvement, freeing compute for the workload.
  - Hardware offload of transport and congestion control keeps tail latency low at scale.
  - Adaptive routing and lossless flow control sustain throughput during all-reduce collectives.
  - GPUDirect integration allows direct GPU-to-GPU transfers across the fabric.
- ### Applications
  - Backbone fabric for large-language-model training clusters spanning thousands of GPUs.
  - Scientific HPC simulations requiring tightly-coupled message passing.
  - Distributed storage fabrics needing low-latency block and file access.
  - Parameter and gradient exchange in data- and model-parallel training.
- ### Relationships
  - uses:: [[RDMA]]
  - uses:: [[Network Fabric]]
  - enables:: [[Distributed Training]]
  - enables:: [[Collective Communication]]
  - enables:: [[Model Parallelism]]
  - supports:: [[High-Performance Computing]]
  - supports:: [[Compute Infrastructure]]
  - supports:: [[Data Centre]]
  - requires:: [[GPU]]
  - contrastsWith:: [[NVLink]]
  - relatedTo:: [[Data Parallelism]]
  - relatedTo:: [[Parallel Processing]]
  - relatedTo:: [[Throughput]]
  - relatedTo:: [[Latency]]
  - bridgesTo:: [[Checkpoints]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
