- ### OntologyBlock
  id:: manipulatorrobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0108
    - filename-history:: ["RB-0108-manipulatorrobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0108
    - preferred-term:: Manipulator Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Manipulator robot is a robot with articulated mechanical arms designed to perform manipulation tasks.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ManipulatorRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ManipulatorRobot))
      (SubClassOf :ManipulatorRobot :Robot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ManipulatorRobot "Manipulator Robot"@en)
      (AnnotationAssertion rdfs:comment :ManipulatorRobot
        "Manipulator robot is a robot with articulated mechanical arms designed to perform manipulation tasks."@en)
      ```

- ## About Manipulator Robot
  Manipulator robot is a robot with articulated mechanical arms designed to perform manipulation tasks.
  
  A robot designed primarily for manipulation tasks, typically with a multi-joint arm structure.