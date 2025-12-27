- ### OntologyBlock
  id:: hyperledger-indy-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: BC-0435
	- source-domain:: bc
	- preferred-term:: Hyperledger Indy
	- status:: active
	- owl:class:: bc:HyperledgerIndy
	- belongsToDomain:: [[blockchain]]
	- definition:: An open-source, decentralised identity management platform within the Linux Foundation's Hyperledger ecosystem, providing tools, libraries, and reusable components for creating self-sovereign identities (SSI) rooted on distributed ledgers, enabling privacy-preserving verifiable credentials that are interoperable across administrative domains and applications.
	- #### Relationships
	  id:: hyperledger-indy-relationships
	  collapsed:: true
		- is-subclass-of:: [[Decentralised Identity Platform]]
		- related-to:: [[Self-Sovereign Identity]]
		- related-to:: [[Verifiable Credentials]]
		- enables:: [[Privacy-Preserving Identity]]

## Platform Overview

### Key Characteristics
- Open-source under Linux Foundation
- Purpose-built for privacy-preserving credentials
- Token-less, public, permissioned blockchain
- Interoperable with other blockchains
- Stable platform with 100% uptime since Feb 2020

### Network Model
- Public and permissioned architecture
- Write permission required for ledger
- Read access open to all
- Private information stays off-chain
- Private keys not stored on network

## Architecture Components

### Core Elements
- Identity Wallet: Secure credential management
- DID (Decentralised Identifier) Method
- DID Resolver for identifier resolution
- Verifiable Credentials (VCs)
- Tamper-proof ledger for transactions

### VC Ecosystem
- VC Issuer for credential creation
- VC Holder for storage and presentation
- Digital representations of real-world credentials
- Degrees, licences, certifications

## 2024 Developments

### Indy on Besu
- PoC developed late 2023
- Implementation progressing through 2024
- Addresses high-frequency operations
- Improves scalability and performance
- Simplifies architecture

### Technical Improvements
- Credential revocation handling
- Validation node capacity increase
- Enhanced decentralisation
- Network resilience improvements
- W3C DID and VC compatibility

## DID:Indy Method

### Network Interoperability
- Seamless cross-network credentials
- Verifiable presentations from multiple sources
- Global "network of networks" effect
- Credential scaling capability
- Multiple Indy network support

### European Digital Identity
- Potential Trusted List Provider role
- European Digital Identity Wallet compatibility
- SSI framework integration
- Regulatory alignment efforts

## Related Projects

### Hyperledger Aries
- Derived from Indy project
- Blockchain ledger-agnostic framework
- Modular interoperability solution
- Agent-to-agent communication
- Credential exchange protocols

### Sovrin Network
- Production Indy deployment
- Six years of operation
- 100% uptime since February 2020
- Reference implementation example

## Use Cases

### Identity Applications
- Digital identity verification
- Credential issuance and verification
- Cross-organisation identity sharing
- Privacy-preserving authentication

### Industry Adoption
- Financial services KYC
- Healthcare credentialing
- Education verification
- Government identity programmes

## Metadata

- **Migration Status**: Enriched via WebSearch 2024-12-27
- **Last Updated**: 2024-12-27
- **Review Status**: Research-enriched
