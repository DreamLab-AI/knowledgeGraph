- ### Definition
  - Whole Body Control (WBC) is a control framework for legged and humanoid robots that simultaneously optimises motion tasks, contact forces, and balance constraints across all degrees of freedom by solving a hierarchical quadratic programme or weighted task-space objective at each control cycle. By treating locomotion, manipulation, and postural balance as a unified optimisation problem, WBC avoids the sub-optimality of treating these objectives separately. It typically relies on a rigid-body dynamics model and is often combined with model predictive control or reinforcement learning policies for online adaptation to uneven terrain and external disturbances.

- ### Semantic Classification
  - owl-class:: whole-body-control:Whole Body Control
  - owl-role:: Concept

- ### Relationships
  - requires [[System Identification]]
  - requires [[Inverse Kinematics]]
  - enables [[Legged Locomotion]]
  - enables [[Humanoid Robot]]
  - relatedTo [[Model Predictive Control]]
  - relatedTo [[Reinforcement Learning]]

- ### Content
  Whole Body Control addresses the coordination challenge that arises in robots with many degrees of freedom: locomotion, postural balance, and end-effector tasks all compete for the same actuator bandwidth, and treating them with decoupled controllers leads to conflicts and sub-optimal behaviour. WBC formulates control as a constrained optimisation problem—typically a hierarchical quadratic programme (HQP)—where each task (maintain CoM height, swing foot trajectory, arm endpoint position) is assigned a priority level, and lower-priority tasks are solved in the null space of higher-priority ones.

  The optimisation is grounded in the rigid-body dynamics equation τ = M(q)q̈ + C(q,q̇) + g(q), where τ are the generalised joint torques, M is the mass-inertia matrix, C captures Coriolis and centrifugal effects, and g is the gravity term. Contact constraints (foot-ground, hand-surface) are incorporated as equality or inequality constraints on the contact forces, enforced within the friction cone.

  Accurate system identification of inertial parameters is a prerequisite for WBC: errors in link masses or inertia tensors cause the feedforward torque predictions to be incorrect, degrading tracking quality. In practice, WBC is run at high frequency (250–1000 Hz) with a slower outer loop—either an MPC providing reference trajectories or a learned policy providing task-space goals—forming a two-layer control hierarchy. Whole body control has been demonstrated on platforms such as the Boston Dynamics Atlas, ETH ANYmal, and MIT Cheetah robots.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z