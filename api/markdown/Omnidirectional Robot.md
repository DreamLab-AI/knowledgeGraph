- ### OntologyBlock
  id:: omnidirectionalrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0116
    - filename-history:: ["RB-0116-omnidirectionalrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0116
    - preferred-term:: Omnidirectional Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Omnidirectional robot uses mecanum wheels or omniwheels for holonomic motion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:OmnidirectionalRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Wheeled Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :OmnidirectionalRobot))
      (SubClassOf :OmnidirectionalRobot :WheeledRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :OmnidirectionalRobot "Omnidirectional Robot"@en)
      (AnnotationAssertion rdfs:comment :OmnidirectionalRobot
        "Omnidirectional robot uses mecanum wheels or omniwheels for holonomic motion."@en)
      ```

- ## About Omnidirectional Robot
  Omnidirectional robot uses mecanum wheels or omniwheels for holonomic motion.
  
  A wheeled robot capable of instantaneous motion in any direction.