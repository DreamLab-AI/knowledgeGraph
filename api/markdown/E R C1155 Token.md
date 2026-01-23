- ### OntologyBlock
  id:: erc1155token-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0517
    - filename-history:: ["BC-0517-erc1155token.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0517
    - preferred-term:: ERC-1155 Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A multi-token standard offering semi-fungibility where tokens represent classes of interchangeable assets. Bundles multiple assets (fungible and non-fungible) in one smart contract for efficient gas usage and reduced network congestion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC1155Token
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Semi Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC1155Token))
      (SubClassOf :ERC1155Token :SemiFungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC1155Token "ERC-1155 Token"@en)
      (AnnotationAssertion rdfs:comment :ERC1155Token
        "A multi-token standard offering semi-fungibility where tokens represent classes of interchangeable assets. Bundles multiple assets (fungible and non-fungible) in one smart contract for efficient gas usage and reduced network congestion."@en)
      ```

- ## About ERC-1155 Token
  A multi-token standard offering semi-fungibility where tokens represent classes of interchangeable assets. Bundles multiple assets (fungible and non-fungible) in one smart contract for efficient gas usage and reduced network congestion.
  
  Fungibility-independent design. Batch operations for multiple token types. Ideal for gaming applications with diverse asset types.
  
  ### Examples
  - Enjin gaming items, The Sandbox assets