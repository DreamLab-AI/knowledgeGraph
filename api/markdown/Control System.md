- ### OntologyBlock
  id:: controlsystem-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0144
    - filename-history:: ["RB-0144-controlsystem.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0144
    - preferred-term:: Control System
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Control system computes control signals to drive robot actuators toward desired behavior.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ControlSystem
    - belongsToDomain:: [[Robotics]]

  - #### Relationships

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ControlSystem))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ControlSystem "Control System"@en)
      (AnnotationAssertion rdfs:comment :ControlSystem
        "Control system computes control signals to drive robot actuators toward desired behavior."@en)
      ```

- ## About Control System
  Control system computes control signals to drive robot actuators toward desired behavior.
  
  A system that manages, commands, directs, or regulates the behavior of a robot.