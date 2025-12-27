- ### OntologyBlock
  id:: verifiable-data-registry-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-10101
	- source-domain:: mv
	- preferred-term:: Verifiable Data Registry
	- status:: active
	- definition:: A system that mediates the creation, verification, and resolution of decentralized identifiers and verifiable credentials, typically implemented as a blockchain, distributed ledger, or decentralized network for storing public key and revocation information.
	- owl:class:: mv:VerifiableDataRegistry
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
		- is-subclass-of:: [[Data Registry]]
		- related-to:: [[Blockchain]]
		- related-to:: [[Decentralized Identity]]
		- related-to:: [[Verifiable Credentials]]
	  id:: verifiable-data-registry-relationships
	  collapsed:: true
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

