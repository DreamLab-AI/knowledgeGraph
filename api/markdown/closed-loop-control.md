- ### Definition
  - A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.

- ### Semantic Classification
  - owl-class:: robotics:ClosedLoopControl
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Control Theory]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Control System]]
  - requires:: [[Feedback Mechanism]]
  - enables:: [[RB-1013-localization]], [[RB-1007-trajectory-generation]]
  - implements:: [[PID Control]], [[RB-1004-adaptive-control]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Control System]]
  - requires:: [[Feedback Mechanism]]
  - requires:: [[Sensor System]]
  - requires:: [[Controller]]
  - requires:: [[Actuator]]
  - hasErrorSignal some MeasurementError
  - implements some CorrectionStrategy
  - characterizedBy:: [[Stability]], [[Accuracy]], [[Adaptability]]

  - #### Relationships
  - is-subclass-of:: [[Control System]]
  - contrasts-with:: [[RB-1001-open-loop-control]]
  - uses:: [[Sensor System]], [[Controller]], [[Actuator]]
  - implements:: [[PID Control]], [[RB-1004-adaptive-control]]
  - enables:: [[RB-1013-localization]], [[RB-1007-trajectory-generation]]
  - skos:related:: [[RB-1015-kalman-filter]]

  - **Components**
  - Reference Input (setpoint)
  - Controller (decision maker)
  - Actuator (action taker)
  - Plant (system being controlled)
  - Sensor (measurement)
  - Feedback Loop (error calculation)

  - **Control Strategies**
  - PID Control (Proportional-Integral-Derivative)
  - State-space control
  - Adaptive control
  - Optimal control
  - Robust control

  - **Advantages**
  - Error correction capability
  - Disturbance rejection
  - Adaptive to environmental changes
  - Improved accuracy and stability

  - **Disadvantages**
  - More complex implementation
  - Higher cost (sensors required)
  - Potential instability if poorly tuned
  - Feedback delay effects

  - **Applications**
  - Robot arm position control
  - Mobile robot navigation
  - Autonomous vehicles
  - Industrial process control
  - Collaborative robots (cobots)

  - **Quality Metrics**
  - authority-score:: 0.98
  - completeness:: 0.95
  - accuracy:: 0.96

- ### Provenance
  - sources:: [[Control Theory]], [[ISO 8373:2021]]
  - migration-date:: 2026-04-26T00:00:00Z