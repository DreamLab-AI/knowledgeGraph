public:: true

# yield farming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dbe0cc6c0e093fcbde0e75b2daf03c4b44b6eeb7323f75fd43284c3fca54094d",
  "@type": "Page",
  "vc:slug": "yield-farming",
  "title": "yield farming",
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
  "@id": "urn:ngm:class:yield-farming",
  "@type": "Class",
  "label": "Yield Farming",
  "definition": "Yield farming is the practice of actively deploying digital assets into decentralised finance protocols—including liquidity pools, lending markets, and staking contracts—to earn token rewards, trading fees, or interest income, and optimising risk-adjusted returns by dynamically reallocating across multiple protocols. Participants typically receive liquidity provider tokens representing their pool share, which can themselves be deposited into other protocols to compound rewards, creating layered risk exposure. Yield farming strategies are sensitive to smart contract risk, impermanent loss, reward token price volatility, and regulatory classification of token distributions.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:liquidity-mining", "label": "Liquidity Mining"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Yield farming is the practice of actively deploying digital assets into decentralised finance protocols—including liquidity pools, lending markets, and staking contracts—to earn token rewards, trading fees, or interest income, and optimising risk-adjusted returns by dynamically reallocating across multiple protocols. Participants typically receive liquidity provider tokens representing their pool share, which can themselves be deposited into other protocols to compound rewards, creating layered risk exposure. Yield farming strategies are sensitive to smart contract risk, impermanent loss, reward token price volatility, and regulatory classification of token distributions.

- ### Semantic Classification
  - owl-class:: yield-farming:Yield Farming
  - owl-role:: Concept

- ### Relationships
  - requires [[Liquidity Pool]]
  - requires [[Decentralised Finance]]
  - relatedTo [[Liquidity Mining]]
  - relatedTo [[Automated Market Maker]]
  - relatedTo [[Governance Token]]
  - uses [[Liquidity Provision]]

- ### Content
  Yield farming emerged as a practice during the 2020 DeFi Summer, when protocols began distributing governance tokens as incentives to liquidity providers. By depositing assets into an automated market maker liquidity pool, a yield farmer earns a share of the trading fees collected by the pool, plus any protocol-native token emissions allocated to that pool. Liquidity provider (LP) tokens representing the deposited share can then be deposited into additional yield aggregator contracts, creating compounded return streams.

  The economic dynamics of yield farming are complex. Impermanent loss—the opportunity cost incurred when the price ratio of pooled assets diverges from the entry ratio—can exceed the fees and token rewards earned, resulting in a net loss relative to simply holding the assets. Reward token prices are typically volatile and may decline rapidly as farming incentives attract large inflows that dilute per-token returns.

  Smart contract risk is a critical consideration: vulnerabilities in liquidity pool contracts, yield aggregators, or oracle integrations have resulted in significant losses through exploits and price manipulation attacks. Yield farmers must assess the audit history, code maturity, and economic security of each protocol they interact with. Regulatory classification of token rewards—as income, capital gains, or novel taxable events—varies by jurisdiction and adds compliance complexity for active farmers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
