- ### OntologyBlock
  id:: multirotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0121
    - filename-history:: ["RB-0121-multirotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0121
    - preferred-term:: Multirotor UAV
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Multirotor UAV achieves lift through multiple propellers driven by motors.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:Multirotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Aerial Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Multirotor))
      (SubClassOf :Multirotor :AerialRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Multirotor "Multirotor UAV"@en)
      (AnnotationAssertion rdfs:comment :Multirotor
        "Multirotor UAV achieves lift through multiple propellers driven by motors."@en)
      ```

- ## About Multirotor UAV
  Multirotor UAV achieves lift through multiple propellers driven by motors.
  
  An aerial robot using multiple rotors for vertical takeoff and landing.