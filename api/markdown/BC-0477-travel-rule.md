id:: bc-0477-travel-rule-ontology

- ### OntologyBlock
  id:: BC-0477-travel-rule
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0477
  - preferred-term:: Travel Rule
  - source-domain:: bc
  - owl:class:: bc:TravelRule
  - status:: active
  - definition:: The Travel Rule (FATF Recommendation 16) requires Virtual Asset Service Providers (VASPs) to share originator and beneficiary information for cryptocurrency transfers above specified thresholds, enabling transaction traceability and supporting AML/CFT compliance through standardized data exchange protocols.
  - is-subclass-of:: [[Blockchain Compliance]]
  - enables:: [[Transaction Traceability]], [[VASP Coordination]], [[AML Compliance]]
  - requires:: [[Identity Exchange Protocols]], [[VASP Registry]], [[Threshold Monitoring]]

### Technical Details
Key requirements include:
- **Originator Information**: Name, account number, address, national ID
- **Beneficiary Information**: Name and account number at minimum
- **Threshold Application**: Varies by jurisdiction (EUR 1,000 EU, $3,000 US)
- **Data Transmission**: Before or concurrently with transfer

### Implementation Protocols
- **TRISA**: Travel Rule Information Sharing Alliance
- **OpenVASP**: Open-source protocol for VASP communication
- **TRP**: Travel Rule Protocol by CipherTrace
- **Sygna**: Travel Rule compliance by CoolBitX

### Jurisdictional Variations
- **EU MiCA**: No threshold for covered transfers
- **US FinCEN**: $3,000 threshold with additional recordkeeping at $10,000
- **Switzerland**: CHF 1,000 threshold
- **Singapore**: All transfers above SGD 1,500

### Challenges
- Identifying counterparty VASPs for transfers
- Unhosted wallet transactions without centralized custodians
- Cross-jurisdictional coordination and data standards
- Privacy concerns with information sharing

