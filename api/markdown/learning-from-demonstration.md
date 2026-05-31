- ### Definition
  - Learning from demonstration is an approach in which an agent acquires behaviour by observing examples performed by a teacher. It is used to bootstrap policies in robotics and control without hand-specified reward functions.

- ### Semantic Classification
  - owl-class:: machine-learning:LearningfromDemonstration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Imitation Learning]]
  - bridges-to:: [[Reinforcement Learning]], [[Robotics]]
  - requires:: [[Imitation Learning]]
  - enables:: [[Offline Reinforcement Learning]]

- ### Content
  - Learning from demonstration, also termed programming by demonstration, lets a system infer a task from recorded expert trajectories rather than explicit instructions. The teacher may be a human operator, a scripted controller or a higher-quality policy.
  - Approaches range from directly imitating the observed actions to inferring the underlying reward and then optimising it. The method is common in robotics where defining a reward by hand is difficult but demonstrations are easy to provide.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z