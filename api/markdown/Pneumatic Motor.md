- ### OntologyBlock
  id:: pneumaticmotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0182
    - filename-history:: ["RB-0182-pneumaticmotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0182
    - preferred-term:: Pneumatic Motor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Pneumatic motor converts compressed air to rotational motion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:PneumaticMotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Pneumatic Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PneumaticMotor))
      (SubClassOf :PneumaticMotor :PneumaticActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PneumaticMotor "Pneumatic Motor"@en)
      (AnnotationAssertion rdfs:comment :PneumaticMotor
        "Pneumatic motor converts compressed air to rotational motion."@en)
      ```

- ## About Pneumatic Motor
  Pneumatic motor converts compressed air to rotational motion.
  
  A pneumatic actuator producing rotational motion.