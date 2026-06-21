- ### Definition
  - Sliding Mode Control (SMC) is a nonlinear robust control technique that forces the system state trajectory onto a predefined sliding surface in state space and maintains it there via high-frequency switching control actions. The controller design involves two phases: reaching the sliding surface and sliding along it. On the sliding manifold, the closed-loop behaviour is determined entirely by the surface design, rendering it invariant to matched disturbances and modelling uncertainties — a property of considerable value in robot control where payload variations and joint friction are difficult to model exactly.

- ### Semantic Classification
  - owl-class:: robotics:rb0063slidingmodecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - SMC is a member of the nonlinear control family and contrasts with linear controllers like PID in that it provides guaranteed robustness without requiring accurate system models. It is frequently compared with Model Predictive Control (MPC): SMC offers faster switching responses and simpler implementation, while MPC handles constraints explicitly. In practice, SMC is often combined with adaptive and intelligent control strategies to reduce chattering while preserving robustness in robot manipulators and exoskeletons.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z