- ### Definition
  - A system that mediates the creation, verification, and resolution of decentralized identifiers and verifiable credentials, typically implemented as a blockchain, distributed ledger, or decentralized network for storing public key and revocation information.

- ### Semantic Classification
  - owl-class:: infrastructure:VerifiableDataRegistry
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Registry]]

- ### Content

  - ## Overview
  - Verifiable data registries provide the infrastructure for resolving DIDs to their associated documents containing public keys and service endpoints. These registries enable verification of credentials without requiring direct issuer contact.
  - ## Technical Details
  - ### Registry Functions
		- DID document storage and resolution
		- Public key anchoring
		- Revocation status tracking
		- Schema and context hosting
  - ### Implementation Types
		- **Blockchain-based**: Ethereum, Bitcoin, Hyperledger
		- **Distributed Ledger**: IOTA, Hedera Hashgraph
		- **Decentralized Storage**: IPFS, Ceramic Network
		- **Web-based**: did:web method using DNS
  - ### Key Properties
		- Immutability of historical records
		- Public accessibility for verification
		- Decentralized control
		- Cryptographic security
  - ## Applications
  - Metaverse identity resolution
  - Credential revocation checking
  - Cross-platform identity interoperability
  - Decentralized PKI infrastructure
  - Trust registry for issuers

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z