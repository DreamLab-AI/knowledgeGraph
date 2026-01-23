- ### OntologyBlock
  id:: parallelrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0136
    - filename-history:: ["RB-0136-parallelrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0136
    - preferred-term:: Parallel Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Parallel robot has end-effector directly connected to base by multiple separate linkages working simultaneously.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ParallelRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Manipulator Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ParallelRobot))
      (SubClassOf :ParallelRobot :ManipulatorRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ParallelRobot "Parallel Robot"@en)
      (AnnotationAssertion rdfs:comment :ParallelRobot
        "Parallel robot has end-effector directly connected to base by multiple separate linkages working simultaneously."@en)
      ```

- ## About Parallel Robot
  Parallel robot has end-effector directly connected to base by multiple separate linkages working simultaneously.
  
  A robot where end-effector is connected to base by multiple independent kinematic chains.