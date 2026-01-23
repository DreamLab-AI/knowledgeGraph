- ### OntologyBlock
  id:: mobilemanipulator-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0142
    - filename-history:: ["RB-0142-mobilemanipulator.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0142
    - preferred-term:: Mobile Manipulator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Mobile manipulator integrates locomotion with manipulation capabilities.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:MobileManipulator
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Hybrid Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :MobileManipulator))
      (SubClassOf :MobileManipulator :HybridRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MobileManipulator "Mobile Manipulator"@en)
      (AnnotationAssertion rdfs:comment :MobileManipulator
        "Mobile manipulator integrates locomotion with manipulation capabilities."@en)
      ```

- ## About Mobile Manipulator
  Mobile manipulator integrates locomotion with manipulation capabilities.
  
  A robot combining mobile base with manipulator arm.