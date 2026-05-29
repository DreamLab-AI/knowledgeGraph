- ### Definition
  Proportional Control is a feedback control strategy in which the corrective output applied to an actuator is directly proportional to the current error—the difference between the desired setpoint and the measured process variable. It is the foundational component of PID controllers, providing immediate, scaled response to deviations but typically leaving a steady-state offset that requires integral or derivative terms to eliminate.

- ### Semantic Classification
  - owl-class:: robotics:ProportionalControl
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - partOf:: [[Pid Controller]], [[Closed-Loop Control]]
  - requires:: [[Feedback Control]], [[Actuator]]
  - enables:: [[Motion Control]], [[PositionControl]], [[VelocityControl]]
  - relatedTo:: [[Control System]], [[Control Theory]]
  - contrastsWith:: [[Derivative Control]], [[Adaptive Control]]

- ### Content
  Proportional Control operates on the principle that control output u(t) = Kp × e(t), where Kp is the proportional gain and e(t) is the instantaneous error between setpoint and measured value. Selecting an appropriate Kp is critical: too low and the system responds sluggishly; too high and oscillation or instability results. This trade-off is the central design challenge in proportional control tuning.

  In robotics, proportional control is pervasive in joint-level servo loops, where each actuator receives a command proportional to the angular or linear position error. It forms the P term in PID controllers used in motor drivers, robotic arms, mobile platform steering, and attitude control systems for aerial robots. Despite its simplicity, pure proportional control is often insufficient because a persistent (steady-state) error remains unless the gain is driven to impractically high values.

  The steady-state error limitation motivates augmentation with integral control (which accumulates error over time to eliminate offset) and derivative control (which damps oscillation by responding to the rate of error change). Together they form the full PID controller, but understanding proportional control in isolation remains essential for diagnosing system behaviour and tuning individual gains incrementally.

  Modern control architectures such as model predictive control and adaptive control have largely replaced pure proportional control in demanding applications, but proportional control persists as the innermost loop in cascaded controllers and in embedded systems where computational overhead must be minimised.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z