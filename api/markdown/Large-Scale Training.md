public:: true

# Large-Scale Training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3a5b05aa2af6998eadae4cc9b9b662b3019ba3a6b40d04c744260cbef094781",
  "@type": "Page",
  "vc:slug": "large-scale-training",
  "title": "Large-Scale Training",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:model-training",
      "vc:label": "Model Training"
    },
    {
      "@id": "urn:visionflow:linked:data-parallelism",
      "vc:label": "Data Parallelism"
    },
    {
      "@id": "urn:visionflow:linked:foundation-model",
      "vc:label": "Foundation Model"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:large-scale-training",
  "@type": "Class",
  "label": "Large-Scale Training",
  "definition": "Machine learning training conducted at a scale that exceeds the capacity of a single accelerator, requiring workloads to be distributed across many GPUs or nodes. Large-scale training covers the full range of distributed regimes—pretraining, large fine-tuning runs, and reinforcement learning from feedback—and rests on parallelism strategies (data, tensor, pipeline, and expert parallelism), high-bandwidth interconnects, checkpointing, and fault tolerance to keep thousands of accelerators productively synchronised for days or weeks.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:model-training",
    "label": "Model Training"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-cluster",
        "label": "GPU Cluster"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Machine learning training conducted at a scale that exceeds the capacity of a single accelerator, requiring workloads to be distributed across many GPUs or nodes. Large-scale training covers the full range of distributed regimes—pretraining, large fine-tuning runs, and reinforcement learning from feedback—and rests on parallelism strategies (data, tensor, pipeline, and expert parallelism), high-bandwidth interconnects, checkpointing, and fault tolerance to keep thousands of accelerators productively synchronised for days or weeks."

- ### Semantic Classification
  - owl-class:: machine-learning:LargeScaleTraining
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Model Training]]
  - uses:: [[Data Parallelism]]
  - requires:: [[GPU Cluster]]
  - enables:: [[Foundation Model]]

- ### Content

  ## Definition

  **Large-scale training** is model training that has outgrown a single machine. The threshold is practical rather than numeric: once a model's parameters, optimiser state, or data throughput requirements exceed what one accelerator can hold or process in acceptable time, training becomes a distributed-systems problem as much as a learning problem. The term is broader than pretraining alone—it equally covers multi-node fine-tuning of existing models, reinforcement learning from human or AI feedback across fleets of rollout workers, and large supervised runs in vision, speech, and science.

  The workhorse strategy is [[Data Parallelism]]: replicate the model across workers, feed each a different shard of the batch, and average gradients every step. It is what makes large-scale training *possible* at all, but it stops sufficing once a model no longer fits on one device. Production systems therefore compose it with [[Model Parallelism]] in its modern forms—tensor parallelism splitting individual weight matrices, pipeline parallelism splitting layers into stages, expert parallelism routing tokens across mixture-of-experts shards—and with sharded optimisers (ZeRO/FSDP) that partition parameters, gradients, and optimiser state so nothing is redundantly replicated. Frameworks such as Megatron-LM, DeepSpeed, JAX with its parallelism primitives, and PyTorch FSDP package these compositions.

  At this scale, systems concerns dominate. A [[GPU Cluster]] of thousands of accelerators bound by NVLink and InfiniBand or optical fabrics must sustain collective communications (all-reduce, all-to-all) without stalling compute; a single slow node drags the whole synchronous step. Hardware fails constantly at fleet scale, so frequent distributed checkpointing, elastic restart, and straggler mitigation are not optional extras but the difference between a run that finishes and one that never converges.

  ## Current Landscape

  Large-scale training is the industrial process behind every [[Foundation Model]]. Frontier runs now span tens of thousands of accelerators for weeks, with compute budgets measured in 10²⁵–10²⁶ FLOPs and costs in the tens to hundreds of millions of dollars; scaling laws relating loss to compute, parameters, and data (Kaplan 2020, Chinchilla 2022) still guide how those budgets are split. Efficiency work concentrates on lower-precision arithmetic (BF16 and now FP8), communication-computation overlap, and mixture-of-experts architectures that grow capacity faster than per-token cost.

  Two shifts define the current period. First, post-training has become large-scale in its own right: reinforcement learning pipelines with distributed rollout generation and reward evaluation can rival pretraining infrastructure in complexity. Second, energy and siting constraints—power delivery, cooling, and grid access for gigawatt-class campuses—have joined chip supply as the binding limits on scale, pushing operators towards multi-datacentre training runs coordinated over wide-area links, a regime that reopens old distributed-systems questions at unprecedented size.

  Recent developments sharpen the picture:

  - **Cluster scale**: leading frontier clusters reached ~100,000 GPUs during 2024, with 300,000+ GPU deployments planned for 2025; Google, OpenAI and Anthropic are each spreading single training runs across multiple datacentre campuses (SemiAnalysis, 2024).
  - **Gigawatt-class campuses**: multiple operators are assembling roughly 1 GW of AI-chip capacity across clustered sites through 2025–2026, making power delivery and cooling first-order constraints alongside chip supply.
  - **Low-precision training is standard**: FP8 (and increasingly FP4/microscaling MX formats) now drive frontier runs — for example FP8 training of DeepSeek-V3-scale mixture-of-experts models yields roughly 10–25% end-to-end speed-ups and cuts activation memory, while master weights are typically kept in FP32.
  - **Mixture-of-experts hardware**: rack-scale systems such as NVIDIA's GB200 NVL72 (72 Blackwell GPUs acting as one, ~1.4 exaFLOPS) are built specifically to scale trillion-parameter MoE models with sparse activation.

  **Sources**:
  - https://newsletter.semianalysis.com/p/multi-datacenter-training-openais
  - https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/
