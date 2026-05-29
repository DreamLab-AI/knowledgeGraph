- ### Definition
  Dynamic Scalable BFT (DSBFT) is an optimised Byzantine fault-tolerant consensus protocol that combines Distributed Key Generation (DKG) with BLS aggregate signatures to allow a validator committee to reach consensus with O(n) rather than O(n²) message complexity, while supporting dynamic membership—nodes may join or leave the committee without requiring a full protocol restart or trusted dealer for key setup.

- ### Semantic Classification
  - owl-class:: blockchain:DynamicScalableBFT
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Practical Byzantine Fault Tolerance]]
  - requires:: [[Byzantine Fault Tolerance]], [[Key Management]], [[Digital Signature]]
  - uses:: [[Cryptographic Primitive]], [[Consensus Algorithm]]
  - enables:: [[Blockchain Scalability]], [[Finality]], [[Blockchain Governance]]
  - hasPart:: [[Consensus Mechanism]], [[Validator Node]]
  - relatedTo:: [[Blockchain Network]], [[Fault Tolerance]], [[Distributed Systems]]

- ### Content
  Classical BFT protocols such as PBFT achieve safety and liveness but suffer from quadratic message complexity: each node must communicate with every other node in both the prepare and commit phases, limiting practical deployment to committees of tens of nodes before network overhead becomes prohibitive. Dynamic Scalable BFT addresses this scaling ceiling through two complementary mechanisms: BLS signature aggregation and DKG-based threshold key setup.

  BLS aggregate signatures are the critical bandwidth optimiser. In a committee of n validators, each validator's individual attestation is a BLS signature of approximately 48 bytes (on BLS12-381). The leader node aggregates all received signatures into a single constant-size aggregate signature that any observer can verify against the aggregated public key. This collapses per-round communication from O(n²) individual signatures to O(n) individual messages inbound to the aggregator plus one outbound aggregate, making hundred-member committees practical and thousand-member committees tractable.

  DKG solves the key setup problem for threshold BLS without requiring a trusted dealer. In a standard threshold signature scheme, a trusted party generates the master secret and distributes shares; if that party is compromised, the entire scheme is broken. DKG protocols (Pedersen DKG, Feldman VSS) distribute the key generation across all participants: each node contributes randomness, and the joint protocol produces a threshold public key and private key shares such that no single participant ever holds the full secret. This preserves the decentralisation property essential to permissionless and semi-permissioned blockchain systems.

  Dynamic membership is handled through reconfiguration epochs: when a node wishes to join or leave, a new DKG ceremony generates fresh key material for the new committee composition, and the old epoch's validators sign a handoff message certifying the new committee. This avoids the need to restart the chain and allows continuous operation during membership transitions, which is essential for production blockchain networks subject to hardware failures, software upgrades, and economic incentive-driven validator churn.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z