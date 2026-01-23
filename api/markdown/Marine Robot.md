- ### OntologyBlock
  id:: marinerobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0111
    - filename-history:: ["RB-0111-marinerobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0111
    - preferred-term:: Marine Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Marine robot is a robot capable of operating on or under water surfaces.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:MarineRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Mobile Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :MarineRobot))
      (SubClassOf :MarineRobot :MobileRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MarineRobot "Marine Robot"@en)
      (AnnotationAssertion rdfs:comment :MarineRobot
        "Marine robot is a robot capable of operating on or under water surfaces."@en)
      ```

- ## About Marine Robot
  Marine robot is a robot capable of operating on or under water surfaces.
  
  A mobile robot designed for operation in aquatic environments.