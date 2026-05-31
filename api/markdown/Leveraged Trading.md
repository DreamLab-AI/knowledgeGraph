public:: true

# Leveraged Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:leveraged-trading",
  "@type": "Page",
  "vc:slug": "leveraged-trading",
  "title": "Leveraged Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:leveraged-trading",
  "@type": "Class",
  "label": "Leveraged Trading",
  "definition": "Leveraged trading is the practice of opening market positions whose notional size exceeds the trader's posted collateral by borrowing capital or using derivatives such as perpetual futures. It amplifies both gains and losses and exposes positions to liquidation when collateral falls below maintenance margin. In DeFi it is implemented by perpetual and margin protocols that enforce margin rules through smart contracts and on-chain oracles.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "Blockchain DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:gmx", "label": "GMX"}, {"@id": "urn:ngm:class:d-yd-x", "label": "dYdX"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Leveraged trading multiplies exposure relative to collateral via borrowed capital or derivatives; on-chain perpetual venues such as [[GMX]] and [[dYdX]] enable it through smart-contract margin and liquidation engines.
- ### Content
  - Positions are governed by initial and maintenance margin requirements, funding rates that anchor perpetuals to spot, and oracle-driven liquidation. Higher leverage tightens the liquidation buffer, making oracle latency and market depth critical to solvency.
