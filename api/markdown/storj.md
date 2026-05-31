- ### Definition
  - Storj is a decentralised cloud storage network in which files are encrypted, split into pieces, and distributed across independent node operators who are paid for storage and bandwidth.

- ### Semantic Classification
  - owl-class:: blockchain:Storj
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Decentralised Storage]]
  - bridges-to:: [[Decentralised Storage]]
  - requires:: [[Cryptography]], [[Decentralised Storage]]

- ### Content
  - Storj encrypts files client-side, divides them using erasure coding, and distributes the resulting pieces across a global network of storage nodes. Files can be reconstructed from a subset of pieces, providing redundancy without storing full copies on any single node.
  - Node operators earn the network's token for storing data and serving downloads. The service presents an S3-compatible interface so applications can use it in place of conventional object storage.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z