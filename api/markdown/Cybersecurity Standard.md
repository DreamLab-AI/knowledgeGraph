- ### OntologyBlock
  id:: cybersecuritystandard-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0191
    - filename-history:: ["RB-0191-cybersecuritystandard.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0191
    - preferred-term:: Cybersecurity Standard
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Cybersecurity standard addresses digital security threats to robot systems.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:CybersecurityStandard
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Standard]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :CybersecurityStandard))
      (SubClassOf :CybersecurityStandard :RobotStandard)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :CybersecurityStandard "Cybersecurity Standard"@en)
      (AnnotationAssertion rdfs:comment :CybersecurityStandard
        "Cybersecurity standard addresses digital security threats to robot systems."@en)
      ```

- ## About Cybersecurity Standard
  Cybersecurity standard addresses digital security threats to robot systems.
  
  A standard for robot cybersecurity requirements.