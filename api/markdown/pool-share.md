- ### Definition
  A proof-of-work unit submitted by an individual miner to a mining pool server demonstrating bounded computational work toward finding a valid block hash. Pool shares have a lower difficulty target than the network block target, enabling the pool to credit proportional work and distribute block rewards fairly across contributors.

- ### Relationships
  Pool Share is **part of** Mining Pool (the collective it serves) and Mining (the broader process). It **requires** Proof Of Work (as the underlying hash puzzle) and Consensus Mechanism (the network rules it contributes to). It **enables** Mining Reward distribution and Block Reward allocation. It is **related to** Cryptocurrency (as the economic output), Blockchain Network (the ledger being extended), and Blockchain Protocol (which defines share difficulty). It **contrasts with** Proof of Stake, which replaces hash-based contributions with stake-weighted selection.

- ### Content

  ## Class Declaration
  Declaration(Class(:PoolShare))

  ## Subclass Relationships
  SubClassOf(:PoolShare :ConsensusProtocol)
  SubClassOf(:PoolShare :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PoolShare
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PoolShare
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PoolShare "BC-0066"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PoolShare "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PoolShare "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PoolShare :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PoolShare :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PoolShare "Pool Share"@en)
  AnnotationAssertion(rdfs:comment :PoolShare
    "Mining contribution unit"@en)
  AnnotationAssertion(dct:description :PoolShare
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PoolShare "BC-0066")
  AnnotationAssertion(:priority :PoolShare "1"^^xsd:integer)
  AnnotationAssertion(:category :PoolShare "consensus-fundamentals"@en)
  )
      ```

  - ## About Pool Share

  - Mining contribution unit within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies



  <!-- Merged from Pool Share.md: community, innovation, software engineering -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z