- ### OntologyBlock
  id:: pureproofofstake-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0549
    - filename-history:: ["BC-0549-pureproofofstake.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0549
    - preferred-term:: Pure Proof of Stake
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: A PoS variant that randomly selects validators from all stakers proportional to their stake weight, without delegation mechanisms.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PureProofOfStake
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Proof Of Stake]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :PureProofOfStake))
      (SubClassOf :PureProofOfStake :ProofOfStake)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :PureProofOfStake "Pure Proof of Stake"@en)
      (AnnotationAssertion rdfs:comment :PureProofOfStake
        "A PoS variant that randomly selects validators from all stakers proportional to their stake weight, without delegation mechanisms."@en)
      ```

- ## About Pure Proof of Stake
  A PoS variant that randomly selects validators from all stakers proportional to their stake weight, without delegation mechanisms.
  
  ### Examples
  - Algorand