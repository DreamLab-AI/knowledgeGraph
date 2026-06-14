public:: true
alias:: Anti Money Laundering

# anti-money laundering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f582fc644a2894ee8886085bec2a446ed47fee75c21f23fa500135c6680f973b",
  "@type": "Page",
  "vc:slug": "anti-money-laundering",
  "title": "anti-money laundering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anti-money-laundering",
  "@type": "Class",
  "label": "Anti-Money Laundering",
  "definition": "Anti-Money Laundering (AML) encompasses the legislative frameworks, regulatory obligations, and operational procedures that financial institutions and other regulated entities must implement to detect, prevent, and report the concealment and integration of proceeds from criminal activity. AML programmes are built around customer due diligence (CDD), enhanced due diligence (EDD) for high-risk relationships, continuous transaction monitoring, suspicious activity reporting (SAR), and sanctions screening against watch-lists maintained by bodies such as OFAC, the EU, and the UN. International standards are promulgated by the Financial Action Task Force (FATF) through its Forty Recommendations and transposed into national law by member jurisdictions, covering banks, virtual asset service providers (VASPs), lawyers, accountants, and real-estate agents. Modern AML increasingly relies on machine learning, graph analytics, and RegTech automation to surface complex layering schemes that evade traditional rule-based systems.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:customer-due-diligence", "label": "Customer Due Diligence"},
      {"@id": "urn:ngm:class:transaction-monitoring", "label": "Transaction Monitoring"},
      {"@id": "urn:ngm:class:suspicious-activity-reporting", "label": "Suspicious Activity Reporting"},
      {"@id": "urn:ngm:class:sanctions-screening", "label": "Sanctions Screening"},
      {"@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"},
      {"@id": "urn:ngm:class:graph-neural-network", "label": "Graph Neural Network"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:financial-intelligence", "label": "Financial Intelligence"},
      {"@id": "urn:ngm:class:asset-recovery", "label": "Asset Recovery"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:financial-action-task-force", "label": "Financial Action Task Force"},
      {"@id": "urn:ngm:class:basel-committee-on-banking-supervision", "label": "Basel Committee on Banking Supervision"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:privacy-preserving-computation", "label": "Privacy-Preserving Computation"},
      {"@id": "urn:ngm:class:financial-anonymity", "label": "Financial Anonymity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"},
      {"@id": "urn:ngm:class:counter-terrorist-financing", "label": "Counter-Terrorist Financing"},
      {"@id": "urn:ngm:class:financial-crime", "label": "Financial Crime"},
      {"@id": "urn:ngm:class:regtech", "label": "RegTech"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:aml-compliance", "label": "AML Compliance"},
    {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Anti-Money Laundering (AML) refers to the interlocking body of legislation, regulatory obligations, institutional procedures, and technological systems designed to detect, prevent, and report the laundering of criminally derived funds through the financial system. The classic three-stage model of money laundering — placement, layering, and integration — provides the conceptual backbone for AML controls. AML sits at the intersection of [[Regulatory Compliance]], [[Financial Crime]] investigation, and increasingly, [[Machine Learning]]-driven detection, binding banks, payment processors, virtual asset service providers, and a widening circle of designated non-financial businesses and professions (DNFBPs) to risk-based obligations enforced by national supervisors and shaped by the global standard-setter, the [[Financial Action Task Force]].

- ### Overview
  - AML as a formal regulatory discipline emerged from the US Bank Secrecy Act 1970 and was internationalised through the FATF's establishment in 1989 by the G7.
  - The core policy rationale is that financial systems should not serve as conduits for converting criminal proceeds — from drug trafficking, corruption, fraud, tax evasion, human trafficking, and terrorism financing — into apparently legitimate assets.
  - Regulated entities are not merely passive reporters; they are co-opted into law enforcement as private gate-keepers who must apply a risk-based approach (RBA) calibrated to their specific customer base, geography, products, and delivery channels.
  - Non-compliance carries severe consequences: regulatory fines (frequently in the billions for systemic failures), loss of banking licence, personal criminal liability for senior compliance officers, and reputational damage that can trigger bank runs.
  - The FATF Mutual Evaluation process peer-reviews national AML regimes and publishes public ratings that affect sovereign credit standing and correspondent banking relationships.
  - AML obligations extend beyond traditional banks to cover money services businesses (MSBs), real estate agents, lawyers, accountants, trust and company service providers, casinos, and — via the FATF Travel Rule — virtual asset service providers (VASPs).

- ### Key Components
  - #### Customer Due Diligence (CDD) and KYC
    - [[Know Your Customer]] (KYC) is the entry point: verifying the legal identity of customers through government-issued documents, biometric checks, and database lookups against PEP (politically exposed persons) and sanctions lists.
    - Simplified CDD applies to lower-risk customers; [[Enhanced Due Diligence]] (EDD) applies to higher-risk relationships such as PEPs, correspondent banking, and high-value private banking.
    - Beneficial ownership determination — identifying the natural persons who ultimately own or control a legal entity — is a critical obligation under FATF Recommendation 24, increasingly enforced through public beneficial ownership registries.
    - Customer risk-rating models assign scores based on customer type, source of funds, product usage, and geography; these ratings drive monitoring intensity.
  - #### Transaction Monitoring
    - [[Transaction Monitoring]] systems apply rule-based and statistical detection scenarios to flag payments, transfers, or account-level behaviours indicative of placement, layering, or structuring.
    - Classical rules include cash structuring alerts (deposits just below reporting thresholds), rapid in-and-out flows, use of multiple jurisdictions in short time windows, and round-dollar transactions.
    - Modern systems overlay [[Machine Learning]] — particularly unsupervised [[Anomaly Detection]] and [[Graph Neural Network]] analysis of the transaction network — to detect novel typologies and reduce false-positive rates, which in legacy systems can exceed 95%.
    - Network-link analysis exposes hidden relationships between accounts, revealing beneficial ownership structures, shell company chains, and money mule networks.
  - #### Suspicious Activity Reporting (SAR)
    - When investigation confirms suspicious activity cannot be explained, compliance officers file a [[Suspicious Activity Reporting]] (SAR/STR) with the national financial intelligence unit (FIU) — e.g., the NCA in the UK, FinCEN in the US.
    - Tipping off — alerting the customer that a SAR has been filed — is a criminal offence in most jurisdictions.
    - FIUs (coordinated globally by the Egmont Group) analyse SAR data to generate tactical and strategic financial intelligence for law enforcement.
  - #### Sanctions Screening
    - [[Sanctions Screening]] checks customers and counterparties against consolidated watch-lists published by OFAC (US), HMRC/OFSI (UK), the EU, and the UN Security Council.
    - Real-time payment screening must process transactions within milliseconds, requiring highly optimised fuzzy-matching algorithms to catch name variants and transliteration differences.
    - Evasion typologies include use of front companies, third-party intermediaries, and — increasingly — virtual assets to break the chain to sanctioned entities.
  - #### Beneficial Ownership and Corporate Transparency
    - Shell companies and opaque corporate structures are a primary money-laundering vehicle; FATF Recommendations 24 and 25 require national registries to capture beneficial ownership data.
    - The EU Corporate Sustainability Reporting Directive and the US Corporate Transparency Act represent recent legislative advances pushing beneficial ownership into public domain.

- ### Applications and Use Cases
  - **Retail Banking**: automated KYC onboarding with document OCR and liveness detection; real-time transaction monitoring with ML-tuned alert thresholds.
  - **Correspondent Banking**: enhanced due diligence on respondent banks to prevent nested account abuse; automated SWIFT payment filtering against sanctions lists.
  - **Virtual Asset Service Providers (VASPs)**: FATF Travel Rule compliance requiring originator and beneficiary wallet attribution on transfers; blockchain analytics tools (Chainalysis, Elliptic) tracing on-chain flows to known illicit addresses.
  - **Trade Finance**: detection of trade-based money laundering (TBML) through price comparison databases and dual-use goods screening.
  - **Real Estate**: due diligence on high-value property transactions to prevent use of real estate as a store for criminal proceeds.
  - **Private Banking**: EDD and source-of-wealth verification for high-net-worth individuals, particularly those with PEP exposure.
  - **Insurance**: life insurance premium cycling as a layering technique; AML controls on large single premium policies and early redemptions.
  - **RegTech Platforms**: cloud-native case management, automated regulatory reporting, AI-driven alert prioritisation; vendors include NICE Actimize, Temenos Financial Crime Mitigation, and Oracle Financial Services.
  - **Federated AML**: financial institutions exploring [[Federated Learning]] to train shared detection models across institution boundaries without sharing raw transaction data, preserving confidentiality while improving detection coverage.
  - **Zero-Knowledge Compliance**: research into [[Zero-Knowledge Proof]] protocols that allow compliance attestations (e.g., "customer is not on a sanctions list") to be shared with counterparties without revealing underlying PII.

- ### Mechanisms and Regulatory Architecture
  - **Risk-Based Approach (RBA)**: the FATF paradigm under which institutions calibrate AML controls proportionally to assessed risk rather than applying uniform, tick-box rules. National risk assessments inform sector-level risk appetite.
  - **Four Eyes Principle**: suspicious activity decisions must be reviewed by at least two qualified persons (analyst + compliance officer) before SAR filing.
  - **Derisking**: a systemic negative externality where banks exit entire customer categories (MSBs, charities, correspondent relationships with certain jurisdictions) rather than manage complex AML risk; reduces financial inclusion.
  - **Regulatory Arbitrage**: laundering schemes deliberately exploit gaps between national AML regimes; FATF mutual evaluation and technical assistance aims to close asymmetries.
  - **Typologies**: FATF and the Egmont Group publish recurring money-laundering typologies — real estate, crypto, professional money laundering networks (PMLNs), TBML — guiding detection scenario design.
  - **Consolidation and Pooled Utilities**: industry-level KYC utilities (e.g., SWIFT KYC Registry, Encompass) allow institutions to pool identity verification costs and share data under strict legal frameworks.

- ### Relationships
  - partOf:: [[Financial Crime]]
  - requires:: [[Regulatory Compliance]]
  - requires:: [[Fraud Detection]]
  - requires:: [[Identity Verification]]
  - requires:: [[Risk Management]]
  - hasPart:: [[Know Your Customer]]
  - hasPart:: [[Customer Due Diligence]]
  - hasPart:: [[Transaction Monitoring]]
  - hasPart:: [[Suspicious Activity Reporting]]
  - hasPart:: [[Sanctions Screening]]
  - uses:: [[Anomaly Detection]]
  - uses:: [[Graph Neural Network]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Machine Learning]]
  - enables:: [[Financial Intelligence]]
  - enables:: [[Asset Recovery]]
  - standardizedBy:: [[Financial Action Task Force]]
  - standardizedBy:: [[Basel Committee on Banking Supervision]]
  - relatedTo:: [[Blockchain Compliance]]
  - relatedTo:: [[Counter-Terrorist Financing]]
  - relatedTo:: [[RegTech]]
  - contrastsWith:: [[Privacy-Preserving Computation]]
  - contrastsWith:: [[Financial Anonymity]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Zero-Knowledge Proof]]

- ### Standards and Context
  - **FATF Forty Recommendations**: the global standard for AML/CFT, structured around risk assessment, financial institution requirements, transparency, international co-operation, and enforcement. FATF Recommendation 15 explicitly brings virtual assets into scope.
  - **FATF Travel Rule (Recommendation 16)**: requires VASPs to pass originator and beneficiary information with virtual asset transfers above threshold (USD/EUR 1,000 in most jurisdictions). Implementation protocols include TRISA, OpenVASP, and TRUST.
  - **EU AML Directives**: the EU has enacted six successive AML Directives (AMLD1–AMLD6), progressively expanding scope, harmonising beneficial ownership registration, and criminalising self-laundering and aiding and abetting.
  - **EU AML Package (2024)**: the EU adopted a new regulation (AMLR) directly applicable without national transposition, and established a new EU AML Authority (AMLA) to directly supervise high-risk financial institutions and coordinate FIUs from 2026.
  - **US Bank Secrecy Act / Patriot Act**: foundational US framework; FinCEN administers reporting requirements; the Anti-Money Laundering Act of 2020 modernised beneficial ownership reporting and enhanced FinCEN powers.
  - **Egmont Group**: international network of 166 FIUs enabling cross-border financial intelligence sharing under bilateral agreements.
  - **Wolfsberg Group**: association of 13 global banks publishing private-sector AML guidance on correspondent banking, trade finance, private banking, and virtual assets.
  - **Basel AML Index**: annual independent ranking of country-level AML/CFT risk maintained by the Basel Institute on Governance, used by financial institutions for jurisdiction risk-rating.
  - **FATF Grey List / Black List**: public listing of jurisdictions under increased monitoring (grey) or subject to a call for countermeasures (black/IQSQ); material impact on correspondent banking access and sovereign risk.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
