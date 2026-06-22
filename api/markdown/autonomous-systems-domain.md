- ### Definition
  - The Autonomous Systems Domain classifies concepts concerning systems that sense, decide and act towards goals with limited human intervention. It covers perception, planning, decision-making and the safety assurance of autonomous operation. As a top-level subject axis it integrates control, intelligence and engineering into systems that operate independently.

- ### Semantic Classification
  - owl-class:: auto:AutonomousSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Robotics Domain]], [[Control Systems Domain]]
  - has-part:: [[Perception]], [[Path Planning]], [[Decision Making]], [[Safety Assurance]], [[Sensor Fusion]]
  - requires:: [[Control Systems Domain]], [[Artificial Intelligence Domain]]
  - enables:: [[Self-Driving Operation]], [[Unmanned Missions]]

- ### Content
  - Autonomous systems perceive their environment, reason about it and act to achieve goals without continuous human direction. They combine sensing and fusion to build a model of the world, planning to select courses of action and control to execute them. The degree of autonomy ranges from assisted operation to full independence.
  - Decision-making under uncertainty is central, requiring systems to act on incomplete and noisy information while bounding the risk of harm. Safety assurance treats the question of how to demonstrate, and bound, the behaviour of systems whose decisions are not fully specified in advance. Verification, monitoring and fallback behaviours guard against failure.
  - Autonomous systems bridge to robotics, which provides their physical embodiment, and to control systems, which regulate their motion. They depend on artificial intelligence for perception and decision-making and on control theory for stable actuation.

- ### Provenance
  - sources:: [[ISO 26262]], [[SAE J3016]]
  - migration-date:: 2026-05-29T00:00:00Z