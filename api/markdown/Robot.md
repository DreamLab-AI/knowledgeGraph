- ### OntologyBlock
  id:: robot-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - is-subclass-of:: [[RoboticsTechnology]]
    - term-id:: RB-0001
    - preferred-term:: Robot
    - source-domain:: rb
    - status:: complete
    - public-access:: true
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A robot is an actuated mechanism programmable in two or more axes with a degree of autonomy, moving within its environment, to perform intended tasks.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 1.0

  - **Semantic Classification**
    - owl:class:: rb:Robot
    - owl:physicality:: PhysicalEntity
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### OWL Restrictions
    - hasSensingCapability some SensorSystem
    - is-part-of some Autonomousagent
    - hasMechanicalStructure some RobotFrame
    - hasPowerSource some PowerSupply
    - is-part-of some Mechatronicsystem
    - hasControlSystem some RobotController
  - #### Relationships
    id:: rb-0001-relationships
    - has:: [[PowerSupply]]
    - is-part-of:: [[Autonomousagent]]
    - is-part-of:: [[Mechatronicsystem]]


  - 