- ### OntologyBlock
  id:: blockchain-network-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0071
	- preferred-term:: Blockchain Network
	- source-domain:: bc
	- status:: complete
	- public-access:: true




### OWL Classification
	- owl:class:: bc:BlockchainNetwork
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: bc:VirtualObject

### Domain & Architecture
	- belongsToDomain:: [[CryptographicDomain]], [[DisruptiveTechDomain]]
	- maturity:: mature

### Relationships
- depends-on:: [[TokenCustodyService]]
- is-part-of:: [[CryptoToken]]
- requires:: [[NftSwapping]]
- depends-on:: [[SmartRoyaltyContract]]
- depends-on:: [[DigitalTaxComplianceNode]]
- requires:: [[Tokenization]]
- depends-on:: [[VirtualSecuritiesOfferingVso]]
- depends-on:: [[DigitalRightsManagementExtended]]
- depends-on:: [[NftRenting]]
- depends-on:: [[SmartRoyaltiesLedger]]

id:: relationships
    - is-subclass-of:: [[Distributed Ledger]]

  - 
  - #### OWL Restrictions
    
    

  - #### Relationships
    - is-subclass-of:: [[Networkcomponent]]
    - is-subclass-of:: [[BlockchainEntity]]
    - is-subclass-of:: [[Distributed Ledger]]
      collapsed:: true
      - #### Inverse Relationships (Inferred by Reasoner)
        - TokenCustodyService depends-on Blockchain Network
        - CryptoToken has-part Blockchain Network
        - SmartRoyaltyContract depends-on Blockchain Network
        - DigitalTaxComplianceNode depends-on Blockchain Network
        - VirtualSecuritiesOfferingVso depends-on Blockchain Network
        - DigitalRightsManagementExtended depends-on Blockchain Network
        - NftRenting depends-on Blockchain Network
        - SmartRoyaltiesLedger depends-on Blockchain Network
        - NftSwapping requires Blockchain Network
        - Tokenization requires Blockchain Network
