- ### Definition
  - **Inertia** (RB-0041) is the resistance of a robot's links and payload to changes in motion, quantified by the inertia tensor for rotational dynamics and mass for translational dynamics. Accurate inertia modelling is essential for dynamic control, trajectory planning, and compliance with power-and-force-limiting safety requirements, because high inertia directly increases the impact forces during unintended contact.

- ### Semantic Classification
  - owl-class:: robotics:rb0041inertia
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0022 robot dynamics, rb 0043 torque, rb 0045 acceleration
  - dependsOn:: rb 0033 payload
  - supports:: rb 0064 computed torque control, rb 0094 power and force limiting

- ### Content
  - Inertia is the central dynamic parameter in robot motion: the mass-inertia matrix M(q) appears as the dominant term in the manipulator equation of motion τ = M(q)q̈ + C(q,q̇)q̇ + g(q). Robots with high link inertia require larger actuator torques for the same acceleration profile and exhibit greater contact forces during unintended collisions, making inertia minimisation a key design objective for collaborative arms.

  Inertia varies with robot configuration (pose-dependent) because the relative positions of link centres of mass change as the robot moves. This configuration-dependence must be accounted for in real-time model-based controllers (computed-torque control, model-predictive control) and in trajectory optimisers. Payload inertia — the rotational inertia of the grasped object — is an additional term that must be estimated or measured for precise control. Many modern collaborative robots use built-in torque sensors to estimate payload inertia automatically.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z