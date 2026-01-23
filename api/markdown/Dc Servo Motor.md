- ### OntologyBlock
  id:: dcservomotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0172
    - filename-history:: ["RB-0172-dcservomotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0172
    - preferred-term:: DC Servo Motor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: DC servo motor uses DC power for precise control.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:DcServoMotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Servo Motor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DcServoMotor))
      (SubClassOf :DcServoMotor :ServoMotor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DcServoMotor "DC Servo Motor"@en)
      (AnnotationAssertion rdfs:comment :DcServoMotor
        "DC servo motor uses DC power for precise control."@en)
      ```

- ## About DC Servo Motor
  DC servo motor uses DC power for precise control.
  
  A servo motor powered by direct current.