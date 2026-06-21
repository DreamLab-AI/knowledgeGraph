- ### Definition
  - Velocity in robotics is the vector quantity describing the rate of change of position (linear velocity) and orientation (angular velocity) of a robot body, joint, or end-effector. In the context of differential kinematics, the Jacobian matrix provides the instantaneous linear map between joint-space velocities and Cartesian task-space velocities. Velocity is therefore the key quantity for trajectory planning, motion control, and safety monitoring in both industrial and collaborative robots.

- ### Semantic Classification
  - owl-class:: robotics:rb0044velocity
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0045 acceleration, rb 0043 torque, rb 0030 jacobian matrix
  - requires:: rb 0021 robot kinematics
  - enables:: rb 0055 velocity control, rb 0049 motion planning
  - standardizedBy:: rb 0093 speed limitation

- ### Content
  - Velocity is the central quantity of differential kinematics. The Jacobian matrix J(q) provides the instantaneous mapping v = J(q)q̇, relating joint-space velocities q̇ to Cartesian end-effector velocities v = [ṗ; ω] (linear and angular). Near singular configurations, J becomes rank-deficient and small joint velocities can correspond to arbitrarily large task-space velocities — a key concern in trajectory planning.

  In collaborative robot safety, end-effector velocity is the primary regulated parameter. The speed-and-separation monitoring (SSM) mode — originally specified in ISO/TS 15066:2016 and now incorporated into ISO 10218-2:2025 — enforces that robot speed is dynamically reduced as a human approaches, with the permissible speed scaled inversely with proximity. Speed limitation (RB-0093) codifies the maximum allowable thresholds for power-and-force-limited (PFL) collaborative operation, making velocity a safety-critical measurand in addition to a kinematic quantity.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z