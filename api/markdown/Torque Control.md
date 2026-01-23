- ### OntologyBlock
  id:: torquecontrol-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0153
    - filename-history:: ["RB-0153-torquecontrol.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0153
    - preferred-term:: Torque Control
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Torque control directly commands actuator torques for compliant interaction.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:TorqueControl
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Motion Control]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :TorqueControl))
      (SubClassOf :TorqueControl :MotionControl)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :TorqueControl "Torque Control"@en)
      (AnnotationAssertion rdfs:comment :TorqueControl
        "Torque control directly commands actuator torques for compliant interaction."@en)
      ```

- ## About Torque Control
  Torque control directly commands actuator torques for compliant interaction.
  
  A control system directly regulating joint torques.