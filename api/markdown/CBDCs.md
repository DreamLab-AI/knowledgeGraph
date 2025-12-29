- ### OntologyBlock
  id:: cbdcs-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: bc
	- term-id:: BC-8003
	- preferred-term:: CBDCs
	- status:: active
	- public-access:: true
	- definition:: Central Bank Digital Currencies (CBDCs) are digital forms of fiat money issued directly by central banks, representing a liability of the monetary authority rather than commercial banks, designed to provide secure, efficient digital payment infrastructure while maintaining monetary sovereignty and potentially enhancing financial inclusion.
	- maturity:: reviewed
	- owl:class:: bc:Cbdcs
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[FinancialDomain]], [[BlockchainDomain]]

### Relationships
- is-subclass-of:: [[Digital Currency]]
- related-to:: [[Monetary Policy]], [[Financial Inclusion]], [[Payment Systems]], [[Distributed Ledger Technology]]
- contrasts-with:: [[Cryptocurrency]], [[Stablecoin]], [[Commercial Bank Money]]
- enables:: [[Programmable Money]], [[Real-Time Settlements]], [[Cross-Border Payments]]
- regulated-by:: [[Central Bank]], [[Financial Regulator]]

## Global Implementation Status (2025)

### Current Adoption
- **137 countries** (98% of global GDP) exploring CBDCs
- **72 countries** in advanced phase (development, pilot, or launch)
- **49 active pilot projects** worldwide (record high)
- **3 fully launched**: Bahamas (Sand Dollar), Jamaica (JAM-DEX), Nigeria (eNaira)

### Major Pilots

#### China (e-CNY)
- Largest CBDC pilot globally by circulation and users
- 16.5 billion yuan in circulation
- Use cases: public transit, retirement benefits, tax payments, school tuition
- Multiple provincial deployments

#### India (e-Rupee)
- Second-largest CBDC pilot
- Rs 10.16 billion ($122 million) in circulation by March 2025
- 334% growth from Rs 2.34 billion in 2024
- Expanding retail and wholesale applications

#### Hong Kong (e-HKD)
- Phase 2 pilot launched September 2024
- Testing commercial viability and scalability
- Integration with tokenised deposits
- October 2025 report showed benefits in programmable transactions

#### Russia (Digital Ruble)
- Multi-stage pilot testing through 2023-2024
- 13 banks participating
- Gradual adoption expected from 2025

#### United Kingdom
- Digital pound anticipated sometime after 2025
- Joint Treasury-Bank of England development
- Design phase ongoing with public consultation

### Countries Suspending CBDC Plans
- **Canada**: 90% of survey respondents concerned about privacy
- **Australia**: Development suspended pending further review
- **United States**: State-level bans emerging (Florida first to pass anti-CBDC law)

## CBDC Architecture Types

### Retail CBDC
- Direct access for general public
- Alternative to cash for daily transactions
- Financial inclusion focus
- Privacy vs transparency trade-offs

### Wholesale CBDC
- Limited to financial institutions
- Interbank settlement applications
- Cross-border payment corridors
- Integration with existing RTGS systems

### Hybrid/Intermediate Models
- Central bank issues, intermediaries distribute
- Two-tier architecture preserving bank roles
- Combines central bank liability status with private sector efficiency

## Technical Design Considerations

### Underlying Technology
- **DLT-based**: Permissioned distributed ledger
- **Centralised Database**: Traditional database architecture
- **Hybrid**: DLT for some functions, centralised for others

### Programmability
- Smart contract functionality for conditional payments
- Automated compliance and reporting
- Time-limited validity or purpose restrictions
- Interoperability with tokenised assets

### Privacy Approaches
- **Full Anonymity**: Cash-like privacy (technically challenging)
- **Tiered Privacy**: Different limits based on KYC level
- **Pseudonymity**: Transaction privacy with regulatory access
- **Full Transparency**: Complete audit trail

### Offline Capability
- Hardware-based solutions for connectivity gaps
- Value storage on secure elements
- Synchronisation protocols for reconciliation

## Policy Objectives

### Financial Inclusion
- Reach unbanked populations without traditional infrastructure
- Lower transaction costs for small payments
- Mobile-first accessibility

### Payment System Efficiency
- Reduce settlement times and costs
- 24/7 availability vs banking hours
- Programmable money automation

### Monetary Sovereignty
- Counter private stablecoin adoption
- Maintain central bank control over money supply
- Support for local currency in cross-border contexts

### Financial Stability
- Reduce systemic risks from private alternatives
- Central bank visibility into payment flows
- Crisis response mechanisms

## Challenges and Risks

### Technical Risks
- Cybersecurity vulnerabilities
- System resilience and availability
- Scalability for national populations
- Integration with legacy systems

### Financial Risks
- Bank disintermediation concerns
- Deposit flight during crises
- Impact on monetary policy transmission
- Credit allocation distortions

### Privacy Concerns
- Government surveillance potential
- Data protection and access controls
- Balance between AML compliance and civil liberties
- Public trust and adoption barriers

### Implementation Complexity
- Regulatory framework development
- Cross-border interoperability standards
- Consumer education and adoption
- Merchant acceptance infrastructure

## Cross-Border CBDC Initiatives

### Project mBridge
- BIS Innovation Hub initiative
- China, Hong Kong, Thailand, UAE participation
- Multi-CBDC platform for international settlements

### Project Dunbar
- Singapore, Malaysia, Australia, South Africa
- Common platform for multiple CBDCs
- Testing wholesale settlement mechanisms

### Regulatory Coordination
- G20 cross-border payments roadmap
- IMF guidance and technical assistance
- BIS Committee on Payments standards

## Related Concepts
- [[Digital Currency]]
- [[Stablecoin]]
- [[Monetary Policy]]
- [[Financial Inclusion]]
- [[Distributed Ledger Technology]]
- [[Payment Systems]]

#cbdc #digital-currency #central-bank #fintech #monetary-policy

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Comprehensive review completed
- **References**: Multiple pages reference this concept
