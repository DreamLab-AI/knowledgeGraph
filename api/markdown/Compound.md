public:: true

# Compound
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compound",
  "@type": "Page",
  "vc:slug": "compound",
  "title": "Compound",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compound",
  "@type": "Class",
  "label": "Compound",
  "definition": "Compound is an algorithmic, autonomous interest-rate protocol built on Ethereum that enables users to supply crypto assets to liquidity pools and earn continuously accruing interest, or borrow assets against over-collateralised positions at algorithmically determined rates. Interest rates adjust dynamically based on the utilisation ratio of each asset pool, eliminating the need for bilateral loan negotiation or centralised intermediaries. Supplied assets are represented as cTokens — ERC-20 tokens whose exchange rate appreciates with every block as interest accrues — which can themselves be used as collateral or freely traded. Governance of protocol parameters is conducted on-chain through the COMP token and the Compound Governor Bravo smart-contract system, making it one of the earliest fully decentralised autonomous lending protocols in the DeFi ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:decentralised-finance-protocol", "label": "Decentralised Finance Protocol"}
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:ctoken", "label": "cToken"},
      {"@id": "urn:ngm:class:compound-governor-bravo", "label": "Compound Governor Bravo"},
      {"@id": "urn:ngm:class:interest-rate-model", "label": "Interest Rate Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"},
      {"@id": "urn:ngm:class:erc-20", "label": "ERC-20"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset-lending", "label": "Digital Asset Lending"},
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"},
      {"@id": "urn:ngm:class:liquidity-mining", "label": "Liquidity Mining"},
      {"@id": "urn:ngm:class:collateralised-borrowing", "label": "Collateralised Borrowing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:over-collateralisation", "label": "Over-Collateralisation"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:oracle", "label": "Oracle"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:price-oracle", "label": "Price Oracle"},
      {"@id": "urn:ngm:class:ethereum-virtual-machine", "label": "Ethereum Virtual Machine"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:maker-dao", "label": "MakerDAO"},
      {"@id": "urn:ngm:class:aave", "label": "Aave"},
      {"@id": "urn:ngm:class:uniswap", "label": "Uniswap"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:total-value-locked", "label": "Total Value Locked"},
      {"@id": "urn:ngm:class:liquidation", "label": "Liquidation"},
      {"@id": "urn:ngm:class:collateral-factor", "label": "Collateral Factor"},
      {"@id": "urn:ngm:class:autonomous-market-operations", "label": "Autonomous Market Operations"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:algorithmic-market-design", "label": "Algorithmic Market Design"},
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:compound-finance", "label": "Compound Finance"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Compound is an algorithmic [[Decentralised Finance]] lending and borrowing protocol deployed on [[Ethereum]] that autonomously sets interest rates according to the utilisation ratio of each asset [[Liquidity Pool]]. Users who deposit assets receive [[cToken]] receipts whose exchange rate appreciates continuously as interest accrues; borrowers must maintain over-collateralised positions or face on-chain [[Liquidation]]. Protocol governance — including parameter changes, asset listings, and upgrades — is executed trustlessly through the [[COMP]] governance token and the [[Compound Governor Bravo]] smart-contract framework, making Compound a foundational primitive of the open [[Decentralised Finance]] stack.

- ### Overview
  - Compound was created by Robert Leshner and Geoffrey Hayes and its v2 protocol launched on Ethereum mainnet in May 2019. It introduced a peer-to-pool lending model: rather than matching individual lenders with borrowers, all depositors contribute to a shared reserve from which any qualifying borrower may draw, with rates determined algorithmically rather than bilaterally. This design removed the friction of order-book matching and enabled 24/7 global access to crypto credit markets without a central intermediary.
  - The protocol matters because it demonstrated that [[Smart Contracts]] could replace the core functions of a bank's lending desk — accepting deposits, setting rates, enforcing collateral requirements, and processing liquidations — entirely on-chain. Its COMP token distribution in June 2020 triggered the "DeFi Summer" phenomenon, in which [[Yield Farming]] strategies drove billions of dollars into DeFi protocols and established the [[Liquidity Mining]] pattern copied by virtually every subsequent protocol.
  - Compound III (Comet), launched in 2022, redesigned the architecture around isolated markets with a single base asset per deployment, improving capital efficiency and reducing contagion risk compared to the pooled multi-asset v2 model.

- ### Key Mechanisms
  - **cToken Model**
    - When a user deposits an asset (e.g. ETH, USDC, WBTC), Compound mints [[cToken]] receipts (cETH, cUSDC, cWBTC) representing the depositor's share of the pool.
    - The cToken [[Exchange Rate]] rises every [[Ethereum]] block (approximately every 12 seconds) as accrued interest is added to the pool, so interest compounds automatically without any user action.
    - cTokens are standard [[ERC-20]] tokens and can be transferred, used as collateral within Compound, or integrated into other [[DeFi Protocol]] composability stacks.
  - **Kinked Interest Rate Model**
    - Each market operates an [[Interest Rate Model]] with a kink point — typically at 80 % utilisation.
    - Below the kink, borrow rates rise slowly as utilisation increases, maintaining cheap credit while supply is ample.
    - Above the kink, rates rise steeply to discourage further borrowing and attract new supply, protecting liquidity available for withdrawals.
    - The parameters of the [[Interest Rate Model]] (base rate, slope, kink, jump multiplier) are set by [[Compound Governor Bravo]] governance votes.
  - **Over-Collateralisation and Collateral Factors**
    - Borrowers must lock collateral exceeding the value of their loan; the allowed loan-to-value ratio is the [[Collateral Factor]] (e.g. 0.75 for USDC means a user can borrow up to 75 % of their USDC deposit's value).
    - If a borrower's account liquidity falls below zero (collateral value × collateral factor < outstanding borrows), any account can call the [[Liquidation]] function to repay part of the debt and seize a portion of the collateral at a discount.
    - Liquidation incentives are set by the [[Liquidation Incentive]] governance parameter, typically 8 %.
  - **Price Oracles**
    - Compound relies on [[Price Oracle]] feeds to value collateral and detect undercollateralised positions. In v2, Compound used a combination of Chainlink feeds and an on-chain open-price-feed aggregated from centralised exchanges. Incorrect oracle values represent the primary systemic risk vector for the protocol.
  - **Compound Governor Bravo**
    - [[Compound Governor Bravo]] is the on-chain governance contract through which COMP token holders propose and vote on protocol changes. A proposal requires a minimum proposer threshold, a voting period of roughly two days, a minimum quorum, and a time-lock delay before execution, providing a multi-layer security buffer against governance attacks.
  - **Compound III (Comet) Architecture**
    - Unlike v2's unified multi-asset pool, Comet creates isolated lending markets each with a single designated base asset (e.g. USDC). Collateral assets can only be deposited, not borrowed, reducing the attack surface and preventing cross-market contagion from a single asset's volatility.

- ### Applications and Use Cases
  - **Passive Yield Generation** — users supply stablecoins or blue-chip crypto assets and earn continuously compounding interest with no lockup period.
  - **Leveraged Long Positions** — a user deposits ETH as collateral, borrows USDC, purchases more ETH, and repeats; this creates leveraged exposure without using a derivatives exchange.
  - **Short Selling** — a user supplies USDC, borrows a token they expect to depreciate, sells it on a [[Decentralised Exchange]], and later repurchases to repay the loan at a lower price.
  - **Treasury Management** — DAOs and protocols hold idle stablecoin treasuries in Compound to earn yield while maintaining immediate liquidity.
  - **Liquidity Mining Integration** — other [[DeFi Protocol]] composability stacks (e.g. [[Yearn Finance]], [[Convex Finance]]) route user funds through Compound markets to capture COMP rewards in addition to base interest, amplifying yield.
  - **Collateralised Debt Positions for DeFi Composability** — cTokens are accepted as collateral in secondary protocols, enabling stacked composability where the same underlying asset earns interest in Compound while simultaneously securing a position elsewhere.
  - **Institutional On-Chain Lending** — Compound Treasury (a centralised wrapper product) targeted institutional access to Compound's USDC supply rate, bridging DeFi yield to traditional finance treasury products.

- ### Relationships
  - partOf:: [[Decentralised Finance]]
  - hasPart:: [[cToken]]
  - hasPart:: [[Compound Governor Bravo]]
  - hasPart:: [[Interest Rate Model]]
  - uses:: [[Smart Contracts]]
  - uses:: [[Governance Token]]
  - uses:: [[Ethereum]]
  - uses:: [[ERC-20]]
  - enables:: [[Digital Asset Lending]]
  - enables:: [[Yield Farming]]
  - enables:: [[Liquidity Mining]]
  - enables:: [[Collateralised Borrowing]]
  - requires:: [[Over-Collateralisation]]
  - requires:: [[Liquidity Pool]]
  - requires:: [[Oracle]]
  - dependsOn:: [[Price Oracle]]
  - dependsOn:: [[Ethereum Virtual Machine]]
  - contrastsWith:: [[MakerDAO]]
  - contrastsWith:: [[Aave]]
  - contrastsWith:: [[Uniswap]]
  - relatedTo:: [[Total Value Locked]]
  - relatedTo:: [[Liquidation]]
  - relatedTo:: [[Collateral Factor]]
  - relatedTo:: [[Autonomous Market Operations]]
  - bridges-to:: [[Algorithmic Market Design]]
  - bridges-to:: [[Mechanism Design]]

- ### Contrast with Sibling Protocols
  - **Compound vs [[MakerDAO]]** — MakerDAO issues DAI, a protocol-native stablecoin, against locked collateral; Compound lends existing tokens from a shared pool. MakerDAO requires minting a new asset; Compound recycles existing market liquidity.
  - **Compound vs [[Aave]]** — Aave introduced flash loans (uncollateralised single-transaction borrows), variable/stable rate switching, and a broader set of listed assets. Compound's simpler model was historically more conservative; Comet narrows the gap on isolated markets.
  - **Compound vs [[Uniswap]]** — Uniswap is a spot-trading [[Automated Market Maker]] focused on token swaps; Compound is a lending protocol focused on interest-bearing deposits and collateralised borrows. Both use pooled liquidity but serve fundamentally different financial primitives.

- ### Standards and Governance Context
  - Smart contracts are deployed on [[Ethereum]], currently a proof-of-stake chain governed by [[EIP]] upgrade proposals. Compound's contracts are audited open-source Solidity code; the protocol does not rely on any off-chain services for core settlement.
  - The [[COMP]] token implements the [[ERC-20]] standard and confers voting rights; delegation is supported so passive holders can assign votes to active delegates.
  - [[Compound Governor Bravo]] implements a standard on-chain governance pattern subsequently forked by dozens of protocols ([[Uniswap]] governance, [[Gitcoin]] governance, and others). The pattern is sometimes called the "Compound governance standard."
  - Interest rate mathematics follows the standard continuous compounding approximation used across DeFi lending protocols; rates are expressed as per-block values and converted to APY for display.
  - The OpenZeppelin [[Smart Contracts]] library underpins many of Compound's token and access-control primitives, and Compound contributed to the broader security tooling ecosystem through its own code audits (by Trail of Bits, OpenZeppelin Security, and ABDK) published transparently.

- ### Provenance
  - sources:: Compound v2 whitepaper (Leshner & Hayes, 2019); Compound Governor Bravo specification; Trail of Bits audit reports; Comet protocol documentation (2022); DeFi Summer retrospectives
  - updated:: 2026-06-13
