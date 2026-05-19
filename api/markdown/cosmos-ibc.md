- ### Definition
  - Inter-Blockchain Communication protocol that enables different blockchain networks to exchange data and tokens, providing trustless interoperability in the Cosmos ecosystem.

- ### Semantic Classification
  - owl-class:: blockchain:CosmosIBC
  - owl-role:: Process
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - is-subclass-of:: [[Interoperability Protocol]], [[Cross-Chain Communication]]
  - requires:: [[Blockchain Light Client]], [[Merkle Proof]], [[Packet Authentication]]
  - enables:: [[Inter-Chain Value Transfer]], [[Cross-Chain Contracts]], [[Cosmos Ecosystem]]
  - has-part:: [[Connection Protocol]], [[Channel Protocol]], [[Packet System]]
  - bridges-to:: [[Polkadot XCM]], [[Layer 2 Interop]]

- ### Content

  Inter-Blockchain Communication (IBC) protocol enables trustless communication between independent Cosmos SDK blockchains without centralised intermediaries. Each chain maintains light clients of counterparty chains, verifying state through Merkle proofs rather than trusting external validators. IBC establishes bidirectional "channels" enabling packet relay at the application layer.

  The protocol operates in three layers: connection layer managing cryptographic proofs between chains, channel layer establishing virtual communication paths for specific applications, and packet layer transferring serialised data with timeout and acknowledgement mechanisms. Tokens transfer through fungible token transfers (ICS-20) creating wrapped representations on destination chains whilst burning originals.

  IBC enables the Cosmos "Internet of Blockchains" vision—a network of independent chains maintaining sovereignty whilst achieving interoperability. Application-specific blockchains optimise for particular use cases (identity, payments, DeFi), then connect through IBC enabling users and value to flow seamlessly across the ecosystem.

- ### Provenance
  - sources:: [[Cosmos Network]], [[IBC Protocol]]
  - migration-date:: 2026-04-26T00:00:00Z