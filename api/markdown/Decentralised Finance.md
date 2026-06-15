public:: true
alias:: DecentralisedFinance

# decentralised finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f51916bf4d8e4ed3890511c1b7eeb2b9c50d14df87f76f8e338a53c13fa8aecd",
  "@type": "Page",
  "vc:slug": "decentralised-finance",
  "title": "decentralised finance",
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
  "@id": "urn:ngm:class:decentralised-finance",
  "@type": "Class",
  "label": "Decentralised Finance",
  "definition": "Decentralised Finance (DeFi) encompasses financial services and instruments—including lending, borrowing, trading, derivatives, and yield generation—implemented as permissionless, non-custodial smart contracts on public blockchains, eliminating the need for traditional financial intermediaries such as banks, brokers, clearinghouses, and custodians. Protocol logic is encoded directly in on-chain code that executes deterministically and transparently, allowing any party with an internet connection to inspect the rules governing their assets. DeFi protocols achieve composability by adhering to shared token standards and interacting through standardised interfaces, enabling complex multi-step financial strategies assembled from interoperable building blocks. The sector operates without central points of control, exposing users to smart-contract risk, oracle manipulation, and governance attacks in place of traditional counterparty risk.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:defi",
      "label": "DeFi"
    },
    {
      "@id": "urn:ngm:class:open-finance",
      "label": "Open Finance"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:blockchain-oracle",
        "label": "Blockchain Oracle"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Cryptographic Wallet"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
      },
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      },
      {
        "@id": "urn:ngm:class:flash-loan",
        "label": "Flash Loan"
      },
      {
        "@id": "urn:ngm:class:real-world-asset-tokenisation",
        "label": "Real-World Asset Tokenization"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:interoperability-protocol",
        "label": "Interoperability Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-finance",
        "label": "Centralised Finance"
      },
      {
        "@id": "urn:ngm:class:traditional-banking",
        "label": "Traditional Banking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:algorithmic-trading",
        "label": "Algorithmic Trading"
      },
      {
        "@id": "urn:ngm:class:regulatory-technology",
        "label": "Regulatory Technology"
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
  - Decentralised Finance (DeFi) is a broad class of [[Financial Services]] and instruments—spanning lending, borrowing, spot and derivatives trading, and yield generation—delivered as permissionless, non-custodial [[Smart Contract]] programs deployed on public [[Blockchain]] networks. Unlike [[Traditional Banking]] and [[Centralised Finance]], DeFi removes intermediary institutions by encoding protocol logic directly in on-chain code that any party can inspect and interact with using only a [[Cryptographic Wallet]]. Protocols interoperate through shared [[Token Standard]] interfaces and shared [[Liquidity Pool]] infrastructure, enabling complex financial strategies assembled from composable building blocks. The elimination of trusted third parties transfers custody risk to users and substitutes counterparty risk with [[Smart Contract]] risk, [[Blockchain Oracle]] risk, and governance attack vectors.

- ### Overview
  - DeFi emerged from the observation that the core functions of finance—custody, exchange, credit, derivatives, insurance—are fundamentally information-processing tasks that can be expressed as deterministic programs. The Ethereum network, with its Turing-complete [[Smart Contract]] environment introduced in 2015, became the primary substrate for early DeFi experimentation. The sector experienced a period of rapid protocol proliferation from 2020 onward, establishing core primitives that have since been deployed on competing and complementary chains including [[Layer 2 Scaling]] networks and alternative Layer 1s.
  - DeFi is significant because it offers permissionless access to financial services globally: anyone with a [[Cryptographic Wallet]] and internet connection can interact with a lending protocol or [[Decentralised Exchange]] without identity checks, credit history requirements, or geographic restrictions. This property underpins arguments about [[Financial Inclusion]] in jurisdictions where conventional banking access is limited.
  - The sector is also a proving ground for open-source financial protocol design. All contract code, transaction history, and current state are publicly readable, enabling independent security audits and economic research at a scale impractical in opaque traditional systems.

- ### Key Components
  - #### Automated Market Makers
    - [[Automated Market Maker]] (AMM) protocols replace centralised order books with on-chain [[Liquidity Pool]] smart contracts. Liquidity providers deposit paired assets; the pool's pricing function—most commonly the constant-product formula x·y = k popularised by [[Uniswap]]—determines swap rates. Fees accrue to liquidity providers proportional to their share of the pool.
    - AMMs enable permissionless market creation for any ERC-20 token pair without requiring a counterparty to place an opposing order, though they expose liquidity providers to impermanent loss when token prices diverge.
  - #### Decentralised Exchanges
    - [[Decentralised Exchange]] (DEX) platforms facilitate peer-to-contract token swaps directly from users' wallets. AMM-based DEXes (Uniswap, Curve, Balancer) dominate spot trading; order-book DEXes (dYdX, Serum) serve derivatives and perpetual futures. DEX aggregators route orders across multiple pools to minimise slippage.
  - #### Lending Protocols
    - [[Lending Protocol]] platforms such as Aave and Compound allow users to supply assets to earn interest or borrow against over-collateralised deposits. Interest rates are set algorithmically based on utilisation ratios. Liquidation mechanisms—executed by incentivised bots—automatically seize and sell collateral when a position's health factor falls below a defined threshold, maintaining protocol solvency without human intervention.
    - [[Flash Loan]] functionality, unique to DeFi, enables uncollateralised borrowing that must be repaid within a single atomic transaction, used for arbitrage, collateral swaps, and liquidation capital.
  - #### Stablecoins
    - [[Stablecoin]] assets serve as DeFi's primary unit of account and medium of exchange, sidestepping the volatility of native blockchain tokens. Three architectures dominate: fiat-backed (USDC, USDT), crypto-overcollateralised (DAI), and algorithmic. Each embeds different trust and systemic risk profiles that affect their reliability as DeFi collateral.
  - #### Yield Farming and Liquidity Mining
    - [[Yield Farming]] refers to strategies that maximise returns by deploying assets across multiple DeFi protocols simultaneously—supplying liquidity, borrowing against deposits, reinvesting rewards in recursive loops. Liquidity mining distributes [[Governance Token]] rewards to incentivise early protocol adoption, aligning user and protocol interests but also inflating token supply.
  - #### Governance and DAOs
    - Most mature DeFi protocols transfer control of protocol parameters—interest rate curves, collateral factors, fee tiers—to token-holder vote via on-chain [[DAO]] governance. [[Governance Token]] holders propose and ratify upgrades, adjustments, and treasury allocations. This structure distributes upgrade authority but concentrates voting power in large holders and exposes protocols to governance attacks.
  - #### Oracles
    - [[Blockchain Oracle]] networks (Chainlink, Band Protocol) supply off-chain price and event data to on-chain contracts. DeFi protocols are critically dependent on oracle integrity: price manipulation attacks exploit latency or low-liquidity price feeds to trigger false liquidations or drain protocol reserves.
  - #### Derivatives and Structured Products
    - On-chain [[Derivatives]] platforms (Synthetix, GMX, dYdX) offer perpetual futures, options, and synthetic assets tracking real-world prices. Structured products combine multiple primitives into vaults that execute yield strategies automatically, abstracting complexity for less technical users.

- ### Applications and Use Cases
  - **Peer-to-peer lending and borrowing**: users globally can access credit or earn yield without a bank account, using [[Smart Contract]] collateral management.
  - **Permissionless token exchange**: any ERC-20 token can be listed and traded on a DEX instantly without regulatory approval, enabling price discovery for nascent assets.
  - **Cross-border remittances**: [[Stablecoin]] transfers settle on-chain in seconds at near-zero cost compared to correspondent banking, supporting [[Cross-Border Payments]] use cases.
  - **Real-world asset tokenisation**: [[Real-World Asset Tokenization]] projects bring tokenised bonds, equities, and commodities on-chain, extending DeFi liquidity mechanisms to traditional markets while introducing custodian trust layers.
  - **Algorithmic treasury management**: [[DAO]] treasuries deployed into DeFi yield strategies allow protocol-native capital to generate returns and sustain operations.
  - **Institutional on-chain finance**: permissioned DeFi forks and compliant token wrappers allow regulated institutions to access DeFi liquidity while meeting AML/KYC obligations.
  - **Programmable derivatives**: synthetic exposure to equities, commodities, forex, and macro indices without traditional brokerage accounts, bridging DeFi to [[Algorithmic Trading]] strategies.
  - **Insurance primitives**: decentralised insurance protocols allow users to purchase cover against smart-contract failure or stablecoin de-pegging, creating peer-to-peer risk markets.

- ### Architecture and Technical Mechanisms
  - **Composability ("money legos")**: DeFi protocols are designed with standardised interfaces so output tokens from one protocol (e.g. Aave's aTokens representing deposit positions) can be used as input to another (e.g. as collateral in a CDP vault), enabling strategies that span multiple protocols in a single transaction.
  - **Atomic transactions**: Ethereum's transaction model guarantees that multi-step DeFi interactions either fully complete or fully revert, eliminating partial-execution states that would strand funds.
  - **[[Token Standard]]**: ERC-20 (fungible tokens), ERC-721 ([[Non-Fungible Token]]), and ERC-4626 (tokenised vault standard) define the interfaces DeFi contracts use to interact with token assets uniformly.
  - **[[Layer 2 Scaling]]**: High gas fees on Ethereum mainnet drove migration of DeFi liquidity to optimistic rollups (Optimism, Arbitrum) and ZK rollups (zkSync, Starknet), which batch transactions off-chain and post compressed proofs on-chain, reducing costs by orders of magnitude while inheriting Ethereum security.
  - **[[Interoperability Protocol]]**: cross-chain bridges and messaging layers (LayerZero, Axelar, Wormhole) allow liquidity and messages to flow between independent blockchains, expanding the DeFi addressable market but introducing bridge security as a new attack surface.
  - **Tokenomics**: protocol [[Governance Token]] distribution schedules, fee capture mechanisms, and buyback or burn programmes determine long-run token value accrual and constitute a nascent field of on-chain mechanism design.

- ### Risk Landscape
  - **Smart contract risk**: bugs or logical flaws in [[Smart Contract]] code can be exploited to drain liquidity; audits reduce but do not eliminate this risk.
  - **Oracle manipulation**: flash-loan-enabled price oracle attacks can distort on-chain prices momentarily to extract value from dependent protocols.
  - **Liquidation cascades**: correlated asset price crashes can trigger simultaneous mass liquidations, overwhelming liquidation bots and leaving protocols under-collateralised.
  - **Governance attacks**: token concentration allows a majority attacker to pass malicious governance proposals transferring treasury assets or upgrading contracts to drain funds.
  - **Regulatory uncertainty**: regulatory treatment of DeFi protocols, governance token holders, and front-end operators varies across jurisdictions; [[Regulatory Technology]] solutions attempt to layer compliance without undermining permissionlessness.
  - **Bridge exploits**: cross-chain bridges have been the largest single source of DeFi losses, as they require centralised or multi-sig custody of bridged assets and present high-value targets.
  - **MEV (Miner/Maximal Extractable Value)**: block producers and searchers can reorder, insert, or censor transactions to extract value from DeFi users through sandwich attacks, arbitrage, and liquidation front-running.

- ### Relationships
  - hasPart:: [[Automated Market Maker]]
  - hasPart:: [[Decentralised Exchange]]
  - hasPart:: [[Lending Protocol]]
  - hasPart:: [[Yield Farming]]
  - hasPart:: [[Liquidity Pool]]
  - requires:: [[Smart Contract]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Blockchain Oracle]]
  - requires:: [[Cryptographic Wallet]]
  - uses:: [[Stablecoin]]
  - uses:: [[Tokenization]]
  - uses:: [[Governance Token]]
  - uses:: [[Token Standard]]
  - enables:: [[Cross-Border Payments]]
  - enables:: [[Financial Inclusion]]
  - enables:: [[Flash Loan]]
  - enables:: [[Real-World Asset Tokenization]]
  - dependsOn:: [[Ethereum]]
  - dependsOn:: [[Layer 2 Scaling]]
  - dependsOn:: [[Interoperability Protocol]]
  - contrastsWith:: [[Centralised Finance]]
  - contrastsWith:: [[Traditional Banking]]
  - relatedTo:: [[DAO]]
  - relatedTo:: [[Non-Fungible Token]]
  - relatedTo:: [[Web3]]
  - relatedTo:: [[Cryptocurrency]]
  - bridges-to:: [[Algorithmic Trading]]
  - bridges-to:: [[Regulatory Technology]]

- ### Standards & Context
  - **ERC-20**: the foundational fungible token interface standard for Ethereum, enabling all DeFi protocols to interact with any compliant token uniformly.
  - **ERC-4626**: a tokenised vault standard that normalises the interface for yield-bearing vault contracts, improving composability across lending and yield aggregation protocols.
  - **EIP-1559**: Ethereum's fee market reform introduced base-fee burning, altering ETH's supply dynamics and affecting DeFi transaction cost predictability.
  - **MiCA (Markets in Crypto-Assets)**: the EU regulatory framework that classifies and regulates crypto-asset issuers and service providers, with significant implications for stablecoin issuance and DeFi front-end operators.
  - **FATF guidance on virtual assets**: the Financial Action Task Force's guidance on applying AML/CTF rules to virtual asset service providers creates compliance obligations that front-end DeFi operators increasingly navigate.
  - **OpenZeppelin**: widely adopted open-source library of audited [[Smart Contract]] modules (ERC-20, access control, upgradeability patterns) that many DeFi protocols use as a security baseline.
  - **Chainlink CCIP (Cross-Chain Interoperability Protocol)**: a standardised messaging and token bridge protocol aimed at providing a shared security layer for cross-chain DeFi interactions.

- ### Provenance
  - sources:: Buterin (2013 Ethereum whitepaper); Adams et al. (2021 Uniswap v3 whitepaper); Gudgeon et al. (2020 DeFi protocols survey); Jensen et al. (2021 DeFi crisis and systemic risk); FATF Guidance on Virtual Assets (2021 updated)
  - updated:: 2026-06-13
