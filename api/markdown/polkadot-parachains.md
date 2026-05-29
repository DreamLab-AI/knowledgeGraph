- ### Definition
  - Application-specific blockchains that connect to and are secured by the Polkadot Relay Chain, enabling interoperability and shared security across heterogeneous blockchain networks.

- ### Semantic Classification
  - owl-class:: blockchain:PolkadotParachains
  - owl-role:: Process
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Content
  Polkadot Parachains are sovereign blockchains built with the Substrate framework and leased a slot on the Polkadot Relay Chain through an on-chain auction mechanism. Once connected, a parachain's block production is collated locally and validated by a randomly assigned subset of the relay chain's nominated proof-of-stake validators, meaning the parachain inherits the full economic security of the entire DOT-staked validator pool without needing to bootstrap its own validator set.

  Cross-parachain communication is handled natively via the Cross-Consensus Messaging format (XCM), enabling assets and arbitrary data to flow between parachains and the relay chain without external bridges. This architecture addresses the blockchain scalability trilemma by separating application-layer execution (parachains) from consensus and security (relay chain), and represents one of the most technically sophisticated approaches to heterogeneous multi-chain interoperability deployed in production.

- ### Provenance
  - sources:: [[Polkadot]], [[Web3 Foundation]]
  - migration-date:: 2026-04-26T00:00:00Z