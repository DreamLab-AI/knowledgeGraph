- ### Definition
  - A control system where the control action is independent of the output. The system executes pre-programmed commands without feedback from sensors to verify if the desired state was achieved.

- ### Semantic Classification
  - owl-class:: robotics:OpenLoopControl
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Control Theory]]

- ### Relationships
  - is-subclass-of:: [[Control System]]
  - requires:: [[Actuator]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Control System]]
  - lacks:: [[Feedback Mechanism]]
  - requires:: [[Actuator]]
  - hasInputSignal some ControlCommand
  - produces some SystemOutput
  - characterizedBy:: [[Predictability]], [[No Feedback]]

  - #### Relationships
  - is-subclass-of:: [[Control System]]
  - contrasts-with:: [[RB-1002-closed-loop-control]]
  - uses:: [[Actuator]]
  - applied-in:: [[Stepper Motor Control]], [[Servo Control]]
  - skos:related:: [[Forward Kinematics]]

  - **Advantages**
  - Simple implementation
  - Lower cost (no sensors required)
  - Fast execution (no feedback delay)
  - Predictable timing

  - **Disadvantages**
  - No error correction
  - Sensitive to disturbances
  - Cannot adapt to environmental changes
  - Requires accurate system modeling

  - **Applications**
  - Stepper motor positioning
  - Simple pick-and-place operations
  - Timed sequences
  - Pre-programmed robot trajectories

  - **Quality Metrics**
  - authority-score:: 0.95
  - completeness:: 0.90
  - accuracy:: 0.92

- ### Provenance
  - sources:: [[Control Theory]]
  - migration-date:: 2026-04-26T00:00:00Z