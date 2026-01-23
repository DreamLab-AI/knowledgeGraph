- ### OntologyBlock
  id:: toxicitydetection-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0859
    - filename-history:: ["AI-0859-toxicitydetection.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0859
    - preferred-term:: Toxicity Detection
    - source-domain:: ai
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: 
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:ToxicityDetection
    - belongsToDomain:: [[Artificial Intelligence]]

  - #### Relationships
    - is-subclass-of:: [[Content Moderation]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ToxicityDetection))
      (SubClassOf :ToxicityDetection :ContentModeration)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ToxicityDetection "Toxicity Detection"@en)
      ```

- ## About Toxicity Detection
  