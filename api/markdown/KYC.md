public:: true

# KYC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6895b775af7de0c9dd1899747bd9967cfdee5a71248b9e5ea37578ab6c26944",
  "@type": "Page",
  "vc:slug": "kyc",
  "title": "KYC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:know-your-customer",
      "vc:label": "Know Your Customer"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "KYC"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kyc",
  "@type": "Class",
  "label": "KYC",
  "definition": "Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship, forming a cornerstone of anti-money laundering and counter-terrorist financing compliance frameworks.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:identity-verification",
    "label": "Identity Verification"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:customer-due-diligence",
        "label": "Customer Due Diligence"
      },
      {
        "@id": "urn:ngm:class:document-verification",
        "label": "Document Verification"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:counter-terrorist-financing",
        "label": "Counter-Terrorist Financing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:enhanced-due-diligence",
        "label": "Enhanced Due Diligence"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Politically Exposed Person Screening"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:optical-character-recognition",
        "label": "Optical Character Recognition"
      },
      {
        "@id": "urn:ngm:class:risk-scoring",
        "label": "Risk Scoring"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-action-task-force",
        "label": "Financial Action Task Force"
      },
      {
        "@id": "urn:ngm:class:bank-secrecy-act",
        "label": "Bank Secrecy Act"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "EU Anti-Money Laundering Directive"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-protocol",
        "label": "Privacy-Preserving Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:aml",
        "label": "AML/CFT"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:know-your-customer",
      "label": "Know Your Customer"
    },
    {
      "@id": "urn:ngm:class:customer-identification",
      "label": "Customer Identification"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:kyc:84a9ceb1ee3a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6895b775af7de0c9dd1899747bd9967cfdee5a71248b9e5ea37578ab6c26944"
  },
  "vc:resolutions": [
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Know Your Customer]]",
      "resolved": "urn:visionflow:linked:know-your-customer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship.

- ### Semantic Classification
  - owl-class:: governance:KYC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Identity Verification]]
  - bridges-to:: [[Know Your Customer]], [[Financial Regulation]]
  - requires:: [[Identity Verification]], [[Anti-Money Laundering]]
  - enables:: [[Compliance]]

- ### Content
  - Know Your Customer procedures require regulated entities such as banks and financial service providers to identify and verify their customers, understand the nature of their activities and assess the risk of illicit use. These procedures support anti-money laundering and counter-terrorist financing obligations.
  - KYC typically involves collecting identifying documents, screening against sanctions and politically exposed person lists, and ongoing monitoring of transactions. Requirements vary by jurisdiction and by the risk profile of the customer and product.

- ### Current Landscape (2026)
  - The EU AML Package (adopted 30 May 2024) is reshaping KYC: the Anti-Money Laundering Authority (AMLA) became operational in Frankfurt on 1 July 2025 and, from 1 January 2026, took over all EU-level AML/CFT tasks from the European Banking Authority, ahead of direct supervision of up to ~40 high-risk cross-border institutions from 1 January 2028.
  - AMLA is due to submit roughly 23 Level 2/3 measures (RTS, ITS and guidelines) to the European Commission by 10 July 2026, including binding Regulatory Technical Standards on customer due diligence; the single-rulebook AMLR (Regulation (EU) 2024/1624) itself becomes directly applicable on 10 July 2027, lowering the occasional-transaction CDD threshold from EUR 15,000 to EUR 10,000 and standardising the UBO threshold at 25% (reducible to 15% for high-risk sectors).
  - The industry is shifting decisively from point-in-time checks to perpetual KYC (pKYC): AMLR Article 26 mandates event-driven refresh with maximum update intervals capped at one year for higher-risk and five years for other customers, moving firms toward continuous, trigger-based customer lifecycle management.
  - Deepfake and synthetic-identity fraud has become the dominant onboarding threat: FinCEN's November 2024 alert (FIN-2024-Alert004, key term "FIN-2024-DEEPFAKEFRAUD") flagged generative-AI bypass of KYC at scale, and FATF's December 2025 Horizon Scan named deepfakes a direct threat to CDD controls, pushing NFC chip verification, active liveness and injection-attack detection from optional to baseline.
  - Digital identity is being formalised as the preferred verification route: the AMLR recognises eIDAS 2.0 electronic identification as equivalent to in-person checks, and CIR (EU) 2026/798 (adopted 7 April 2026) made ETSI TS 119 461 the mandatory remote-onboarding standard, with EU Digital Identity (EUDI) Wallet issuance beginning December 2026 and obliged entities required to accept it from 2027.
  - Crypto KYC tightened as MiCA's full CASP authorisation regime applied across the EU from 30 December 2024 and the revised Transfer of Funds Regulation imposed zero-threshold Travel Rule data collection, with self-hosted wallet ownership verified by at least two methods above EUR 1,000; the US enacted the GENIUS Act in July 2025.
  - Open challenges as of 2026 include a deregulatory pull in the US (FinCEN delaying its beneficial-ownership Final Rule and BSA/CTR modernisation debates) colliding with rising financial crime, injection attacks that bypass the camera layer entirely, instant-payment fraud windows the EBA warns are ten times riskier, and extension of AML obligations to non-financial "Tranche 2" sectors (Australia from 1 July 2026, UK single professional-services supervisor).

- ### References
  - 1. KYC360 (2026). Key Regulatory Reforms To Watch — 2026 KYC/AML Outlook. https://kyc360.com/knowledge-hub/resources/2026-kyc-aml-outlook
  - 2. Timvero (2026). KYC and AML Compliance for Digital Lenders in 2026. https://timvero.com/blog/kyc-and-aml-compliance-in-digital-lending
  - 3. European Banking Authority (2025). Anti-Money Laundering and Countering the Financing of Terrorism. https://www.eba.europa.eu/regulation-and-policy/anti-money-laundering-and-countering-financing-terrorism
  - 4. IDnow (2026). AMLA is Rewriting Europe's AML Rules. Here's What it Means. https://idnow.io/insights/blog/amla-europes-aml-rules-rewritten/
  - 5. RiskTemplate (2026). KYC in the Deepfake Era: Why Document + Selfie Verification Fails. https://risktemplate.com/blog/2026-07-06-kyc-deepfake-document-fraud-identity-proofing-fincen-2026/
  - 6. Zyphe (2026). Crypto KYC Compliance: Requirements & Checklist 2026. https://www.zyphe.com/resources/blog/crypto-kyc-compliance

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
