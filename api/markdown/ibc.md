- ### Definition
  - Inter-Blockchain Communication is a protocol for relaying authenticated data and tokens between independent blockchains. It is the native interoperability standard of the Cosmos ecosystem.

- ### Semantic Classification
  - owl-class:: blockchain:IBC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Interoperability]]
  - bridges-to:: [[Tendermint]]
  - requires:: [[Cosmos SDK]], [[Merkle Tree]]
  - enables:: [[Cross-Chain Bridge]]

- ### Content
  - Inter-Blockchain Communication defines how two chains establish connections and channels, then exchange packets whose validity each chain can verify using light client proofs. Relayers move packets between chains but cannot forge them.
  - The protocol is widely used to transfer tokens between Cosmos chains and to support cross-chain applications. Its design separates the transport layer from application-level packet formats, allowing different use cases to share the same connection infrastructure.

- ### Provenance
  - sources:: [[https://www.ibcprotocol.dev]], [[https://github.com/cosmos/ibc]]
  - migration-date:: 2026-05-29T00:00:00Z