public:: true

# iosco
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fd9038d4781cf931ea1a29bae43c74c8c357b58d28c6bfbbd6eb3a54ff9d93bd",
  "@type": "Page",
  "vc:slug": "iosco",
  "title": "iosco",
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
  "@id": "urn:ngm:class:iosco",
  "@type": "Class",
  "label": "IOSCO",
  "definition": "The International Organisation of Securities Commissions (IOSCO) is the principal global standard-setting body for securities and capital markets regulation, founded in 1983 and headquartered in Madrid, with membership spanning national securities regulators and self-regulatory organisations from over 130 jurisdictions. IOSCO develops and publishes Objectives and Principles of Securities Regulation, Recommendations, and targeted policy reports adopted by member regulators to promote fair, efficient, and transparent capital markets, protect investors, and reduce systemic risk. Its remit has expanded to cover digital asset markets, crypto-asset intermediaries, decentralised finance, and AI-driven algorithmic trading, making it a central node in the global financial regulatory architecture alongside the Financial Stability Board and Basel Committee.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      },
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-asset-market",
        "label": "Digital Asset Market"
      },
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      },
      {
        "@id": "urn:ngm:class:financial-stability-board",
        "label": "Financial Stability Board"
      },
      {
        "@id": "urn:ngm:class:g20",
        "label": "G20"
      },
      {
        "@id": "urn:ngm:class:basel-committee",
        "label": "Basel Committee"
      },
      {
        "@id": "urn:ngm:class:imf",
        "label": "IMF"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Principles of Securities Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-regulatory-cooperation",
        "label": "Cross-Border Regulatory Cooperation"
      },
      {
        "@id": "urn:ngm:class:market-surveillance",
        "label": "Market Surveillance"
      },
      {
        "@id": "urn:ngm:class:capital-markets",
        "label": "Capital Markets"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-enforcement",
        "label": "Regulatory Enforcement"
      },
      {
        "@id": "urn:ngm:class:information-sharing",
        "label": "Information Sharing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:multilateral-memorandum-of-understanding",
        "label": "Multilateral Memorandum of Understanding"
      },
      {
        "@id": "urn:ngm:class:fsap",
        "label": "FSAP"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      },
      {
        "@id": "urn:ngm:class:bis",
        "label": "BIS"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:algorithmic-trading",
        "label": "Algorithmic Trading"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:international-organisation-of-securities-commissions",
      "label": "International Organisation of Securities Commissions"
    }
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
  - The International Organisation of Securities Commissions ([[IOSCO]]) is the principal global standard-setting body for [[Securities Regulation]] and [[Capital Markets]] oversight, founded in 1983 and headquartered in Madrid. Its membership covers national securities regulators, self-regulatory organisations, and market supervisors from over 130 jurisdictions. IOSCO publishes the authoritative [[Principles of Securities Regulation]] — 38 high-level principles — alongside targeted Recommendations and policy reports that harmonise regulatory expectations across borders and reduce [[Systemic Risk]]. Its work increasingly intersects [[Decentralised Finance]], [[Algorithmic Trading]], and [[AI Governance]] as capital markets adopt new technologies.

- ### Overview
  - IOSCO was established in 1983 as a successor to the Inter-American Association of Securities Commissions, evolving into a global body when European and Asian regulators joined through the 1980s.
  - It operates through a General Assembly of all members, a Board of senior regulators from the largest capital markets, and a President's Committee, supported by a permanent secretariat in Madrid.
  - The three core objectives pursued by IOSCO are:
    - Protecting investors
    - Ensuring that markets are fair, efficient, and transparent
    - Reducing [[Systemic Risk]]
  - IOSCO's normative outputs have two tiers:
    - High-level framework: the IOSCO [[Principles of Securities Regulation]] (38 Principles), used as the benchmark for [[Financial Sector Assessment Program]] (FSAP) reviews conducted by the [[IMF]] and [[World Bank]]
    - Issue-specific: Recommendations, Final Reports, and Consultation Papers on specific market segments, instruments, or risks
  - IOSCO does not have direct enforcement power; it relies on members to implement its standards in national law, supported by cooperation mechanisms such as the Multilateral Memorandum of Understanding ([[MMoU]]) and Enhanced MMoU (EMMoU) for information sharing and cross-border enforcement.
  - Within the [[G20]] financial architecture, IOSCO is a peer of the [[Financial Stability Board]], the [[Basel Committee]] on Banking Supervision, and the Committee on Payments and Market Infrastructures ([[CPMI]]), with which it co-produces joint standards on clearing and settlement.

- ### Key Principles and Mechanisms
  - **38 Principles of Securities Regulation**: grouped into modules covering regulator governance, self-regulation, enforcement, cooperation, issuers, auditors and credit rating agencies, collective investment schemes, market intermediaries, secondary markets, and market infrastructure.
  - **Multilateral MoU (MMoU)**: the IOSCO information-sharing agreement signed by over 130 regulators, enabling cross-border exchange of supervisory and enforcement data without requiring bilateral treaties. The Enhanced MMoU adds mandatory cooperation provisions for serious market misconduct.
  - **FSAP Assessments**: IOSCO Principles form the methodology for [[IMF]] and [[World Bank]] Financial Sector Assessment Program evaluations of capital market regulation in member countries, creating strong implementation incentives.
  - **Committee Structure**: IOSCO's technical work is organised through standing Committees (Growth and Emerging Markets, Retail Investors, Secondary Markets, Intermediaries, Investment Management, Credit Rating Agencies, Derivatives), each producing sector-specific standards.
  - **Policy Recommendations for Crypto and Digital Asset Markets (2023)**: IOSCO's landmark report setting out 18 recommendations covering [[Conflicts of Interest]], [[Market Manipulation]], [[Custody]] of client assets, cross-border cooperation, operational resilience, and disclosure for crypto-asset intermediaries. These benchmarks are referenced by the [[EU MiCA Regulation]], UK FCA, Japanese FSA, and Monetary Authority of Singapore frameworks.
  - **Artificial Intelligence and Algorithmic Trading**: IOSCO has published guidance on [[Algorithmic Trading]] and is developing principles for [[AI Governance]] in [[Market Surveillance]] and automated investment advice, reflecting the growing presence of machine-learning models in capital markets.

- ### Applications and Use Cases
  - **National Regulatory Implementation**: Member regulators — including the US [[SEC]], UK [[FCA]], EU's ESMA, Japan's FSA, and Australia's ASIC — use IOSCO Principles as templates when drafting or revising national securities laws and supervisory frameworks.
  - **FSAP Reviews**: The [[IMF]] uses IOSCO Principles to assess how well a country's securities market regulation protects investors and promotes stability, influencing sovereign credit assessments and development finance.
  - **Digital Asset Frameworks**: National regulators and regional bodies such as the EU (via [[MiCA]]) explicitly cite IOSCO's 2023 Crypto Recommendations as the international baseline, aligning domestic rules with global standards to avoid regulatory arbitrage.
  - **Cross-Border Enforcement**: Regulators use the IOSCO MMoU and EMMoU to request trading data, freeze assets, and share witness statements in cross-border fraud and [[Market Manipulation]] investigations without requiring a formal mutual legal assistance treaty.
  - **Derivatives and Post-Trade**: Joint IOSCO-[[CPMI]] standards govern [[Central Counterparty]] (CCP) resilience, [[Margin Requirements]], and [[Trade Repositories]], directly shaping derivatives clearing regulation in G20 jurisdictions.
  - **Sustainable Finance**: IOSCO's Sustainable Finance Task Force publishes guidance on [[ESG Disclosure]], [[Green Bond]] standards, and climate-related financial risk, informing the [[ISSB]] baseline for capital markets.
  - **Technology Risk and Cybersecurity**: Reports on [[Cybersecurity]] risk management for regulated trading venues and intermediaries provide a baseline that national regulators transpose into supervisory expectations.

- ### Relationships
  - supports:: [[Securities Regulation]]
  - supports:: [[Financial Stability]]
  - supports:: [[Investor Protection]]
  - supports:: [[Market Integrity]]
  - relatedTo:: [[Systemic Risk]]
  - relatedTo:: [[Digital Asset Market]]
  - relatedTo:: [[Financial Stability Board]]
  - relatedTo:: [[G20]]
  - relatedTo:: [[Basel Committee]]
  - relatedTo:: [[IMF]]
  - relatedTo:: [[World Bank]]
  - implements:: [[Principles of Securities Regulation]]
  - implements:: [[IOSCO Objectives and Principles]]
  - enables:: [[Cross-Border Regulatory Cooperation]]
  - enables:: [[Market Surveillance]]
  - enables:: [[Capital Markets]]
  - requires:: [[Regulatory Enforcement]]
  - requires:: [[Information Sharing]]
  - uses:: [[Multilateral Memorandum of Understanding]]
  - uses:: [[FSAP]]
  - contrastsWith:: [[FATF]]
  - contrastsWith:: [[BIS]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Algorithmic Trading]]
  - bridges-to:: [[AI Governance]]

- ### Standards and Regulatory Context
  - IOSCO's 38 Principles of Securities Regulation are the foundational benchmark for capital market supervision globally; the Principles were last comprehensively revised in 2010 with subsequent updates.
  - The 2002 IOSCO MMoU set the standard for cross-border supervisory cooperation and has been progressively enhanced; the EMMoU (2012, updated 2017) added mandatory cooperation obligations.
  - IOSCO Policy Recommendations for Crypto and Digital Asset Markets (2023) directly informed [[EU MiCA Regulation]] (2023/1114), UK HM Treasury crypto consultation, and equivalent frameworks in Singapore, Japan, and the UAE.
  - Joint IOSCO-[[CPMI]] Principles for Financial Market Infrastructures (PFMI, 2012) regulate [[Central Counterparty]] clearing houses and trade repositories globally.
  - IOSCO collaborates with the [[Financial Stability Board]] on crypto-asset regulation, cross-border resolution, and leverage in non-bank financial intermediation.
  - IOSCO's Sustainable Finance work aligns with the [[ISSB]] (International Sustainability Standards Board) on [[ESG Disclosure]] baselines for capital markets participants.
  - In the context of [[Decentralised Finance]] and tokenised assets, IOSCO is developing frameworks to assess when DeFi protocols constitute regulated activities subject to its Principles.
  - IOSCO coordinates with the [[BIS]] Committee on Payments and Market Infrastructures ([[CPMI]]) on stablecoin regulation and [[Central Bank Digital Currency]] interoperability standards.

- ### Historical Development
  - **1974**: Inter-American Association of Securities Commissions (IOSCO precursor) founded.
  - **1983**: Organisation formally reconstituted as IOSCO with a global mandate; secretariat moved to Montreal, then Madrid.
  - **1998**: IOSCO Objectives and Principles of Securities Regulation first published.
  - **2002**: Multilateral MoU for supervisory cooperation launched.
  - **2010**: IOSCO Principles comprehensively updated to 38 Principles reflecting post-financial-crisis lessons.
  - **2012**: Joint IOSCO-CPMI PFMI published, becoming the global standard for financial market infrastructure resilience.
  - **2020–2022**: IOSCO begins formal work on crypto-asset markets and [[Decentralised Finance]] regulation.
  - **2023**: Policy Recommendations for Crypto and Digital Asset Markets published, directly shaping [[MiCA]] and comparable national frameworks.
  - **2024–2025**: IOSCO publishes guidance on [[AI Governance]] and [[Algorithmic Trading]] risk in capital markets; Sustainable Finance Task Force reports on [[ESG Disclosure]] baseline alignment with [[ISSB]].

- ### Provenance
  - sources:: IOSCO.org, FSB, IMF FSAP methodology, EU MiCA Regulation (2023/1114), CPMI-IOSCO PFMI (2012)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
