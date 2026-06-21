- ### Definition
  - Computed torque control (CTC, RB-0064) is a nonlinear model-based strategy that uses the full Euler-Lagrange dynamic model of a manipulator to cancel gravity, Coriolis, and centripetal terms in real time, feeding forward the required joint torques. The residual error dynamics are then linear, allowing a simple outer PD loop to guarantee global asymptotic stability under ideal modelling conditions. CTC is sensitive to inertia parameter uncertainty; robust variants (adaptive CTC, sliding-mode augmentation) are used in practice.

- ### Semantic Classification
  - owl-class:: robotics:rb0064computedtorquecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Depends on: [[rb 0022 robot dynamics]], [[rb 0021 robot kinematics]]
  - Uses: [[rb 0043 torque]], [[rb 0048 pid controller]]
  - Related to: [[rb 0061 nonlinear control]], [[rb 0062 model predictive control]], [[rb 0056 impedance control]]
  - Enables: [[rb 0051 trajectory planning]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z