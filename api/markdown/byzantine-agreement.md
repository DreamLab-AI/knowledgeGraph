- ### Definition
  - [[Byzantine Agreement]] is a family of [[Consensus Mechanism]] protocols designed to reach a common decision in [[Distributed Systems]] where nodes may fail arbitrarily or behave maliciously.
  - Safety is guaranteed when fewer than one-third of nodes are faulty, as proven by Lamport, Shostak, and Pease.
  - Practical Byzantine Fault Tolerance (PBFT) was a landmark implementation; Tendermint, HotStuff, and Casper are modern derivatives used in [[Blockchain]] platforms.

- ### Overview
  - The Byzantine Generals Problem illustrates the difficulty of reaching agreement when some participants may be traitors sending contradictory information.
  - Classical solutions require at least 3f+1 nodes to tolerate f faulty nodes, and typically involve multi-round message exchange.
  - Modern BFT protocols optimise for partial synchrony, reducing communication overhead while maintaining safety.

- ### Key Aspects
  - **Safety**: All honest nodes agree on the same value.
  - **Liveness**: Eventually a decision is reached under sufficient network conditions.
  - **Threshold**: Tolerates up to f < n/3 Byzantine faults.
  - **Message complexity**: Classical PBFT is O(n²); newer protocols use threshold signatures to reduce this.

- ### Mechanisms
  - Pre-prepare, prepare, and commit phases ensure that a consistent value is agreed upon across honest replicas.
  - [[Cryptographic Signature]] schemes prevent faulty nodes from forging messages.
  - Leader-based variants elect a proposer, with view-change protocols for leader failure.

- ### Applications
  - Tendermint consensus powers Cosmos Hub and many IBC-connected chains.
  - HotStuff is the basis for Diem (Libra) and several enterprise blockchains.
  - Safety-critical aerospace and automotive systems use BFT variants for sensor fusion voting.

- ### Relationships
  - uses:: [[Cryptographic Signature]]
  - uses:: [[Peer-to-Peer Network]]
  - relatedTo:: [[Distributed Systems]]
  - relatedTo:: [[Fault Tolerance]]
  - relatedTo:: [[Blockchain]]
  - implements:: [[Consensus Mechanism]]
  - enables:: [[Blockchain Data]]
  - enables:: [[Smart Contract]]
  - dependsOn:: [[Cryptographic Hash]]
  - contrastsWith:: [[Crash Fault Tolerance]]
  - bridgesTo:: [[Security]]

- ### Provenance
  - updated:: 2026-06-15