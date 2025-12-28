- ### OntologyBlock
  id:: transaction-pool-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-0018
	- preferred-term:: Transaction Pool
	- source-domain:: bc
	- status:: complete
	- public-access:: true
	- definition:: Pending unconfirmed transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
	- source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
	- maturity:: mature
	- owl:class:: bc:TransactionPool
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject
	- belongsToDomain:: [[BlockchainDomain]]
	- #### Relationships
	  id:: transaction-pool-relationships
	  collapsed:: true
		- is-subclass-of:: [[Transaction]]
		- is-subclass-of:: [[Distributeddatastructure]]
		- is-subclass-of:: [[BlockchainEntity]]

## Relationships

- **is-subclass-of** [[BlockchainEntity]] (disruptive-technologies) - owl:someValuesFrom
- **is-subclass-of** [[Distributeddatastructure]] (disruptive-technologies) - owl:someValuesFrom
