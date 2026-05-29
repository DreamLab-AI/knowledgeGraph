public:: true

# uniswap
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0cb888d14a26697c116689ec90a252163136239564639c051971d681a7d80dac",
  "@type": "Page",
  "vc:slug": "uniswap",
  "title": "uniswap",
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
  "@id": "urn:ngm:class:uniswap",
  "@type": "Class",
  "label": "Uniswap",
  "definition": "Uniswap is a decentralised exchange (DEX) protocol deployed on Ethereum that enables permissionless, non-custodial token swaps through an Automated Market Maker (AMM) mechanism. Rather than maintaining an order book, it uses liquidity pools governed by the constant-product invariant (x × y = k), where liquidity providers deposit token pairs and earn fees proportional to their pool share. Successive protocol versions have introduced concentrated liquidity (v3) and multi-hop routing, making Uniswap a foundational primitive of decentralised finance.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Uniswap is a decentralised exchange (DEX) protocol deployed on Ethereum that enables permissionless, non-custodial token swaps through an Automated Market Maker (AMM) mechanism. Rather than maintaining an order book, it uses liquidity pools governed by the constant-product invariant (x × y = k), where liquidity providers deposit token pairs and earn fees proportional to their pool share. Successive protocol versions have introduced concentrated liquidity (v3) and multi-hop routing, making Uniswap a foundational primitive of decentralised finance.

- ### Semantic Classification
  - owl-class:: uniswap:Uniswap
  - owl-role:: Concept

- ### Relationships
  - uses [[Automated Market Maker]]
  - uses [[Smart Contract]]
  - hasPart [[Liquidity Pool]]
  - enables [[Decentralised Finance]]
  - enables [[Yield Farming]]
  - dependsOn [[Token Economics]]

- ### Content
  - Uniswap operates entirely through smart contracts on the Ethereum Virtual Machine (EVM), requiring no central intermediary or account registration. Its core invariant — the product of token reserves remaining constant — ensures that any trade shifts the price along a bonding curve, creating automatic price discovery. Liquidity providers (LPs) deposit equal-value amounts of two tokens into a pool and receive LP tokens representing their share; fees collected from swaps (typically 0.3 % per swap in v2) are distributed pro-rata to LPs on withdrawal.
  - Version 3 introduced concentrated liquidity, allowing LPs to specify price ranges within which their capital is deployed, dramatically improving capital efficiency for stablecoins and correlated assets. The protocol also supports multi-hop swaps through a router contract, so any ERC-20 token pair can be traded even without a direct pool, provided a path of intermediate pools exists.
  - Governance of the protocol is managed by UNI token holders, who can vote on fee tiers, new pool parameters, and treasury allocations via on-chain governance. Because Uniswap pools are permissionless, any token can be listed without approval, though this also introduces risks of low-liquidity or fraudulent tokens. The protocol has been widely forked across EVM-compatible chains and stands as a reference implementation for DEX design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
