id:: bc-0486-regulatory-reporting-ontology

- ### OntologyBlock
  id:: BC-0486-regulatory-reporting
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0486
  - preferred-term:: Regulatory Reporting
  - source-domain:: bc
  - owl:class:: bc:RegulatoryReporting
  - status:: active
  - definition:: Regulatory Reporting for blockchain encompasses mandatory filings including Currency Transaction Reports (CTRs) for transactions over $10,000, Suspicious Activity Reports (SARs) for suspected illicit activity over $5,000, Travel Rule compliance for originator/beneficiary data sharing, and periodic compliance reports to financial regulators under BSA/AML requirements.
  - is-subclass-of:: [[Blockchain Compliance]]
  - enables:: [[AML Compliance]], [[Regulatory Transparency]], [[Law Enforcement Cooperation]]
  - requires:: [[Transaction Monitoring]], [[Reporting Systems]], [[Staff Training]]

### Technical Details
Key reporting requirements include:
- **CTR**: Currency Transaction Report for cash transactions over $10,000
- **SAR**: Suspicious Activity Report for transactions over $5,000 with suspicious indicators
- **FBAR**: Foreign Bank Account Report for foreign financial accounts over $10,000
- **Form 8300**: For businesses receiving cash over $10,000

### Filing Thresholds
- CTR: $10,000.01 or more in cash transactions in a single day
- SAR: $5,000+ with knowledge, suspicion, or reason to suspect unlawful activity
- Structuring: Deliberately breaking transactions to avoid CTR threshold is illegal

### Cryptocurrency-Specific Requirements
Virtual currency exchangers and crypto ATM operators carry the same CTR filing obligations as traditional Money Services Businesses. FinCEN updated Travel Rule requirements in 2024 to explicitly include high-risk CVC mixing transactions.

### Enforcement Actions
Multiple cryptocurrency ATM operators have faced enforcement for ignoring CTR obligations, with forfeitures exceeding $1 million. Platforms must register with FinCEN, maintain AML programs, and submit SARs on suspicious activity including transfers linked to darknet markets or sanctioned wallets.

### Threshold Debate
Industry groups argue that $5,000 SAR and $10,000 CTR thresholds are outdated given inflation. If adjusted for inflation since inception, the CTR threshold would be nearly $170,000 today.

