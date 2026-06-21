- ### Definition
  - ### Primary Definition
  Degrees of Freedom (DOF) is the number of independent scalar parameters necessary to completely specify the configuration of a robot mechanism. Each revolute joint contributes one rotational DOF; each prismatic joint contributes one translational DOF. A 6-DOF serial manipulator possesses the minimum number of joints needed to position and orient its end-effector arbitrarily in three-dimensional space without kinematic redundancy; robots with more than 6 DOF are kinematically redundant, offering additional dexterity for obstacle avoidance and singularity avoidance.

  The DOF count directly shapes the kinematic and dynamic model complexity, the dimensionality of the joint space used for motion planning, and the number of actuators and sensors required. In mobile robotics, DOF additionally describes chassis mobility: a differential-drive robot has 2 controllable DOF (linear velocity and angular velocity) although it exists in a 3-DOF configuration space.

- ### Semantic Classification
  - owl-class:: robotics:DegreesOfFreedom
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Related to: rb 0021 robot kinematics, rb 0024 workspace, rb 0037 dexterity, rb 0031 singularity
  - Has part: rb 0026 robot joint
  - Supports: rb 0028 forward kinematics, rb 0029 inverse kinematics, rb 0036 resolution

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z