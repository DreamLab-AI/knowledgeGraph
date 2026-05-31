public:: true

# Treasury Diversification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:treasury-diversification",
  "@type": "Page",
  "vc:slug": "treasury-diversification",
  "title": "Treasury Diversification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:treasury-diversification",
  "@type": "Class",
  "label": "Treasury Diversification",
  "definition": "Treasury diversification is the practice of spreading an organisation's or DAO's reserves across multiple asset types, such as stablecoins, native tokens, blue-chip crypto, and yield-bearing positions, to reduce concentration risk and stabilise runway. It mitigates the volatility and correlation exposure that arises when a treasury holds predominantly its own governance token.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "Blockchain DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}, {"@id": "urn:ngm:class:dao-tooling", "label": "DAO Tooling"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Spreading treasury reserves across asset types to reduce concentration risk and stabilise runway against volatility. It is a key practice within [[Treasury Management]] and is increasingly automated by [[DAO Tooling]].
- ### Content
  - DAOs often begin over-exposed to their own governance token, whose value can collapse precisely when funding is most needed; diversification into stablecoins and uncorrelated assets cushions this. Common mechanisms include token swaps, OTC deals, and protocol-owned liquidity, each balancing risk reduction against signalling and market-impact concerns.
