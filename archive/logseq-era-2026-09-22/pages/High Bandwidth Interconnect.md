public:: true

# High Bandwidth Interconnect

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:high-bandwidth-interconnect",
  "@type": "Page",
  "title": "High Bandwidth Interconnect",
  "vc:slug": "high-bandwidth-interconnect",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:high-bandwidth-interconnect",
  "@type": "Class",
  "label": "High Bandwidth Interconnect",
  "definition": "A high-bandwidth interconnect is a communication link or fabric engineered to move very large volumes of data between processors, accelerators, or nodes with minimal latency, enabling tightly-coupled parallel computation. In machine learning it is the substrate over which gradients, activations, and parameters are exchanged during distributed training, directly bounding how efficiently models scale across many devices. Technologies such as NVLink, InfiniBand, and RDMA fabrics provide the throughput that large-scale training demands.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-fabric",
        "label": "Network Fabric"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      },
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:nvlink",
        "label": "NVLink"
      },
      {
        "@id": "urn:ngm:class:rdma",
        "label": "RDMA"
      },
      {
        "@id": "urn:ngm:class:infiniband",
        "label": "Infiniband"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:collective-communication",
        "label": "Collective Communication"
      },
      {
        "@id": "urn:ngm:class:parallel-processing",
        "label": "Parallel Processing"
      },
      {
        "@id": "urn:ngm:class:checkpoints",
        "label": "Checkpoints"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
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
  - A high-bandwidth interconnect moves large data volumes between compute devices at low latency.
  - It is critical infrastructure for [[Machine Learning]] [[Distributed Training]].
  - It carries [[Collective Communication]] traffic for [[Model Parallelism]].
  - It is realised by technologies such as [[NVLink]], [[Infiniband]], and [[RDMA]].
- ### Overview
  - High-bandwidth interconnects determine how efficiently computation scales across devices.
  - In distributed training, communication of gradients and parameters can dominate runtime.
  - Both intra-node links (NVLink) and inter-node fabrics (InfiniBand) matter for scaling.
  - Bandwidth and latency together bound achievable parallel speed-up.
- ### Key aspects
  - Aggregate bandwidth sets the ceiling on collective-communication throughput.
  - Low latency keeps synchronisation overhead small as device counts grow.
  - Topology (e.g. fat-tree, mesh) shapes bisection bandwidth and contention.
  - RDMA and kernel-bypass reduce CPU overhead on the critical communication path.
- ### Applications
  - Scaling large-language-model training across many GPUs and nodes.
  - All-reduce gradient synchronisation in data-parallel training.
  - Tensor and pipeline exchange in model-parallel training.
  - Tightly-coupled HPC simulations needing fast inter-node messaging.
- ### Relationships
  - requires:: [[Compute Infrastructure]]
  - requires:: [[Data Centre]]
  - dependsOn:: [[Network Fabric]]
  - dependsOn:: [[Memory Bandwidth]]
  - enables:: [[Distributed Training]]
  - enables:: [[Model Parallelism]]
  - enables:: [[Data Parallelism]]
  - uses:: [[NVLink]]
  - uses:: [[RDMA]]
  - uses:: [[Infiniband]]
  - supports:: [[Collective Communication]]
  - supports:: [[Parallel Processing]]
  - supports:: [[Checkpoints]]
  - relatedTo:: [[Throughput]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[GPU]]
  - bridgesTo:: [[High-Performance Computing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
