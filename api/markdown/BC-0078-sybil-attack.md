- ### OntologyBlock
  id:: sybil-attack-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0078
	- preferred-term:: Sybil Attack
	- source-domain:: bc
	- owl:class:: bc:SybilAttack
	- status:: complete
	- public-access:: true
	- definition:: Multiple identity attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
	- source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
	- maturity:: mature
	- owl:class:: bc:SybilAttack
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject
	- belongsToDomain:: [[CryptographicDomain]]
	- #### Relationships
	  id:: sybil-attack-relationships
	  collapsed:: true
		- uses-data-structure:: [[Blockchain Network]]
		- is-subclass-of:: [[Networkcomponent]]
		- is-subclass-of:: [[BlockchainEntity]]

## Relationships

- **is-subclass-of** [[dt:BlockchainEntity]] (disruptive-technologies) - owl:someValuesFrom
- **is-subclass-of** [[ai:Networkcomponent]] (artificial-intelligence) - owl:someValuesFrom
