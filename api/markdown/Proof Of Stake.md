- ### OntologyBlock
  id:: proofofstake-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0546
    - filename-history:: ["BC-0546-proofofstake.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0546
    - preferred-term:: Proof of Stake
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Formally, a consensus model where the blockchain network is secured by users locking cryptocurrency into the blockchain network through a process called staking.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:ProofOfStake
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Based Consensus]]
    - also-known-as:: PoS

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ProofOfStake))
      (SubClassOf :ProofOfStake :ProofBasedConsensus)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ProofOfStake "Proof of Stake"@en)
      (AnnotationAssertion rdfs:comment :ProofOfStake
        "A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Formally, a consensus model where the blockchain network is secured by users locking cryptocurrency into the blockchain network through a process called staking."@en)
      ```

- ## About Proof of Stake
  A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Formally, a consensus model where the blockchain network is secured by users locking cryptocurrency into the blockchain network through a process called staking.
  
  Uses 99% less energy than PoW. Economic security achieved through slashing (penalties for misbehavior like double-signing or being offline). High cost of attack requires controlling >33% of stake. Provides finality guarantees - cannot revert blocks without majority slashing.
  
  ### Examples
  - Ethereum post-Merge (Gasper), Cardano (Ouroboros), Polkadot (NPoS)
  
  ### Historical Context
  - Concept introduced by Sunny King and Scott Nadal in Peercoin (2012).