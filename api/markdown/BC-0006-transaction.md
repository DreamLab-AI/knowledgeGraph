- ### OntologyBlock
  id:: transaction-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-0006
	- preferred-term:: Transaction
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:Transaction
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[BlockchainDomain]]
	- maturity:: mature

### Relationships
- implemented-by:: [[ValueTransfer]]
- has-part:: [[Bitcoin]]

id:: relationships
    - occurs-in:: [[Blockchain]]

  - 
  - #### OWL Restrictions
    
    

  - #### Relationships
    - is-subclass-of:: [[Distributeddatastructure]]
    - is-subclass-of:: [[BlockchainEntity]]
    - inverse-implemented-by:: [[ValueTransfer]]
    - is-part-of:: [[Bitcoin]]
    - is-subclass-of:: [[Distributeddatastructure]]
    - is-subclass-of:: [[BlockchainEntity]]
    - inverse-implemented-by:: [[ValueTransfer]]
    - is-part-of:: [[Bitcoin]]
    id:: relationships
    - occurs-in:: [[Blockchain]]
