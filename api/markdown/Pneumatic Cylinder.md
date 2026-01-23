- ### OntologyBlock
  id:: pneumaticcylinder-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0181
    - filename-history:: ["RB-0181-pneumaticcylinder.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0181
    - preferred-term:: Pneumatic Cylinder
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Pneumatic cylinder uses compressed air to produce linear motion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:PneumaticCylinder
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Pneumatic Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PneumaticCylinder))
      (SubClassOf :PneumaticCylinder :PneumaticActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PneumaticCylinder "Pneumatic Cylinder"@en)
      (AnnotationAssertion rdfs:comment :PneumaticCylinder
        "Pneumatic cylinder uses compressed air to produce linear motion."@en)
      ```

- ## About Pneumatic Cylinder
  Pneumatic cylinder uses compressed air to produce linear motion.
  
  A pneumatic actuator producing linear motion.