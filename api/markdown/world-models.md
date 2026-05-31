- ### Definition
  - World models are learned internal representations of an environment that predict how it evolves in response to actions. They let an agent plan and reason by simulating outcomes rather than acting directly in the world.

- ### Semantic Classification
  - owl-class:: machine-learning:WorldModels
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[World Model]]
  - bridges-to:: [[Reinforcement Learning]], [[Generative Models]]
  - requires:: [[Neural Network]], [[Reinforcement Learning]]
  - enables:: [[Planning]]

- ### Content
  - World models learn a predictive model of an environment, typically encoding observations into a compact latent state and modelling how that state changes with actions. An agent can then train or plan inside the learned model, which can be more sample-efficient than learning from real interaction alone.
  - The approach is central to model-based reinforcement learning and is also studied as a route to general agents that simulate possible futures. Generative architectures are often used to render predicted observations from the latent state.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z