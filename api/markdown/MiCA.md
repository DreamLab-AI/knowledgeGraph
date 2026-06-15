public:: true

# MiCA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa3b4580e17b77c569feccf581c44b78382c27b6e22b56b24c9f131b67920d45",
  "@type": "Page",
  "vc:slug": "mi-ca",
  "title": "MiCA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:oecd",
      "vc:label": "OECD"
    },
    {
      "@id": "urn:visionflow:linked:infra-legal-and-regulatory",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulation-eu-2023-1114-on-markets-in-crypto-assets",
      "vc:label": "Regulation (EU) 2023/1114 on Markets in Crypto-Assets"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MiCA"
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
  "@id": "urn:ngm:class:mi-ca",
  "@type": "Class",
  "label": "MiCA",
  "definition": "MiCA (Markets in Crypto-Assets Regulation, EU 2023/1114) is the European Union's comprehensive legal framework governing crypto-assets not already covered by existing financial services legislation such as MiFID II. It classifies crypto-assets into three categories — utility tokens, asset-referenced tokens (ARTs), and e-money tokens (EMTs) — imposing tiered obligations on issuers including mandatory white-paper disclosures, capital adequacy requirements, and reserve safeguards for stablecoins. Crypto-asset service providers (CASPs) — encompassing exchanges, custodians, portfolio managers, and advisers — must obtain authorisation from a national competent authority with passporting rights across the EU single market. MiCA entered into force in June 2023 with stablecoin provisions applying from June 2024 and the full CASP regime from December 2024, making it one of the world's first end-to-end crypto regulatory regimes.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:eu-digital-finance-strategy",
        "label": "EU Digital Finance Strategy"
      },
      {
        "@id": "urn:ngm:class:eu-single-market",
        "label": "EU Single Market"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:crypto-asset-white-paper",
        "label": "Crypto-Asset White Paper"
      },
      {
        "@id": "urn:ngm:class:national-competent-authority",
        "label": "National Competent Authority"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:eu-passporting",
        "label": "EU Passporting"
      },
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      },
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:european-banking-authority",
        "label": "European Banking Authority"
      },
      {
        "@id": "urn:ngm:class:european-securities-and-markets-authority",
        "label": "European Securities and Markets Authority"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:crypto-regulation",
        "label": "Crypto-Asset Regulation"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:asset-referenced-token",
        "label": "Asset-Referenced Token"
      },
      {
        "@id": "urn:ngm:class:e-money-token",
        "label": "E-Money Token"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-union",
        "label": "European Union"
      },
      {
        "@id": "urn:ngm:class:eba",
        "label": "EBA"
      },
      {
        "@id": "urn:ngm:class:esma",
        "label": "ESMA"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:mifid-ii",
        "label": "MiFID II"
      },
      {
        "@id": "urn:ngm:class:crypto-regulation",
        "label": "SEC Crypto Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dora",
        "label": "DORA"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:fatf-travel-rule",
        "label": "FATF Travel Rule"
      },
      {
        "@id": "urn:ngm:class:transfer-of-funds-regulation",
        "label": "Transfer of Funds Regulation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:markets-in-crypto-assets-regulation",
      "label": "Markets in Crypto-Assets Regulation"
    },
    {
      "@id": "urn:ngm:class:regulation-eu-2023-1114",
      "label": "Regulation (EU) 2023/1114"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mi-ca:06bc1f0efe06",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aa3b4580e17b77c569feccf581c44b78382c27b6e22b56b24c9f131b67920d45"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OECD]]",
      "resolved": "urn:visionflow:linked:oecd",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:infra-legal-and-regulatory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation (EU) 2023/1114 on Markets in Crypto-Assets]]",
      "resolved": "urn:visionflow:linked:regulation-eu-2023-1114-on-markets-in-crypto-assets",
      "kind": "StubLink"
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
  - MiCA ([[Regulation (EU) 2023/1114 on Markets in Crypto-Assets]]) is the European Union's end-to-end [[Crypto-Asset Regulation]] framework that establishes harmonised rules for the issuance and trading of [[Crypto-Asset]] instruments not already captured by [[MiFID II]], [[UCITS]], or the [[Capital Requirements Regulation]]. It distinguishes three categories — utility tokens, [[Asset-Referenced Token]]s (ARTs), and [[E-Money Token]]s (EMTs) — and imposes layered obligations on issuers and [[Crypto-Asset Service Provider]]s covering authorisation, capital adequacy, governance, market abuse, and consumer protection. The regulation entered into force in June 2023 and completed phased application by December 2024, establishing one of the world's first comprehensive supervisory perimeters for crypto markets.

- ### Overview
  - MiCA was proposed by the European Commission in September 2020 as part of the [[EU Digital Finance Strategy]] and adopted by co-legislators in April 2023. Its central aim is to eliminate regulatory fragmentation across EU member states — where previously each jurisdiction applied disparate national regimes — by creating a single [[EU Passporting]] mechanism: a CASP authorised in one member state may operate across the entire [[EU Single Market]].
  - The regulation responds to the proliferation of [[Stablecoin]]s, the collapse of certain algorithmic token projects, and growing systemic risk concerns within centralised [[Cryptocurrency Exchange]] platforms. It is explicitly technology-neutral but asset-class specific, and deliberately excludes [[Non-Fungible Token]]s (unless they have fungible investment characteristics) and [[Decentralised Finance]] protocols lacking an identifiable issuer.
  - Two European supervisory authorities share responsibility: the [[European Banking Authority]] (EBA) regulates significant ARTs and EMTs, while the [[European Securities and Markets Authority]] (ESMA) oversees CASPs and issues technical standards across the board.

- ### Key Components
  - #### Asset Classification
    - **Utility Tokens** — tokens granting access to a product or service on a [[Distributed Ledger Technology]] platform; lightest disclosure requirements.
    - **[[Asset-Referenced Token]]s (ARTs)** — tokens referencing a basket of assets (currencies, commodities, other crypto-assets); requires [[EBA]] authorisation if significant; strict reserve and redemption rules.
    - **[[E-Money Token]]s (EMTs)** — tokens referencing a single fiat currency; functionally equivalent to [[Electronic Money]] and regulated accordingly; issuers must hold equivalent funds in segregated reserve accounts.
  - #### Crypto-Asset White Paper
    - All public offerings require a mandatory [[Crypto-Asset White Paper]] with prescribed contents: token economics, issuer identity, rights conferred, technology description, risk factors, and environmental sustainability data (reflecting [[EU Taxonomy Regulation]] alignment).
    - White papers must be notified to the [[National Competent Authority]] but are not pre-approved for most token types (liability rests with the issuer).
  - #### CASP Authorisation & Passporting
    - Entities providing custody, exchange, brokerage, advisory, or portfolio management services for crypto-assets must apply to a home-state regulator for CASP status.
    - Once authorised, passporting under [[EU Passporting]] rules allows cross-border service provision with only notification (not re-authorisation) in host states.
    - Minimum capital requirements scale by service type; custody providers face additional requirements on segregation and insurance.
  - #### Significant Stablecoin Regime
    - ARTs and EMTs classified as "significant" (exceeding thresholds for user base, transaction volume, or market capitalisation) are transferred to direct [[EBA]] supervision.
    - Significant issuers face daily transaction limits, enhanced liquidity buffers, interoperability requirements, and closer monitoring by the [[European Systemic Risk Board]].
  - #### Market Abuse Framework
    - MiCA introduces crypto-specific prohibitions on insider trading, unlawful disclosure of inside information, and market manipulation — mirroring the [[Market Abuse Regulation]] (MAR) provisions that apply to securities.
    - CASPs must maintain surveillance systems, report suspicious transactions, and publish inside information promptly.
  - #### Consumer Protection
    - Retail-oriented disclosure obligations, right-of-withdrawal for utility tokens in primary offerings (14-day cooling-off), and prohibition on certain high-risk marketing techniques.
    - Best execution and conflicts-of-interest requirements extend duties familiar from [[MiFID II]] into the crypto context.

- ### Mechanisms
  - **Regulatory Arbitrage Prevention** — single rulebook eliminates jurisdiction shopping within the EU; combined with the [[Transfer of Funds Regulation]] (TFR/Travel Rule) requiring CASPs to transmit originator and beneficiary data on transfers, aligned with [[FATF Travel Rule]].
  - **AML Integration** — MiCA is complemented by [[Anti-Money Laundering]] directives (AMLD6 and the forthcoming AML Regulation); CASPs are obligated entities under AML law, must perform [[Know Your Customer]] (KYC) checks and submit [[Suspicious Activity Report]]s.
  - **Technical Standards** — ESMA and EBA publish Regulatory Technical Standards (RTS) and Implementing Technical Standards (ITS) detailing authorisation procedures, white-paper templates, and CASP operational requirements; these are delegated acts with legally binding force.
  - **Supervisory Colleges** — for cross-border CASPs and significant token issuers, supervisory colleges of home and host regulators coordinate to avoid supervisory gaps.

- ### Applications / Use Cases
  - **[[Cryptocurrency Exchange]]s** — major centralised exchanges operating in the EU (Coinbase, Bitstamp, Kraken EU entities) obtained or applied for CASP licences, restructuring compliance programmes around MiCA's operational standards.
  - **[[Stablecoin]] Issuers** — Circle (USDC) and Société Générale (EUR CoinVertible) adapted reserve and redemption structures to meet ART/EMT requirements; Tether paused Euro-denominated EURT issuance pending compliance assessment.
  - **Institutional [[Digital Asset]] Custody** — banks and trust companies leveraging MiCA to offer regulated crypto custody services within their existing MiFID II licence structures where permitted.
  - **[[Tokenisation]] of Real-World Assets** — MiCA's framework for ARTs provides a pathway for tokenised bonds and commodities where the underlying basket meets the ART definition, complementing the [[DLT Pilot Regime]] for tokenised securities.
  - **[[Central Bank Digital Currency]] Interoperability** — MiCA creates a regulatory environment that supervisors expect will eventually need to interface with the [[Digital Euro]] project overseen by the [[European Central Bank]].
  - **RegTech Compliance Tools** — a wave of [[RegTech]] providers built automated white-paper generation, transaction monitoring, and travel-rule compliance tooling specifically targeting MiCA obligations.

- ### Relationships
  - partOf:: [[EU Digital Finance Strategy]], [[EU Single Market]]
  - requires:: [[Crypto-Asset White Paper]], [[National Competent Authority]], [[Capital Adequacy]]
  - enables:: [[EU Passporting]], [[Consumer Protection]], [[Market Integrity]]
  - dependsOn:: [[European Banking Authority]], [[European Securities and Markets Authority]]
  - implements:: [[Crypto-Asset Regulation]], [[Anti-Money Laundering]]
  - uses:: [[Asset-Referenced Token]], [[E-Money Token]]
  - supports:: [[Stablecoin]], [[Decentralised Finance]]
  - standardizedBy:: [[European Union]], [[EBA]], [[ESMA]]
  - contrastsWith:: [[MiFID II]], [[SEC Crypto Regulation]]
  - bridges-to:: [[Blockchain]], [[Distributed Ledger Technology]], [[Central Bank Digital Currency]]
  - relatedTo:: [[DORA]], [[GDPR]], [[FATF Travel Rule]], [[Transfer of Funds Regulation]]

- ### Standards & Context
  - **Legislative Instrument** — [[Regulation (EU) 2023/1114 on Markets in Crypto-Assets]], published in the Official Journal of the EU, 9 June 2023; directly applicable in all member states without transposition.
  - **Companion Legislation** — [[Digital Operational Resilience Act]] ([[DORA]]) (EU 2022/2554) applies concurrently to CASPs as ICT-regulated entities; [[Transfer of Funds Regulation]] (TFR, EU 2023/1113) extends [[FATF Travel Rule]] to crypto; [[AML Regulation]] package (2024) will supersede AMLD6 obligations.
  - **DLT Pilot Regime** — [[Regulation (EU) 2022/858]] creates a sandbox for [[Distributed Ledger Technology]]-based trading and settlement infrastructure, complementing MiCA for tokenised financial instruments under [[MiFID II]] scope.
  - **Global Context** — MiCA has emerged as a reference model for comparable initiatives: the UK's [[Financial Services and Markets Act 2023]] crypto regime, Hong Kong's VASP licensing regime, Singapore's [[MAS Digital Token]] framework, and [[IOSCO]] crypto policy recommendations all reference or contrast with MiCA.
  - **[[OECD]] Crypto-Asset Reporting Framework (CARF)** — a separate tax-reporting standard requiring CASPs to report user transaction data to tax authorities, operationally bundled with MiCA compliance programmes but legally distinct.
  - **Supervisory Bodies** — [[EBA]] (significant ARTs and EMTs), [[ESMA]] (CASPs and technical standards), [[European Systemic Risk Board]] (ESRB, macro-prudential monitoring of significant stablecoins), and national competent authorities (NCAs, e.g. BaFin in Germany, AMF in France, CBI in Ireland).
  - **Exclusions** — [[Non-Fungible Token]]s with unique characteristics, [[Decentralised Finance]] with no identifiable issuer, intra-group tokens, and instruments already regulated under [[MiFID II]], [[Solvency II]], or the [[Capital Requirements Regulation]] are outside MiCA's scope.

- ### Provenance
  - sources:: [[Regulation (EU) 2023/1114 on Markets in Crypto-Assets]], [[EU Digital Finance Strategy]], [[EBA]], [[ESMA]]
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z
