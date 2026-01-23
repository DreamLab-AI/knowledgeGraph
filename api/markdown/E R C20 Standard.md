- ### OntologyBlock
  id:: erc20standard-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0538
    - filename-history:: ["BC-0538-erc20standard.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0538
    - preferred-term:: ERC-20 Standard
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Technical standard for fungible tokens on Ethereum, defining required methods and events for token contracts.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC20Standard
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC20Standard))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC20Standard "ERC-20 Standard"@en)
      (AnnotationAssertion rdfs:comment :ERC20Standard
        "Technical standard for fungible tokens on Ethereum, defining required methods and events for token contracts."@en)
      ```

- ## About ERC-20 Standard
  Technical standard for fungible tokens on Ethereum, defining required methods and events for token contracts.