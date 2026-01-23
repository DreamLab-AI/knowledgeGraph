- ### OntologyBlock
  id:: proportionalcontrol-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0146
    - filename-history:: ["RB-0146-proportionalcontrol.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0146
    - preferred-term:: Proportional Control
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Proportional control applies gain to current error signal.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ProportionalControl
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Feedback Control]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ProportionalControl))
      (SubClassOf :ProportionalControl :FeedbackControl)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ProportionalControl "Proportional Control"@en)
      (AnnotationAssertion rdfs:comment :ProportionalControl
        "Proportional control applies gain to current error signal."@en)
      ```

- ## About Proportional Control
  Proportional control applies gain to current error signal.
  
  A control system with output proportional to error.