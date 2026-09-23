
Monolithic AI refers to a design paradigm in which a single, large, undivided model or system handles all tasks within an AI application, as opposed to decomposed or modular architectures. The term is most often used to contrast with multi-agent, mixture-of-experts, or microservice-based AI designs. Monolithic AI systems are simpler to deploy but harder to update, scale selectively, or audit at component level.

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

- ### Provenance

