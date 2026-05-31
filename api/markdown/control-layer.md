- ### Definition
  - The Control Layer is the stratum that issues commands to actuators or subsystems to drive a system toward desired states. It sits above the Perception Layer, on whose estimates it acts, and below planning and agent strata that set goals. It contains controllers, feedback loops, set-point logic, and the actuation interfaces that effect change.

- ### Semantic Classification
  - owl-class:: ctl:ControlLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Control Theory]], [[Feedback Loop]]
  - requires:: [[Perception Layer]]
  - enables:: [[Agent Layer]], [[Coordination Layer]]

- ### Content
  - The Control Layer computes the actions needed to move a system from its current to its target state and applies them through actuators. Typical members include feedback controllers, set-point and trajectory generators, safety limiters, and the actuation drivers that translate commands into physical or logical effects.
  - It requires the Perception Layer for an accurate estimate of current state, and it enables the Agent and Coordination Layers above, which set the goals it pursues. Stability and responsiveness established here bound how aggressively higher layers can plan.
  - The layer bridges to control theory and the feedback loop, the principles that keep actions stable in the presence of disturbance and delay. Safety limits enforced here are often the last line of defence against unsafe commands.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z