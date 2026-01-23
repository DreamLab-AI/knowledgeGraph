- ### OntologyBlock
  id:: nominatedproofofstake-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0551
    - filename-history:: ["BC-0551-nominatedproofofstake.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0551
    - preferred-term:: Nominated Proof of Stake
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A PoS variant where token holders nominate validators for block creation, with elected validators producing blocks while nominators share rewards and slashing risks.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:NominatedProofOfStake
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Of Stake]]
    - also-known-as:: NPoS

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :NominatedProofOfStake))
      (SubClassOf :NominatedProofOfStake :ProofOfStake)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :NominatedProofOfStake "Nominated Proof of Stake"@en)
      (AnnotationAssertion rdfs:comment :NominatedProofOfStake
        "A PoS variant where token holders nominate validators for block creation, with elected validators producing blocks while nominators share rewards and slashing risks."@en)
      ```

- ## About Nominated Proof of Stake
  A PoS variant where token holders nominate validators for block creation, with elected validators producing blocks while nominators share rewards and slashing risks.
  
  ### Examples
  - Polkadot