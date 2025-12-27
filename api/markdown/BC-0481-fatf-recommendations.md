id:: bc-0481-fatf-recommendations-ontology

- ### OntologyBlock
  id:: BC-0481-fatf-recommendations
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0481
  - preferred-term:: FATF Recommendations
  - source-domain:: bc
  - owl:class:: bc:FatfRecommendations
  - status:: active
  - definition:: FATF Recommendations are the global standards for Anti-Money Laundering and Counter-Terrorist Financing (AML/CFT) issued by the Financial Action Task Force, with updated guidance applying these standards to Virtual Assets and Virtual Asset Service Providers (VASPs) requiring registration, customer due diligence, and information sharing.
  - is-subclass-of:: [[Blockchain Compliance]]
  - enables:: [[Global AML Standards]], [[VASP Regulation]], [[International Coordination]]
  - requires:: [[VASP Registration]], [[Customer Due Diligence]], [[Travel Rule Compliance]]

### Technical Details
Key FATF requirements for virtual assets include:
- **VASP Definition**: Entities conducting exchange, transfer, safekeeping, or financial services for virtual assets
- **Registration/Licensing**: VASPs must be registered and supervised
- **Customer Due Diligence**: Identity verification and ongoing monitoring
- **Travel Rule**: Information sharing for transfers (Recommendation 16)

### Updated Guidance (2021)
- **Peer-to-Peer Transactions**: Encouraged risk-based approaches for unhosted wallets
- **DeFi**: Protocols may have controlling parties qualifying as VASPs
- **Stablecoins**: Same requirements as other virtual assets
- **NFTs**: Generally not virtual assets unless used for payment/investment

### Implementation Status
FATF conducts mutual evaluations assessing jurisdictional compliance. Grey list inclusion for jurisdictions with strategic deficiencies. Most major economies have implemented VASP frameworks aligned with recommendations.

### Enforcement Impact
- **Exchange Registration**: Major exchanges registered as VASPs globally
- **Travel Rule Adoption**: Growing implementation through TRISA, OpenVASP
- **DeFi Challenges**: Ongoing debate about applying requirements to decentralized protocols
- **Sanctions Compliance**: Integration with OFAC, EU, UN sanctions screening

