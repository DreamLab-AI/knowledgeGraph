- ### OntologyBlock
  id:: ouroborosconsensus-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0553
    - filename-history:: ["BC-0553-ouroborosconsensus.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0553
    - preferred-term:: Ouroboros Consensus
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A mathematically-verified PoS consensus protocol using slot leaders to validate transactions and add blocks. Divides time into epochs and slots, with stake pools randomly selected as slot leaders.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:OuroborosConsensus
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Of Stake]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :OuroborosConsensus))
      (SubClassOf :OuroborosConsensus :ProofOfStake)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :OuroborosConsensus "Ouroboros Consensus"@en)
      (AnnotationAssertion rdfs:comment :OuroborosConsensus
        "A mathematically-verified PoS consensus protocol using slot leaders to validate transactions and add blocks. Divides time into epochs and slots, with stake pools randomly selected as slot leaders."@en)
      ```

- ## About Ouroboros Consensus
  A mathematically-verified PoS consensus protocol using slot leaders to validate transactions and add blocks. Divides time into epochs and slots, with stake pools randomly selected as slot leaders.
  
  Rigorously tested in academic settings. Emphasizes provable security guarantees.
  
  ### Examples
  - Cardano
  
  ### Historical Context
  - Developed by IOHK research team, peer-reviewed at CRYPTO 2017.