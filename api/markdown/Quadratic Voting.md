- ### OntologyBlock
  id:: quadratic-voting-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: BC-0466
	- source-domain:: bc
	- preferred-term:: Quadratic Voting
	- status:: active
	- definition:: A governance mechanism where voting cost scales quadratically with the number of votes cast, allowing participants to express preference intensity while preventing concentration of power by large token holders in decentralized autonomous organizations.
	- owl:class:: bc:QuadraticVoting
	- belongsToDomain:: [[blockchain]]
	- #### Relationships
	  id:: quadratic-voting-relationships
	  collapsed:: true
		- is-subclass-of:: [[Governance Mechanism]]
		- related-to:: [[DAO Governance]]
		- related-to:: [[Token Voting]]
		- related-to:: [[Decentralized Decision Making]]
		- enables:: [[Fair Governance]]
	- #### Mechanism Details
	  collapsed:: true
		- Cost formula: 1 vote = 1 credit, 2 votes = 4 credits, 3 votes = 9 credits
		- Allows expression of preference intensity
		- Robustly optimal for social outcomes
		- Deters concentration of voting power
		- Addresses whale problem in DAOs
	- #### Applications
	  collapsed:: true
		- DeFi protocol governance
		- Ethereum-based smart contract voting
		- Taiwan Presidential Hackathon 2019
		- Volt Germany party priority voting
		- European Blockchain Services Infrastructure


