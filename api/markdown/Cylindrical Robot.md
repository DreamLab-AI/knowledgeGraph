- ### OntologyBlock
  id:: cylindricalrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0134
    - filename-history:: ["RB-0134-cylindricalrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0134
    - preferred-term:: Cylindrical Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Cylindrical robot has one rotary joint and two prismatic joints creating cylindrical workspace.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:CylindricalRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Industrial Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :CylindricalRobot))
      (SubClassOf :CylindricalRobot :IndustrialRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :CylindricalRobot "Cylindrical Robot"@en)
      (AnnotationAssertion rdfs:comment :CylindricalRobot
        "Cylindrical robot has one rotary joint and two prismatic joints creating cylindrical workspace."@en)
      ```

- ## About Cylindrical Robot
  Cylindrical robot has one rotary joint and two prismatic joints creating cylindrical workspace.
  
  A robot with cylindrical coordinate system workspace.