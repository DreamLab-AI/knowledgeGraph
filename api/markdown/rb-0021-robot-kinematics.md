- ### Definition
  - ### Primary Definition
  Robot kinematics (RB-0021) is the geometric analysis of robot motion, treating the manipulator as a chain of rigid bodies connected by joints. Forward kinematics maps joint space to Cartesian end-effector pose using Denavit-Hartenberg (DH) or product-of-exponentials parameterisations. Inverse kinematics (IK) solves the reverse problem — often non-uniquely and requiring iterative numerical methods for redundant manipulators. The Jacobian matrix relates differential joint motion to end-effector velocity and is central to velocity control and singularity avoidance.

- ### Semantic Classification
  - owl-class:: robotics:rb0021robotkinematics
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Has part: [[Forward Kinematics]], [[Inverse Kinematics]], [[rb 0030 jacobian matrix]]
  - Related to: [[rb 0022 robot dynamics]], [[rb 0023 degrees of freedom]], [[rb 0031 singularity]]
  - Enables: [[rb 0049 motion planning]], [[rb 0064 computed torque control]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z