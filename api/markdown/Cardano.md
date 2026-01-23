- ### OntologyBlock
  id:: cardano-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0567
    - filename-history:: ["BC-0567-cardano.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0567
    - preferred-term:: Cardano
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A research-driven blockchain platform using the mathematically-verified Ouroboros Proof-of-Stake consensus protocol. Features layered architecture separating settlement and computation layers, written in Haskell with Plutus for smart contracts. Emphasizes formal verification, sustainability, decentralization, and provable security guarantees.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Cardano
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Smart Contract Platform]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Cardano))
      (SubClassOf :Cardano :SmartContractPlatform)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Cardano "Cardano"@en)
      (AnnotationAssertion rdfs:comment :Cardano
        "A research-driven blockchain platform using the mathematically-verified Ouroboros Proof-of-Stake consensus protocol. Features layered architecture separating settlement and computation layers, written in Haskell with Plutus for smart contracts. Emphasizes formal verification, sustainability, decentralization, and provable security guarantees."@en)
      ```

- ## About Cardano
  A research-driven blockchain platform using the mathematically-verified Ouroboros Proof-of-Stake consensus protocol. Features layered architecture separating settlement and computation layers, written in Haskell with Plutus for smart contracts. Emphasizes formal verification, sustainability, decentralization, and provable security guarantees.
  
  Processes ~270 TPS. Stake pools serve as validators, randomly selected as slot leaders. Academic peer-reviewed development approach. Native token ADA.
  
  ### Historical Context
  - Founded by IOHK (Charles Hoskinson). Ouroboros protocol peer-reviewed at CRYPTO 2017.