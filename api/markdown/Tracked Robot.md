- ### OntologyBlock
  id:: trackedrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0113
    - filename-history:: ["RB-0113-trackedrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0113
    - preferred-term:: Tracked Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Tracked robot uses continuous tracks providing superior traction on rough terrain.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:TrackedRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Ground Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :TrackedRobot))
      (SubClassOf :TrackedRobot :GroundRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :TrackedRobot "Tracked Robot"@en)
      (AnnotationAssertion rdfs:comment :TrackedRobot
        "Tracked robot uses continuous tracks providing superior traction on rough terrain."@en)
      ```

- ## About Tracked Robot
  Tracked robot uses continuous tracks providing superior traction on rough terrain.
  
  A ground robot using continuous tracks (tank treads) for locomotion.