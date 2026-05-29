- ### Definition
  - Open-Source AI refers to artificial intelligence models, training datasets, evaluation benchmarks, and software tooling whose weights, source code, data pipelines, and training procedures are publicly released under licences that permit inspection, reproduction, modification, and redistribution. The degree of openness varies considerably: some releases provide weights only (open-weights), others include full training code and data (fully open), while a further subset additionally discloses evaluation methodology and safety assessments. Open-source AI accelerates scientific reproducibility, enables community fine-tuning and red-teaming, and reduces barriers to deployment—but also raises governance questions about dual-use risk and safety assurance that closed-release pipelines handle through access controls.

- ### Semantic Classification
  - owl-class:: open-source-ai:Open-Source AI
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Model Weights]]
  - relatedTo [[Open Source Software]]
  - enables [[Fine Tuning]]
  - enables [[Benchmark Standard]]
  - supports [[AI Governance]]

- ### Content
  - Open-source AI exists on a spectrum of openness. Fully open releases include model weights, training data, data processing code, training scripts, hyperparameter configurations, and evaluation results under licences that permit unrestricted use. Open-weights releases—such as many large language model families—provide weights and inference code but retain proprietary training data and procedures. This distinction matters for reproducibility, auditability, and legal compliance: EU AI Act provisions treat open-source general-purpose AI models with genuinely open weights differently from closed proprietary systems with respect to documentation obligations.
  - The practical benefits of open-source AI include community-driven safety research through red-teaming, adaptation to domain-specific tasks via fine-tuning on local or proprietary datasets without API dependency, and deployment in air-gapped environments where cloud API access is not available. Open-source model families such as LLaMA, Mistral, Falcon, and various multimodal architectures have catalysed a broad ecosystem of derivative models, fine-tuning frameworks, quantisation tools, and inference engines.
  - Governance of open-source AI is an active policy debate. Concerns about dual-use misuse of frontier-capability open-weight models have led some researchers and policy bodies to propose tiered access mechanisms, capability evaluations before public release, and watermarking obligations. Conversely, proponents argue that openness enables broader safety scrutiny and distributes AI capability more equitably. Frameworks such as the OSI Open Source AI Definition attempt to standardise what constitutes genuine openness, influencing how regulators and procurement bodies classify AI systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z