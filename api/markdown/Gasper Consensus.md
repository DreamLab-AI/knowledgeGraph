- ### OntologyBlock
  id:: gasperconsensus-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0554
    - filename-history:: ["BC-0554-gasperconsensus.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0554
    - preferred-term:: Gasper Consensus
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Ethereum's PoS consensus combining Casper FFG (finality gadget) with LMD GHOST (fork choice rule). Validators directly stake ether without delegation mechanism.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:GasperConsensus
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Of Stake]]
    - is-subclass-of:: [[Hybrid Consensus]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :GasperConsensus))
      (SubClassOf :GasperConsensus :ProofOfStake)
      (SubClassOf :GasperConsensus :HybridConsensus)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :GasperConsensus "Gasper Consensus"@en)
      (AnnotationAssertion rdfs:comment :GasperConsensus
        "Ethereum's PoS consensus combining Casper FFG (finality gadget) with LMD GHOST (fork choice rule). Validators directly stake ether without delegation mechanism."@en)
      ```

- ## About Gasper Consensus
  Ethereum's PoS consensus combining Casper FFG (finality gadget) with LMD GHOST (fork choice rule). Validators directly stake ether without delegation mechanism.
  
  Provides finality - to revert a finalized block, attacker must lose at least 1/3 of total staked ETH.
  
  ### Examples
  - Ethereum (post-Merge)