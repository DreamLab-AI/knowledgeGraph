iri:: http://narrativegoldmine.com/infrastructure#VerifiableDataRegistry
uri:: urn:visionclaw:concept:infrastructure:verifiable-data-registry
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:verifiable-data-registry
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Verifiable Data Registry
content-hash:: sha256-12-48c96b710bbd
legacy-term-id:: MV-10101
status:: active
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

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
