- ### OntologyBlock
  id:: erc1155standard-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0540
    - filename-history:: ["BC-0540-erc1155standard.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0540
    - preferred-term:: ERC-1155 Standard
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Multi-token standard supporting both fungible and non-fungible tokens in a single contract.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ERC1155Standard
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ERC1155Standard))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ERC1155Standard "ERC-1155 Standard"@en)
      (AnnotationAssertion rdfs:comment :ERC1155Standard
        "Multi-token standard supporting both fungible and non-fungible tokens in a single contract."@en)
      ```

- ## About ERC-1155 Standard
  Multi-token standard supporting both fungible and non-fungible tokens in a single contract.