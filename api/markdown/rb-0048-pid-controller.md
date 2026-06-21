- ### Definition
  - A PID controller computes a control output as the weighted sum of proportional, integral, and derivative terms applied to the error between the desired setpoint and measured process variable. The proportional gain Kp determines the response to current error; the integral gain Ki eliminates steady-state offset; and the derivative gain Kd damps oscillations. Tuning methods range from empirical approaches (Ziegler-Nichols) to model-based techniques. In robot joint control, individual PID loops are typically run at 1–10 kHz for each degree of freedom.

- ### Semantic Classification
  - owl-class:: robotics:rb0048pidcontroller
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - PID controllers form the foundational layer of most robot joint control architectures. They receive position or velocity feedback from encoders and produce torque commands to actuators. While simple to implement and widely understood, PID controllers are linear and do not inherently account for nonlinear robot dynamics, cross-coupling between joints, or varying payloads — limitations addressed by computed-torque control, model predictive control, and adaptive schemes. In practice, industrial robots cascade PID loops (position → velocity → current) to achieve precise multi-axis motion.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z