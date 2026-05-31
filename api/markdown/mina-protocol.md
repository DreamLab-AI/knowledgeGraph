- ### Definition
  - Mina Protocol is a blockchain that maintains a constant-size proof of its state using recursive zero-knowledge proofs, keeping the chain compact.

- ### Semantic Classification
  - owl-class:: distributed-systems:MinaProtocol
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Distributed Ledger Technology]]
  - requires:: [[Cryptography]]
  - enables:: [[Web3 Infrastructure]]

- ### Content
  - Mina Protocol replaces the growing transaction history of typical blockchains with a recursive succinct proof that summarises the entire chain state. This keeps the verifiable record at a fixed, small size.
  - Nodes verify the current state by checking a single proof rather than replaying all prior blocks. The design targets lightweight participation and uses zero-knowledge proof techniques throughout.

- ### Provenance
  - sources:: [[https://minaprotocol.com/]], [[https://docs.minaprotocol.com/]]
  - migration-date:: 2026-05-29T00:00:00Z