- ### OntologyBlock
  id:: deltarobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0132
    - filename-history:: ["RB-0132-deltarobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0132
    - preferred-term:: Delta Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Delta robot uses parallel kinematics with parallelogram linkages restricting end-effector to pure translation.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:DeltaRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Industrial Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DeltaRobot))
      (SubClassOf :DeltaRobot :IndustrialRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DeltaRobot "Delta Robot"@en)
      (AnnotationAssertion rdfs:comment :DeltaRobot
        "Delta robot uses parallel kinematics with parallelogram linkages restricting end-effector to pure translation."@en)
      ```

- ## About Delta Robot
  Delta robot uses parallel kinematics with parallelogram linkages restricting end-effector to pure translation.
  
  A parallel robot with parallelogram linkages for high-speed picking.