- ### OntologyBlock
  id:: electricmotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0169
    - filename-history:: ["RB-0169-electricmotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0169
    - preferred-term:: Electric Motor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Electric motor produces rotational torque from electrical current.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ElectricMotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Electric Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ElectricMotor))
      (SubClassOf :ElectricMotor :ElectricActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ElectricMotor "Electric Motor"@en)
      (AnnotationAssertion rdfs:comment :ElectricMotor
        "Electric motor produces rotational torque from electrical current."@en)
      ```

- ## About Electric Motor
  Electric motor produces rotational torque from electrical current.
  
  An actuator converting electrical energy to rotational motion.