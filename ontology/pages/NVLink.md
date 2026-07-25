public:: true

# NVLink
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:nvlink",
  "@type": "Page",
  "title": "NVLink",
  "vc:slug": "nvlink",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nvlink",
  "@type": "Class",
  "label": "NVLink",
  "definition": "NVLink is NVIDIA's high-bandwidth, low-latency point-to-point interconnect that links GPUs directly to one another, and in some platforms to the CPU, providing far greater throughput than the PCIe bus it supplements. By creating a coherent, high-speed fabric between accelerators, NVLink enables fast peer-to-peer memory transfers and unified memory pooling across multiple GPUs. It is foundational to multi-GPU training and inference of large neural networks, where the interconnect bandwidth between devices often determines the achievable scaling efficiency of model and tensor parallelism.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gpu-computing",
      "label": "GPU Computing"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      },
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High Performance Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High Performance Computing"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - NVLink is NVIDIA's high-bandwidth, low-latency interconnect that links [[GPU]]s directly to one another, supplementing the slower PCIe bus. As a specialised facet of [[GPU Computing]], it provides a coherent fabric that supports fast peer-to-peer transfers and pooled memory across accelerators.
  - Its high [[Bandwidth]] and low [[Latency]] are what make multi-GPU [[Distributed Training]] of very large models practical.

- ### Overview
  - As neural networks grew beyond the memory and compute capacity of a single GPU, the bottleneck shifted from raw arithmetic throughput to the speed at which devices can exchange data. PCIe, designed as a general peripheral bus, became a limiting factor for tightly coupled multi-GPU workloads.
  - NVLink addresses this by providing dedicated links between GPUs with bandwidth several times that of contemporary PCIe, and by supporting cache-coherent access so that one GPU can read another's memory efficiently. In server platforms, the NVSwitch fabric extends this to all-to-all connectivity among many GPUs within a node.
  - The result is that collective operations such as all-reduce — the backbone of synchronous data-parallel training — and the activation exchanges of [[Tensor Parallelism]] run far faster, raising the parallel efficiency achievable when scaling a model across multiple devices.

- ### Key aspects
  - **Point-to-point links** — NVLink establishes direct lanes between GPU pairs, each lane carrying high bidirectional bandwidth that aggregates across multiple links per device.
  - **Memory coherence and pooling** — Coherent access allows GPUs to share memory address spaces, enabling unified memory models and reducing explicit copy overhead through [[CUDA]].
  - **NVSwitch fabric** — In dense multi-GPU servers, NVSwitch chips connect every GPU to every other at full bandwidth, eliminating topology hotspots for collective communication.
  - **Bandwidth versus PCIe** — The defining advantage is throughput: NVLink supplies several-fold the [[Bandwidth]] of PCIe, which directly improves scaling for communication-bound workloads.
  - **Low latency** — Beyond raw bandwidth, reduced [[Latency]] for small transfers benefits the frequent synchronisation steps in [[Distributed Training]].

- ### Applications
  - **Large model training** — NVLink underpins [[Model Parallelism]] and [[Tensor Parallelism]], where layers or tensors are split across GPUs that must exchange activations and gradients every step.
  - **Distributed training** — Synchronous data-parallel [[Distributed Training]] relies on fast all-reduce, accelerated substantially by the interconnect.
  - **High-performance computing** — Scientific and simulation workloads in [[High Performance Computing]] use NVLink-connected GPUs for tightly coupled parallel computation.
  - **Inference serving** — Serving very large models that exceed a single GPU's memory uses NVLink to shard the model with acceptable communication overhead.
  - **Unified memory workflows** — Coherent memory access via [[CUDA]] simplifies programming for applications that span multiple GPUs.

- ### Relationships
  - subClassOf:: [[GPU Computing]]
  - dependsOn:: [[GPU]]
  - hasPart:: [[Bandwidth]]
  - requires:: [[GPU Computing]]
  - requires:: [[CUDA]]
  - uses:: [[Bandwidth]]
  - enables:: [[Model Parallelism]]
  - enables:: [[Tensor Parallelism]]
  - enables:: [[Distributed Training]]
  - supports:: [[High Performance Computing]]
  - relatedTo:: [[Latency]]
  - bridgesTo:: [[Distributed Training]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
