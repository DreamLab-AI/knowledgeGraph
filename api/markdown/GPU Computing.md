public:: true

# GPU Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gpu-computing",
  "@type": "Page",
  "vc:slug": "gpu-computing",
  "title": "GPU Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-computing",
  "@type": "Class",
  "label": "GPU Computing",
  "definition": "GPU Computing is the use of graphics processing units as massively parallel co-processors to accelerate general-purpose computational workloads beyond rendering. Modern GPUs contain thousands of shader cores organised into streaming multiprocessors capable of executing thousands of threads simultaneously, making them ideal for data-parallel algorithms in deep learning training, scientific simulation, and signal processing. Frameworks such as CUDA and OpenCL expose this parallelism to application developers. GPU computing has become the primary driver of progress in large-scale machine learning, enabling the training of models with hundreds of billions of parameters.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cuda", "label": "CUDA"},
      {"@id": "urn:ngm:class:parallel-processing", "label": "Parallel Processing"},
      {"@id": "urn:ngm:class:compute-shader", "label": "Compute Shader"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"},
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:tensor-processing-unit", "label": "Tensor Processing Unit"},
      {"@id": "urn:ngm:class:inference-hardware", "label": "Inference Hardware"},
      {"@id": "urn:ngm:class:render-pipeline", "label": "Render Pipeline"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[GPU Computing]] is the application of graphics processing units as massively parallel co-processors to accelerate general-purpose computation, most notably [[Deep Learning]] training and [[High-Performance Computing]] workloads, through frameworks such as [[CUDA]] and [[Parallel Processing]] programming models.
- ### Relationships
  - GPU Computing is a specialisation of [[Hardware Acceleration]]. It exposes parallelism through [[CUDA]] programming models and [[Compute Shader]] pipelines. It enables [[Deep Learning]], [[Distributed Training]], and [[High-Performance Computing]]. Closely related to [[GPU Compute]] (the abstract capability), [[Tensor Processing Unit]] (domain-specific variant), and [[Inference Hardware]] for deployment. The [[Render Pipeline]] represents the original purpose from which general-purpose compute capabilities evolved.
- ### Content
  - The GPU's origins lie in the demand for real-time 3D rendering in consumer gaming. The fixed-function graphics pipeline of the 1990s gave way to programmable shader architectures in the early 2000s, and NVIDIA's 2006 release of the CUDA programming model unlocked these programmable units for arbitrary data-parallel computation. This transition from graphics-only to general-purpose GPU (GPGPU) computing marked the beginning of the modern era of accelerated computing.

  - Deep learning training dominated GPU compute demand through the 2010s. The matrix-matrix multiplication operations at the heart of neural network training—particularly the batched GEMM operations in transformer attention layers—map almost perfectly onto the data-parallel execution model of GPU warps. NVIDIA's Volta and subsequent Ampere and Hopper architectures introduced dedicated Tensor Cores that accelerate mixed-precision matrix operations, delivering an order-of-magnitude throughput improvement for AI workloads over general-purpose CUDA cores.

  - Distributed training across GPU clusters is now standard practice for frontier model development. Frameworks such as PyTorch's Distributed Data Parallel, Megatron-LM, and DeepSpeed implement model parallelism, tensor parallelism, and pipeline parallelism strategies that partition model parameters and activations across hundreds or thousands of GPUs connected by high-bandwidth interconnects such as NVLink and InfiniBand. Achieving near-linear scaling efficiency in these configurations is a primary research challenge.

  - Beyond AI, GPU computing serves scientific computing domains including molecular dynamics, computational fluid dynamics, finite-element analysis, and climate model acceleration. The convergence of AI and scientific computing workloads on shared GPU infrastructure is driving the development of unified programming abstractions, auto-tuning compilers such as Triton and XLA, and cloud GPU marketplaces that democratise access to previously institution-scale resources.
