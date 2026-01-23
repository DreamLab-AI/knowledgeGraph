- ### OntologyBlock
  id:: databreach-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0863
    - filename-history:: ["AI-0863-databreach.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0863
    - preferred-term:: Data Breach
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
    - owl:class:: ai:DataBreach
    - belongsToDomain:: [[Artificial Intelligence]]

  - #### Relationships
    - is-subclass-of:: [[Risk]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DataBreach))
      (SubClassOf :DataBreach :Risk)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DataBreach "Data Breach"@en)
      ```

- ## About Data Breach
  