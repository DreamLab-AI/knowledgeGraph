public:: true

# Bank Secrecy Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bank-secrecy-act",
  "@type": "Page",
  "vc:slug": "bank-secrecy-act",
  "title": "Bank Secrecy Act",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bank-secrecy-act",
  "@type": "Class",
  "label": "Bank Secrecy Act",
  "definition": "The Bank Secrecy Act (BSA), enacted in the United States in 1970, is the primary federal anti-money-laundering statute that requires financial institutions to assist US government agencies in detecting and preventing money laundering and financial crime. It mandates customer identification, suspicious activity reporting (SARs), currency transaction reporting (CTRs), and record-keeping — establishing the foundational framework for AML compliance in the US financial system.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:customer-due-diligence",
        "label": "Customer Due Diligence"
      },
      {
        "@id": "urn:ngm:class:beneficial-ownership",
        "label": "Beneficial Ownership"
      },
      {
        "@id": "urn:ngm:class:suspicious-activity-report",
        "label": "Suspicious Activity Report"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-crime-detection",
        "label": "Financial Crime Detection"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:currency-transaction-report",
        "label": "Currency Transaction Report"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:aml-kyc-compliance",
        "label": "AML KYC Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:travel-rule",
        "label": "Travel Rule"
      },
      {
        "@id": "urn:ngm:class:corporate-transparency-act",
        "label": "Corporate Transparency Act"
      },
      {
        "@id": "urn:ngm:class:bc-0456-virtual-asset-service-providers",
        "label": "Virtual Asset Service Provider"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:aml-kyc-compliance",
        "label": "AML KYC Compliance"
      },
      {
        "@id": "urn:ngm:class:usa-patriot-act",
        "label": "USA PATRIOT Act"
      },
      {
        "@id": "urn:ngm:class:counter-terrorist-financing",
        "label": "Counter-Terrorism Financing"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:currency-and-foreign-transactions-reporting-act",
      "label": "Currency and Foreign Transactions Reporting Act"
    },
    {
      "@id": "urn:ngm:class:bsa",
      "label": "BSA"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The Bank Secrecy Act is the cornerstone US federal statute requiring banks, credit unions, money services businesses, broker-dealers, and increasingly virtual asset service providers (VASPs) to maintain records and file reports that enable law enforcement to detect, investigate, and prosecute [[Anti-Money Laundering]] violations, tax evasion, and terrorism financing. Its implementing regulations — administered by the Financial Crimes Enforcement Network (FinCEN) — mandate [[Transaction Monitoring]], customer due diligence (CDD), and the filing of Currency Transaction Reports (CTRs) for cash transactions above $10,000 and Suspicious Activity Reports (SARs) for potentially illegal activity.

- ### Relationships
  - The Bank Secrecy Act operationalises [[Anti-Money Laundering]] requirements in the US, requiring covered institutions to implement robust [[Transaction Monitoring]] systems and [[AML KYC Compliance]] programmes. It aligns with global standards set by [[FATF]] and underpins the US [[Travel Rule]] obligation (31 CFR 103.33) that requires transmittal of originator and beneficiary information for wire transfers above $3,000. [[Financial Crime Detection]] analytics platforms are built specifically to fulfil BSA reporting obligations.

- ### Content
  - Signed into law by President Nixon in 1970, the Bank Secrecy Act (also known as the Currency and Foreign Transactions Reporting Act) was a response to growing use of offshore bank accounts and cash-intensive businesses to conceal illicit proceeds. It was initially narrowly applied but was dramatically expanded by the Money Laundering Control Act of 1986, the USA PATRIOT Act of 2001 (which added customer identification programme requirements and extended BSA to a far broader set of financial service providers), and the Anti-Money Laundering Act of 2020.

  - The regulatory architecture operates through a delegated enforcement model: FinCEN issues BSA regulations and receives all SAR and CTR filings; bank regulators (OCC, Federal Reserve, FDIC, NCUA) examine BSA compliance during safety-and-soundness examinations; and the Department of Justice prosecutes violations. Civil money penalties for BSA failures have reached hundreds of millions of dollars against major financial institutions — including a $1.9bn settlement by HSBC in 2012 and a $3.4bn penalty against TD Bank in 2024, which also faced an asset cap.

  - BSA compliance programmes consist of five pillars: a compliance officer, written policies and procedures, ongoing training, independent testing (audit), and customer due diligence. The CDD Rule, added by FinCEN in 2018, added a fifth pillar — beneficial ownership identification — requiring institutions to identify natural persons owning 25% or more of legal entity customers. Technology solutions for BSA compliance include transaction monitoring platforms, name screening against sanctions lists, and AI-driven anomaly detection.

  - By 2024–2025, the BSA framework is under significant pressure from the emergence of digital assets. FinCEN has extended BSA obligations to virtual currency exchanges and proposed bringing DeFi platforms within scope. The Corporate Transparency Act (CTA), effective 2024, creates a FinCEN beneficial ownership registry that supplements BSA CDD obligations. Regulatory attention is also focused on AI-driven BSA compliance systems — both their potential to improve detection accuracy and the risk of AI-generated SAR filings that lack meaningful human review.

