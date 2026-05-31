- ### Definition
  - Squid Router is a cross-chain liquidity and routing protocol built on the Axelar network that allows token swaps and transfers between different blockchains in a single transaction.

- ### Semantic Classification
  - owl-class:: blockchain:SquidRouter
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Cross-Chain Bridge]]
  - requires:: [[Axelar]], [[Interoperability]]

- ### Content
  - Squid Router uses the Axelar general message passing layer to coordinate swaps and bridging across chains. A user can start with one token on a source chain and receive a different token on a destination chain through a single user action.
  - The protocol combines decentralised exchange liquidity on each chain with cross-chain message passing, so routing logic selects swap paths on both the source and destination networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z