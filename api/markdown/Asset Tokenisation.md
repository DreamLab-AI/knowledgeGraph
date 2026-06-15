public:: true

# asset tokenisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:40a4e009c6f2b42290f675d4da21276556d1aacb69a9e9a6540e55ad490b40b8",
  "@type": "Page",
  "vc:slug": "asset-tokenisation",
  "title": "asset tokenisation",
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
  "@id": "urn:ngm:class:asset-tokenisation",
  "@type": "Class",
  "label": "Asset Tokenisation",
  "definition": "Asset tokenisation is the process of representing ownership, revenue rights, or access rights in a real-world or digital asset as a cryptographically secured blockchain token governed by a smart contract. The token encodes legally binding claims — to real estate, private equity, bonds, commodities, or intellectual property — while embedding compliance logic such as KYC whitelisting and transfer restrictions directly on-chain. Tokenisation enables fractional ownership, continuous secondary trading, and automated settlement without traditional intermediaries, sitting at the convergence of securities regulation, distributed ledger infrastructure, and programmable finance.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset",
      "label": "Digital Asset"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:real-world-asset-tokenisation",
      "label": "Real-World Asset Tokenisation"
    },
    {
      "@id": "urn:ngm:class:security-token-offering",
      "label": "Security Token Offering"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fractional-ownership",
        "label": "Fractional Ownership"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-action-task-force",
        "label": "Financial Action Task Force"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:traditional-securities",
        "label": "Traditional Securities"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:special-purpose-vehicle",
        "label": "Special Purpose Vehicle"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Asset tokenisation is the process of representing ownership, revenue rights, or access rights in a real-world or digital asset as a cryptographically secured token on a [[Blockchain]], governed by a [[Smart Contracts|smart contract]] that encodes legally binding claims. It enables [[Fractional Ownership]] of assets such as real estate, private equity, bonds, commodities, and intellectual property, sitting at the convergence of [[Regulatory Compliance|securities regulation]], [[Distributed Ledger Technology]], and [[Programmable Money|programmable finance]]. By automating transfer restrictions, [[Know Your Customer]] checks, and settlement logic on-chain, tokenisation reduces reliance on traditional intermediaries while extending global market access.

- ### Overview
  - Asset tokenisation converts the economic rights in an underlying asset into a digital token that can be issued, transferred, and redeemed on a public or permissioned blockchain. The token is not merely a pointer to the asset — it is the instrument of claim, backed by a legal structure (commonly a [[Special Purpose Vehicle]]) that holds the real-world asset and passes economic entitlements (dividends, rental income, redemption rights) to token holders.
  - Why it matters:
    - Illiquid asset classes (real estate, private credit, infrastructure) constitute the majority of global investable wealth but are inaccessible to most investors due to high minimum ticket sizes and long lock-up periods.
    - Tokenisation allows those assets to be subdivided, traded continuously on a [[Decentralised Exchange]] or regulated alternative trading system, and settled programmatically.
    - Automated compliance logic embedded in [[Smart Contracts]] can enforce investor eligibility rules without manual transfer-agent intervention, reducing settlement risk and cost.
    - [[Decentralised Finance]] protocols can use tokenised real-world assets as collateral, unlocking liquidity without asset disposal.
  - The key insight is that a [[Digital Asset|digital asset]] backed by a legal claim is fundamentally different from a purely speculative cryptocurrency — it carries enforceable rights in an off-chain asset and is therefore subject to securities law.

- ### Key Components
  - **Legal Layer**
    - A [[Special Purpose Vehicle]] (SPV) or trust typically holds the underlying asset. Token holders have contractual or statutory rights against the SPV — economic rights (income, proceeds), voting rights, or redemption rights — defined in a subscription agreement or operating document compliant with the relevant securities jurisdiction.
    - The choice of SPV jurisdiction (Delaware LLC, Cayman exempted company, Luxembourg RAIF) determines investor protections, tax treatment, and regulatory requirements.
    - Tokens are classified as [[Traditional Securities|securities]] in most jurisdictions, triggering prospectus requirements (EU Prospectus Regulation, US Securities Act) or exemptions (Reg D, Reg S, EU DLT Pilot Regime).
  - **Technical Layer**
    - Fungible security tokens use standards such as ERC-1400 (Polymath) and ERC-3643 (T-REX) — both built on ERC-20 — which add role-based transfer controllers, partition support, and on-chain [[Know Your Customer|KYC]] whitelisting.
    - Unique assets (individual properties, artworks) use [[Non-Fungible Token]] standards (ERC-721, ERC-1155) to represent indivisible claims.
    - On-chain oracles (e.g. [[Chainlink]]) are used to feed asset valuations, reference rates, and income distributions into the smart contract, bridging the on-chain token to off-chain economic reality.
    - Layer-2 scaling solutions and permissioned chains (Polygon, Hyperledger Fabric, Corda) address throughput and privacy requirements of institutional issuers.
  - **Market Infrastructure Layer**
    - Issuance platforms (Securitize, tZERO, Tokeny) provide white-label tooling for cap-table management, investor onboarding with [[Digital Identity]] verification, and regulatory reporting.
    - Regulated custodians must hold the private keys controlling tokenised securities on behalf of institutional clients, satisfying safekeeping obligations.
    - Secondary markets require either an Alternative Trading System (ATS) licence in the US, a Multilateral Trading Facility (MTF) licence in the EU, or equivalent; pure DEX trading of security tokens is generally not permitted.
    - Delivery-versus-payment (DvP) settlement integrates tokenised assets with cash-leg settlement, often using [[Central Bank Digital Currency|CBDCs]] or regulated [[Stablecoin|stablecoins]] as the cash leg.

- ### Mechanisms
  - **Issuance**: the SPV engages an issuance platform; a [[Smart Contracts|smart contract]] is deployed on-chain encoding the token parameters (supply cap, transferability rules, investor whitelist controller, income distribution schedule). Investor [[Know Your Customer|KYC/AML]] is completed off-chain by a regulated verifier; only approved wallet addresses are added to the whitelist.
  - **Primary distribution**: tokens are sold to investors (institutional or, under exemptions, retail) with proceeds flowing to the SPV. Transfer restrictions prevent immediate resale if lock-up periods apply.
  - **Secondary trading**: after lock-up, tokens trade on approved venues. [[Decentralised Exchange|DEX]] protocols with built-in compliance gates (permissioned AMMs) are emerging alongside centralised ATS venues.
  - **Income distribution**: the smart contract distributes income (rent, bond coupon, dividend) proportionally to all token holders automatically — no transfer-agent processing required. [[Programmable Money|Programmable cash]] (CBDC or stablecoin) is credited to wallets in the same transaction.
  - **Redemption or liquidation**: on maturity or sale of the underlying asset, the SPV distributes net proceeds to token holders and burns the tokens.

- ### Applications / Use Cases
  - **Real estate**: fractional ownership of commercial and residential property portfolios. HSBC, JPMorgan, and BNY Mellon have participated in tokenised real estate pilots enabling retail investor access to institutional-grade property.
  - **Private equity and venture capital**: fund units tokenised to provide secondary liquidity for LP positions that would otherwise be locked up for 10+ years.
  - **Fixed-income instruments**: tokenised bonds issued on public blockchains — the European Investment Bank issued a digital bond on Ethereum; the BIS Innovation Hub has published DvP settlement blueprints.
  - **Commodities**: gold, carbon credits, and agricultural commodities tokenised to enable fractional holding and programmable delivery. [[Chainlink]] price oracles connect physical-market prices to token contracts.
  - **Intellectual property and royalties**: music royalties, patent income streams, and licensing revenue tokenised so creators and investors can trade future income without disposing of the underlying IP.
  - **Infrastructure and energy**: toll roads, solar farms, and battery storage projects tokenised to allow public investment in long-duration assets previously restricted to sovereign wealth funds.
  - **Trade finance**: receivables and letters of credit tokenised on platforms like Contour (built on Corda) to reduce fraud risk and speed settlement across supply chain participants.

- ### Relationships
  - uses:: [[Smart Contracts]]
  - uses:: [[Token Standard]]
  - uses:: [[Distributed Ledger Technology]]
  - uses:: [[Non-Fungible Token]]
  - requires:: [[Regulatory Compliance]]
  - requires:: [[Know Your Customer]]
  - requires:: [[Digital Identity]]
  - requires:: [[Custody]]
  - enables:: [[Fractional Ownership]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Automated Market Maker]]
  - enables:: [[Programmable Money]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Cryptographic Hash Function]]
  - dependsOn:: [[Public Key Infrastructure]]
  - standardizedBy:: [[Financial Action Task Force]]
  - standardizedBy:: [[International Organisation of Securities Commissions]]
  - contrastsWith:: [[Traditional Securities]]
  - contrastsWith:: [[Central Bank Digital Currency]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[Artificial Intelligence in Finance]]
  - relatedTo:: [[Special Purpose Vehicle]]
  - relatedTo:: [[Decentralised Exchange]]
  - relatedTo:: [[Stablecoin]]
  - relatedTo:: [[Real-World Asset Tokenisation]]

- ### Standards & Context
  - **ERC-1400 / ST-20 (Polymath)**: early security token standard introducing partitioning, forced transfers, and issuance/redemption controllers on Ethereum.
  - **ERC-3643 (T-REX)**: Token for Regulated EXchanges, widely adopted in European institutional pilots; separates identity registry from token contract and enables compliance rule composition.
  - **ERC-3525 (Semi-Fungible Token)**: supports financial instruments with value slots, combining fungible (amount) and non-fungible (slot/series) attributes — useful for structured notes and bond tranches.
  - **EU DLT Pilot Regime (Regulation EU 2022/858)**: allows regulated market operators and CSDs to operate DLT-based trading and settlement systems under a temporary sandbox, directly enabling tokenised security trading in the EU.
  - **MiCA (Markets in Crypto-Assets Regulation)**: governs crypto-asset service providers in the EU; security tokens remain outside MiCA scope and under existing MiFID II / Prospectus Regulation, but MiCA provides a regulatory framework for [[Stablecoin|asset-referenced tokens]] used as the cash leg.
  - **FATF Travel Rule (Recommendation 16)**: requires virtual-asset service providers to pass beneficiary/originator information alongside transfers above threshold; issuance platforms must implement solutions (e.g. TRP, TRISA) for tokenised security transfers.
  - **ISO 24165 (DTIF)**: Digital Token Identifier standard assigns unique identifiers to tokens, supporting reference data and regulatory reporting.
  - **BIS Innovation Hub projects**: Project Helvetia, Project Jura, and Project Dunbar have demonstrated tokenised security settlement using wholesale [[Central Bank Digital Currency|CBDCs]], providing design blueprints for central bank–endorsed tokenised asset infrastructure.
  - **IOSCO Policy Recommendations (2023)**: the [[International Organisation of Securities Commissions]] issued recommendations urging regulators to apply existing securities law to tokenised instruments and to address cross-border regulatory gaps.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
