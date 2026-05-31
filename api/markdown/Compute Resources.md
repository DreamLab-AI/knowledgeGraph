public:: true
alias:: ComputeResources

# Compute Resources
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compute-resources",
  "@type": "Page",
  "vc:slug": "compute-resources",
  "title": "Compute Resources",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compute-resources",
  "@type": "Class",
  "label": "Compute Resources",
  "definition": "Compute resources are the aggregate processing capacity available to execute computational workloads, encompassing CPUs, GPUs, specialised accelerators (TPUs, NPUs), memory, network bandwidth, and associated storage I/O. They are quantified by metrics such as FLOPS, memory bandwidth, core count, and clock speed, and are provisioned via physical hardware, virtualised cloud instances, or serverless functions. Effective allocation and scheduling of compute resources is the foundational concern of cloud computing, high-performance computing, and AI infrastructure.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computational-resources", "label": "Computational Resources"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:gpu-resources", "label": "GPU Resources"},
      {"@id": "urn:ngm:class:compute-layer", "label": "Compute Layer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Compute resources are the totality of processing capacity—CPUs, [[GPU Resources]], memory, and network I/O—available to execute workloads, forming the physical substrate upon which all [[AI Infrastructure]] and [[Cloud Computing]] services operate.

- ### Relationships
  - Compute resources decompose into specialised sub-resources including [[GPU Resources]] and are organised into logical [[Compute Layer]] abstractions for scheduling. They directly enable [[High-Performance Computing]] and are the bottleneck resource for [[Model Training]] in large-scale AI. [[GPU Computing]] leverages massively parallel GPU cores within the broader compute resource pool. Provisioning and scaling compute resources is the central function of [[Cloud Computing]] platforms, and the aggregate of compute resources dedicated to AI workloads constitutes the [[AI Infrastructure]] of an organisation or cloud provider.

- ### Content
  - The concept of compute resources as a managed, fungible commodity emerged with time-sharing systems in the 1960s, where CPU time was allocated across multiple users. The virtualisation wave of the 2000s (VMware, Xen) made compute resources dynamically partitionable, and cloud computing (AWS EC2 launched 2006) made them available as on-demand elastic capacity priced by the hour. The shift from fixed-cost on-premises servers to variable-cost cloud instances fundamentally changed how organisations reason about compute as a resource.

  - Compute resources span a hierarchy of granularity: at the finest level, individual arithmetic logic units process instructions; these aggregate into cores, which aggregate into processors, which aggregate into nodes, and nodes into clusters or data centres. In AI workloads, GPUs and specialised accelerators dominate because their massively parallel architecture matches the tensor arithmetic of neural network training and inference. Memory bandwidth is often the binding constraint, not raw FLOPS, leading to processor designs optimised for on-chip memory (HBM stacks, SRAM).

  - Resource management systems—Kubernetes, Slurm, Ray—schedule workloads across available compute, handle failures, and optimise utilisation. Spot or preemptible instances allow cloud providers to sell excess capacity at lower prices with potential interruption, significantly reducing training costs for fault-tolerant AI workloads. Compute resource heterogeneity (mixing CPU, GPU, and FPGA nodes) requires sophisticated scheduling that understands workload affinity.

  - By 2024–2025 compute resources are the central scarcity in AI development. The training of frontier models consumes tens of thousands of GPU-months; inference at scale requires purpose-built accelerator clusters. Sovereign compute initiatives (the EU AI Act, UK AI Safety Institute requirements, US export controls on advanced chips) reflect the geopolitical significance of compute access. Energy consumption of large compute clusters is driving interest in efficiency—both through algorithmic improvements (quantisation, pruning, mixture-of-experts) and hardware advances (wafer-scale integration, photonic computing).