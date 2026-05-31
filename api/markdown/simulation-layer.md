- ### Definition
  - The Simulation Layer is the cross-cutting stratum that models system or environment behaviour to test and predict outcomes without acting on the real world. It sits above compute and model strata it uses and supports research, evaluation, and planning. It contains simulators, environment models, and the scenarios run within them.

- ### Semantic Classification
  - owl-class:: sim:SimulationLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Monte Carlo Method]], [[Digital Twin]]
  - requires:: [[Compute Layer]], [[Model Layer]]
  - enables:: [[Research Layer]], [[Evaluation Layer]]

- ### Content
  - The Simulation Layer reproduces the behaviour of a system or environment in a controlled model so that consequences can be explored safely. Typical members include physics and agent-based simulators, environment and scenario definitions, and the stochastic sampling that explores outcome distributions. It substitutes computation for real-world trials.
  - It requires the Compute Layer for the often heavy execution it demands and Model Layer artefacts that represent the simulated entities. It enables the Research Layer, which tests hypotheses cheaply, and the Evaluation Layer, which scores behaviour against scenarios.
  - The layer bridges to the Monte Carlo method and the digital twin, techniques that quantify uncertainty and mirror real systems. Fidelity and validation of the model determine how far its predictions can be trusted.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z