The memory pool maintained by each blockchain node holding broadcast but as-yet unconfirmed transactions awaiting inclusion in a block. Miners select transactions from the mempool, typically prioritising by fee rate, while node operators use mempool policies to manage capacity and mitigate spam.

### Semantic Classification

### Content

## Class Declaration
Declaration(Class(:Mempool))

## Subclass Relationships
SubClassOf(:Mempool :DistributedDataStructure)
SubClassOf(:Mempool :BlockchainEntity)

## Essential Properties
SubClassOf(:Mempool
  (ObjectSomeValuesFrom :partOf :Blockchain))

SubClassOf(:Mempool
  (ObjectSomeValuesFrom :hasProperty :Property))

## Data Properties
DataPropertyAssertion(:hasIdentifier :Mempool "BC-0019"^^xsd:string)
DataPropertyAssertion(:hasAuthorityScore :Mempool "1.0"^^xsd:decimal)
DataPropertyAssertion(:isFoundational :Mempool "true"^^xsd:boolean)

## Object Properties
ObjectPropertyAssertion(:enablesFeature :Mempool :BlockchainFeature)
ObjectPropertyAssertion(:relatesTo :Mempool :RelatedConcept)

## Annotations
AnnotationAssertion(rdfs:label :Mempool "Mempool"@en)
AnnotationAssertion(rdfs:comment :Mempool
  "Memory pool of pending transactions"@en)
AnnotationAssertion(dct:description :Mempool
  "Foundational blockchain concept with formal ontological definition"@en)
AnnotationAssertion(:termID :Mempool "BC-0019")
AnnotationAssertion(:priority :Mempool "1"^^xsd:integer)
AnnotationAssertion(:category :Mempool "blockchain-fundamentals"@en)
)

## About Mempool

- Memory pool of pending transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

### Key Characteristics

- 1. **Definitional Property**: Core defining characteristic
- 2. **Functional Property**: Operational behavior
- 3. **Structural Property**: Compositional elements
- 4. **Security Property**: Security guarantees provided
- 5. **Performance Property**: Efficiency considerations

### Technical Components

- **Implementation**: How concept is realized technically
- **Verification**: Methods for validating correctness
- **Interaction**: Relationships with other components
- **Constraints**: Technical limitations and requirements

### Use Cases

- **1. Core Blockchain Operation**
- **Application**: Fundamental blockchain functionality
- **Example**: Practical implementation in major blockchains
- **Requirements**: Technical prerequisites
- **Benefits**: Value provided to blockchain systems

### Standards & References

- [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
- [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
- [[NIST NISTIR]] - Blockchain and distributed ledger technologies

### Current Landscape (2026)

- The public mempool has been largely hollowed out as a transaction pathway: by 2026 roughly 80% of Ethereum DeFi order flow bypasses it entirely, routing through private RPCs (MEV-Blocker, Flashbots Protect, Merkle, Blink and Polygon's Private Mempool) and order-flow auctions rather than being broadcast to all nodes.
- Encrypted mempools have moved from research to concrete standardisation: EIP-8105 "Universal Enshrined Encrypted Mempool" (Shutter's Jannik Luhn, published 17 December 2025) proposes a scheme-agnostic native encrypted transaction type (0x05 encrypted, 0x06 decrypted under EIP-2718) that hides payloads until block ordering is fixed, supporting threshold encryption, MPC, TEEs, delay encryption or FHE.
- A competing design, EIP-8184 "LUCID" (created 4 March 2026), offers a public encrypted mempool built on commit-before-reveal with delayed decryption, keeping MEV-sensitive flow on a permissionless inclusion path rather than in trusted private channels; both are being weighed for Ethereum's next upgrade cycle (Glamsterdam/Hegotá).
- Proposer-builder separation is being enshrined in-protocol: EIP-7732 (ePBS) is the headline feature of the Glamsterdam upgrade targeted for the back half of 2026, replacing off-chain MEV-Boost relays (currently carrying 80-90% of blocks) with an in-protocol commit-reveal handoff and a Payload Timeliness Committee.
- Decentralised, TEE-based block building consolidated around BuilderNet (launched November 2024, jointly run by Flashbots, Beaverbuild and Nethermind); by 5 December 2024 Flashbots had migrated all order flow to it and shut down its centralised builders, reaching BuilderNet v1.2 with reproducible Intel TDX images in February 2025.
- Builder centralisation remains the core open challenge: with PBS adoption near-universal (~93% of blocks), the top three builders produce 80-95% of PBS blocks, and the 4 December 2025 Prysm circuit-breaker incident collapsed PBS block share from ~90% to near-zero, exposing supply-chain fragility.
- Private routing is proving to be no guaranteed shield: a December 2025 arXiv study documented 2,932 sandwich attacks on 3,126 private transactions (Nov-Dec 2024, ~$409k user losses), and MEV bots still extracted around $24 million in a single 30-day window over December 2025-January 2026.

### References

- 1. Shutter Network (2025). Introducing EIP-8105 Universal Enshrined Encrypted Mempool. https://blog.shutter.network/introducing-the-universal-enshrined-encrypted-mempool-eip/
- 2. Ethereum (Luhn, J.) (2025). EIP-8105: Universal Enshrined Encrypted Mempool. https://eips.ethereum.org/EIPS/eip-8105
- 3. Ethereum (2026). EIP-8184: LUCID encrypted mempool. https://eips.ethereum.org/EIPS/eip-8184
- 4. BlockEden.xyz (2026). Fighting MEV in 2026: How MEV-Blocker, BuilderNet, and CoW Swap Protect DeFi. https://blockeden.xyz/blog/2026/05/02/mempool-privacy-mev-blocker-flashbots-suave-cowswap-defi-protection/
- 5. The Off-Chain Thoughts (2026). MEV, Encrypted Mempools, and the Execution Layer. https://theoffchainthoughts.substack.com/p/the-cartel-we-renamed-mev-encrypted
- 6. Sandwiched and Silent: Behavioral Adaptation and Private Channel Exploitation (2025). arXiv. https://arxiv.org/html/2512.17602v1

### Provenance

