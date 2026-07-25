public:: true

# AI Accelerator
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ai-accelerator", "@type":"Page", "title":"AI Accelerator", "vc:slug":"ai-accelerator", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-accelerator",
  "@type": "Class",
  "label": "AI Accelerator",
  "definition": "An AI accelerator is a class of specialised hardware designed to speed up machine learning workloads, particularly the dense linear algebra of neural network training and inference. Common forms include GPUs, tensor processing units, neural processing units, and custom application-specific integrated circuits that exploit massive parallelism, reduced-precision arithmetic, and high-bandwidth memory. By offloading matrix and tensor operations from general-purpose CPUs, AI accelerators deliver order-of-magnitude gains in throughput and energy efficiency for deep learning.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:hardware-accelerator", "label": "Hardware Accelerator" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:high-bandwidth-memory", "label": "High-Bandwidth Memory" },
      { "@id": "urn:ngm:class:systolic-array", "label": "Systolic Array" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure" },
      { "@id": "urn:ngm:class:gpu-cluster", "label": "GPU Cluster" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:deep-learning", "label": "Deep Learning" },
      { "@id": "urn:ngm:class:neural-network", "label": "Neural Network" },
      { "@id": "urn:ngm:class:distributed-training", "label": "Distributed Training" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:matrix-multiplication", "label": "Matrix Multiplication" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:data-center", "label": "Data Center" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:gpu", "label": "GPU" },
      { "@id": "urn:ngm:class:tpu", "label": "TPU" },
      { "@id": "urn:ngm:class:nvidia-corporation", "label": "NVIDIA Corporation" },
      { "@id": "urn:ngm:class:nvlink", "label": "NVLink" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure" },
      { "@id": "urn:ngm:class:machine-learning", "label": "Machine Learning" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - An AI accelerator is purpose-built [[Hardware Accelerator]] silicon that speeds up the dense linear algebra at the heart of [[Deep Learning]] and [[Neural Network]] workloads.
  - It exploits parallelism, reduced-precision arithmetic, and [[High-Bandwidth Memory]] to outperform general-purpose CPUs on tensor operations.
  - Common embodiments include the [[GPU]], the [[TPU]], and custom inference chips deployed across [[Compute Infrastructure]].
- ### Overview
  - The economics of training large models are dominated by the floating-point throughput, memory bandwidth, and interconnect efficiency of the underlying accelerators.
  - Modern accelerators pack thousands of arithmetic units, on-package high-bandwidth memory, and dedicated tensor cores that fuse multiply-accumulate operations at low precision.
  - They are typically aggregated into nodes and racks to form a [[GPU Cluster]], then exposed to users through [[Cloud Computing]] platforms.
- ### Key aspects
  - Massively parallel arithmetic units optimised for matrix and tensor maths.
  - Reduced-precision formats (FP16, BF16, FP8, INT8) that trade numerical range for throughput and energy efficiency.
  - On-package [[High-Bandwidth Memory]] to keep arithmetic units fed without stalling.
  - High-speed interconnects such as [[NVLink]] for multi-device scaling.
- ### Mechanisms
  - Systolic and dataflow architectures stream operands through a [[Systolic Array]] to maximise data reuse.
  - Operator fusion and graph compilation reduce memory traffic between layers.
  - Sparsity support and quantisation increase effective throughput per watt.
- ### Applications
  - Training and serving large language models and vision models at scale.
  - Real-time inference at the edge and in [[Data Center]] deployments.
  - Scientific computing and simulation workloads expressed as dense tensor algebra.
- ### Relationships
  - subClassOf:: [[Hardware Accelerator]]
  - hasPart:: [[High-Bandwidth Memory]]
  - hasPart:: [[Systolic Array]]
  - partOf:: [[Compute Infrastructure]]
  - partOf:: [[GPU Cluster]]
  - enables:: [[Deep Learning]]
  - enables:: [[Neural Network]]
  - enables:: [[Distributed Training]]
  - uses:: [[Matrix Multiplication]]
  - requires:: [[Data Center]]
  - supports:: [[Cloud Computing]]
  - relatedTo:: [[GPU]]
  - relatedTo:: [[TPU]]
  - relatedTo:: [[NVIDIA Corporation]]
  - relatedTo:: [[NVLink]]
  - bridgesTo:: [[Machine Learning]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
