- ### OntologyBlock
  id:: quadrupedrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0119
    - filename-history:: ["RB-0119-quadrupedrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0119
    - preferred-term:: Quadruped Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Quadruped robot walks on four legs with gaits inspired by mammals like dogs or cats.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:QuadrupedRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Legged Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :QuadrupedRobot))
      (SubClassOf :QuadrupedRobot :LeggedRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :QuadrupedRobot "Quadruped Robot"@en)
      (AnnotationAssertion rdfs:comment :QuadrupedRobot
        "Quadruped robot walks on four legs with gaits inspired by mammals like dogs or cats."@en)
      ```

- ## About Quadruped Robot
  Quadruped robot walks on four legs with gaits inspired by mammals like dogs or cats.
  
  A legged robot with four legs.