- ### OntologyBlock
  id:: hydraulicmotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0180
    - filename-history:: ["RB-0180-hydraulicmotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0180
    - preferred-term:: Hydraulic Motor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Hydraulic motor converts hydraulic pressure to rotational torque.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:HydraulicMotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Hydraulic Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :HydraulicMotor))
      (SubClassOf :HydraulicMotor :HydraulicActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :HydraulicMotor "Hydraulic Motor"@en)
      (AnnotationAssertion rdfs:comment :HydraulicMotor
        "Hydraulic motor converts hydraulic pressure to rotational torque."@en)
      ```

- ## About Hydraulic Motor
  Hydraulic motor converts hydraulic pressure to rotational torque.
  
  A hydraulic actuator producing rotational motion.