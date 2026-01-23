- ### OntologyBlock
  id:: inflationarytoken-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0521
    - filename-history:: ["BC-0521-inflationarytoken.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0521
    - preferred-term:: Inflationary Token
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A token with continuous or scheduled new token creation increasing total supply over time, typically to reward validators, miners, or incentivize network participation.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:InflationaryToken
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Fungible Token]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :InflationaryToken))
      (SubClassOf :InflationaryToken :FungibleToken)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :InflationaryToken "Inflationary Token"@en)
      (AnnotationAssertion rdfs:comment :InflationaryToken
        "A token with continuous or scheduled new token creation increasing total supply over time, typically to reward validators, miners, or incentivize network participation."@en)
      ```

- ## About Inflationary Token
  A token with continuous or scheduled new token creation increasing total supply over time, typically to reward validators, miners, or incentivize network participation.
  
  ### Examples
  - Ethereum (post-Merge issuance), Polkadot, Cosmos