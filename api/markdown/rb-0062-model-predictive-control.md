- ### Definition
  - Model Predictive Control is an online optimisation-based control method where a dynamic model is integrated forward in time to predict the effect of candidate control actions. The controller selects the action that minimises a cost (e.g., tracking error, energy) while satisfying hard constraints on joint torques, velocities, and collision-free workspace boundaries. The receding-horizon mechanism makes MPC inherently adaptive to disturbances without re-tuning.

  In collaborative robotics, MPC is used to enforce safety constraints directly within the control loop — for example, limiting end-effector speed near humans — and to optimally transition between tasks. Computationally expensive convex and nonlinear MPC variants have become practical with modern embedded processors, enabling real-time 1 kHz control on manipulators with many degrees of freedom.

- ### Semantic Classification
  - owl-class:: robotics:rb0062modelpredictivecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Extends optimal control (RB-0060) with constraint handling; contrasts with PID (RB-0048) and sliding-mode (RB-0063) control in expressivity.
  - Depends on accurate robot dynamics (RB-0022) and trajectory planning (RB-0051); enables impedance control (RB-0056) and motion planning (RB-0049) within safety constraints.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z