- ### OntologyBlock
  id:: peer-to-peer-network-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0939
	- preferred-term:: Peer-to-Peer Network
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:Peer-to-peerNetwork
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[CryptographicDomain]], [[DisruptiveTechDomain]]
	- maturity:: mature

### Relationships
- requires:: [[DistributedLedgerTechnologyDlt]]

id:: relationships
    - uses-data-structure:: [[Blockchain Network]]

  - 
  - #### OWL Restrictions
    
    

  - #### Relationships
    - is-subclass-of:: [[Networkcomponent]]
    - is-subclass-of:: [[BlockchainEntity]]
    - uses-data-structure:: [[Blockchain Network]]
      collapsed:: true
      - #### Inverse Relationships (Inferred by Reasoner)
        - DistributedLedgerTechnologyDlt requires Peer-to-Peer Network
