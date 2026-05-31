- ### Definition
  - Trajectory optimisation is the computation of a path and control profile for a dynamic system that minimises a cost subject to physical and operational constraints. It is widely used in robotics, aerospace and autonomous vehicles.

- ### Semantic Classification
  - owl-class:: robotics:TrajectoryOptimisation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - bridges-to:: [[Robotics]]
  - requires:: [[Optimisation]], [[Control Theory]]
  - enables:: [[Path Planning]]

- ### Content
  - Trajectory optimisation formulates motion as an optimal control problem, seeking state and input sequences that minimise a cost such as time, energy or jerk while satisfying dynamics, actuator limits and obstacle constraints. Solution methods include direct collocation, shooting methods and differential dynamic programming.
  - In robotics it produces smooth, dynamically feasible motions for manipulators and mobile platforms, often refining coarse paths from a planner. The approach connects motion planning with control theory by jointly reasoning about geometry and system dynamics.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z