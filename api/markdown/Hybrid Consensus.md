- ### OntologyBlock
  id:: hybridconsensus-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0545
    - filename-history:: ["BC-0545-hybridconsensus.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0545
    - preferred-term:: Hybrid Consensus
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Consensus mechanisms combining multiple approaches, typically merging proof-based methods with BFT finality or mixing PoW and PoS elements.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:HybridConsensus
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Consensus Mechanism]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :HybridConsensus))
      (SubClassOf :HybridConsensus :ConsensusMechanism)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :HybridConsensus "Hybrid Consensus"@en)
      (AnnotationAssertion rdfs:comment :HybridConsensus
        "Consensus mechanisms combining multiple approaches, typically merging proof-based methods with BFT finality or mixing PoW and PoS elements."@en)
      ```

- ## About Hybrid Consensus
  Consensus mechanisms combining multiple approaches, typically merging proof-based methods with BFT finality or mixing PoW and PoS elements.
  
  Attempts to balance security, performance, and decentralization by leveraging strengths of multiple consensus types.