- ### Definition
  - The general problem of getting distributed processes to agree on a common value or decision despite failures, communication delays or adversarial behaviour.

- ### Semantic Classification
  - owl-class:: distributed-systems:Consensus
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[Tendermint]]
  - requires:: [[Distributed Systems]]
  - enables:: [[Consensus Mechanisms]], [[Distributed Ledger]]

- ### Content
  - Consensus is the foundational distributed computing problem of reaching agreement on a single value among processes that may fail or be separated by an unreliable network. Classical results characterise what is achievable under different fault and timing assumptions, including the impossibility of deterministic consensus in fully asynchronous systems with even one crash fault.
  - Practical consensus protocols add timing assumptions, randomisation or partial synchrony to make progress, and they provide the agreement guarantees needed for replicated state machines, distributed databases and blockchains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z