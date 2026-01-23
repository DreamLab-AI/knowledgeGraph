- ### OntologyBlock
  id:: electricactuator-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0166
    - filename-history:: ["RB-0166-electricactuator.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0166
    - preferred-term:: Electric Actuator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Electric actuator converts electrical energy to mechanical motion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ElectricActuator
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ElectricActuator))
      (SubClassOf :ElectricActuator :RobotActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ElectricActuator "Electric Actuator"@en)
      (AnnotationAssertion rdfs:comment :ElectricActuator
        "Electric actuator converts electrical energy to mechanical motion."@en)
      ```

- ## About Electric Actuator
  Electric actuator converts electrical energy to mechanical motion.
  
  An actuator powered by electric energy.