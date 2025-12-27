- ### OntologyBlock
  id:: snapshot-voting-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: BC-0469
	- source-domain:: bc
	- preferred-term:: Snapshot Voting
	- status:: active
	- definition:: A decentralized governance platform enabling DAOs to conduct gasless off-chain voting using cryptographic signatures, with Snapshot X providing on-chain execution through storage proofs on Starknet at 10-50x lower costs than traditional Layer 1 voting mechanisms.
	- owl:class:: bc:SnapshotVoting
	- belongsToDomain:: [[blockchain]]
	- #### Relationships
	  id:: snapshot-voting-relationships
	  collapsed:: true
		- is-subclass-of:: [[DAO Governance]]
		- related-to:: [[Off Chain Voting]]
		- related-to:: [[Token Weighted Voting]]
		- related-to:: [[Governance Token]]
		- enables:: [[Gasless DAO Participation]]
	- #### Core Features
	  collapsed:: true
		- Gasless voting through message signing
		- Multiple voting strategies (quadratic, weighted, basic)
		- ENS domain-based space creation
		- Customizable proposal parameters
		- IPFS-based vote storage
	- #### Snapshot X (2024)
	  collapsed:: true
		- On-chain voting via Starknet
		- Storage proof verification
		- Cross-chain vote execution
		- Meta-transaction relayer (Mana)
		- Support for Ethereum, Optimism, Polygon, Arbitrum


