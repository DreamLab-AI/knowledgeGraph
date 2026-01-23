- ### OntologyBlock
  id:: fixedsupplytoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0523
    - filename-history:: ["BC-0523-fixedsupplytoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0523
    - preferred-term:: Fixed Supply Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token with a predetermined maximum supply that cannot be exceeded, often with emission schedule governing distribution over time.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:FixedSupplyToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :FixedSupplyToken))
      (SubClassOf :FixedSupplyToken :FungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :FixedSupplyToken "Fixed Supply Token"@en)
      (AnnotationAssertion rdfs:comment :FixedSupplyToken
        "A token with a predetermined maximum supply that cannot be exceeded, often with emission schedule governing distribution over time."@en)
      ```

- ## About Fixed Supply Token
  A token with a predetermined maximum supply that cannot be exceeded, often with emission schedule governing distribution over time.
  
  ### Examples
  - Bitcoin (21M cap), Litecoin (84M cap)