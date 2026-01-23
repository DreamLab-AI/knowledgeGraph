- ### OntologyBlock
  id:: nonfungibletoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0569
    - filename-history:: ["BC-0569-nonfungibletoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0569
    - preferred-term:: Non-Fungible Token (NFT)
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Unique digital assets on blockchain.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:NonFungibleToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Digital Asset]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :NonFungibleToken))
      (SubClassOf :NonFungibleToken :DigitalAsset)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :NonFungibleToken "Non-Fungible Token (NFT)"@en)
      (AnnotationAssertion rdfs:comment :NonFungibleToken
        "Unique digital assets on blockchain."@en)
      ```

- ## About Non-Fungible Token (NFT)
  Unique digital assets on blockchain.