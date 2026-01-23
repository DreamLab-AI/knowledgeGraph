- ### OntologyBlock
  id:: performancestandard-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0107
    - filename-history:: ["RB-0107-performancestandard.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0107
    - preferred-term:: based on
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: International standard for quality management systems.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:PerformanceStandard
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Standard]]
    - is-subclass-of:: [[Safety Standard]]
    - is-subclass-of:: [[Robot Standard]]
    - is-subclass-of:: [[Robot Standard]]
    - is-subclass-of:: [[Robot Standard]]
    - is-subclass-of:: [[Robot Standard]]
    - is-subclass-of:: [[Robot Standard]]
    - also-known-as:: Robot Operating System

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PerformanceStandard))
      (SubClassOf :PerformanceStandard :RobotStandard)
      (SubClassOf :PerformanceStandard :SafetyStandard)
      (SubClassOf :PerformanceStandard :RobotStandard)
      (SubClassOf :PerformanceStandard :RobotStandard)
      (SubClassOf :PerformanceStandard :RobotStandard)
      (SubClassOf :PerformanceStandard :RobotStandard)
      (SubClassOf :PerformanceStandard :RobotStandard)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PerformanceStandard "based on"@en)
      (AnnotationAssertion rdfs:comment :PerformanceStandard
        "International standard for quality management systems."@en)
      ```

- ## About based on
  International standard for quality management systems.
  
  Standard that this one is based on or derived from.