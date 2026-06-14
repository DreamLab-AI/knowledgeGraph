public:: true

# Traditional Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b4df3365f86b8822a4a0397d8e5a1b85cb45a013d0c909a6ff63a2e29cc445d",
  "@type": "Page",
  "vc:slug": "traditional-finance",
  "title": "Traditional Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:institutional-adoption",
      "vc:label": "Institutional Adoption"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure",
      "vc:label": "Financial Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Traditional Finance"
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
  "@id": "urn:ngm:class:traditional-finance",
  "@type": "Class",
  "label": "Traditional Finance",
  "definition": "Traditional Finance (TradFi) denotes the incumbent financial system comprising central banks, commercial and investment banks, securities exchanges, clearing houses, custodians, and regulated intermediaries that operate under sovereign legal frameworks. It relies on trusted third parties to record ownership, settle transactions, and extend credit, in contrast to decentralised or blockchain-native alternatives. Its architecture encompasses fractional-reserve banking, fiat currency issuance, and multilateral settlement rails such as SWIFT and RTGS systems. TradFi institutions are subject to prudential regulation, capital adequacy requirements (Basel III/IV), and conduct oversight by bodies such as the SEC, FCA, and ECB.",
  "domain": "finance",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure",
      "label": "Financial Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:commercial-banking", "label": "Commercial Banking"},
      {"@id": "urn:ngm:class:investment-banking", "label": "Investment Banking"},
      {"@id": "urn:ngm:class:securities-exchange", "label": "Securities Exchange"},
      {"@id": "urn:ngm:class:central-banking", "label": "Central Banking"},
      {"@id": "urn:ngm:class:clearing-house", "label": "Clearing House"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:fiat-currency", "label": "Fiat Currency"},
      {"@id": "urn:ngm:class:kyc-aml", "label": "KYC/AML"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:institutional-adoption", "label": "Institutional Adoption"},
      {"@id": "urn:ngm:class:capital-markets", "label": "Capital Markets"},
      {"@id": "urn:ngm:class:payment-systems", "label": "Payment Systems"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:financial-infrastructure", "label": "Financial Infrastructure"},
      {"@id": "urn:ngm:class:central-banking", "label": "Central Banking"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:de-fi", "label": "DeFi"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"},
      {"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"},
      {"@id": "urn:ngm:class:real-world-assets", "label": "Real World Assets"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:asset-management", "label": "Asset Management"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:market-microstructure", "label": "Market Microstructure"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:trad-fi", "label": "TradFi"},
    {"@id": "urn:ngm:class:conventional-finance", "label": "Conventional Finance"}
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:traditional-finance:f85f6b10d355",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5b4df3365f86b8822a4a0397d8e5a1b85cb45a013d0c909a6ff63a2e29cc445d"
  },
  "vc:resolutions": [
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Adoption]]",
      "resolved": "urn:visionflow:linked:institutional-adoption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Infrastructure]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure",
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
  - Traditional Finance (also known as TradFi or [[Conventional Finance]]) encompasses the incumbent global financial system built on centuries of chartered institutions, sovereign law, and centralised record-keeping. It includes [[Commercial Banking]], [[Investment Banking]], [[Securities Exchange|securities exchanges]], [[Central Banking|central banks]], [[Clearing House|clearing houses]], [[Custodian|custodians]], and asset managers, all operating under nationally and internationally coordinated regulatory frameworks. Unlike [[DeFi|Decentralised Finance]], TradFi relies on trusted intermediaries for settlement, custody, and credit extension, and is anchored in [[Fiat Currency]] and sovereign monetary policy. Its defining characteristic is the layered principal-agent structure: depositors entrust banks, banks access central bank reserves, and multilateral bodies like the BIS coordinate cross-border liquidity.

- ### Overview
  - Traditional Finance represents the dominant global system for allocating capital, managing risk, and facilitating payments. It evolved from medieval merchant banking and the first sovereign bond markets in Renaissance Italy and the Netherlands, through the gold standard era, Bretton Woods, and into the present fiat monetary system.
  - Key structural features include:
    - Fractional-reserve banking, where banks lend multiples of deposits and create money endogenously
    - Central bank oversight of monetary supply, interest rates, and lender-of-last-resort functions
    - Multilateral settlement rails — SWIFT for messaging, CHIPS and TARGET2 for gross and net settlement, CLS for FX settlement
    - Regulated exchanges (NYSE, LSE, Euronext) and alternative trading systems operating under market conduct rules
    - Custodial chains ensuring legal title and beneficial ownership are segregated and protected
  - TradFi institutions hold systemic importance because their failure can cascade across the broader economy, motivating macroprudential regulation and deposit insurance schemes such as those provided by the FDIC (US) and FSCS (UK).
  - The term "TradFi" gained currency specifically as a contrastive label once [[DeFi]] protocols began offering financial primitives (lending, exchange, derivatives) without intermediaries, highlighting the trade-offs between trusted efficiency and permissionless access.

- ### Key Components
  - **[[Central Banking]]**
    - Issues base money and reserves; sets policy rates; acts as lender of last resort
    - Examples: Federal Reserve, ECB, Bank of England, Bank of Japan
  - **[[Commercial Banking]]**
    - Accepts deposits, extends loans, operates payment accounts
    - Subject to [[Basel III|Basel III/IV]] capital adequacy rules and [[KYC/AML]] obligations
  - **[[Investment Banking]]**
    - Underwrites securities, advises on mergers and acquisitions, trades on own account
    - Governed by securities law (MiFID II in EU, Dodd-Frank in US)
  - **[[Securities Exchange|Securities Exchanges]]**
    - Centralised or electronic platforms matching buyers and sellers of equities, bonds, and derivatives
    - Operate under exchange licences; enforce listing requirements and price transparency rules
  - **[[Clearing House|Central Counterparty Clearing Houses (CCPs)]]**
    - Interpose themselves between buyer and seller, mutualising counterparty risk
    - Examples: LCH, CME Clearing, Eurex Clearing
  - **[[Custodian|Custodians]] and Depositories**
    - Safekeep securities and handle corporate actions; central securities depositories (Euroclear, DTC) maintain master registries
  - **[[Asset Management]]**
    - Pension funds, mutual funds, ETF providers, hedge funds, and sovereign wealth funds allocate capital across asset classes
  - **[[Payment Systems]]**
    - Retail payment rails (Visa, Mastercard, ACH, Faster Payments), wholesale RTGS systems, and correspondent banking networks
  - **[[Financial Regulation|Regulation and Supervision]]**
    - Prudential regulators (OCC, PRA, BaFin) enforce solvency; conduct regulators (FCA, SEC, ESMA) enforce market integrity

- ### Mechanisms
  - **[[Fractional Reserve Banking]]** — Banks hold a fraction of deposits as reserves and lend the remainder, creating broad money
  - **[[Monetary Policy]]** — Central banks adjust base rates and conduct open-market operations (QE/QT) to target inflation and employment
  - **[[Market Microstructure]]** — Order books, market makers, and post-trade infrastructure determine price discovery and settlement efficiency
  - **[[Risk Management]]** — Value-at-Risk (VaR), stress testing, and margin requirements constrain leverage across the system
  - **[[Correspondent Banking]]** — Cross-border payments flow through chains of correspondent relationships, each holding accounts at the next tier
  - **[[Securitisation]]** — Banks package illiquid loans (mortgages, auto loans) into tradeable instruments, transferring risk to capital markets

- ### Applications / Use Cases
  - **[[Capital Markets]] Financing** — Corporations and sovereigns raise debt and equity capital through syndicated bond issuances and IPOs on regulated exchanges
  - **[[Trade Finance]]** — Letters of credit, documentary collections, and supply-chain finance underpin global goods trade
  - **[[Derivatives]] and [[Hedging]]** — Interest-rate swaps, FX forwards, and commodity futures allow institutions to manage exposure to market risk
  - **[[Retail Banking]] Services** — Current accounts, mortgages, credit cards, and personal loans constitute the consumer interface of TradFi
  - **[[Wealth Management]]** — Private banks and family offices provide portfolio construction, tax optimisation, and estate planning for high-net-worth clients
  - **[[Insurance]]** — Risk pooling across life, property, and liability lines, with insurers reinvesting premiums in TradFi capital markets
  - **Pension and Retirement Savings** — Defined-benefit and defined-contribution schemes channel long-term capital into equities, bonds, and alternatives
  - **Central Bank Interventions** — Quantitative easing, emergency lending facilities, and foreign reserve management

- ### Relationships
  - hasPart:: [[Commercial Banking]], [[Investment Banking]], [[Securities Exchange]], [[Central Banking]], [[Clearing House]]
  - requires:: [[Regulatory Compliance]], [[Fiat Currency]], [[KYC/AML]]
  - enables:: [[Institutional Adoption]], [[Capital Markets]], [[Payment Systems]]
  - dependsOn:: [[Financial Infrastructure]], [[Central Banking]]
  - contrastsWith:: [[DeFi]], [[Decentralised Finance]], [[Cryptocurrency]]
  - bridges-to:: [[Tokenisation]], [[Central Bank Digital Currency]], [[Blockchain Interoperability]], [[Real World Assets]]
  - relatedTo:: [[Asset Management]], [[Risk Management]], [[Financial Regulation]], [[Market Microstructure]]
  - sameAs:: [[TradFi]], [[Conventional Finance]]

- ### Standards & Context
  - **[[Basel III]] / Basel IV** — International capital adequacy and liquidity standards published by the Basel Committee on Banking Supervision (BCBS); phased implementation through national regulators
  - **[[MiFID II]]** — EU Markets in Financial Instruments Directive; governs investment services, market transparency, and best-execution obligations
  - **[[Dodd-Frank Act]]** — US post-2008 crisis legislation establishing the FSOC, CFPB, and mandatory central clearing of OTC derivatives
  - **SWIFT ISO 20022** — Migration of payment messaging to a structured data standard enabling richer remittance information and AML screening
  - **[[FATF]]** (Financial Action Task Force) — Sets global [[KYC/AML|Anti-Money Laundering]] and counter-terrorism financing standards adopted by member jurisdictions
  - **[[IFRS]] / US GAAP** — Accounting standards governing financial reporting by banks and listed companies
  - **BIS CPMI** — Committee on Payments and Market Infrastructures publishes Principles for Financial Market Infrastructures (PFMI) used by CCPs and CSDs
  - **Regulatory bodies**: SEC (US equities/derivatives), CFTC (US commodities/futures), FCA (UK), ESMA (EU), APRA (Australia), MAS (Singapore)

- ### Convergence with Emerging Finance
  - TradFi is increasingly intersecting with blockchain and distributed-ledger technology through several vectors:
    - **[[Tokenisation]] of [[Real World Assets]]** — Bonds, equities, fund units, and commodities represented as on-chain tokens, settling on permissioned or public ledgers
    - **[[Central Bank Digital Currency|CBDCs]]** — Central banks exploring digital fiat issued directly to end-users or as wholesale interbank settlement assets
    - **[[Blockchain Interoperability]]** — Bridges and atomic-swap protocols enabling TradFi assets to interact with [[DeFi]] liquidity pools
    - **[[Institutional Adoption]]** — Custodians (BNY Mellon, State Street), exchanges (DTCC, SIX Digital Exchange), and prime brokers entering digital-asset markets
    - **[[Stablecoin|Stablecoins]]** — Fiat-backed tokens (USDC, USDT) acting as settlement rails connecting TradFi and DeFi ecosystems
  - This convergence is shaping regulatory frameworks such as MiCA (EU) and the UK's Financial Services and Markets Act 2023 amendments covering digital assets.

- ### Provenance
  - sources:: Basel Committee on Banking Supervision publications; BIS Annual Economic Reports; Financial Stability Board (FSB) frameworks; IMF Global Financial Stability Reports; academic literature on monetary economics (Mishkin, Goodhart)
  - updated:: 2026-06-13
