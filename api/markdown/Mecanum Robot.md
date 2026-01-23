- ### OntologyBlock
  id:: mecanumrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0117
    - filename-history:: ["RB-0117-mecanumrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0117
    - preferred-term:: Mecanum Wheel Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Mecanum robot uses four mecanum wheels with angled rollers enabling true omnidirectional movement.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:MecanumRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Omnidirectional Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :MecanumRobot))
      (SubClassOf :MecanumRobot :OmnidirectionalRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MecanumRobot "Mecanum Wheel Robot"@en)
      (AnnotationAssertion rdfs:comment :MecanumRobot
        "Mecanum robot uses four mecanum wheels with angled rollers enabling true omnidirectional movement."@en)
      ```

- ## About Mecanum Wheel Robot
  Mecanum robot uses four mecanum wheels with angled rollers enabling true omnidirectional movement.
  
  An omnidirectional robot using mecanum wheels with angled rollers.