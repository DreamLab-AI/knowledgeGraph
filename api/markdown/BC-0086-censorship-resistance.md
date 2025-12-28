- ### OntologyBlock
  id:: censorship-resistance-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0949
	- preferred-term:: Censorship Resistance
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:CensorshipResistance
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[CryptographicDomain]], [[DisruptiveTechDomain]]
	- maturity:: mature

### Relationships
- enables:: [[DecentralizationLayer]]
- enables:: [[Bitcoin]]

id:: relationships
    - uses-data-structure:: [[Blockchain]]

  - 
  - #### OWL Restrictions
    
    

  - #### Relationships
    - is-subclass-of:: [[Networkcomponent]]
    - is-subclass-of:: [[BlockchainEntity]]
    - uses-data-structure:: [[Blockchain]]
      collapsed:: true
      - #### Inverse Relationships (Inferred by Reasoner)
        - DecentralizationLayer enables Censorship Resistance
        - Bitcoin enables Censorship Resistance
