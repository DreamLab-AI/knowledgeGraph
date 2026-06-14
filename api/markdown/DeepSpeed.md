public:: true

# DeepSpeed
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:deep-speed",
  "@type": "Page",
  "vc:slug": "deep-speed",
  "title": "DeepSpeed",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deep-speed",
  "@type": "Class",
  "label": "DeepSpeed",
  "definition": "DeepSpeed is an open-source deep learning optimisation library developed by Microsoft Research that enables training and inference of extremely large neural network models through ZeRO (Zero Redundancy Optimizer) memory partitioning, pipeline parallelism, and mixed-precision arithmetic. It reduces the per-device memory footprint of model states by partitioning optimiser states, gradients, and parameters across data-parallel devices.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:mixed-precision-training", "label": "Mixed Precision Training"},
      {"@id": "urn:ngm:class:gradient-checkpointing", "label": "Gradient Checkpointing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-model-training", "label": "Large Language Model Training"},
      {"@id": "urn:ngm:class:model-parallelism", "label": "Model Parallelism"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:pipeline-parallelism", "label": "Pipeline Parallelism"},
      {"@id": "urn:ngm:class:hugging-face-accelerate", "label": "Hugging Face Accelerate"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[DeepSpeed]] is Microsoft's open-source deep learning optimisation library that enables training of multi-billion parameter models by implementing the ZeRO optimizer, which partitions optimiser states, gradients, and model parameters across [[Distributed Training|distributed]] devices to eliminate memory redundancy.

- ### Relationships
  - DeepSpeed uses [[Mixed-Precision Training]] and [[Gradient Checkpointing]] to minimise memory consumption during training. It enables [[Large Language Model Training]] at scales otherwise infeasible on commodity hardware and implements [[Model Parallelism]] via its pipeline and tensor parallelism engines. It integrates with [[Hugging Face Accelerate]] and complements [[Pipeline Parallelism]] strategies.

- ### Content
  - DeepSpeed was released by Microsoft Research in 2020, originating from work on training the Megatron-LM and Turing-NLG language models. The core innovation, ZeRO (Zero Redundancy Optimizer), was introduced in the accompanying paper by Rajbhandari et al. ZeRO observes that in standard data-parallel training each device holds a full copy of optimiser states, gradients, and parameters, which is massively redundant. ZeRO eliminates this by partitioning these components across devices, reducing per-device memory from O(N) to O(N/d) for d devices.

  - DeepSpeed implements three stages of ZeRO. Stage 1 partitions optimiser states only; Stage 2 adds gradient partitioning; Stage 3 additionally partitions model parameters, enabling models that exceed the memory capacity of any single device. ZeRO-Infinity extends this to NVMe storage for models of unbounded size. Beyond ZeRO, DeepSpeed provides a pipeline parallelism engine, tensor parallelism, CPU and NVMe offloading, sparse attention kernels, and kernel fusion optimisations for transformer layers.

  - DeepSpeed is used in the training of foundational models including GPT-NeoX, BLOOM, StarCoder, and Falcon. Its inference engine provides quantisation, weight streaming, and kernel optimisations enabling throughput-efficient deployment of billion-parameter models on single nodes. Integration with Hugging Face Transformers and the broader Python ecosystem makes it accessible to practitioners without specialised distributed systems expertise.

  - In 2024-2025, DeepSpeed continues to co-evolve with the frontier of model scale. DeepSpeed-FastGen offers continuous batching and dynamic split-fuse for improved inference throughput. The project is actively maintained with support for AMD ROCm and Intel Gaudi accelerators alongside NVIDIA CUDA, reflecting the industry push towards hardware diversity. Microsoft uses DeepSpeed internally for Azure AI training infrastructure, and it remains one of the two dominant distributed training frameworks alongside Google's JAX/XLA ecosystem.

