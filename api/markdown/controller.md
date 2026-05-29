- ### Definition
  - A Controller is a computational module in a robotic or cyber-physical system that receives sensor feedback and reference setpoints, applies a control law or learned policy, and generates actuator commands that drive the system towards desired states. Controllers range from classical linear regulators (PID, LQR) to nonlinear model-based controllers (Model Predictive Control) and data-driven approaches (neural network policies, reinforcement learning). They operate within a closed-loop feedback architecture where the difference between desired and measured states — the error signal — drives corrective action.

- ### Semantic Classification
  - owl-class:: controller:Controller
  - owl-role:: Concept

- ### Relationships
  - uses [[Feedback Control]]
  - uses [[Pid Controller]]
  - requires [[Actuator]]
  - requires [[Feedback Loop]]
  - enables [[Motion Planning]]
  - enables [[Robot Control]]

- ### Content
  - Controllers are the decision-making core of any closed-loop robotic or automation system. In classical control theory, a Proportional–Integral–Derivative (PID Controller) computes a corrective signal proportional to, integrated over, and differentiated from the error between reference and measured output. While PID suffices for many single-input single-output systems, more complex robotic manipulators and mobile platforms require multi-variable controllers such as Linear Quadratic Regulators (LQR) or Model Predictive Controllers (MPC), which explicitly model system dynamics and optimise a cost functional over a receding horizon.
  - Nonlinear controllers address systems where linear approximations are insufficient — for instance, computed torque controllers in rigid body dynamics use the full kinematic and dynamic model of a manipulator to cancel nonlinearities before applying a linear outer-loop controller. Reinforcement Learning has introduced data-driven controller synthesis: policies trained in simulation via algorithms such as PPO or SAC are deployed on physical robots after sim-to-real transfer, enabling controllers for locomotion, dexterous manipulation, and aerial vehicles where analytic models are hard to derive.
  - In practice, controllers are embedded in real-time control loops running at high frequencies — servo loops in industrial robots typically run at 1–4 kHz. They interact with Actuators (motors, hydraulic cylinders, pneumatic drives) via power electronics interfaces and with sensor stacks via Feedback Loops that close the loop. Motion Planning algorithms upstream compute desired trajectories that the controller must track, whilst Kinematics and dynamics models inform controller design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z