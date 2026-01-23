- ### OntologyBlock
  id:: liquidproofofstake-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0552
    - filename-history:: ["BC-0552-liquidproofofstake.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0552
    - preferred-term:: Liquid Proof of Stake
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A PoS variant allowing token holders to delegate their staking rights to validators (bakers) while retaining token ownership and liquidity.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:LiquidProofOfStake
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Of Stake]]
    - also-known-as:: LPoS

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :LiquidProofOfStake))
      (SubClassOf :LiquidProofOfStake :ProofOfStake)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :LiquidProofOfStake "Liquid Proof of Stake"@en)
      (AnnotationAssertion rdfs:comment :LiquidProofOfStake
        "A PoS variant allowing token holders to delegate their staking rights to validators (bakers) while retaining token ownership and liquidity."@en)
      ```

- ## About Liquid Proof of Stake
  A PoS variant allowing token holders to delegate their staking rights to validators (bakers) while retaining token ownership and liquidity.
  
  ### Examples
  - Tezos