- ### Definition
  - **Acceleration** (RB-0045) is the rate of change of velocity with respect to time, expressed for each joint (joint-space acceleration, rad/s²) or for the robot's end-effector (task-space acceleration, m/s²). Acceleration profiles govern the dynamic forces and torques a manipulator must generate, and limiting acceleration is central to safety — reducing impact forces during unintended contact — and to trajectory smoothness in collaborative applications.

- ### Semantic Classification
  - owl-class:: robotics:rb0045acceleration
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Tightly coupled with velocity (RB-0044), torque (RB-0043), and inertia (RB-0041) within Newton-Euler dynamics; used in trajectory planning (RB-0051) and power/force limiting (RB-0094) for safe collaborative operation.

- ### Content
  - Acceleration is the second time derivative of position and appears directly in the manipulator equation of motion. In joint space, joint accelerations q̈ combine with the mass-inertia matrix M(q), Coriolis/centrifugal matrix C(q,q̇), and gravity vector g(q) to yield required torques: τ = M(q)q̈ + C(q,q̇)q̇ + g(q). In task space, Cartesian acceleration is obtained by differentiating the Jacobian: ẍ = J(q)q̈ + J̇(q)q̇.

  Bounding acceleration is essential in collaborative robot standards. Transient contact force limits that implicitly constrain end-effector acceleration during human-robot contact scenarios were originally specified in ISO/TS 15066:2016 and are now incorporated into ISO 10218-2:2025. Smooth acceleration profiles (trapezoidal, S-curve, jerk-limited) reduce mechanical wear and improve tracking performance during high-speed manipulation; trajectory planners (RB-0051) select profile shapes to satisfy both kinematic and dynamic constraints simultaneously.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z