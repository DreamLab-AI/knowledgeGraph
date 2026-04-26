iri:: http://narrativegoldmine.com/blockchain#ByzantineFaultTolerance
uri:: urn:visionclaw:concept:blockchain:byzantine-fault-tolerance
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:byzantine-fault-tolerance
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Byzantine Fault Tolerance
content-hash:: sha256-12-8efb6f3a4a80
legacy-term-id:: BC-0544
status:: complete
maturity:: established
quality-score:: 0.50
authority-score:: 0.95
version:: 2.1.0
created:: 2025-11-13T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network.

- ### Semantic Classification
  - owl-class:: blockchain:ByzantineFaultTolerance
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Consensus Mechanism]], [[Distributed Agreement]]
  - requires:: [[Cryptographic Signature]], [[Message Authentication]], [[Quorum]]
  - enables:: [[Fault Tolerance]], [[Malicious Node Handling]], [[Consensus Safety]]
  - has-part:: [[Leader Election]], [[Voting Round]], [[Finality Gadget]]
  - bridges-to:: [[AI Energy Optimisation]], [[Distributed Systems]]

- ### Content

  Byzantine Fault Tolerance (BFT) solves the classic Byzantine Generals Problem: how can a group of distributed participants reach consensus when some may be faulty or malicious? The fundamental theorem states that consensus is achievable if and only if more than two-thirds of participants are honest, enabling systems to tolerate up to one-third malicious nodes.

  BFT protocols like Practical Byzantine Fault Tolerance (PBFT) provide deterministic finality: once a block is confirmed, it cannot be reverted even with majority control. This contrasts with Proof-of-Work's probabilistic finality where blocks can theoretically be reversed with sufficient computational power. BFT typically operates in rounds where a designated leader proposes blocks and validators vote in multiple phases ensuring safety and liveness.

  Modern blockchain implementations adapt BFT with Proof-of-Stake validator selection (Tendermint, HotStuff, Casper FFG), achieving both permissionless operation and instant finality. BFT consensus provides high throughput and fast confirmation but traditionally required known validator sets, though advances now enable practical Byzantine agreement with thousands of participants.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
