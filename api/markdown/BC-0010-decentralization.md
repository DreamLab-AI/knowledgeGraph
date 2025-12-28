- ### OntologyBlock
  id:: decentralization-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-0010
	- preferred-term:: Decentralization
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:Decentralization
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[BlockchainDomain]]
	- maturity:: mature

### Relationships
- enables:: [[DistributedArchitecture]]

id:: relationships
    - uses-data-structure:: [[Blockchain]]

  - 
  - #### OWL Restrictions
    
    

  - #### Relationships
    - is-subclass-of:: [[Distributeddatastructure]]
    - is-subclass-of:: [[BlockchainEntity]]
    - uses-data-structure:: [[Blockchain]]
      collapsed:: true
      - #### Inverse Relationships (Inferred by Reasoner)
        - DistributedArchitecture enables Decentralization
