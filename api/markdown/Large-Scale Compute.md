public:: true
alias:: Large Scale Compute

# Large-Scale Compute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:large-scale-compute",
  "@type": "Page",
  "vc:slug": "large-scale-compute",
  "title": "Large-Scale Compute",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:large-scale-compute",
  "@type": "Class",
  "label": "Large-Scale Compute",
  "definition": "Large-scale compute refers to the aggregation of massive computational resources — spanning thousands to hundreds of thousands of processors, accelerators, and memory modules — into coordinated systems capable of executing workloads at magnitudes that are impractical for single machines or small clusters, including the training of frontier AI models, climate simulation, drug discovery, and national security applications. It encompasses the physical infrastructure (data centres, power supply, cooling), interconnect fabrics (InfiniBand, NVLink, custom optical networks), software orchestration layers (job schedulers, distributed training frameworks), and the operational expertise required to sustain utilisation and reliability at exascale levels.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computational-infrastructure", "label": "Computational Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"},
      {"@id": "urn:ngm:class:machine-learning-infrastructure", "label": "Machine Learning Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"},
      {"@id": "urn:ngm:class:tensor-processing-unit", "label": "Tensor Processing Unit"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Large-Scale Compute]] is the coordinated aggregation of thousands to hundreds of thousands of processors and accelerators — including [[GPU Compute]] clusters and [[Tensor Processing Unit]] arrays — into systems capable of executing workloads such as frontier AI [[Model Training]] and climate simulation at magnitudes requiring [[Distributed Computing]] frameworks and custom interconnect fabrics.

- ### Relationships
  - [[Large-Scale Compute]] is a specialisation of [[Computational Infrastructure]] that emphasises extreme scale. It is the practical realisation of [[High-Performance Computing]] principles applied to modern AI and scientific workloads. [[GPU Compute]] and [[Tensor Processing Unit]] arrays are the dominant accelerator types; [[GPU Computing]] frameworks coordinate parallel execution across thousands of such devices. It enables [[Model Training]] at the scale required for frontier language and multimodal models, powers [[Distributed Training]] with data and model parallelism across multiple nodes, and constitutes the [[Machine Learning Infrastructure]] layer that AI labs depend on. [[Cloud Computing]] platforms provide elastic access; specialised AI supercomputers offer higher interconnect bandwidth.

- ### Content
  - Large-scale computing has its roots in 1960s supercomputing (CDC 6600, Cray-1), where vector processors were used for scientific simulation. The dominant workload shifted progressively from classified weapons simulation and weather forecasting toward genomics, molecular dynamics, and financial modelling. The advent of GPU computing for machine learning (around 2012, with AlexNet) fundamentally changed the nature of large-scale compute demand: the training of neural networks is embarrassingly parallel at the tensor operation level, making GPU clusters far more cost-effective per FLOP than CPU clusters for this workload class.

  - The scale of compute required for frontier AI training has grown by roughly 4-5 orders of magnitude since 2012. Training GPT-3 (2020) required approximately 3.14x10^23 floating-point operations; frontier 2024-2025 models require significantly more. This has driven the construction of dedicated AI supercomputers — Microsoft/OpenAI's 10,000-GPU clusters, Meta's 600,000 GPU RSC cluster, and xAI's Memphis facility — that are purpose-built for tensor workloads, with custom high-bandwidth interconnects (NVLink, InfiniBand HDR) minimising the communication overhead between GPUs performing model parallelism. Power consumption at this scale is substantial: a 100,000-GPU cluster may consume 100-300 MW, driving interest in co-location with renewable energy sources.

  - The societal significance of large-scale compute is that it is the primary resource bottleneck for frontier AI capability advancement. Access to compute is therefore a geopolitical and economic lever: export controls on high-end AI accelerators have become a tool of technology competition between major powers. Within organisations, compute efficiency — achieving the same model quality at lower FLOP cost through algorithmic improvements, quantisation, and architecture search — is as strategically important as raw procurement of additional hardware.

  - Between 2024 and 2025 the industry is navigating the practical limits of current interconnect and memory bandwidth technologies while awaiting next-generation optical interconnects and higher-bandwidth HBM memory stacks. The emergence of inference-optimised hardware alongside training hardware reflects the shift from a research-dominated market to production AI deployment at scale. Specialised training clusters in the 1-10 exaFLOP range are under construction by multiple organisations, and nuclear-powered data centres are being actively considered to supply the sustained gigawatt-scale power demand that the next generation of AI training facilities will require.