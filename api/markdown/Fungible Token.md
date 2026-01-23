- ### OntologyBlock
  id:: fungibletoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0509
    - filename-history:: ["BC-0509-fungibletoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0509
    - preferred-term:: Fungible Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token where each unit is identical and interchangeable with any other unit of the same token, like traditional currencies. Each token holds equal value to another token of the same type.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:FungibleToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :FungibleToken))
      (SubClassOf :FungibleToken :Token)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :FungibleToken "Fungible Token"@en)
      (AnnotationAssertion rdfs:comment :FungibleToken
        "A token where each unit is identical and interchangeable with any other unit of the same token, like traditional currencies. Each token holds equal value to another token of the same type."@en)
      ```

- ## About Fungible Token
  A token where each unit is identical and interchangeable with any other unit of the same token, like traditional currencies. Each token holds equal value to another token of the same type.
  
  Fungible tokens are divisible into smaller units and have uniform value. Examples: 10 ETH equals another 10 ETH in value.
  
  ### Examples
  - ERC-20 tokens, stablecoins, governance tokens, utility tokens