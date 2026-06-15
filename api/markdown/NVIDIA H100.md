public:: true

# NVIDIA H100
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2a8c7b07bb878e29ad81cd59f3f075a4515258269916dfb901582975235ed6e",
  "@type": "Page",
  "vc:slug": "nvidia-h-100",
  "title": "NVIDIA H100",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu-cluster",
      "vc:label": "GPU Cluster"
    },
    {
      "@id": "urn:visionflow:linked:gpu-computing",
      "vc:label": "GPU Computing"
    },
    {
      "@id": "urn:visionflow:linked:nvidia",
      "vc:label": "NVIDIA"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NVIDIA H100"
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
  "@id": "urn:ngm:class:nvidia-corporation-h-100",
  "@type": "Class",
  "label": "NVIDIA H100",
  "definition": "The NVIDIA H100 is a data-centre GPU accelerator built on the Hopper microarchitecture (GH100 die), designed for AI model training, large-scale inference, and high-performance computing workloads. It introduced a dedicated Transformer Engine with FP8 mixed-precision support, fourth-generation NVLink interconnect, and high-bandwidth HBM3 memory, enabling substantially faster training of large language models and other deep-learning workloads compared to its predecessor, the A100. The H100 is manufactured on TSMC N4 process technology and is available in PCIe and SXM5 form factors, the latter optimised for dense multi-GPU server nodes. Its combination of raw compute throughput and high-speed GPU-to-GPU interconnect made it the de-facto standard accelerator for generative AI infrastructure from 2023 onwards.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gpu",
      "label": "GPU"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:nvlink",
        "label": "NVLink"
      },
      {
        "@id": "urn:ngm:class:high-bandwidth-memory",
        "label": "High Bandwidth Memory"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:gpu-cluster",
        "label": "GPU Cluster"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:high-bandwidth-memory",
        "label": "High Bandwidth Memory"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model-training",
        "label": "Large Language Model Training"
      },
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:ai-inference",
        "label": "AI Inference"
      },
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed Precision Training"
      },
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:infiniband",
        "label": "InfiniBand"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tpu",
        "label": "Google TPU v4"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "AI Data Centre"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nvidia-corporation",
        "label": "NVIDIA Corporation"
      },
      {
        "@id": "urn:ngm:class:ai-accelerator",
        "label": "AI Accelerator"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:h100-gpu",
      "label": "H100 GPU"
    },
    {
      "@id": "urn:ngm:class:hopper-h100",
      "label": "Hopper H100"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:nvidia-h-100:17e97e92d5b7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2a8c7b07bb878e29ad81cd59f3f075a4515258269916dfb901582975235ed6e"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU Cluster]]",
      "resolved": "urn:visionflow:linked:gpu-cluster",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPU Computing]]",
      "resolved": "urn:visionflow:linked:gpu-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NVIDIA Corporation]]",
      "resolved": "urn:visionflow:linked:nvidia",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
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
  - The NVIDIA H100 is a data-centre [[GPU]] accelerator built on the [[Hopper Architecture]] (GH100 die), purpose-built for [[AI Model Training]], large-scale [[AI Inference]], and [[High-Performance Computing]]. It was the first commercially available GPU to introduce a dedicated [[Transformer Engine]] with [[FP8 Precision]] support, dramatically accelerating [[Large Language Model Training]] and other [[Deep Learning]] workloads. The H100 succeeded the [[NVIDIA A100]] and became the dominant accelerator for [[Generative AI]] infrastructure from 2023 onwards, with demand substantially outstripping supply during the early generative AI boom.

- ### Overview
  - The NVIDIA H100 was announced in March 2022 at NVIDIA's GTC conference and became widely available in 2023. It is manufactured on TSMC's N4 (4 nm class) process node and contains approximately 80 billion transistors on the GH100 die.
  - Two principal form factors exist:
    - **SXM5** — the high-performance variant using NVIDIA's proprietary SXM connector, enabling fourth-generation [[NVLink]] at 900 GB/s GPU-to-GPU bandwidth and [[NVSwitch]] for fully connected 8-GPU nodes (as in the [[DGX H100]] system).
    - **PCIe** — a standard PCIe 5.0 card variant for broader server compatibility, with lower peak interconnect bandwidth.
  - The H100 replaced the [[NVIDIA A100]] as NVIDIA's flagship data-centre GPU, delivering roughly 3× improvement in [[AI Training]] throughput for [[Transformer]] architectures due to the new [[Transformer Engine]] and FP8 support.
  - The chip is at the centre of the modern [[AI Data Centre]] build-out, used by hyperscalers (Microsoft Azure, Amazon Web Services, Google Cloud) and AI labs (OpenAI, Anthropic, Meta AI) alike.

- ### Key Components
  - **[[Hopper Architecture]]** — the seventh-generation NVIDIA data-centre GPU microarchitecture, named after computing pioneer Grace Hopper. Introduced new streaming multiprocessors (SMs) with fourth-generation [[Tensor Core]] units.
  - **[[Transformer Engine]]** — a hardware unit that dynamically selects between FP8 and FP16/BF16 precision on a per-layer basis during training, increasing throughput for [[Attention Mechanism]] and [[Feed-Forward Network]] layers in [[Transformer]] models without accuracy loss.
  - **[[FP8 Precision]]** — an 8-bit floating-point format (two variants: E4M3 and E5M2) introduced with Hopper, enabling higher compute density than FP16 or BF16 with appropriate [[Mixed Precision Training]] techniques.
  - **[[High-Bandwidth Memory]] (HBM3)** — up to 80 GB HBM3 or HBM2e depending on configuration, providing over 3 TB/s memory bandwidth on the SXM5 variant, essential for fitting large [[Neural Network]] parameter sets on-device.
  - **[[NVLink]] 4th Generation** — enables 900 GB/s bidirectional GPU-to-GPU bandwidth within a node, compared to 600 GB/s on [[NVIDIA A100]]. Critical for [[Model Parallelism]] and [[Pipeline Parallelism]] in distributed training.
  - **[[NVSwitch]]** — NVIDIA's dedicated switch ASIC enabling all-to-all connectivity among up to 8 GPUs in a node, used in the [[DGX H100]] and HGX H100 platforms.
  - **[[Tensor Core]] (4th generation)** — support FP8, FP16, BF16, TF32, INT8, and INT4 precisions, providing peak throughput of approximately 3,958 TFLOPS for FP8 tensor operations on the SXM5.
  - **Confidential Computing** — hardware-isolated TEE (trusted execution environment) support for secure AI workloads and multi-tenant data-centre scenarios.
  - **[[PCIe 5]]** interface — on the PCIe variant, providing up to 128 GB/s host-device bandwidth.

- ### Applications and Use Cases
  - **[[Large Language Model Training]]** — training runs for models such as GPT-4, Llama 3, Falcon, and Gemini have been reported to use large clusters of H100s (hundreds to tens of thousands of GPUs).
  - **[[AI Inference]]** — H100 is used for serving large models via frameworks such as [[TensorRT-LLM]], vLLM, and [[Triton Inference Server]], offering high throughput per chip for latency-sensitive serving.
  - **[[Scientific Computing]]** — used in climate modelling, molecular dynamics (e.g., [[GROMACS]], [[AMBER]]), drug discovery ([[AlphaFold]] inference), and computational fluid dynamics.
  - **[[High-Performance Computing]] (HPC)** — deployed in petascale and exascale-class supercomputers (e.g., Perlmutter at NERSC, Eos at NVIDIA) alongside [[InfiniBand]] or [[Ethernet]] networking.
  - **[[Multimodal AI]]** — training and serving of multimodal [[Foundation Model]]s combining vision encoders and language decoders.
  - **[[Recommender System]]s** — large-scale embedding lookups and ranking models in advertising and e-commerce.
  - **[[Autonomous Driving]]** — simulation workloads for training [[Autonomous Vehicle]] perception and planning models.
  - **[[Digital Twin]]** — large-scale simulation workloads in NVIDIA Omniverse and industrial digital twins.

- ### Relationships
  - partOf:: [[GPU Cluster]], [[DGX H100]]
  - hasPart:: [[Transformer Engine]], [[NVLink]], [[High-Bandwidth Memory]], [[NVSwitch]], [[Tensor Core]]
  - requires:: [[CUDA]], [[High-Bandwidth Memory]]
  - enables:: [[Large Language Model Training]], [[GPU Computing]], [[AI Inference]], [[High-Performance Computing]]
  - dependsOn:: [[Hopper Architecture]], [[CUDA]], [[NVIDIA Software Stack]]
  - implements:: [[FP8 Precision]], [[Mixed Precision Training]], [[Tensor Core]]
  - uses:: [[PCIe 5]], [[InfiniBand]]
  - contrastsWith:: [[NVIDIA A100]], [[AMD Instinct MI300X]], [[Google TPU v4]]
  - bridges-to:: [[Generative AI]], [[Foundation Model]], [[AI Data Centre]]
  - relatedTo:: [[NVIDIA H200]], [[NVIDIA Corporation]], [[AI Accelerator]]

- ### Standards and Context
  - **[[CUDA]]** — NVIDIA's parallel computing platform and API is the primary programming model for the H100; most major [[Deep Learning Framework]]s (PyTorch, JAX, TensorFlow) target CUDA.
  - **[[NVLink]] specification** — NVIDIA's proprietary multi-GPU interconnect standard, now in its fourth generation on H100, used within nodes alongside [[PCIe]] for host connectivity.
  - **[[InfiniBand]]** — the dominant inter-node fabric in H100 clusters (HDR/NDR InfiniBand), often supplied by Mellanox/NVIDIA ConnectX adapters.
  - **MLPerf Benchmarks** — the H100 is a key target in [[MLPerf Training]] and [[MLPerf Inference]] industry benchmarks, used to compare performance against competitor accelerators from AMD, Intel Habana, and Google.
  - **Export Controls** — the H100 and its successor H800 (a China-market variant with reduced interconnect bandwidth) have been subject to US Export Administration Regulations (EAR) restricting sale to certain end-users and countries, reflecting [[AI Governance]] policy dimensions.
  - **TSMC N4 Process** — manufactured on TSMC's 4 nm class FinFET node; the large die size (814 mm²) required TSMC's advanced packaging and yield management.
  - **JEDEC HBM3 Standard** — the H100 SXM5 uses HBM3 memory conforming to the JEDEC JESD238 standard, providing up to 80 GB capacity with over 3 TB/s bandwidth.

- ### Competitive Landscape
  - The H100 competes primarily with [[AMD Instinct MI300X]], which offers larger on-package HBM3 capacity (192 GB) at the cost of different ecosystem maturity. [[Google TPU v4]] and its successors are used internally at Google but are not commercially sold. [[Intel Gaudi 2]] (Habana) is positioned as a lower-cost alternative for inference.
  - NVIDIA's successor, [[NVIDIA H200]], uses the same GH100 die but with HBM3e memory, increasing bandwidth and capacity with no architectural redesign. The [[NVIDIA Blackwell]] (B100/B200) generation, released in 2025, succeeds the H100 with a new die and architecture.
  - The H100's software ecosystem advantage via [[CUDA]], [[cuDNN]], and [[NCCL]] (NVIDIA Collective Communications Library) for distributed training remains a significant competitive moat compared to alternatives requiring software porting.

- ### Provenance
  - sources:: NVIDIA Hopper Architecture whitepaper; NVIDIA product brief for H100 SXM5 and PCIe; MLCommons MLPerf Training v3 results; US BIS export control press releases
  - updated:: 2026-06-13
