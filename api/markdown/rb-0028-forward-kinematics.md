- ### Definition
  - **Forward Kinematics** (RB-0028) computes the Cartesian pose (position and orientation) of a robot's end effector from a given set of joint angles using a chain of homogeneous transformation matrices. FK is deterministic and unique (one joint configuration yields exactly one end-effector pose), in contrast to inverse kinematics which may have multiple or no solutions.

- ### Semantic Classification
  - owl-class:: robotics:rb0028forwardkinematics
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - contrastsWith:: rb 0029 inverse kinematics
  - relatedTo:: rb 0021 robot kinematics, rb 0030 jacobian matrix, rb 0031 singularity, rb 0024 workspace
  - requires:: rb 0026 robot joint, rb 0072 encoder
  - enables:: rb 0049 motion planning, rb 0052 collision avoidance

- ### Content
  - ### Primary Definition
  **Forward Kinematics** (RB-0028) maps joint space to task space via a product of homogeneous transformation matrices T_i = f(θ_i, d_i, a_i, α_i), with parameters derived from the Denavit-Hartenberg (DH) convention. For an n-DOF manipulator, the overall transformation T_0n = T_01 × T_12 × ... × T_(n-1)n gives the end-effector frame relative to the base frame.

  FK is used continuously in robot controllers to track tool position, check workspace limits, perform real-time collision detection, and compute the Jacobian matrix required for velocity kinematics and force transformation. Encoders (RB-0072) provide the joint angle inputs; singularities (RB-0031) occur where the Jacobian loses rank, causing FK to become locally degenerate in velocity mappings.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z