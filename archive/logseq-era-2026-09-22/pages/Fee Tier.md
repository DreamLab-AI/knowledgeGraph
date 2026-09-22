public:: true

# Fee Tier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fee-tier",
  "@type": "Page",
  "vc:slug": "fee-tier",
  "title": "Fee Tier",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fee-tier",
  "@type": "Class",
  "label": "Fee Tier",
  "definition": "A fee tier is a discrete level of trading or swap fee applied to a market or liquidity pool, allowing different markets to charge fees commensurate with their volatility and liquidity risk. On automated-market-maker decentralized exchanges, each pool is created under a chosen fee tier (for example 0.05%, 0.30%, or 1.00%), and the collected fees accrue to liquidity providers. Tiering lets stable pairs use low fees while volatile or exotic pairs use higher fees to compensate providers.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-exchange", "label": "Decentralized Exchange"},
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A fee tier is a preset swap-fee level assigned to a liquidity pool on a [[Decentralized Exchange]], calibrating fee income for [[Liquidity Provision]] against the risk of the traded pair. It is an economic-mechanism construct within DeFi and economics.
- ### Content
  - Concentrated-liquidity AMMs typically offer several fee tiers per token pair, and liquidity fragments across them as providers and traders gravitate toward the most efficient market. Higher tiers compensate providers for impermanent-loss risk on volatile assets, while low tiers maximise capital efficiency on correlated or stable pairs, making fee-tier selection a key determinant of pool depth and execution quality.
