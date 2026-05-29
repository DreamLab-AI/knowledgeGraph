public:: true

# Sanctions Screening
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sanctions-screening",
  "@type": "Page",
  "vc:slug": "sanctions-screening",
  "title": "Sanctions Screening",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sanctions-screening",
  "@type": "Class",
  "label": "Sanctions Screening",
  "definition": "Sanctions Screening is the regulatory compliance process by which financial institutions, fintech operators, and other regulated entities check customers, counterparties, and transactions against government-issued sanctions lists—such as those maintained by OFAC, the UN Security Council, HM Treasury, and the EU—to prevent prohibited dealings with designated individuals, entities, and jurisdictions. The process involves name-matching algorithms, fuzzy logic to handle transliterations and aliases, and risk-based escalation procedures for potential matches. In blockchain and digital asset contexts, screening extends to wallet addresses and on-chain transaction flows. Failure to screen adequately exposes institutions to severe civil and criminal penalties.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"},
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:fatf", "label": "FATF"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:sanctions-enforcement", "label": "Sanctions Enforcement"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"},
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Sanctions Screening is the [[Regulatory Compliance]] process of checking customers and transactions against government-issued watchlists to prevent dealings with sanctioned individuals, ensuring compliance with [[Financial Regulation]] and supporting [[Sanctions Enforcement]] by national authorities.
- ### Relationships
  - Sanctions screening is a component of the broader [[AML KYC Compliance]] programme, implementing requirements set by [[FATF]] standards and national regulators. It generates [[Audit Trail]] records that evidence due diligence to supervisors and feeds into [[Compliance Monitoring]] dashboards. In digital asset contexts it integrates with [[Blockchain Compliance]] tools that screen wallet addresses and transaction chains. [[Fraud Detection]] capabilities complement screening by identifying anomalous patterns indicative of evasion, and [[Anti-Money Laundering]] controls rely on screening as a first-line filter.
- ### Content
  - Sanctions programmes are instruments of foreign policy and national security administered by specialist government bodies: the US Office of Foreign Assets Control (OFAC), the UK's Office of Financial Sanctions Implementation (OFSI), the EU's Directorate-General for Financial Stability, Financial Services and Capital Markets Union, and the UN Security Council Consolidated Sanctions List. Each maintains lists of Specially Designated Nationals (SDNs), entities, and prohibited jurisdictions that financial institutions are legally obligated to screen against.

  - The technical challenge of screening lies in the imprecision of name-matching: sanctioned individuals and entities may be represented with spelling variations, transliterations from non-Latin scripts, aliases, and name components reordered across different databases. Screening engines use fuzzy matching algorithms—Levenshtein distance, phonetic encoding, and machine learning classifiers—to surface near-matches whilst minimising both false positives that create customer friction and false negatives that create compliance exposure.

  - The rise of digital assets and blockchain-based financial systems has expanded the surface area of sanctions screening from legal entities and individuals to on-chain addresses. OFAC's designation of specific Ethereum addresses—including those associated with Tornado Cash—established that cryptographic identifiers can themselves be sanctioned, requiring exchanges and DeFi protocols to implement address screening against updated lists. Blockchain analytics providers such as Chainalysis and Elliptic offer real-time address risk-scoring services to support this.

  - Screening must be continuous, not merely a one-time onboarding check. Regulators expect institutions to re-screen existing customers when list updates are published—which may occur multiple times daily for OFAC—creating operational demands that require automated, high-throughput screening pipelines integrated into core banking and payments infrastructure.

  - The legal standard for sanctions compliance is strict liability in many jurisdictions: OFAC does not require intent to prove a violation, making robust screening, alert adjudication workflows, escalation procedures, and contemporaneous documentation of screening decisions critical components of a defensible compliance programme.
