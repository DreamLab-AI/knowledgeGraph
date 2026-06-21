- ### Definition
  - The **Jacobian matrix** J maps joint-space velocities q̇ to end-effector Cartesian velocities ẋ via ẋ = J(q)q̇. Its transpose maps Cartesian forces to joint torques, making it indispensable for force control. The Jacobian is derived analytically from the forward kinematics (rb 0028) and its rank determines manipulability (rb 0032); rank loss signals a kinematic singularity (rb 0031) where the robot loses controllable degrees of freedom.

- ### Semantic Classification
  - owl-class:: robotics:JacobianMatrix
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Used in inverse kinematics (rb 0029) via the pseudo-inverse or damped least-squares methods.
  - Singularity analysis (rb 0031) and manipulability measures (rb 0032) are derived directly from the Jacobian's condition number and determinant.
  - Enables force-torque control by transposing Cartesian force commands into joint torques.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z