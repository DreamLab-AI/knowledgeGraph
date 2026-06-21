- ### Definition
  - **Optimal control** formulates robot motion and actuation as an optimisation problem: find a control trajectory that drives the system from an initial to a goal state while minimising a cost functional (e.g., joint torques, execution time, or deviation from a reference). Classical methods include Pontryagin's minimum principle and dynamic programming; practical implementations in robotics use model predictive control (rb 0062) and computed-torque control (rb 0064).

- ### Semantic Classification
  - owl-class:: robotics:rb0060optimalcontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Directly instantiated by model predictive control (rb 0062) which solves optimal control problems over a receding time horizon.
  - Depends on accurate robot dynamics models (rb 0022) and uses the Jacobian matrix (rb 0030) for gradient computations.
  - Connects to reinforcement learning as a model-based policy synthesis framework.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z