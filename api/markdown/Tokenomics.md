public:: true

# Tokenomics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:553a07ab9c0632973a8ce710abac7688e9ca8ad458865f29b2c2ce0a4e78d3e8",
  "@type": "Page",
  "vc:slug": "tokenomics",
  "title": "Tokenomics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9712"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tokenomics"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokenomics",
  "@type": "Class",
  "label": "Tokenomics",
  "definition": "Tokenomics is the study and design of the economic systems underpinning blockchain-based tokens, encompassing token supply mechanics (fixed supply, inflationary, or deflationary schedules), distribution models (initial coin offerings, airdrops, liquidity mining), utility functions (governance rights, access control, fee payment), and incentive alignment mechanisms. A well-designed tokenomic model balances value creation and capture across stakeholders — developers, users, liquidity providers, and governance participants — through mechanisms such as staking, burning, bonding curves, and vesting schedules. Tokenomics draws from monetary theory, game theory, and mechanism design to engineer sustainable digital economies where token holders are incentivised to act in ways that grow the ecosystem's long-term value.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "Bc Defi And Economics"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
    {"@id": "urn:ngm:class:token-design", "label": "Token Design"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:digital-token", "label": "Digital Token"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:token-supply", "label": "Token Supply"},
      {"@id": "urn:ngm:class:token-distribution", "label": "Token Distribution"},
      {"@id": "urn:ngm:class:staking", "label": "Staking"},
      {"@id": "urn:ngm:class:token-burn", "label": "Token Burn"},
      {"@id": "urn:ngm:class:vesting-schedule", "label": "Vesting Schedule"},
      {"@id": "urn:ngm:class:bonding-curve", "label": "Bonding Curve"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:play-to-earn", "label": "Play-to-Earn"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"},
      {"@id": "urn:ngm:class:game-theory", "label": "Game Theory"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:monetary-policy", "label": "Monetary Policy"},
      {"@id": "urn:ngm:class:decentralised-exchange", "label": "Decentralised Exchange"},
      {"@id": "urn:ngm:class:initial-coin-offering", "label": "Initial Coin Offering"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fiat-currency", "label": "Fiat Currency"},
      {"@id": "urn:ngm:class:centralised-finance", "label": "Centralised Finance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:incentive-alignment", "label": "Incentive Alignment"},
      {"@id": "urn:ngm:class:digital-economy", "label": "Digital Economy"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ]
  },
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:tokenomics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:553a07ab9c0632973a8ce710abac7688e9ca8ad458865f29b2c2ce0a4e78d3e8"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Tokenomics is the discipline of designing and analysing the economic systems that govern [[Digital Token]] ecosystems built on [[Blockchain]] infrastructure. It integrates [[Monetary Policy]], [[Mechanism Design]], and [[Game Theory]] to engineer token supply schedules, distribution models, utility functions, and incentive structures that sustain healthy ecosystems. A sound tokenomic model aligns the interests of diverse stakeholders — developers, users, liquidity providers, validators, and investors — so that individually rational behaviour produces collectively beneficial outcomes. The field sits at the intersection of [[Cryptoeconomics]], computer science, and institutional economics, and is fundamental to the viability of any protocol relying on token-based coordination.

- ### Overview
  - Tokenomics (a portmanteau of "token" and "economics") emerged as a formal discipline alongside the proliferation of programmable blockchains capable of issuing and governing digital assets through [[Smart Contract]] logic.
  - Unlike traditional monetary systems managed by central banks, tokenomic systems encode policy rules directly into immutable or governance-upgradeable on-chain contracts, making their rules transparent, auditable, and — in the best designs — credibly committed.
  - The central challenge of tokenomics is the **cold-start problem**: a new network must attract early adopters before it has enough users to be useful, so tokenomic design must engineer initial incentives (airdrops, liquidity mining, staking rewards) that bootstrap participation without causing runaway inflation.
  - Tokenomics is increasingly studied through the lens of **mechanism design** — the reverse engineering of rules that produce desired equilibria — and empirically informed by on-chain data analytics.
  - Poor tokenomic design (e.g. hyper-inflationary emission schedules, concentrated insider allocations, insufficient utility sinks) is widely recognised as a leading cause of protocol failure.

- ### Key Components
  - #### Token Supply
    - **Fixed supply** — hard-capped at genesis (e.g. Bitcoin's 21 million BTC); scarcity is enforced by the [[Consensus Mechanism]].
    - **Inflationary supply** — new tokens are continuously minted as block rewards or staking emissions; rate may be fixed or dynamically adjusted (see [[Monetary Policy]]).
    - **Deflationary supply** — tokens are permanently removed via [[Token Burn]] mechanisms (e.g. EIP-1559 base fee burn on Ethereum), or via buy-back-and-burn treasury operations.
    - **Elastic supply** — algorithmic rebasing adjusts wallet balances to target a price peg; used in algorithmic stablecoins (a high-risk variant).
  - #### Token Distribution
    - Initial allocations across team, investors, treasury, ecosystem, and community determine long-term governance balance and sell pressure.
    - **[[Vesting Schedule]]** — time-locked release of founder and investor allocations prevents early dumping and aligns incentives with long-term protocol health.
    - **Airdrops** — free token grants to target users (e.g. past protocol users) bootstrap community ownership and decentralise governance.
    - **Liquidity Mining / Yield Farming** — rewards for supplying [[Liquidity Pool]] assets attract capital to nascent [[Decentralised Finance]] protocols.
    - **[[Initial Coin Offering]]** / IDO / IEO — public token sale mechanisms that raise development capital and distribute ownership.
  - #### Utility & Demand Drivers
    - **Governance rights** — token holders vote on protocol upgrades, parameter changes, and treasury spending via [[DAO]] structures (see [[Governance Token]]).
    - **Fee payment** — tokens are required to pay for network services (gas fees, protocol fees), creating baseline demand tied to actual usage.
    - **Access and staking** — [[Staking]] tokens to unlock features, earn yield, or provide security (Proof-of-Stake validators must stake to participate).
    - **Collateral** — tokens used as collateral in lending and derivatives protocols within [[Decentralised Finance]] ecosystems.
    - **In-game assets** — tokens represent scarce game assets in [[Play-to-Earn]] and Web3 gaming contexts; see [[NFT]] for non-fungible variants.
  - #### Incentive Mechanisms
    - **[[Bonding Curve]]** — a mathematical function relating token price to circulating supply, used in continuous token models and automated market makers.
    - **[[Liquidity Pool]]** — algorithmic reserves holding two or more assets, enabling permissionless token swaps and rewarding liquidity providers with fees.
    - **[[Staking]]** — locking tokens as collateral to earn yield, secure networks (Proof-of-Stake), or participate in governance.
    - **Slashing** — punitive destruction of staked tokens for protocol violations (e.g. double-signing), enforcing honest validator behaviour.
    - **Revenue sharing / buybacks** — protocol revenue redirected to token holders or used to purchase and burn tokens, creating a value accrual loop.
  - #### Sink Mechanisms
    - Sinks remove tokens from circulation to counterbalance emissions: transaction fees, [[Token Burn]] events, time-locks, and NFT minting costs.
    - Effective sink design prevents hyperinflation by ensuring demand growth keeps pace with supply expansion.

- ### Applications / Use Cases
  - **Layer 1 protocol tokens** — ETH, SOL, ADA, and similar assets fund validator security, pay transaction fees, and underpin stablecoin collateral — a comprehensive tokenomic system covering all three functions.
  - **DeFi governance tokens** — protocols such as Uniswap (UNI) and Aave (AAVE) grant holders voting rights over protocol parameters via [[DAO]] governance, directly linking token value to protocol revenue and governance utility.
  - **Web3 gaming / [[Play-to-Earn]]** — games issue dual-token systems (utility token + governance token) to separate in-game spending from ownership rights, attempting to sustain player incentives without hyperinflationary collapse.
  - **Decentralised Autonomous Organisations** — treasury-funded [[DAO]] entities use tokenomic models to distribute grants, fund contributors, and coordinate collective action without a central authority.
  - **Stablecoins** — algorithmic and collateral-backed stablecoins (e.g. DAI, FRAX) rely on complex tokenomic mechanisms — stability fees, liquidation incentives, and peg arbitrage rewards — to maintain their peg.
  - **Data and compute marketplaces** — protocols such as Filecoin (storage) and Render (GPU compute) use tokens to price and incentivise decentralised resource provision, bridging blockchain coordination to real-world infrastructure; see [[Digital Economy]].
  - **NFT ecosystems** — royalty structures, secondary sale fees, and burn-to-mint mechanics within [[NFT]] platforms are tokenomic design choices that affect creator revenue and market liquidity.
  - **Cross-chain bridges** — bridge protocols issue tokens to incentivise liquidity provisioning and relay operators, with tokenomics governing security bonds and fee distribution.

- ### Relationships
  - requires:: [[Blockchain]]
  - requires:: [[Smart Contract]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Digital Token]]
  - hasPart:: [[Token Supply]]
  - hasPart:: [[Token Distribution]]
  - hasPart:: [[Staking]]
  - hasPart:: [[Token Burn]]
  - hasPart:: [[Vesting Schedule]]
  - hasPart:: [[Bonding Curve]]
  - enables:: [[DAO]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Payment System]]
  - enables:: [[Liquidity Pool]]
  - enables:: [[Play-to-Earn]]
  - uses:: [[Mechanism Design]]
  - uses:: [[Game Theory]]
  - relatedTo:: [[NFT]]
  - relatedTo:: [[Monetary Policy]]
  - relatedTo:: [[Decentralised Exchange]]
  - relatedTo:: [[Initial Coin Offering]]
  - contrastsWith:: [[Fiat Currency]]
  - contrastsWith:: [[Centralised Finance]]
  - bridgesTo:: [[Incentive Alignment]]
  - bridgesTo:: [[Digital Economy]]
  - bridgesTo:: [[Governance Token]]

- ### Standards & Context
  - Tokenomics lacks a formal standardisation body, but several frameworks have emerged as de facto references:
    - **EIP (Ethereum Improvement Proposals)** — proposals such as EIP-1559 (fee burn mechanism) and EIP-4844 (proto-danksharding for fee reduction) directly shape tokenomic dynamics on Ethereum.
    - **MiCA (Markets in Crypto-Assets Regulation, EU 2023)** — requires issuers of "asset-referenced tokens" and "e-money tokens" to publish white papers with detailed tokenomic disclosures, bringing regulatory structure to token design.
    - **FATF guidance on virtual assets** — Financial Action Task Force recommendations influence how token transfers are treated for AML/KYC compliance, affecting exchange and custodian tokenomic integrations.
    - **Token Taxonomy Framework (TTF)** — an industry-driven schema (Global Blockchain Business Council) for classifying token behaviours in a composable, technology-agnostic way.
    - On-chain analytics platforms (Dune Analytics, Nansen, Token Terminal) have become essential empirical tools for auditing tokenomic health metrics: circulating supply, velocity, holder concentration (Gini coefficient), and protocol revenue.
  - The field intersects with [[Decentralised Finance]] regulation and [[Governance Token]] design as jurisdictions debate whether tokens constitute securities under existing law (e.g. Howey test in the US).

- ### Semantic Classification
  - owl-class:: blockchain:Tokenomics
  - owl-role:: concept

- ### Provenance
  - sources:: Buterin et al. (Ethereum whitepaper); Voshmgir, "Token Economy" (2020); Liebkind, "Tokenomics 101"; on-chain analytics; MiCA Regulation (EU) 2023/1114
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
