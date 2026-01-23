- ### OntologyBlock
  id:: delegatedproofofstake-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0550
    - filename-history:: ["BC-0550-delegatedproofofstake.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0550
    - preferred-term:: Delegated Proof of Stake
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A PoS variant where network participants have the right to delegate the production of new blocks to a fixed number of delegates (witnesses), with users determining delegates via democratic voting mechanism weighted by locked tokens.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:DelegatedProofOfStake
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Of Stake]]
    - also-known-as:: DPoS

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DelegatedProofOfStake))
      (SubClassOf :DelegatedProofOfStake :ProofOfStake)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DelegatedProofOfStake "Delegated Proof of Stake"@en)
      (AnnotationAssertion rdfs:comment :DelegatedProofOfStake
        "A PoS variant where network participants have the right to delegate the production of new blocks to a fixed number of delegates (witnesses), with users determining delegates via democratic voting mechanism weighted by locked tokens."@en)
      ```

- ## About Delegated Proof of Stake
  A PoS variant where network participants have the right to delegate the production of new blocks to a fixed number of delegates (witnesses), with users determining delegates via democratic voting mechanism weighted by locked tokens.
  
  Provides higher throughput than pure PoS but somewhat more centralized due to limited validator set.
  
  ### Examples
  - EOS, TRON, BitShares