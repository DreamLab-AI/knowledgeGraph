- ### OntologyBlock
  id:: blockchainentity-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-7000
	- preferred-term:: BlockchainEntity
	- source-domain:: bc
	- status:: active
	- public-access:: true
	- definition:: A meta-classification for any ontological entity belonging to the blockchain and distributed ledger technology domain, encompassing protocols, networks, tokens, smart contracts, consensus mechanisms, and decentralised applications.
	- maturity:: stable
	- owl:class:: bc:BlockchainEntity
	- owl:physicality:: ConceptualEntity
	- owl:role:: Classification
	- belongsToDomain:: [[Blockchain Technology]]
	- #### Relationships
	  id:: blockchainentity-relationships
	  collapsed:: true
		- is-subclass-of:: [[Blockchain Technology]]
		  collapsed:: true
		  - #### Entity Types (Inferred by Reasoner)
		    - Distributed Ledger is-a BlockchainEntity
		    - Consensus Mechanism is-a BlockchainEntity
		    - Smart Contract is-a BlockchainEntity
		    - Cryptocurrency is-a BlockchainEntity
		    - Token is-a BlockchainEntity
		    - Blockchain Network is-a BlockchainEntity
		    - Decentralised Application is-a BlockchainEntity
		    - DAO is-a BlockchainEntity
		- categorises:: [[BC Domain Concepts]]
		- enables-reasoning-over:: [[Blockchain Taxonomy]]

## Definition

**BlockchainEntity** serves as the universal classifier for all concepts within the Blockchain Technology domain. Any ontological entity that pertains to distributed ledger systems, cryptographic protocols, or decentralised coordination mechanisms is classified as a BlockchainEntity.

## Classification Purpose

This meta-class enables:
1. **Domain Membership Queries**: Identify all blockchain-related concepts
2. **Cross-Domain Filtering**: Distinguish BC concepts from AI, MV, TC domains
3. **Reasoner Inference**: Apply BC-specific rules to classified entities
4. **Namespace Organisation**: Group BC concepts under consistent classification

## Entity Categories

### Infrastructure Entities
- Blockchain Network
- Node Types (Full, Light, Archive)
- Consensus Protocols
- Cryptographic Primitives

### Protocol Entities
- Layer 1 Protocols
- Layer 2 Solutions
- Cross-Chain Bridges
- Interoperability Standards

### Application Entities
- Smart Contracts
- Decentralised Applications (dApps)
- DAOs (Decentralised Autonomous Organisations)
- DeFi Protocols

### Asset Entities
- Cryptocurrencies
- Fungible Tokens
- Non-Fungible Tokens (NFTs)
- Security Tokens
- Utility Tokens

### Governance Entities
- Governance Tokens
- Voting Mechanisms
- Proposal Systems
- Treasury Management

## Usage Pattern

```turtle
@prefix bc: <http://narrativegoldmine.com/blockchain#> .

bc:SomeBlockchainConcept a bc:BlockchainEntity ;
    skos:broader bc:BlockchainTechnology ;
    ngm:belongsToDomain bc:BlockchainTechnology .
```

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub
- **Authority Score**: 0.90
- **References**: 99 pages reference this concept
