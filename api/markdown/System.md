- ### OntologyBlock
  id:: system-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0831
    - filename-history:: ["AI-0831-system.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0831
    - preferred-term:: System
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
    - owl:class:: ai:System
    - belongsToDomain:: [[Artificial Intelligence]]

  - #### Relationships
    - is-subclass-of:: [[Artificial Intelligence]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :System))
      (SubClassOf :System :ArtificialIntelligence)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :System "System"@en)
      ```

- ## About System
  