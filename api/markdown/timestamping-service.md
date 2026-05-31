- ### Definition
  - A timestamping service is a system that issues verifiable proof that a piece of data existed at or before a particular time, often using cryptographic methods.

- ### Semantic Classification
  - owl-class:: cryptography:TimestampingService
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Trusted Timestamping]]
  - bridges-to:: [[Timestamp]]
  - requires:: [[Hash Function]], [[Cryptography]]
  - enables:: [[Content Provenance]]

- ### Content
  - A timestamping service receives a hash of a document and returns a signed token binding that hash to a time value. Anyone can later verify that the document existed at the recorded time without revealing the document itself.
  - Centralised services follow the RFC 3161 standard with a trusted authority, while blockchain-based timestamping anchors a hash in a public ledger so the existence proof relies on the immutability of the chain rather than a single authority.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z