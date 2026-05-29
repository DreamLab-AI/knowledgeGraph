- ### Definition
  A Miner is a network participant in a proof-of-work blockchain who dedicates computational resources to solving cryptographic hash puzzles, competing to produce valid blocks that extend the canonical chain in exchange for a block reward. Miners collectively secure the network: the cost of a 51% attack is proportional to the total hash rate, representing real-world energy and hardware expenditure.

- ### Semantic Classification
  - owl-class:: blockchain:Miner
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  A Miner **uses** Proof Of Work (the consensus mechanism it implements) and Cryptographic Hash Functions (the computational puzzle it solves). Mining **enables** Consensus Mechanism operation and initiates Block Propagation upon block discovery. Miners may organise into Mining Pools (**hasPart** relationship) to smooth revenue variance. The role is **related to** Block Reward (the primary incentive), Mining Reward, Fee Market (transaction fees as secondary income), and the Mempool (from which miners select transactions for inclusion). Miners **depend on** the Blockchain Network for broadcasting and receiving blocks. The role **contrasts with** Validator Nodes in proof-of-stake systems that replace hash-power competition with economic stake.

- ### Content

  ## Class Declaration
  Declaration(Class(:Miner))

  ## Subclass Relationships
  SubClassOf(:Miner :ConsensusProtocol)
  SubClassOf(:Miner :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Miner
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Miner
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Miner "BC-0054"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Miner "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Miner "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Miner :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Miner :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Miner "Miner"@en)
  AnnotationAssertion(rdfs:comment :Miner
    "Proof-of-work network participant"@en)
  AnnotationAssertion(dct:description :Miner
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Miner "BC-0054")
  AnnotationAssertion(:priority :Miner "1"^^xsd:integer)
  AnnotationAssertion(:category :Miner "consensus-fundamentals"@en)
  )
      ```

  - ## About Miner

  - Proof-of-work network participant within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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