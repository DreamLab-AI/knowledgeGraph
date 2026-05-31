- ### Definition
  - A family of provably secure proof-of-stake consensus protocols that divide time into epochs and slots and select block producers in proportion to stake.

- ### Semantic Classification
  - owl-class:: blockchain:Ouroboros
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Proof of Stake]]
  - bridges-to:: [[Cardano]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Consensus Mechanism]]

- ### Content
  - Ouroboros structures time into epochs subdivided into slots, with a leader chosen for each slot using a stake-weighted random selection. The protocol comes with formal security proofs relating its safety to assumptions about honest stake.
  - It is the consensus protocol used by Cardano and has been extended through several versions to improve decentralisation and resistance to adversaries. Randomness for leader election is derived in a verifiable way to limit manipulation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z