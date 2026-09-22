public:: true

# Megatron-LM
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:megatron-lm",
  "@type": "Page",
  "title": "Megatron-LM",
  "vc:slug": "megatron-lm",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:megatron-lm",
  "@type": "Class",
  "label": "Megatron-LM",
  "definition": "Megatron-LM is an open-source framework developed by NVIDIA for training very large transformer language models efficiently across many GPUs. It pioneered intra-layer tensor model parallelism, splitting individual weight matrices and attention heads across devices, and combines this with pipeline and data parallelism to scale to models with hundreds of billions of parameters. The framework provides optimised kernels and communication patterns that minimise the overhead of synchronising gradients and activations between accelerators.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-training",
      "label": "Distributed Training"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:pipeline-parallelism",
        "label": "Pipeline Parallelism"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:nvidia-gpu",
        "label": "NVIDIA GPU"
      },
      {
        "@id": "urn:ngm:class:flash-attention",
        "label": "Flash Attention"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:gradient-accumulation",
        "label": "Gradient Accumulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed-Precision Training"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:deep-speed",
        "label": "DeepSpeed"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
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
  - Megatron-LM is an open-source framework developed by NVIDIA for training very large transformer language models efficiently across many GPUs. It pioneered intra-layer tensor model parallelism, splitting individual weight matrices and attention heads across devices, and combines this with pipeline and data parallelism to scale to models with hundreds of billions of parameters. The framework provides optimised kernels and communication patterns that minimise the overhead of synchronising gradients and activations between accelerators.
  - Related concepts: [[Distributed Training]] [[Tensor Parallelism]] [[Model Parallelism]] [[Large Language Model]] [[Transformer Architecture]]

- ### Overview
  - Megatron-LM addresses the core obstacle in training frontier language models: a single accelerator cannot hold the parameters, optimiser state, and activations of a model with tens or hundreds of billions of weights. It decomposes the computation along several orthogonal axes so that the work fits across a cluster while keeping device utilisation high.

- ### Mechanisms
  - Tensor (intra-layer) parallelism partitions the weight matrices of the multi-layer perceptron and self-attention blocks column-wise and row-wise, so each GPU holds a slice and the results are combined with a single all-reduce per layer.
  - Pipeline parallelism assigns contiguous groups of transformer layers to different devices and streams micro-batches through them, overlapping forward and backward passes to reduce idle bubbles.
  - Data parallelism replicates the partitioned model across groups of devices and averages gradients, multiplying the effective batch size.
  - Fused CUDA kernels, sequence parallelism, and selective activation recomputation cut memory traffic and recomputation cost.

- ### Applications
  - Pre-training of large generative language models in research and industry.
  - A reference architecture and codebase reused by many downstream training stacks and libraries.
  - Benchmarking GPU clusters and interconnect performance at scale.

- ### Relationships
  - implements:: [[Tensor Parallelism]]
  - implements:: [[Model Parallelism]]
  - uses:: [[Pipeline Parallelism]]
  - uses:: [[CUDA]]
  - uses:: [[NVIDIA GPU]]
  - uses:: [[Flash Attention]]
  - enables:: [[Large Language Model]]
  - requires:: [[GPU Computing]]
  - requires:: [[Gradient Accumulation]]
  - depends-on:: [[Transformer Architecture]]
  - supports:: [[Mixed-Precision Training]]
  - contrasts-with:: [[DeepSpeed]]
  - related-to:: [[Distributed Training]]
  - related-to:: [[Parallel Computing]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
