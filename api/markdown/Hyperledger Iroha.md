- ### OntologyBlock
  id:: hyperledger-iroha-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: BC-0436
	- source-domain:: bc
	- preferred-term:: Hyperledger Iroha
	- status:: active
	- owl:class:: bc:HyperledgerIroha
	- belongsToDomain:: [[blockchain]]
	- definition:: A simple and efficient enterprise-grade blockchain framework within the Hyperledger ecosystem, designed for infrastructure projects requiring distributed ledger technology with support for identity management, asset tracking, and CBDC implementations through its Sumeragi consensus mechanism and WASM-based smart contracts.
	- #### Relationships
	  id:: hyperledger-iroha-relationships
	  collapsed:: true
		- is-subclass-of:: [[Enterprise Blockchain Framework]]
		- related-to:: [[Hyperledger Indy]]
		- related-to:: [[CBDC Infrastructure]]
		- enables:: [[Enterprise DLT Deployment]]

## Platform Overview

### Design Philosophy
- Japanese Kaizen principle inspired
- Eliminates excess (muri) in design
- Simple and efficient architecture
- Byzantine and crash-fault tolerant
- Fully-featured blockchain ledger

### Enterprise Focus
- Permissioned blockchain suitable for trusted environments
- Business blockchain framework for infrastructure
- Identity management capabilities
- Bank-to-bank transfer support
- National ID system support

## Key Features

### Technical Capabilities
- Role-based permission model
- Multi-signature transactions
- Rich query language
- WASM-based smart contracts
- Sumeragi consensus mechanism

### Interoperability
- Hyperledger Cactus support
- Polkaswap protocol integration
- Cross-ledger communication
- Permissioned and non-permissioned support

## Real-World Deployments

### CBDC Implementations
- Bakong: Cambodia CBDC (operational since 2020)
- Papua New Guinea CBDC PoC
- Bokolo Cash: Solomon Islands
- Central bank digital currency infrastructure

### Industry Applications
- Financial services
- Supply chain management
- Identity management systems
- Government digital infrastructure

## 2024 Development Progress

### Q2 2024
- Pre-RC 21 released
- MVP preparation underway
- Focus on scalability and stability
- Security improvements
- TPS optimisation

### Q3 2024
- Pre-RC 22.0 released
- Performance issue fixes
- API refinement
- SDK and documentation updates
- New World State View implementation

### Technical Improvements
- Copy-on-write mechanism for WSV
- Reduced memory usage
- Fewer allocations
- Faster transactions
- Granular state management

## SDK Support

### Language Coverage
- Bash scripting
- Python SDK
- Rust implementation
- Kotlin/Java support
- JavaScript/TypeScript

### Developer Resources
- Iroha 2 Tutorial
- Android development support
- Enterprise banking integration
- Comprehensive documentation

## Architecture

### World State View (WSV)
- In-memory storage system
- Copy-on-write mechanism
- Optimised for high-frequency updates
- Reduced cloning overhead

### Consensus (Sumeragi)
- Unique consensus mechanism
- Secure transaction processing
- Reliable network operation
- Byzantine fault tolerance

## Metadata

- **Migration Status**: Enriched via WebSearch 2024-12-27
- **Last Updated**: 2024-12-27
- **Review Status**: Research-enriched
