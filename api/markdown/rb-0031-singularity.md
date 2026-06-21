- ### Definition
  - A kinematic singularity occurs when a robot manipulator reaches a configuration in which its Jacobian matrix becomes rank-deficient. At this point the robot loses the ability to produce end-effector motion in one or more Cartesian directions, regardless of how fast the joints move. Common singularity types in six-axis arms include boundary singularities (arm fully extended or retracted), shoulder singularities (wrist centre on the shoulder axis), and wrist singularities (two wrist axes collinear).

- ### Semantic Classification
  - owl-class:: robotics:rb0031singularity
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Singularities are intimately connected to the Jacobian matrix (RB-0030) and to manipulability (RB-0032), which quantifies how far a configuration is from singular. Inverse kinematics (RB-0029) algorithms must handle singularities gracefully—typically via damped least-squares regularisation—to prevent the joint velocity magnitudes from exploding. Singularity avoidance is a constraint in motion planning (RB-0049) and trajectory planning (RB-0051), and workspace analysis (RB-0024) identifies singularity-free regions of the reachable space.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z