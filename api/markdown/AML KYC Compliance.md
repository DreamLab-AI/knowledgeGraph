id:: aml-kyc-compliance-ontology

- ### OntologyBlock
  id:: AML KYC Compliance
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0476
  - preferred-term:: AML KYC Compliance
  - source-domain:: bc
  - owl:class:: bc:AmlKycCompliance
  - status:: active
  - definition:: AML KYC Compliance encompasses Anti-Money Laundering (AML) and Know Your Customer (KYC) regulatory requirements for cryptocurrency and blockchain platforms, involving identity verification, transaction monitoring, and suspicious activity reporting to prevent financial crimes and ensure regulatory adherence.
  - is-subclass-of:: [[Regulatory Compliance]]
  - enables:: [[Cryptocurrency Exchange Operations]], [[Financial Crime Prevention]]
  - requires:: [[Identity Verification]], [[Transaction Monitoring]], [[Suspicious Activity Reporting]]

### Technical Details
Key components include:
- **Customer Due Diligence (CDD)**: Identity verification, document authentication, and risk assessment of customers before onboarding
- **Transaction Monitoring**: Real-time analysis of blockchain transactions to detect patterns indicating money laundering, sanctions evasion, or terrorist financing
- **Wallet Screening**: Tools like Chainalysis, Elliptic, and CipherTrace trace fund flows and assess wallet risk profiles
- **Sanctions Screening**: Cross-referencing users against OFAC, UN, and EU sanctions lists
- **Suspicious Activity Reports (SARs)**: Mandatory reporting to Financial Intelligence Units when suspicious patterns are detected

### Regulatory Framework
- **FATF Travel Rule**: Requires VASPs to share sender and recipient information for transactions above thresholds
- **EU MiCA Regulation**: Applied from December 2024, establishing comprehensive crypto compliance framework
- **EU AMLA**: Frankfurt-based authority coordinating cross-border AML supervision from 2024
- **FCA (UK)**: Requires crypto firm registration under Money Laundering Regulations

### Enforcement Context
In 2024, crypto companies faced over $5.1 billion in fines for inadequate AML programs, highlighting the critical importance of robust compliance infrastructure.
