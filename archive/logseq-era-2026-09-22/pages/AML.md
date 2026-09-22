public:: true

# AML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c6015895d214a2f3174dcc3febd7127523508c912a477a0bd0006156c34d659",
  "@type": "Page",
  "vc:slug": "aml",
  "title": "AML",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:classification",
      "vc:label": "Classification"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AML"
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
  "@id": "urn:ngm:class:aml",
  "@type": "Class",
  "label": "AML",
  "definition": "Anti-Money Laundering (AML) is the body of laws, regulations, policies, and operational controls that obligate financial institutions to detect, prevent, and report the process by which criminals disguise proceeds of illegal activity as legitimate income. AML frameworks encompass Know Your Customer (KYC) identity verification, ongoing transaction monitoring, suspicious activity reporting (SAR), and risk-based compliance programmes overseen by regulators such as the Financial Action Task Force (FATF), FinCEN, and national supervisory authorities. Machine learning and network analytics have become central to modern AML systems, enabling real-time anomaly detection and entity-resolution across large transaction graphs. Regulated entities that fail to meet AML obligations face substantial financial penalties, licence revocations, and criminal liability.",
  "domain": "finance",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-services",
      "label": "Financial Services"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:anti-money-laundering",
      "label": "Anti-Money Laundering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:suspicious-activity-report",
        "label": "Suspicious Activity Reporting"
      },
      {
        "@id": "urn:ngm:class:customer-due-diligence",
        "label": "Customer Due Diligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:risk-scoring",
        "label": "Risk Scoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-crime-prevention",
        "label": "Financial Crime Prevention"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:graph-analytics",
        "label": "Graph Analytics"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      },
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:aml:22775a0eeeb5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5c6015895d214a2f3174dcc3febd7127523508c912a477a0bd0006156c34d659"
  },
  "vc:resolutions": [
    {
      "raw": "[[Classification]]",
      "resolved": "urn:visionflow:linked:classification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
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
  - Anti-Money Laundering (AML) is the regulatory, legal, and operational framework that compels [[Financial Services]] institutions — banks, payment processors, exchanges, and other regulated entities — to detect, disrupt, and disclose the process by which criminals conceal the origins of illegally obtained funds. Core AML obligations include [[KYC]] (Know Your Customer) identity verification, continuous [[Transaction Monitoring]], [[Suspicious Activity Reporting]], and risk-based [[Customer Due Diligence]]. Modern AML programmes integrate [[Machine Learning]] and [[Graph Analytics]] to identify complex laundering typologies at scale, while remaining subject to [[Explainability]] requirements because their outputs drive consequential decisions about customers and counterparties.

- ### Overview
  - Money laundering is estimated by the United Nations Office on Drugs and Crime to represent a large fraction of global GDP annually, channelling proceeds of drug trafficking, corruption, fraud, and organised crime back into the legitimate economy.
  - AML frameworks emerged from the Bank Secrecy Act (1970, United States), the Vienna Convention (1988), and subsequent FATF Recommendations (1989–present), which established a global baseline of controls now adopted by over 200 jurisdictions.
  - Financial institutions bear primary responsibility for compliance. Regulators — including [[FinCEN]] (US), the FCA (UK), BaFin (Germany), and MAS (Singapore) — supervise implementation and levy penalties for deficiencies.
  - The three-stage laundering model — *placement*, *layering*, and *integration* — guides the design of detection controls. Placement moves illicit cash into the financial system; layering obscures trails through multiple transactions; integration reintroduces funds as apparently legitimate assets.
  - AML compliance is distinct from but complementary to [[Fraud Detection]] and [[Sanctions Screening]]; together these form a broader financial-crime compliance (FCC) programme.

- ### Key Components
  - #### Customer Due Diligence (CDD) and KYC
    - [[KYC]] establishes and verifies customer identity at onboarding using government-issued documents, biometric checks, and data-matching against watchlists.
    - Enhanced Due Diligence (EDD) applies to higher-risk customers such as Politically Exposed Persons (PEPs) and high-net-worth individuals from high-risk jurisdictions.
    - [[Customer Due Diligence]] is an ongoing obligation, not a one-time check — periodic refreshes and trigger-event reviews are required.
  - #### Transaction Monitoring
    - [[Transaction Monitoring]] systems apply rules and statistical models to detect transaction patterns indicative of layering or structuring (e.g. smurfing — splitting large sums into sub-threshold deposits).
    - Rule-based systems set thresholds (e.g. cash transactions above $10,000 in the US) but generate high false-positive rates. [[Machine Learning]] models — including gradient-boosted trees, [[Anomaly Detection]] autoencoders, and recurrent neural networks — improve precision.
    - [[Graph Analytics]] and network analysis reveal indirect relationships: identifying shell-company networks, beneficial ownership chains, and circular fund flows that evade per-transaction rules.
  - #### Suspicious Activity Reporting (SAR)
    - When monitoring systems flag suspicious activity, compliance officers file SARs with financial intelligence units (FIUs) such as FinCEN or the National Crime Agency (NCA, UK).
    - SAR quality — specificity, timeliness, and actionability — is a regulatory focus. [[Natural Language Processing]] tools assist analysts in drafting and enriching SAR narratives.
  - #### Risk Scoring
    - [[Risk Scoring]] models assign customers, accounts, and counterparties an ongoing risk rating that governs monitoring intensity and review frequency.
    - Factors include geography, industry, transaction velocity, PEP status, adverse media, and deviation from expected behaviour (customer risk profiling).
  - #### Identity Verification
    - [[Identity Verification]] underpins KYC and increasingly leverages digital identity standards, liveness detection, and cross-border identity federation.

- ### Applications and Use Cases
  - **Retail banking**: transaction monitoring for personal and SME accounts, flagging unusual cash deposits, rapid fund movements, and international wire patterns.
  - **Correspondent banking**: screening of cross-border payment flows and de-risking decisions where AML costs outweigh expected revenue.
  - **Cryptocurrency exchanges**: FATF's Travel Rule (Recommendation 16) requires virtual-asset service providers (VASPs) to transmit originator and beneficiary information alongside transfers, integrating [[Blockchain]] analytics tools (Chainalysis, Elliptic) for on-chain tracing.
  - **Trade finance**: detection of trade-based money laundering (TBML), where invoices are falsified to move value across borders under the cover of goods and services.
  - **Insurance**: screening for premium-payment laundering and suspicious claim patterns.
  - **Federated compliance**: [[Federated Learning]] enables banks to train shared AML models on pooled signals without sharing raw customer data — addressing privacy constraints under GDPR and equivalent regimes.
  - **Regulatory technology (RegTech)**: purpose-built AML platforms (e.g. NICE Actimize, Oracle Financial Services, Temenos) provide integrated CDD, monitoring, and case management.

- ### Relationships
  - hasPart:: [[KYC]]
  - hasPart:: [[Transaction Monitoring]]
  - hasPart:: [[Suspicious Activity Reporting]]
  - hasPart:: [[Customer Due Diligence]]
  - requires:: [[Classification]]
  - requires:: [[Identity Verification]]
  - requires:: [[Risk Scoring]]
  - enables:: [[Financial Crime Prevention]]
  - enables:: [[Regulatory Compliance]]
  - uses:: [[Machine Learning]]
  - uses:: [[Graph Analytics]]
  - uses:: [[Anomaly Detection]]
  - uses:: [[Natural Language Processing]]
  - standardizedBy:: [[FATF]]
  - standardizedBy:: [[Basel III]]
  - contrastsWith:: [[Fraud Detection]]
  - contrastsWith:: [[Sanctions Screening]]
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[Explainability]]
  - relatedTo:: [[Data Governance]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Blockchain]]

- ### Standards and Context
  - **FATF Recommendations**: The Financial Action Task Force's 40 Recommendations are the primary international standard. FATF mutual evaluations assess country-level compliance; poor ratings result in grey- or blacklisting with severe economic consequences.
  - **EU AMLD series**: The EU Anti-Money Laundering Directives (4AMLD, 5AMLD, 6AMLD) harmonise AML obligations across member states, expanding beneficial ownership registers, crypto-asset coverage, and criminal liability.
  - **Bank Secrecy Act / FinCEN**: US regulations require Currency Transaction Reports (CTR) and SARs; FinCEN's Customer Due Diligence rule (2018) mandated beneficial ownership identification for legal-entity customers.
  - **Basel III/IV**: The Basel Committee on Banking Supervision integrates AML risk into broader operational risk and governance frameworks, requiring documented AML risk appetites and board oversight.
  - **FATF Travel Rule (R.16)**: Requires payment and VASP originators to transmit identifying information with transfers above threshold — extending AML obligations into the crypto-asset ecosystem.
  - **Wolfsberg Group Principles**: Industry principles (by major correspondent banks) on correspondent banking, trade finance, and payment transparency that operationalise FATF guidance.
  - **ISO 20022**: Richer payment messaging standard facilitating better structured data for AML screening and reducing false positives from poorly formatted SWIFT messages.

- ### Challenges and Open Problems
  - **False positive overload**: Rule-based systems generate 90–95 % false-positive rates; analyst alert fatigue leads to genuine SAR under-filing.
  - **Data silos**: AML signals are fragmented across product lines and jurisdictions; data-sharing between institutions is legally constrained in many markets.
  - **Explainability vs accuracy**: Regulators expect human-understandable rationale for alerts; complex ensemble or deep-learning models create tension with [[Explainability]] requirements.
  - **Typology evolution**: Criminals adapt rapidly; layering via decentralised finance (DeFi), NFT markets, and privacy coins creates new detection challenges.
  - **Correspondent de-risking**: Banks exit high-risk markets entirely rather than invest in AML systems, reducing financial inclusion and shifting risk underground.
  - **Beneficial ownership opacity**: Shell companies and nominee arrangements remain exploited; public registers vary in quality and update frequency across jurisdictions.

- ### Provenance
  - sources:: FATF Recommendations (fatf-gafi.org); EU AMLD 4/5/6; Bank Secrecy Act (31 USC §5311); Basel Committee Sound Management of Risks Related to ML/TF (2014); Wolfsberg Group Principles
  - updated:: 2026-06-13
