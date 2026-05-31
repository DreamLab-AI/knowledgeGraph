- ### Definition
  - Storage systems that distribute data across many independent nodes rather than a single central provider, often using content addressing and cryptographic verification to ensure integrity and availability.

- ### Semantic Classification
  - owl-class:: distributed-systems:DecentralisedStorage
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[IPFS]], [[Filecoin]]
  - requires:: [[Cryptographic Hash]]
  - enables:: [[Provenance]]

- ### Content
  - Decentralised storage spreads data across a network of independent nodes, addressing content by cryptographic hash so that any copy can be verified against its identifier. This removes reliance on a single provider and can improve resilience and censorship resistance.
  - Systems such as IPFS provide content-addressed retrieval, while networks like Filecoin add economic incentives for nodes to store and serve data over time. Hash-based addressing also supports data provenance and integrity guarantees.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z