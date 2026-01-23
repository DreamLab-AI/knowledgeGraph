- ### OntologyBlock
  id:: semifungibletoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0511
    - filename-history:: ["BC-0511-semifungibletoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0511
    - preferred-term:: Semi-Fungible Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token that can represent both fungible and non-fungible properties, typically starting as fungible but becoming non-fungible under certain conditions, or representing classes of interchangeable assets.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:SemiFungibleToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :SemiFungibleToken))
      (SubClassOf :SemiFungibleToken :Token)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :SemiFungibleToken "Semi-Fungible Token"@en)
      (AnnotationAssertion rdfs:comment :SemiFungibleToken
        "A token that can represent both fungible and non-fungible properties, typically starting as fungible but becoming non-fungible under certain conditions, or representing classes of interchangeable assets."@en)
      ```

- ## About Semi-Fungible Token
  A token that can represent both fungible and non-fungible properties, typically starting as fungible but becoming non-fungible under certain conditions, or representing classes of interchangeable assets.
  
  Enabled by ERC-1155 multi-token standard. Allows bundling multiple asset types in one smart contract.
  
  ### Examples
  - Event tickets (fungible until used, then non-fungible as proof of attendance), gaming items with limited quantities