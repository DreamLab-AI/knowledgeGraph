
The fundamental unit of a blockchain: a cryptographically linked, immutable data container that batches a set of transactions together with a block header containing the Merkle root of those transactions, a timestamp, the previous block's hash, and consensus-specific fields such as a nonce or validator signature. Sequential blocks form the chain that provides an append-only audit trail.

- ### Semantic Classification

- ### Content

  ## Class Declaration
  Declaration(Class(:Block))

  ## Subclass Relationships
  SubClassOf(:Block :DistributedDataStructure)
  SubClassOf(:Block :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Block
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Block
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Block "BC-0003"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Block "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Block "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Block :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Block :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Block "Block"@en)
  AnnotationAssertion(rdfs:comment :Block
    "Fundamental unit containing transactions"@en)
  AnnotationAssertion(dct:description :Block
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Block "BC-0003")
  AnnotationAssertion(:priority :Block "1"^^xsd:integer)
  AnnotationAssertion(:category :Block "blockchain-fundamentals"@en)
  )

  - ## About Block

  - Fundamental unit containing transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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

- ### Current Landscape (2026)
  - Ethereum's Fusaka upgrade (activated 3 December 2025) reshaped what a block carries: EIP-7594 (PeerDAS) lets validators sample blob data rather than download every blob in full, each full node holding roughly 1/8th of the data and enabling a theoretical 8x increase in per-block blob throughput.
  - Block capacity was decoupled from named forks via Blob Parameter Only (BPO) forks — BPO1 (9 December 2025) raised the per-block blob target/max from 6/9 to 10/15, and BPO2 (7 January 2026) to 14/21 — following the Dencun (March 2024, EIP-4844) introduction of ephemeral Type-3 blob transactions with their own EIP-1559-style fee market.
  - The L1 block gas limit was raised from 30M to 60M across 2025 — the first significant increase since 2021 — with Fusaka's EIP-7935 standardising 60M as the default; EIP-7825 introduced a protocol-level per-transaction cap of 16,777,216 (2^24) gas as DoS hardening ahead of parallel execution.
  - Fusaka also pinned a hard cap on physical block size: the RLP-encoded execution block is limited to 10 MiB (MAX_BLOCK_SIZE 10,485,760 bytes) with a 2 MiB margin reserved for beacon-block framing, keeping propagation safe as gas limits climb; EIP-7918 added a proportional blob base-fee floor tied to L1 execution cost.
  - Pectra (7 May 2025) doubled blob throughput (EIP-7691, target 3→6, max 6→9), added EOA-as-contract execution via EIP-7702, and raised the maximum effective validator balance to 2,048 ETH, materially changing which validators propose blocks.
  - Block building remains split from block proposal in practice via the out-of-protocol MEV-Boost relay stack, a persistent censorship and centralisation concern; the next upgrade, Glamsterdam (targeting H2 2026), headlines enshrined Proposer-Builder Separation (EIP-7732/ePBS) and Block-level Access Lists (EIP-7928).
  - Open frontier as of 2026: ePBS is estimated to cut MEV extraction by up to ~70% and widen the propagation window from ~2s to ~9s, while Block-level Access Lists pre-declare touched accounts/storage to unlock parallel execution — together underpinning a credible push to raise the block gas limit from 60M toward ~200M and L1 throughput toward 10,000 TPS.

- ### References
  - 1. Ethereum Foundation (2025). Fusaka Mainnet Announcement. https://blog.ethereum.org/2025/11/06/fusaka-mainnet-announcement
  - 2. ethereum.org (2026). Fulu-Osaka (Fusaka). https://ethereum.org/roadmap/fusaka/
  - 3. Ethereum Foundation (2026). Protocol Priorities Update for 2026. https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026
  - 4. Spark / spark.money (2026). Why Bitcoin L2s Skip Blobs — Ethereum EIP-4844 Blob Fee Market. https://www.spark.money/research/ethereum-eip-4844-blob-fee-market
  - 5. Labrys (2026). Glamsterdam: what's next for Ethereum. https://labrys.io/insights/glamsterdam-whats-next-on-ethereums-upgrade-path

- ### Provenance

