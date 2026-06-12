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
  "definition": "Compound is an algorithmic, autonomous interest-rate protocol built on Ethereum that enables users to supply crypto assets to liquidity pools and earn continuously accruing interest, or borrow assets against collateral at algorithmically determined rates. Interest rates adjust dynamically based on the utilisation ratio of each asset pool, removing the need for bilateral loan negotiation. Supplied assets are represented as cTokens — ERC-20 tokens that accrue interest in real time and can themselves be used as collateral or traded. Governance of protocol parameters is conducted on-chain through the COMP token and the Compound Governor Bravo smart contract system, making it one of the earliest fully decentralised autonomous lending protocols in the DeFi ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:de-fi-protocol", "label": "De Fi Protocol"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:compound-governor-bravo", "label": "Compound Governor Bravo"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset-lending", "label": "Digital Asset Lending"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:maker-dao", "label": "MakerDAO"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Compound is an algorithmic [[Decentralised Finance]] lending protocol on [[Ethereum Smart Contract Platform]] in which interest rates are set autonomously by supply and demand, with supplied assets represented as cTokens and governance delegated to COMP token holders via [[Compound Governor Bravo]].

- ### Relationships
  - Compound pioneered the [[Liquidity Pool]] model for lending, in which depositors contribute assets collectively rather than matching individual borrowers. Its [[Governance Token]] (COMP) distribution via [[Yield Farming]] incentives in June 2020 ignited the DeFi Summer phenomenon. Governance actions — including adjusting collateral factors, reserve factors, and interest rate models — flow through [[Compound Governor Bravo]] on-chain voting. Compound contrasts with [[MakerDAO]] in that it supports multi-asset borrowing without requiring users to mint a dedicated stablecoin, while both rely on [[Smart Contracts]] for trustless execution.

- ### Content
  - Compound was created by Robert Leshner and Geoffrey Hayes and launched its v2 protocol on the Ethereum mainnet in May 2019. The core innovation was the cToken mechanism: when a user deposits ETH or an ERC-20 token, they receive cTokens whose exchange rate increases over time as interest accrues. This abstraction means interest compounds automatically with every Ethereum block — approximately every 12 seconds — without any user action required.

  - The interest rate model uses a kinked utilisation curve. Below the kink point (typically 80% utilisation), rates rise gently as more of the pool is borrowed. Above the kink, rates rise steeply to discourage further borrowing and incentivise new supply, protecting the liquidity available for redemptions. This algorithmic approach eliminates the need for a central order book or loan officers, enabling 24/7 global access to credit markets.

  - Compound's governance system, initially controlled by the founding team, was progressively decentralised through the COMP token distribution that began in June 2020. COMP holders can propose and vote on parameter changes: collateral factors (how much can be borrowed against a given asset), reserve factors (the fraction of interest kept as protocol reserves), and entirely new asset listings. The [[Compound Governor Bravo]] contract requires a minimum quorum and a two-day voting period followed by a time-lock before execution, providing a governance security buffer.

  - The [[Yield Farming]] incentive model introduced by Compound's COMP distribution transformed DeFi capital allocation. Users discovered that borrowing and supplying simultaneously could generate COMP rewards that exceeded the net interest cost, creating recursive leverage strategies. This drove billions of dollars in total value locked (TVL) into DeFi protocols in 2020 and established the liquidity mining pattern later adopted by virtually every DeFi protocol.

  - Compound III (Comet), launched in 2022, introduced a redesigned architecture with isolated markets and a single base asset per deployment, improving capital efficiency and reducing systemic risk. Unlike v2's pooled multi-asset model, Comet separates borrow markets so that a liquidation cascade in one asset cannot drain liquidity from unrelated pools, addressing a key vulnerability exposed during the 2022 DeFi crisis.
