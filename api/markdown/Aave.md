public:: true

# aave
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a11bddc4396ca460d2996b1a1bc6ee02477089fe30b514532bb72dad42789e2",
  "@type": "Page",
  "vc:slug": "aave",
  "title": "aave",
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
  "@id": "urn:ngm:class:aave",
  "@type": "Class",
  "label": "Aave",
  "definition": "Aave is a decentralised, non-custodial liquidity protocol deployed on Ethereum and multiple EVM-compatible networks that allows users to supply crypto assets into pooled reserves to earn algorithmically set interest, and to borrow against over-collateralised positions at variable or stable rates. Pioneered by Stani Kulechov and launched as ETHLend in 2017 before rebranding in 2020, it introduced the flash loan — an uncollateralised loan that must be atomically repaid within a single transaction block — as a foundational DeFi primitive. Governance is exercised by AAVE token holders who vote on Aave Improvement Proposals controlling risk parameters, supported asset listings, protocol upgrades, and treasury allocations.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"},
      {"@id": "urn:ngm:class:evm", "label": "EVM"},
      {"@id": "urn:ngm:class:chainlink", "label": "Chainlink"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"},
      {"@id": "urn:ngm:class:flash-loan", "label": "Flash Loan"},
      {"@id": "urn:ngm:class:collateralised-borrowing", "label": "Collateralised Borrowing"},
      {"@id": "urn:ngm:class:on-chain-arbitrage", "label": "On-Chain Arbitrage"},
      {"@id": "urn:ngm:class:self-liquidation", "label": "Self-Liquidation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-Chain Governance"},
      {"@id": "urn:ngm:class:algorithmic-interest-rate", "label": "Algorithmic Interest Rate"},
      {"@id": "urn:ngm:class:atoken", "label": "aToken"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:over-collateralisation", "label": "Over-Collateralisation"},
      {"@id": "urn:ngm:class:oracle", "label": "Oracle"},
      {"@id": "urn:ngm:class:ethereum-wallet", "label": "Ethereum Wallet"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:compound-protocol", "label": "Compound Protocol"},
      {"@id": "urn:ngm:class:makerdao", "label": "MakerDAO"},
      {"@id": "urn:ngm:class:traditional-finance", "label": "Traditional Finance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:token-governance", "label": "Token Governance"},
      {"@id": "urn:ngm:class:liquidation-mechanism", "label": "Liquidation Mechanism"},
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"},
      {"@id": "urn:ngm:class:gho-stablecoin", "label": "GHO Stablecoin"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-driven-trading", "label": "AI-Driven Trading"},
      {"@id": "urn:ngm:class:risk-modelling", "label": "Risk Modelling"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ethlend", "label": "ETHLend"}
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
  - Aave is a decentralised, non-custodial [[Decentralised Finance]] lending and borrowing protocol deployed on [[Ethereum]] and multiple [[EVM]]-compatible networks. Users deposit crypto assets into [[Liquidity Pool]] reserves, receiving interest-bearing aTokens in return, while borrowers post over-collateralised positions to draw loans at algorithmically determined rates. Governance by [[AAVE Token]] holders via on-chain proposals controls risk parameters and protocol evolution. Aave's most distinctive contribution to the DeFi ecosystem is the [[Flash Loan]] — an atomic, uncollateralised loan that must be repaid within the same [[Smart Contracts]] transaction block.

- ### Overview
  - Aave launched in 2017 as ETHLend — a peer-to-peer lending platform matching borrowers and lenders directly on [[Ethereum]]. The protocol rebranded to Aave (Finnish for "ghost") in 2020, pivoting to a pooled liquidity model that dramatically improved capital efficiency and user experience.
  - Aave V2 (2020) introduced debt tokenisation, [[Collateralised Borrowing]] with stable and variable rate switching, and gas optimisations. Aave V3 (2022) added supply and borrow caps, [[Cross-Chain Bridge]] portals, isolation mode for newly listed risky assets, and efficiency mode (eMode) that allows higher LTV for correlated asset pairs such as stablecoin–stablecoin or ETH-derivative–ETH pairs.
  - The protocol is widely regarded as one of the foundational "money lego" primitives of DeFi, with deep integration into the broader [[DeFi Ecosystem]] through composable interactions with [[Yield Farming]], [[On-Chain Arbitrage]], and [[Automated Market Maker]] protocols.

- ### Key Mechanisms
  - #### Pooled Reserves and aTokens
    - Assets are deposited into shared reserve pools rather than matched peer-to-peer.
    - Depositors receive aTokens (e.g. aUSDC, aWETH) minted 1:1, whose balance increases in real time as interest accrues via the [[Liquidity Index]].
    - [[aToken]] design eliminates the need to manually claim interest — balances grow continuously in the depositor's wallet.
  - #### Algorithmic Interest Rates
    - [[Algorithmic Interest Rate]] models adjust continuously based on the utilisation ratio — the fraction of pooled assets currently borrowed.
    - Below an optimal utilisation threshold, rates are low and rise slowly; above the threshold, rates escalate steeply to incentivise repayment and attract new supply.
    - Borrowers may switch between variable rates (tracking real-time utilisation) and stable rates (fixed for the duration of the loan, subject to rebalancing in extreme conditions).
  - #### Over-Collateralisation and Health Factor
    - Every borrow position requires [[Over-Collateralisation]]: the collateral value must exceed the borrowed value by a margin set by the asset's Loan-to-Value (LTV) ratio.
    - A Health Factor (HF) metric aggregates collateral value against total debt; HF < 1 triggers [[Liquidation Mechanism]] by third-party liquidators who repay debt and claim collateral at a liquidation bonus discount.
    - Price data is sourced from [[Chainlink]] [[Oracle]] price feeds, ensuring manipulation resistance.
  - #### Flash Loans
    - [[Flash Loan]] transactions allow any contract to borrow unlimited liquidity from an Aave pool within a single [[Ethereum]] transaction without posting [[Collateral]].
    - The borrowed amount plus a fee (0.09% in V3) must be returned before the transaction finalises; if repayment fails the entire transaction reverts atomically.
    - Use cases include: [[On-Chain Arbitrage]] across [[Decentralised Exchange]] venues, [[Self-Liquidation]] of underwater positions, collateral swaps, and protocol-level [[Governance]] attacks (a notable security concern).
  - #### On-Chain Governance
    - [[On-Chain Governance]] is conducted via the [[AAVE Token]] with voting power proportional to holdings (plus staked AAVE in the Safety Module).
    - Aave Improvement Proposals (AIPs) cover asset listings, risk parameter adjustments, fee configurations, and core contract upgrades.
    - A timelock delay between proposal passage and execution provides a security buffer against malicious governance actions.
  - #### GHO Stablecoin
    - Aave V3 introduced [[GHO Stablecoin]], a decentralised, over-collateralised stablecoin mintable by depositing supported assets, with interest flowing directly to the Aave DAO treasury.
    - GHO operates as a native stablecoin for the Aave ecosystem, enabling tighter vertical integration compared to borrowing third-party stablecoins.
  - #### Safety Module
    - The Safety Module is a staking contract where AAVE holders lock tokens as a backstop against shortfall events (protocol insolvency).
    - Stakers earn rewards in exchange for accepting slashing risk (up to 30% of staked tokens may be liquidated to cover a deficit).

- ### Applications and Use Cases
  - **Yield Optimisation**: Depositors earn passive yield on idle assets including ETH, WBTC, USDC, USDT, DAI, and other supported tokens, often as part of larger [[Yield Farming]] strategies.
  - **Leveraged Positions**: Borrowers can use deposited collateral to borrow stablecoins, deploy those stablecoins elsewhere, and loop positions — a form of synthetic leverage common in [[DeFi Ecosystem]] strategies.
  - **Flash Loan Arbitrage**: [[On-Chain Arbitrage]] bots routinely use flash loans to exploit price discrepancies across [[Automated Market Maker]] pools and centralised/decentralised exchange pairs atomically.
  - **Collateral Swaps**: Users can swap the asset backing a loan position without closing the position, using a flash loan to transiently cover the rebalancing — relevant when managing [[Liquidation Mechanism]] risk.
  - **Protocol Treasury Management**: DAOs and protocol treasuries use Aave to earn yield on idle [[Stablecoin]] holdings or to access short-term liquidity without selling assets.
  - **Real-World Asset Integration**: Aave V3 and Aave Arc (a permissioned deployment) explored [[Real-World Asset]] tokenisation and institutional liquidity provisioning in compliance-gated pools.
  - **AI-Augmented Risk Management**: Emerging use of [[AI-Driven Trading]] and [[Risk Modelling]] systems that monitor Aave positions, automate liquidation avoidance, and optimise rate switching — a cross-domain bridge between blockchain protocol layers and machine intelligence.

- ### Relationships
  - uses:: [[Smart Contracts]]
  - uses:: [[Liquidity Pool]]
  - uses:: [[Ethereum]]
  - uses:: [[EVM]]
  - uses:: [[Chainlink]]
  - enables:: [[Yield Farming]]
  - enables:: [[Flash Loan]]
  - enables:: [[Collateralised Borrowing]]
  - enables:: [[On-Chain Arbitrage]]
  - enables:: [[Self-Liquidation]]
  - implements:: [[On-Chain Governance]]
  - implements:: [[Algorithmic Interest Rate]]
  - implements:: [[aToken]]
  - requires:: [[Over-Collateralisation]]
  - requires:: [[Oracle]]
  - requires:: [[Ethereum Wallet]]
  - contrastsWith:: [[Compound Protocol]]
  - contrastsWith:: [[MakerDAO]]
  - contrastsWith:: [[Traditional Finance]]
  - relatedTo:: [[Stablecoin]]
  - relatedTo:: [[Token Governance]]
  - relatedTo:: [[Liquidation Mechanism]]
  - relatedTo:: [[Cross-Chain Bridge]]
  - relatedTo:: [[GHO Stablecoin]]
  - bridges-to:: [[AI-Driven Trading]]
  - bridges-to:: [[Risk Modelling]]

- ### Standards and Context
  - Aave's smart contracts are written in Solidity and audited by multiple independent firms including Certora, OpenZeppelin, and Trail of Bits.
  - The protocol uses ERC-20 for aTokens and debt tokens, and the EIP-3156 flash loan standard (Aave's own flash loan interface predates EIP-3156 and differs slightly).
  - [[Chainlink]] [[Oracle]] price feeds are the primary data source for collateral valuation; Aave governance may approve alternative oracles on a per-asset basis.
  - Regulatory scrutiny of [[Decentralised Finance]] protocols — particularly those offering borrowing and interest — is increasing in the EU (MiCA framework) and US (SEC/CFTC jurisdiction debates), creating compliance pressure on permissionless deployments.
  - Aave Arc was developed as a permissioned pool variant to meet KYC/AML requirements for institutional participants, partnering with Fireblocks for whitelisted address management.
  - The [[DeFi Ecosystem]] broadly relies on composable protocol interactions; Aave's pooled liquidity model has been forked widely (e.g. Radiant Capital, Venus Protocol on BNB Chain).

- ### Provenance
  - sources:: Aave protocol documentation (docs.aave.com); Aave V3 technical paper; Aave Improvement Proposals (AIPs) governance forum; DeFiLlama protocol analytics; academic analysis of flash loan mechanics
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
