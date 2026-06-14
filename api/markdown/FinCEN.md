public:: true

# FinCEN
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fin-cen",
  "@type": "Page",
  "vc:slug": "fin-cen",
  "title": "FinCEN",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fin-cen",
  "@type": "Class",
  "label": "FinCEN",
  "definition": "The Financial Crimes Enforcement Network (FinCEN) is a bureau of the US Department of the Treasury established in 1990 that serves as the primary US financial intelligence unit (FIU). FinCEN administers the Bank Secrecy Act (BSA), collects financial transaction reports from financial institutions (SARs, CTRs), analyses this data for patterns of money laundering, terrorist financing, and financial fraud, and shares intelligence with law enforcement and foreign FIUs through the Egmont Group. FinCEN also issues regulatory guidance and rulemaking for digital asset service providers including money service businesses (MSBs) and, since 2019, cryptocurrency exchanges.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:regulatory-framework", "label": "Regulatory Framework"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:suspicious-activity-report", "label": "Suspicious Activity Report"},
      {"@id": "urn:ngm:class:currency-transaction-report", "label": "Currency Transaction Report"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:us-department-of-the-treasury", "label": "US Department of the Treasury"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:beneficial-ownership-reporting", "label": "Beneficial Ownership Reporting"},
      {"@id": "urn:ngm:class:customer-identification-programme", "label": "Customer Identification Programme"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"},
      {"@id": "urn:ngm:class:sanctions-enforcement", "label": "Sanctions Enforcement"},
      {"@id": "urn:ngm:class:counter-terrorism-financing", "label": "Counter-Terrorism Financing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:bank-secrecy-act", "label": "Bank Secrecy Act"},
      {"@id": "urn:ngm:class:usa-patriot-act", "label": "USA PATRIOT Act"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:financial-action-task-force", "label": "Financial Action Task Force"},
      {"@id": "urn:ngm:class:egmont-group", "label": "Egmont Group"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:compliance-audit-trail", "label": "Compliance Audit Trail"},
      {"@id": "urn:ngm:class:financial-intelligence", "label": "Financial Intelligence"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:law-enforcement-coordination", "label": "Law Enforcement Coordination"},
      {"@id": "urn:ngm:class:corporate-transparency-act", "label": "Corporate Transparency Act"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:office-of-foreign-assets-control", "label": "Office of Foreign Assets Control"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"},
      {"@id": "urn:ngm:class:virtual-asset-service-provider", "label": "Virtual Asset Service Provider"},
      {"@id": "urn:ngm:class:cryptocurrency-travel-rule", "label": "Cryptocurrency Travel Rule"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:us-regulatory-framework", "label": "US Regulatory Framework"},
      {"@id": "urn:ngm:class:sanctions-screening", "label": "Sanctions Screening"},
      {"@id": "urn:ngm:class:money-service-business", "label": "Money Service Business"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:financial-crimes-enforcement-network", "label": "Financial Crimes Enforcement Network"},
    {"@id": "urn:ngm:class:us-financial-intelligence-unit", "label": "US Financial Intelligence Unit"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[FinCEN]] (Financial Crimes Enforcement Network) is the US Treasury bureau that administers the Bank Secrecy Act, collecting Suspicious Activity Reports and Currency Transaction Reports from financial institutions and analysing them to enforce [[Anti-Money Laundering]] and counter-terrorism financing obligations across the financial system.

- ### Relationships
  - FinCEN is the institutional embodiment of the US [[Regulatory Framework]] for financial crime prevention. Its mandates enable [[Anti-Money Laundering]] programmes and [[AML KYC Compliance]] obligations across US-regulated financial institutions, and it coordinates [[Sanctions Enforcement]] with the Office of Foreign Assets Control (OFAC). FinCEN operates within the broader [[Compliance Framework]] that financial institutions must maintain [[Compliance Audit Trail]] records to satisfy. It drives [[Financial Regulation]] through binding rulemaking under the BSA, anchored within the [[US Regulatory Framework]]. For digital assets, FinCEN guidance on virtual currency money transmission directly shapes [[Blockchain Compliance]] obligations and [[Sanctions Screening]] requirements for exchanges and DeFi protocols.

- ### Content
  - FinCEN was established by Treasury Order 105-08 on 25 April 1990, consolidating financial intelligence functions that had previously been fragmented across Treasury bureaus. It was given independent bureau status in 2004. Its statutory authority derives from the Bank Secrecy Act of 1970 (BSA, also known as the Currency and Foreign Transactions Reporting Act) and subsequent amendments including the USA PATRIOT Act of 2001, which significantly expanded BSA's scope to include terrorist financing and strengthened Customer Identification Programme (CIP) requirements. FinCEN is a member of the Egmont Group of Financial Intelligence Units, enabling information sharing with counterpart FIUs in 166 jurisdictions.

  - FinCEN's primary data collection mechanism is the BSA E-Filing System, which receives three principal report types. Currency Transaction Reports (CTRs) must be filed by financial institutions for cash transactions exceeding $10,000 in a single day. Suspicious Activity Reports (SARs) are filed when institutions identify transactions that may involve money laundering, fraud, structuring, or other suspicious patterns, regardless of transaction amount. Form 8300 records cash payments exceeding $10,000 in trade or business. FinCEN processes tens of millions of such reports annually and maintains a BSA database accessible to more than 12,000 law enforcement users through the FinCEN Query system. The agency provides analytical reports—Strategic Analytical Reports, Financial Trend Analysis reports—to identify emerging money laundering typologies.

  - FinCEN's engagement with digital assets began in 2013 with guidance clarifying that virtual currency exchangers and administrators are money service businesses (MSBs) subject to BSA registration, AML programme, and SAR/CTR filing requirements. This established the regulatory perimeter for cryptocurrency exchanges operating with US nexus. Subsequent guidance (2019, 2021) addressed peer-to-peer exchangers, unhosted wallet providers, and the proposed "travel rule" extension to virtual asset service providers (VASPs), requiring transmission of originator and beneficiary information for transfers above $3,000. The proposed CVC (Convertible Virtual Currency) rulemaking remains among the most contested regulatory actions in US crypto policy, as it would impose reporting obligations on self-custodied wallet interactions.

  - Through 2024–2025, FinCEN is implementing the Corporate Transparency Act (CTA), which took effect January 2024 and requires most US companies to file Beneficial Ownership Information (BOI) reports identifying natural persons who ultimately own or control the entity. This creates a new FinCEN database of beneficial ownership records accessible to law enforcement and financial institutions conducting due diligence. FinCEN is simultaneously developing rulemaking under the Anti-Money Laundering Act of 2020, which mandated the first comprehensive reform of the BSA framework in two decades, including a national AML/CFT priorities statement and requirements for risk-based programme design at covered institutions. For the digital asset sector, FinCEN coordination with the SEC, CFTC, and OFAC continues to define the multi-agency regulatory framework governing cryptocurrency businesses in the United States.