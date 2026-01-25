- ### OntologyBlock
  id:: closed-loop-control-ontology
  collapsed:: true
  - ontology:: true
  - term-id:: RB-1002
  - preferred-term:: Closed-Loop Control
  - alternate-terms:: Feedback Control
  - source-domain:: rb
  - status:: complete
  - public-access:: true
  - version:: 1.0.0
  - last-updated:: 2025-11-24

- **Definition**
  - definition:: A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.
  - maturity:: mature
  - source:: [[Control Theory]], [[ISO 8373:2021]]
  - authority-score:: 0.98

- **Semantic Classification**
  - owl:class:: rb:ClosedLoopControl
  - owl:role:: Method
  - belongsToDomain:: [[Robotics]], [[Control Theory]]

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
  id:: rb-1002-relationships
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
