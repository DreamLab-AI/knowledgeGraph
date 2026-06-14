public:: true

# Binance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed7d1957ec5f4c16b77066bd2c604351473dc42b3c288f39c0c3341bd3c677e6",
  "@type": "Page",
  "vc:slug": "binance",
  "title": "Binance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:coinbase",
      "vc:label": "Coinbase"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Binance"
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
  "@id": "urn:ngm:class:binance",
  "@type": "Class",
  "label": "Binance",
  "definition": "Binance is a centralised cryptocurrency exchange founded in 2017 by Changpeng Zhao (CZ) and Yi He, which rapidly grew to become one of the highest-volume digital-asset trading venues globally. It provides spot trading, perpetual and futures derivatives, margin lending, staking, savings products, and a token launchpad across hundreds of supported assets. Binance created the BNB token as a native utility and fee-discount instrument, and subsequently developed BNB Chain, an EVM-compatible Layer-1 blockchain that hosts a substantial decentralised-finance and Web3 application ecosystem. The exchange has faced extensive regulatory scrutiny across multiple jurisdictions, including a landmark 2023 settlement with the United States Department of Justice and FinCEN, resulting in substantial financial penalties and a change in executive leadership.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset",
      "label": "Digital Asset"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:bnb-token", "label": "BNB Token"},
      {"@id": "urn:ngm:class:bnb-chain", "label": "BNB Chain"},
      {"@id": "urn:ngm:class:binance-smart-chain", "label": "Binance Smart Chain"},
      {"@id": "urn:ngm:class:binance-launchpad", "label": "Binance Launchpad"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cryptocurrency-exchange-ecosystem", "label": "Cryptocurrency Exchange Ecosystem"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:order-book", "label": "Order Book"},
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
      {"@id": "urn:ngm:class:kyc-aml-compliance", "label": "KYC/AML Compliance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:spot-trading", "label": "Spot Trading"},
      {"@id": "urn:ngm:class:derivatives-trading", "label": "Derivatives Trading"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:token-staking", "label": "Token Staking"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:proof-of-staked-authority", "label": "Proof of Staked Authority"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ethereum-virtual-machine", "label": "Ethereum Virtual Machine"},
      {"@id": "urn:ngm:class:matching-engine", "label": "Matching Engine"},
      {"@id": "urn:ngm:class:crypto-wallet", "label": "Crypto Wallet"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:coinbase", "label": "Coinbase"},
      {"@id": "urn:ngm:class:kraken", "label": "Kraken"},
      {"@id": "urn:ngm:class:decentralised-exchange", "label": "Decentralised Exchange"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:web3", "label": "Web3"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:non-fungible-token", "label": "Non-Fungible Token"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:binance-exchange", "label": "Binance Exchange"}
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:binance:59bba357145c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ed7d1957ec5f4c16b77066bd2c604351473dc42b3c288f39c0c3341bd3c677e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Coinbase]]",
      "resolved": "urn:visionflow:linked:coinbase",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset",
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
  - Binance is a centralised [[Cryptocurrency Exchange]] founded in 2017 by Changpeng Zhao and Yi He, which grew into one of the highest-volume [[Digital Asset]] trading venues in the world. It operates across [[Spot Trading]], [[Derivatives Trading]], margin lending, [[Token Staking]], savings products, and a token launchpad, supporting hundreds of trading pairs. Binance also created the [[BNB Token]] and developed [[BNB Chain]], an [[Ethereum Virtual Machine]]-compatible [[Blockchain]] that hosts a broad [[Decentralised Finance]] and [[Web3]] application ecosystem. The platform has been subject to landmark [[Financial Regulation]] actions including a major 2023 settlement with United States authorities.

- ### Overview
  - Binance was incorporated in 2017 and within twelve months had achieved extraordinary trading volumes, driven by its low fees, broad asset selection, and the introduction of the BNB utility token that granted fee discounts.
  - The company operates as a centralised intermediary — a custodial [[Cryptocurrency Exchange]] — holding user funds and running a high-performance [[Matching Engine]] to pair buy and sell orders through an [[Order Book]] mechanism.
  - Its business model expanded well beyond exchange services to encompass an integrated financial ecosystem: the [[Binance Launchpad]] for initial exchange offerings (IEOs), Binance Earn for yield products, Binance Pay for merchant payments, and Binance NFT for [[Non-Fungible Token]] markets.
  - The launch of Binance Smart Chain (rebranded [[BNB Chain]]) in 2020 allowed Binance to participate directly in the [[Decentralised Finance]] boom, offering faster, cheaper transactions than [[Ethereum]] at the cost of greater centralisation through [[Proof of Staked Authority]] consensus.
  - Regulatory challenges have been defining: operations in many jurisdictions were curtailed or modified after regulators in the United States, United Kingdom, and elsewhere raised [[Anti-Money Laundering]] and [[KYC/AML Compliance]] concerns. The 2023 plea agreement with the US Department of Justice required a change in CEO and significant structural reforms.

- ### Key Components
  - **Spot and Derivatives Markets**
    - High-throughput [[Spot Trading]] across hundreds of [[Cryptocurrency]] pairs with BTC, ETH, BNB, and stablecoin base markets.
    - Perpetual contracts and quarterly futures via Binance Futures, a leading venue for leveraged [[Derivatives Trading]] in crypto.
    - Margin trading facility enabling leveraged positions collateralised by holdings in the exchange wallet.
  - **BNB Token**
    - The [[BNB Token]] (Build and Build, formerly Binance Coin) originated as a fee-discount token and evolved into the native gas token of [[BNB Chain]].
    - Quarterly token burns reduce supply, linking token economics to platform revenue.
    - BNB is used for transaction fees, [[Decentralised Finance]] operations, and governance on the BNB Chain ecosystem.
  - **BNB Chain**
    - [[BNB Chain]] (formerly Binance Smart Chain) is an [[Ethereum Virtual Machine]]-compatible Layer-1 [[Blockchain]] using [[Proof of Staked Authority]] consensus with a small validator set for high throughput.
    - Hosts a large [[Decentralised Finance]] ecosystem including [[Decentralised Exchange]] protocols (e.g. PancakeSwap), lending platforms, and [[Non-Fungible Token]] marketplaces.
    - [[Smart Contract]] compatibility with Ethereum tooling (Solidity, Hardhat, MetaMask) lowers the barrier for developers.
  - **Binance Launchpad and Launchpool**
    - A token issuance platform enabling new projects to raise funds through initial exchange offerings (IEOs), providing retail access to early-stage [[Digital Asset]] projects.
    - Launchpool allows users to farm new tokens by staking BNB or stablecoins, blending [[Token Staking]] and token distribution incentives.
  - **Custody and Wallet Infrastructure**
    - Binance maintains segregated cold-storage and hot-wallet [[Crypto Wallet]] infrastructure for custodial holdings.
    - Trust Wallet (acquired 2018) is a non-custodial mobile wallet endorsed by Binance, allowing users to self-custody assets compatible with [[BNB Chain]] and other networks.
  - **Fiat On-Ramps and Off-Ramps**
    - Peer-to-peer (P2P) marketplace and credit/debit card integrations provide fiat gateways across numerous currencies, critical for user onboarding into [[Cryptocurrency]] markets.

- ### Applications and Use Cases
  - **Retail and Institutional Trading** — Binance serves retail traders seeking access to a wide range of [[Cryptocurrency]] assets and institutional participants requiring deep [[Liquidity Provision]] and [[Order Book]] depth for large trades.
  - **Yield and Savings Products** — Binance Earn consolidates [[Token Staking]], flexible savings, locked staking, and dual-investment products, enabling users to generate yield on idle [[Digital Asset]] holdings.
  - **DeFi Gateway** — [[BNB Chain]] acts as a lower-cost entry point into [[Decentralised Finance]] protocols, with Binance Bridge enabling asset transfers between [[Ethereum]], [[BNB Chain]], and other networks.
  - **NFT Marketplace** — Binance NFT provides a platform for minting, buying, and selling [[Non-Fungible Token]] assets, integrating with BNB Chain's low-fee infrastructure.
  - **Developer Ecosystem** — Developer tooling, grants, and the Binance Labs venture arm support projects building on [[BNB Chain]], contributing to [[Web3]] application growth.
  - **Cross-Border Payments** — Binance Pay enables peer-to-peer cryptocurrency payments across borders, leveraging the global reach of the exchange to reduce friction in international remittances.
  - **Token Launchpad** — Projects use Binance Launchpad to bootstrap liquidity and community, with guaranteed secondary-market listing on Binance providing price discovery from day one.

- ### Relationships
  - hasPart:: [[BNB Token]]
  - hasPart:: [[BNB Chain]]
  - hasPart:: [[Binance Smart Chain]]
  - hasPart:: [[Binance Launchpad]]
  - partOf:: [[Digital Asset Domain]]
  - requires:: [[Order Book]]
  - requires:: [[Liquidity Provision]]
  - requires:: [[KYC/AML Compliance]]
  - enables:: [[Spot Trading]]
  - enables:: [[Derivatives Trading]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Token Staking]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Proof of Staked Authority]]
  - dependsOn:: [[Smart Contract]]
  - uses:: [[Ethereum Virtual Machine]]
  - uses:: [[Matching Engine]]
  - uses:: [[Crypto Wallet]]
  - contrastsWith:: [[Coinbase]]
  - contrastsWith:: [[Kraken]]
  - contrastsWith:: [[Decentralised Exchange]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[Anti-Money Laundering]]
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[Web3]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Non-Fungible Token]]
  - bridges-to:: [[Digital Identity]]

- ### Standards and Regulatory Context
  - **AML/KYC Frameworks** — Binance is subject to the [[Financial Action Task Force]] (FATF) Travel Rule for virtual asset service providers (VASPs), requiring collection and transmission of originator and beneficiary information for transfers above defined thresholds.
  - **US Regulatory Settlement (2023)** — The 2023 agreement with the US Department of Justice, [[Financial Crimes Enforcement Network]] (FinCEN), and the [[Commodity Futures Trading Commission]] (CFTC) resulted in multi-billion-dollar penalties and mandated independent compliance monitoring, setting a precedent for exchange [[Anti-Money Laundering]] obligations.
  - **MiCA (EU)** — The EU [[Markets in Crypto-Assets Regulation]] (MiCA) introduced in 2023–2024 requires exchanges operating in the EU to obtain licences and meet stringent [[Financial Regulation]] requirements, shaping Binance's European market access strategy.
  - **Proof of Reserves** — Following industry-wide concerns about solvency after the FTX collapse, Binance began publishing monthly Proof of Reserves attestations using Merkle tree proofs to demonstrate asset-liability coverage, a practice relevant to [[Blockchain]] transparency and audit.
  - **ISO 27001 / Security Standards** — As a custodian of significant user assets, Binance maintains security programmes aligned with international information security standards to protect against breaches and manage [[Crypto Wallet]] risk.

- ### Provenance
  - sources:: Binance corporate documentation, US DOJ/FinCEN settlement documents (2023), BNB Chain technical documentation, FATF VASP guidance
  - updated:: 2026-06-13
