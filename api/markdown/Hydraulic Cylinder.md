- ### OntologyBlock
  id:: hydrauliccylinder-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0179
    - filename-history:: ["RB-0179-hydrauliccylinder.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0179
    - preferred-term:: Hydraulic Cylinder
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Hydraulic cylinder uses pressurized fluid in cylinder to produce linear force.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:HydraulicCylinder
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Hydraulic Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :HydraulicCylinder))
      (SubClassOf :HydraulicCylinder :HydraulicActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :HydraulicCylinder "Hydraulic Cylinder"@en)
      (AnnotationAssertion rdfs:comment :HydraulicCylinder
        "Hydraulic cylinder uses pressurized fluid in cylinder to produce linear force."@en)
      ```

- ## About Hydraulic Cylinder
  Hydraulic cylinder uses pressurized fluid in cylinder to produce linear force.
  
  A hydraulic actuator producing linear motion.