- ### OntologyBlock
  id:: quadcopter-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0122
    - filename-history:: ["RB-0122-quadcopter.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0122
    - preferred-term:: Quadcopter
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Quadcopter is a four-rotor VTOL aircraft.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:Quadcopter
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Multirotor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Quadcopter))
      (SubClassOf :Quadcopter :Multirotor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Quadcopter "Quadcopter"@en)
      (AnnotationAssertion rdfs:comment :Quadcopter
        "Quadcopter is a four-rotor VTOL aircraft."@en)
      ```

- ## About Quadcopter
  Quadcopter is a four-rotor VTOL aircraft.
  
  A multirotor with four rotors.