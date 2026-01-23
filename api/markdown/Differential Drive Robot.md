- ### OntologyBlock
  id:: differentialdriverobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0114
    - filename-history:: ["RB-0114-differentialdriverobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0114
    - preferred-term:: Differential Drive Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Differential drive robot uses two independently controlled wheels on each side for locomotion and steering.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:DifferentialDriveRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Wheeled Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DifferentialDriveRobot))
      (SubClassOf :DifferentialDriveRobot :WheeledRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DifferentialDriveRobot "Differential Drive Robot"@en)
      (AnnotationAssertion rdfs:comment :DifferentialDriveRobot
        "Differential drive robot uses two independently controlled wheels on each side for locomotion and steering."@en)
      ```

- ## About Differential Drive Robot
  Differential drive robot uses two independently controlled wheels on each side for locomotion and steering.
  
  A wheeled robot with two independently driven wheels.