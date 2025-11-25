- ### OntologyBlock
  id:: address-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-1107
	- preferred-term:: Address
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:Address
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[CryptographicDomain]]
	- maturity:: mature

### Relationships
id:: relationships
    - is-subclass-of:: [[Public Key Cryptography]]

  -

### Quality Metrics
	- authority-score:: 0.95

- ### OntologyBlock
  id:: address-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: DT-1107
    - preferred-term:: Address
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Public key-derived identifier within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:Address
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]

  - #### OWL Restrictions
    
    

  - #### Relationships
    id:: relationships
    - is-subclass-of:: [[Public Key Cryptography]]

  -

## Relationships

- **is-subclass-of** [[bc:BlockchainEntity]] - owl:someValuesFrom
- **is-subclass-of** [[bc:Cryptographicprimitive]] - owl:someValuesFrom
