public:: true

# Perpetual Futures
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:perpetual-futures",
  "@type": "Page",
  "vc:slug": "perpetual-futures",
  "title": "Perpetual Futures",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:perpetual-futures",
  "@type": "Class",
  "label": "Perpetual Futures",
  "definition": "Perpetual futures are derivative contracts that track an underlying asset's price without an expiry or settlement date. A periodic funding-rate payment between long and short holders tethers the contract price to the spot index, replacing the convergence that expiry provides in traditional futures. They are a dominant instrument in crypto derivatives markets, enabling leveraged directional exposure that can be held indefinitely.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:d-yd-x", "label": "dYdX"}, {"@id": "urn:ngm:class:gmx", "label": "GMX"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Perpetual futures are expiry-free leveraged derivatives anchored to spot by a funding rate, offered by venues such as [[dYdX]] and [[GMX]].
- ### Content
  - The funding mechanism periodically transfers payments from the side trading at a premium to the side at a discount, incentivising arbitrage that keeps the perpetual price near the spot index. On-chain perpetual DEXs implement this with oracle-fed mark prices, automated liquidation engines, and either order books or liquidity-pool counterparties, exposing traders to funding cost, liquidation, and oracle risk.
