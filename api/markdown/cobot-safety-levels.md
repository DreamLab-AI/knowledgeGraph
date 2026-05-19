- ### Definition
  - Standardized safety classifications and requirements for collaborative robots (cobots) operating in shared workspaces with humans, defining protection measures, risk assessments, and operational modes to ensure safe human-robot interaction according to ISO/TS 15066.

- ### Semantic Classification
  - owl-class:: robotics:CobotSafetyLevels
  - owl-role:: Specification
  - belongs-to-domain:: [[Robotics]], [[Collaborative Robotics]], [[Safety Standards]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]
  - is-subclass-of:: [[Safety Standard]]
  - requires:: [[Risk Assessment]], [[Safety Certification]]
  - implements:: [[Force Limiting]], [[Speed Monitoring]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Safety Standard]]
  - applies-to:: [[Collaborative Robot]]
  - defines:: [[Safety Requirements]]
  - specifies:: [[Operational Modes]]
  - requires:: [[Risk Assessment]]
  - characterized-by:: [[Human Safety]], [[Contact Limits]]

  - #### Relationships
  - is-subclass-of:: [[Safety Standard]]
  - applies-to:: [[Collaborative Robot]], [[Human-Robot Interaction]]
  - skos:related:: [[RB-1012-trust-in-automation]], [[RB-1004-adaptive-control]]
  - implements:: [[Force Limiting]], [[Speed Monitoring]]
  - requires:: [[Risk Assessment]], [[Safety Certification]]

  - **Four Collaborative Operation Modes (ISO/TS 15066)**
  1. Safety-Rated Monitored Stop
  2. Hand Guiding
  3. Speed and Separation Monitoring
  4. Power and Force Limiting

  - **1. Safety-Rated Monitored Stop**
  - Robot stops when human enters collaborative workspace
  - Robot remains powered but stationary
  - Human can perform tasks in workspace
  - Robot resumes when workspace is clear
  - Use Case: Loading/unloading, inspection

  - **2. Hand Guiding**
  - Operator directly guides robot end-effector
  - Hand-operated device required
  - Reduced speed during guiding
  - Immediate stop capability
  - Use Case: Teaching, setup, adjustment

  - **3. Speed and Separation Monitoring (SSM)**
  - Maintains minimum separation distance
  - Speed reduces as human approaches
  - Stops if minimum distance violated
  - Requires real-time monitoring system
  - Use Case: Assembly, pick-and-place with human nearby

  - **4. Power and Force Limiting (PFL)**
  - Allows intentional contact
  - Limits force and pressure below pain thresholds
  - Inherently safe design or control
  - Most flexible collaboration mode
  - Use Case: Close human-robot collaboration

  - **Biomechanical Limits (ISO/TS 15066)**
  - 29 body regions defined
  - Maximum force limits specified
  - Transient contact (clamping)
  - Quasi-static contact (pinching)
  - Pain threshold as basis

  - **Example Force Limits**
  - Skull: 130 N (transient), 65 N (quasi-static)
  - Face: 65 N (transient), 35 N (quasi-static)
  - Hand/Fingers: 140 N (transient), 60 N (quasi-static)
  - Forearm: 160 N (transient), 80 N (quasi-static)

  - **Safety Features Required**
  - Torque/Force Sensing
  - Collision Detection
  - Emergency Stop Systems
  - Safety-Rated Sensors
  - Redundant Safety Circuits
  - Safe Speed Monitoring
  - Workspace Monitoring

  - **Risk Assessment Process**
  1. Task and Hazard Identification
  2. Risk Evaluation
  3. Safety Measure Implementation
  4. Verification and Validation
  5. Documentation
  6. Ongoing Monitoring

  - **Safety Design Principles**
  - Inherently Safe Design (eliminate hazards)
  - Safety Controls (reduce risks)
  - Protective Measures (guards, sensors)
  - Information for Use (training, warnings)

  - **Validation Requirements**
  - Performance testing
  - Contact force measurements
  - Safety function verification
  - Worst-case scenario testing
  - Documentation and certification

  - **Application Considerations**
  - Task complexity
  - Workspace layout
  - Human exposure time
  - Robot speed and payload
  - Environmental factors
  - Training requirements

  - **Benefits of Compliance**
  - Legal compliance
  - Worker safety
  - Insurance considerations
  - Market acceptance
  - Operational efficiency

  - **Challenges**
  - Balancing safety and productivity
  - Complex risk assessments
  - Varying interpretations of standards
  - Integration with existing systems
  - Maintaining certification

  - **Quality Metrics**
  - authority-score:: 0.98
  - completeness:: 0.95
  - accuracy:: 0.97

- ### Provenance
  - sources:: [[ISO/TS 15066]], [[ISO 10218-1]], [[ISO 10218-2]]
  - migration-date:: 2026-04-26T00:00:00Z