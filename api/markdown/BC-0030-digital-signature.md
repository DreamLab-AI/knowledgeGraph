- ### OntologyBlock
  id:: digital-signature-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-1023
	- preferred-term:: Digital Signature
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:DigitalSignature
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[CryptographicDomain]], [[DisruptiveTechDomain]]
	- maturity:: mature

### Relationships
- depends-on:: [[Tokenization]]
- depends-on:: [[VirtualPropertyRight]]
- has-part:: [[DigitalEvidenceChainOfCustody]]
- requires:: [[DataProvenance]]
- requires:: [[DistributedLedgerTechnologyDlt]]
- requires:: [[NftSwapping]]
- requires:: [[VerifiableCredentialVc]]
- requires:: [[CulturalProvenanceRecord]]
- requires:: [[VirtualNotaryService]]

id:: relationships
    - is-subclass-of:: [[Cryptography]]

  - 
  - #### OWL Restrictions
    
    

  - #### Relationships
    - is-subclass-of:: [[BlockchainEntity]]
    - is-subclass-of:: [[Cryptography]]
    - is-part-of:: [[DigitalEvidenceChainOfCustody]]
      collapsed:: true
      - #### Inverse Relationships (Inferred by Reasoner)
        - Tokenization depends-on Digital Signature
        - VirtualPropertyRight depends-on Digital Signature
        - DataProvenance requires Digital Signature
        - DistributedLedgerTechnologyDlt requires Digital Signature
        - NftSwapping requires Digital Signature
        - VerifiableCredentialVc requires Digital Signature
        - CulturalProvenanceRecord requires Digital Signature
        - VirtualNotaryService requires Digital Signature
