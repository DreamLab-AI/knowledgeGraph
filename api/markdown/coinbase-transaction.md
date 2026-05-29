- ### Definition
  The first transaction in every blockchain block, created by the miner or block producer with no inputs, that issues the block reward plus accumulated transaction fees to the miner's address. The coinbase transaction is the sole mechanism by which new cryptocurrency enters circulation according to protocol-defined issuance rules.

- ### Relationships
  The coinbase transaction **has part** Block Reward and Transaction Fee — these are the two components aggregated into the output value. It is **part of** Blockchain Transaction (as a special subtype) and the Blockchain Network ledger. It **requires** Mining (or equivalent block production) and a Consensus Mechanism to determine which miner earns it. It **enables** Mining Reward distribution and the ongoing supply of Cryptocurrency. It is **related to** Proof Of Work (where coinbase is mined) and Blockchain Protocol (which defines issuance schedules).

- ### Content

  ## Class Declaration
  Declaration(Class(:CoinbaseTransaction))

  ## Subclass Relationships
  SubClassOf(:CoinbaseTransaction :ConsensusProtocol)
  SubClassOf(:CoinbaseTransaction :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:CoinbaseTransaction
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:CoinbaseTransaction
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :CoinbaseTransaction "BC-0068"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :CoinbaseTransaction "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :CoinbaseTransaction "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :CoinbaseTransaction :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :CoinbaseTransaction :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :CoinbaseTransaction "Coinbase Transaction"@en)
  AnnotationAssertion(rdfs:comment :CoinbaseTransaction
    "Block reward transaction"@en)
  AnnotationAssertion(dct:description :CoinbaseTransaction
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :CoinbaseTransaction "BC-0068")
  AnnotationAssertion(:priority :CoinbaseTransaction "1"^^xsd:integer)
  AnnotationAssertion(:category :CoinbaseTransaction "consensus-fundamentals"@en)
  )
      ```

  - ## About Coinbase Transaction

  - Block reward transaction within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z