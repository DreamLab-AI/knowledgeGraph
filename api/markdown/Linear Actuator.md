- ### OntologyBlock
  id:: linearactuator-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0174
    - filename-history:: ["RB-0174-linearactuator.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0174
    - preferred-term:: Electric Linear Actuator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Electric linear actuator converts rotary motion to linear motion using screw, belt, or rack-pinion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:LinearActuator
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Electric Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :LinearActuator))
      (SubClassOf :LinearActuator :ElectricActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :LinearActuator "Electric Linear Actuator"@en)
      (AnnotationAssertion rdfs:comment :LinearActuator
        "Electric linear actuator converts rotary motion to linear motion using screw, belt, or rack-pinion."@en)
      ```

- ## About Electric Linear Actuator
  Electric linear actuator converts rotary motion to linear motion using screw, belt, or rack-pinion.
  
  An actuator producing linear motion.