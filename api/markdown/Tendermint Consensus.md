- ### OntologyBlock
  id:: tendermintconsensus-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0557
    - filename-history:: ["BC-0557-tendermintconsensus.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0557
    - preferred-term:: Tendermint Consensus
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A BFT consensus engine combining PBFT with PoS, providing instant finality and supporting high transaction throughput.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:TendermintConsensus
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Byzantine Fault Tolerance]]
    - is-subclass-of:: [[Hybrid Consensus]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :TendermintConsensus))
      (SubClassOf :TendermintConsensus :ByzantineFaultTolerance)
      (SubClassOf :TendermintConsensus :HybridConsensus)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :TendermintConsensus "Tendermint Consensus"@en)
      (AnnotationAssertion rdfs:comment :TendermintConsensus
        "A BFT consensus engine combining PBFT with PoS, providing instant finality and supporting high transaction throughput."@en)
      ```

- ## About Tendermint Consensus
  A BFT consensus engine combining PBFT with PoS, providing instant finality and supporting high transaction throughput.
  
  ### Examples
  - Cosmos Hub, Binance Chain