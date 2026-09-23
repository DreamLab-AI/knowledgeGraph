
Byzantine Agreement is a class of distributed consensus protocols that guarantee correct operation even when a subset of participating nodes behave arbitrarily — sending conflicting, malicious, or unpredictable messages. Originating from the Byzantine Generals Problem formalised by Lamport, Shostak, and Pease in 1982, these protocols ensure that all honest nodes reach the same decision provided the number of faulty nodes does not exceed one-third of the total. Byzantine Agreement is foundational to blockchain consensus mechanisms and safety-critical distributed systems.

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

- ### Provenance

