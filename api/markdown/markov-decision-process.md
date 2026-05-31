- ### Definition
  - A mathematical framework for modelling sequential decision-making where outcomes are partly random and partly under the control of a decision maker.

- ### Semantic Classification
  - owl-class:: mathematics:MarkovDecisionProcess
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Markov Chain]]
  - bridges-to:: [[Optimisation]]
  - requires:: [[Markov Chain]], [[Probability Theory]]
  - enables:: [[Reinforcement Learning]]

- ### Content
  - A Markov decision process extends a Markov chain with actions and rewards, modelling an agent that chooses actions to maximise cumulative reward over time. Its solution is a policy mapping states to actions, often computed via dynamic programming.
  - It provides the formal foundation for reinforcement learning, where the transition and reward functions are typically unknown and must be learned through interaction.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z