- ### OntologyBlock
  id:: namedentity-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0814
    - filename-history:: ["AI-0814-namedentity.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0814
    - preferred-term:: Named Entity
    - source-domain:: ai
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Person, organization, location, or other named entity.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:NamedEntity
    - belongsToDomain:: [[Artificial Intelligence]]

  - #### Relationships

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :NamedEntity))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :NamedEntity "Named Entity"@en)
      (AnnotationAssertion rdfs:comment :NamedEntity
        "Person, organization, location, or other named entity."@en)
      ```

- ## About Named Entity
  Person, organization, location, or other named entity.