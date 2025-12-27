id:: on-chain-voting-ontology

- ### OntologyBlock
  id:: On Chain Voting
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0462
  - preferred-term:: On Chain Voting
  - source-domain:: bc
  - owl:class:: bc:OnChainVoting
  - status:: active
  - definition:: A blockchain governance mechanism where votes are recorded directly on the distributed ledger via smart contracts, providing immutable, transparent, and automatically executable decision-making for DAOs and protocol governance without reliance on off-chain intermediaries.
  - is-subclass-of:: [[DAO Governance]]

### Relationships
	- related-to:: [[Smart Contracts]]
	- related-to:: [[Governor Contracts]]
	- related-to:: [[Token Voting]]
	- enables:: [[Decentralized Governance]]

### Technical Implementation
	- Governor contracts handle proposal creation and vote tallying
	- OpenZeppelin Governor is the gold standard for implementation
	- Token-weighted voting based on holdings or staking
	- Supports multichain governance via LayerZero and zkSync
	- Direct execution of approved proposals via smart contracts

### Platforms
	- Aragon: All-in-one DAO creation and governance
	- Tally: Interface for Governor-based DAOs on 60+ chains
	- DAOHaus: Cross-chain governance with Safe multisig integration
	- TON.Vote: Decentralized governance for TON ecosystem

### Trade-offs
	- Higher gas costs compared to off-chain voting
	- Greater decentralization and censorship resistance
	- Immutable and auditable vote records
	- Direct smart contract execution without manual enforcement

