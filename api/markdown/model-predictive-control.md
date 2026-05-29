- ### Definition
  - Model Predictive Control (MPC) is an advanced control methodology in which a mathematical model of the controlled process is used to predict future system states over a receding finite time horizon, and a constrained optimisation problem is solved at each control step to determine the optimal sequence of control inputs. Only the first input of the computed sequence is applied, and the optimisation is repeated at the next step with an updated state estimate, producing a closed-loop feedback effect. MPC handles multi-input multi-output systems, hard constraints on states and inputs, and competing control objectives in a unified framework, making it widely used in chemical process control, autonomous vehicles, and robotic manipulation.

- ### Semantic Classification
  - owl-class:: model-predictive-control:Model Predictive Control
  - owl-role:: Concept

- ### Relationships
  - requires [[State Estimation]]
  - requires [[Control System]]
  - enables [[Trajectory Control]]
  - enables [[Robot Control]]
  - dependsOn [[Feedback Control]]

- ### Content
  - Model Predictive Control generalises classical feedback controllers such as PID by incorporating an explicit process model that enables anticipation of future constraint violations. The optimisation problem is typically a Quadratic Program (QP) or a Nonlinear Program (NLP) depending on whether the system dynamics are linear or nonlinear; the widespread availability of efficient solvers (e.g., OSQP, qpOASES, IPOPT) has made real-time MPC feasible at millisecond timescales in robotic and automotive applications.
  - Linear MPC (LMPC) assumes a linear state-space model and solves a convex QP at each time step, offering guarantees of recursive feasibility and stability under mild conditions. Nonlinear MPC (NMPC) accommodates arbitrary dynamics, including those derived from kinematic and dynamic models of robot manipulators or mobile platforms, at the cost of solving a non-convex NLP whose computational burden can be reduced through direct multiple-shooting or direct collocation transcription methods.
  - In robotics, MPC is frequently combined with state estimators such as the Extended Kalman Filter or Moving Horizon Estimation to maintain an accurate state estimate from noisy sensor data. For legged robots and humanoids, whole-body MPC formulations simultaneously optimise joint torques and contact forces subject to friction cone constraints, enabling agile locomotion. Libraries such as Acados, MPPI (Model Predictive Path Integral), and the ROS 2 MPC controller plugins provide accessible implementations of these techniques.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z