- ### OntologyBlock
  id:: scararobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0131
    - filename-history:: ["RB-0131-scararobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0131
    - preferred-term:: SCARA Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: SCARA robot has selective compliance in X-Y plane and rigidity in Z-axis for fast assembly operations.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ScaraRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Industrial Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ScaraRobot))
      (SubClassOf :ScaraRobot :IndustrialRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ScaraRobot "SCARA Robot"@en)
      (AnnotationAssertion rdfs:comment :ScaraRobot
        "SCARA robot has selective compliance in X-Y plane and rigidity in Z-axis for fast assembly operations."@en)
      ```

- ## About SCARA Robot
  SCARA robot has selective compliance in X-Y plane and rigidity in Z-axis for fast assembly operations.
  
  Selective Compliance Assembly Robot Arm with two revolute and one prismatic joint.