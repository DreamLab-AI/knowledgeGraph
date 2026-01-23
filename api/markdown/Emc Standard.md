- ### OntologyBlock
  id:: emcstandard-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0190
    - filename-history:: ["RB-0190-emcstandard.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0190
    - preferred-term:: EMC Standard
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: EMC standard ensures robot does not emit or is not affected by electromagnetic interference.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:EmcStandard
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Standard]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :EmcStandard))
      (SubClassOf :EmcStandard :RobotStandard)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :EmcStandard "EMC Standard"@en)
      (AnnotationAssertion rdfs:comment :EmcStandard
        "EMC standard ensures robot does not emit or is not affected by electromagnetic interference."@en)
      ```

- ## About EMC Standard
  EMC standard ensures robot does not emit or is not affected by electromagnetic interference.
  
  A standard for electromagnetic compatibility.