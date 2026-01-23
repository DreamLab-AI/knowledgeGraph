- ### OntologyBlock
  id:: qualitystandard-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0192
    - filename-history:: ["RB-0192-qualitystandard.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0192
    - preferred-term:: Quality Standard
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Quality standard defines requirements for quality management in robot manufacturing and deployment.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:QualityStandard
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Standard]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :QualityStandard))
      (SubClassOf :QualityStandard :RobotStandard)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :QualityStandard "Quality Standard"@en)
      (AnnotationAssertion rdfs:comment :QualityStandard
        "Quality standard defines requirements for quality management in robot manufacturing and deployment."@en)
      ```

- ## About Quality Standard
  Quality standard defines requirements for quality management in robot manufacturing and deployment.
  
  A standard for quality management systems.