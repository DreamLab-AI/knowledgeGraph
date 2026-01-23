- ### OntologyBlock
  id:: polarrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0135
    - filename-history:: ["RB-0135-polarrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0135
    - preferred-term:: Polar Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Polar robot has rotary base, elevated rotary shoulder, and telescoping arm creating spherical workspace.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:PolarRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Industrial Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PolarRobot))
      (SubClassOf :PolarRobot :IndustrialRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PolarRobot "Polar Robot"@en)
      (AnnotationAssertion rdfs:comment :PolarRobot
        "Polar robot has rotary base, elevated rotary shoulder, and telescoping arm creating spherical workspace."@en)
      ```

- ## About Polar Robot
  Polar robot has rotary base, elevated rotary shoulder, and telescoping arm creating spherical workspace.
  
  A robot with spherical coordinate system workspace (also called spherical robot).