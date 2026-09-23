
Torque is the rotational force applied about a joint axis, expressed in Newton-metres (N·m). In robot dynamics, joint torques are the primary control inputs that drive links through desired trajectories; torque limits constrain the feasible workspace and influence payload capacity, and torque sensing enables compliant and force-controlled interaction.

- ### Semantic Classification

- ### Content
  - Torque is the primary control input in robot joint actuation. The manipulator dynamic equation τ = M(q)q̈ + C(q,q̇)q̇ + g(q) shows torque τ as a function of configuration q, velocity q̇, and acceleration q̈: inertia, Coriolis, and gravity effects must all be compensated. Computed-torque control (rb 0064) exploits this model to linearise the system, yielding well-understood linear control behaviour.

  Joint torque limits are a fundamental workspace constraint: the maximum continuous torque of each joint motor, combined with gear ratio and thermal rating, sets the peak payload capacity and maximum acceleration. Force-torque sensors at the wrist or integrated into the joint allow torque measurement for compliant control, tool-centre-point force estimation, and collision detection.

- ### Provenance

