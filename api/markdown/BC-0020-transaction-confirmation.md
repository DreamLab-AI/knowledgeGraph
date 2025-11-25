- ### OntologyBlock
  id:: transaction-confirmation-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-0020
	- preferred-term:: Transaction Confirmation
	- source-domain:: bc
	- status:: complete
	- public-access:: true
	- definition:: Inclusion in blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
	- source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
	- maturity:: mature
	- owl:class:: bc:TransactionConfirmation
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject
	- belongsToDomain:: [[BlockchainDomain]]
	- #### Relationships
	  id:: transaction-confirmation-relationships
	  collapsed:: true
		- is-subclass-of:: [[Transaction]]
		- is-subclass-of:: [[Distributeddatastructure]]
		- is-subclass-of:: [[BlockchainEntity]]

## Relationships

- **is-subclass-of** [[dt:BlockchainEntity]] (disruptive-technologies) - owl:someValuesFrom
- **is-subclass-of** [[dt:Distributeddatastructure]] (disruptive-technologies) - owl:someValuesFrom
