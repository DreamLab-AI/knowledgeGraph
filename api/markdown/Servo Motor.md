- ### OntologyBlock
  id:: servomotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0170
    - filename-history:: ["RB-0170-servomotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0170
    - preferred-term:: Servo Motor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Servo motor provides precise position, velocity, and torque control.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ServoMotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Electric Motor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ServoMotor))
      (SubClassOf :ServoMotor :ElectricMotor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ServoMotor "Servo Motor"@en)
      (AnnotationAssertion rdfs:comment :ServoMotor
        "Servo motor provides precise position, velocity, and torque control."@en)
      ```

- ## About Servo Motor
  Servo motor provides precise position, velocity, and torque control.
  
  A motor with closed-loop feedback control.