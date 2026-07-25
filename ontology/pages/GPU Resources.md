public:: true

# GPU Resources
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gpu-resources",
  "@type": "Page",
  "vc:slug": "gpu-resources",
  "title": "GPU Resources",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-resources",
  "@type": "Class",
  "label": "GPU Resources",
  "definition": "GPU resources refer to the pool of graphics processing unit capacity — including VRAM, streaming multiprocessors, tensor cores, and associated interconnect bandwidth — that is provisioned, allocated, and managed as a computational resource for parallel workloads such as AI model training and inference, scientific simulation, computer graphics rendering, and high-performance computing. In cloud and data centre contexts, GPU resources are typically accessed through virtualisation or direct hardware passthrough, managed by schedulers that partition capacity across competing workloads and billed on per-hour or per-token consumption models.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:compute-resources",
      "label": "Compute Resources"
    },
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:large-scale-compute",
        "label": "Large-Scale Compute"
      },
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:edge-ai-accelerator",
        "label": "Edge AI Accelerator"
      },
      {
        "@id": "urn:ngm:class:inference-hardware",
        "label": "Inference Hardware"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[GPU Resources]] are the pooled compute capacity of graphics processing units — encompassing VRAM, tensor cores, and interconnect bandwidth — managed as schedulable [[Compute Resources]] for parallel AI training, inference, scientific simulation, and [[Computer Graphics]] workloads, typically provisioned through cloud virtualisation or on-premises cluster management with [[CUDA]]-compatible programming interfaces.

- ### Relationships
  - GPU resources form the computational substrate for modern AI development: [[CUDA]] provides the primary programming model for NVIDIA-based resources, [[Hardware Acceleration]] enables tensor operations to run orders of magnitude faster than CPU execution, and [[Compute Shader]] interfaces expose the same resources for graphics workloads. Within data centres, GPU resources aggregate into [[Large-Scale Compute]] clusters connected by NVLink or InfiniBand, constituting the [[Compute Infrastructure]] that hyperscalers and AI labs depend on. At the edge, [[Edge AI Accelerator]] devices deliver constrained GPU resources for on-device [[Inference Hardware]] applications.

- ### Content
  - GPUs originated as fixed-function graphics accelerators in the 1990s, designed to offload rasterisation and texture mapping from CPUs for display rendering. NVIDIA's GeForce 256 (1999) introduced hardware transform and lighting, and the subsequent decade saw GPUs evolve into programmable shader pipelines. The recognition that the same massively parallel floating-point hardware could accelerate non-graphics workloads — dubbed GPGPU (general-purpose GPU computing) — emerged around 2006-2007, with NVIDIA's CUDA SDK (2007) providing the first broadly accessible programmable GPU computing platform.

  - The hardware architecture of modern AI-oriented GPUs consists of thousands of CUDA cores or equivalent shader units, specialised tensor cores that execute mixed-precision matrix operations fundamental to neural network training (e.g., NVIDIA Ampere A100's 312 TFLOPS in TF32), high-bandwidth memory (HBM2e/3) stacked directly on the GPU die with up to 2 TB/s bandwidth, and NVLink/NVSwitch interconnects enabling multi-GPU configurations with near-native bandwidth. Clusters of 1,000-10,000 GPUs connected by InfiniBand networks form the supercomputers that underpin frontier AI model training runs.

  - GPU resources have become the defining geopolitical and commercial resource of the AI era. Export controls implemented by the US Bureau of Industry and Security from 2022 onwards restrict the export of advanced GPU hardware (NVIDIA A100, H100, B100 series) to specific countries, directly shaping which nations and organisations can develop frontier AI capabilities. Cloud GPU rental pricing — ranging from ~$2/hour for older A100s to $30+/hour for H100/H200 clusters — represents the primary variable cost in AI startup economics. GPU supply constraints drove order backlogs of 6-12 months for H100 clusters through 2023-2024.

  - In 2024-2025, the GPU resources landscape is evolving rapidly. NVIDIA's Blackwell architecture (B100/B200, GB200 NVL72 rack units) provides roughly 4x the FP8 training throughput of Hopper, while AMD's MI300X is establishing a credible second-source position for training clusters. Intel Gaudi and Google TPUs represent alternative architectures for inference workloads. Disaggregated GPU resource management — separating prefill and decode phases of LLM inference across different GPU pool tiers — is emerging as a resource optimisation technique. Simultaneously, GPU scarcity is driving interest in efficient model architectures (MoE, quantisation) that reduce per-token compute requirements.

