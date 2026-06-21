- ### Definition
  - **Torque** is the rotational equivalent of linear force — a moment acting about a joint axis that accelerates or decelerates a robot link according to Newton's second law for rotation (τ = Iα). In manipulator control, joint torque commands are computed from the robot's dynamic model (rb 0022) using inertia, Coriolis, and gravity terms, then realised by servo motors and actuators.

- ### Semantic Classification
  - owl-class:: robotics:rb0043torque
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Closely coupled to inertia (rb 0041): higher inertia requires greater torque for the same acceleration (rb 0045).
  - Measured by force-torque sensors (rb 0067) for compliant control and collision detection.
  - Computed and commanded by computed-torque control (rb 0064) and optimal control frameworks (rb 0060).

- ### Content
  - Torque is the primary control input in robot joint actuation. The manipulator dynamic equation τ = M(q)q̈ + C(q,q̇)q̇ + g(q) shows torque τ as a function of configuration q, velocity q̇, and acceleration q̈: inertia, Coriolis, and gravity effects must all be compensated. Computed-torque control (rb 0064) exploits this model to linearise the system, yielding well-understood linear control behaviour.

  Joint torque limits are a fundamental workspace constraint: the maximum continuous torque of each joint motor, combined with gear ratio and thermal rating, sets the peak payload capacity and maximum acceleration. Force-torque sensors at the wrist or integrated into the joint allow torque measurement for compliant control, tool-centre-point force estimation, and collision detection.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z