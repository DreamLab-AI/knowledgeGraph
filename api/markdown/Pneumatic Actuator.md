- ### OntologyBlock
  id:: pneumaticactuator-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0168
    - filename-history:: ["RB-0168-pneumaticactuator.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0168
    - preferred-term:: Pneumatic Actuator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Pneumatic actuator uses compressed air to generate motion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:PneumaticActuator
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PneumaticActuator))
      (SubClassOf :PneumaticActuator :RobotActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PneumaticActuator "Pneumatic Actuator"@en)
      (AnnotationAssertion rdfs:comment :PneumaticActuator
        "Pneumatic actuator uses compressed air to generate motion."@en)
      ```

- ## About Pneumatic Actuator
  Pneumatic actuator uses compressed air to generate motion.
  
  An actuator powered by compressed air.