- ### Definition
  - [[Monolithic Ai]] describes an AI system built as a single, unified model or codebase rather than decomposed components.
  - Contrasts with [[Multi-Agent System]], [[Mixture of Experts]], and [[Microservice]] AI architectures.
  - A monolithic design co-locates all reasoning, memory, and action capabilities within one model graph or service boundary.
  - Simpler deployment but limited in selective scalability, auditability, and modular updating.

- ### Overview
  - Large [[Foundation Model]] deployments are often described as monolithic when they handle diverse tasks without routing to specialised sub-models.
  - [[End-to-End Learning]] is a natural fit for monolithic systems, where a single gradient flows through all components.
  - The term gained prominence with the rise of [[Agentic AI]] discourse, which explicitly advocates for decomposed architectures.
  - Monolithic AI is not inherently inferior; it can outperform modular approaches where task diversity is low and latency is critical.

- ### Key Aspects
  - **Single-model boundary**: all knowledge and capability within one model weights file or container.
  - **Uniform training signal**: end-to-end gradient optimisation without inter-module interface constraints.
  - **Deployment simplicity**: single artefact to version, ship, and serve.
  - **Auditability challenge**: harder to attribute failure to a specific component.

- ### Mechanisms
  - Training on a joint objective across all capability domains without task-specific routing.
  - [[Inference Engine]] loads the entire model; no dynamic routing between sub-models.
  - Scaling monolithic models requires scaling the entire network uniformly.
  - Fine-tuning risks catastrophic forgetting across all capabilities simultaneously.

- ### Applications
  - General-purpose [[Large Language Model]] deployments serving diverse queries.
  - Embedded AI systems with constrained memory where modular overhead is prohibitive.
  - Early-stage AI products before capability decomposition is justified.
  - Baseline comparison systems in [[AI Governance]] and benchmarking studies.

- ### Relationships
  - contrastsWith:: [[Multi-Agent System]]
  - contrastsWith:: [[Mixture of Experts]]
  - contrastsWith:: [[Microservice]]
  - contrastsWith:: [[Agentic AI]]
  - relatedTo:: [[Large Language Model]]
  - relatedTo:: [[Foundation Model]]
  - relatedTo:: [[Neural Network]]
  - enables:: [[End-to-End Learning]]
  - enables:: [[Model Deployment]]
  - dependsOn:: [[Training Pipeline]]
  - dependsOn:: [[Inference Engine]]
  - supports:: [[Model Serving]]
  - bridgesTo:: [[Distributed AI]]
  - relatedTo:: [[AI Governance]]
  - relatedTo:: [[AI Safety]]

- ### Provenance
  - updated:: 2026-06-15