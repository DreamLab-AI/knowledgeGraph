public:: true

# AMM Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:amm-algorithm",
  "@type": "Page",
  "vc:slug": "amm-algorithm",
  "title": "AMM Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:amm-algorithm",
  "@type": "Class",
  "label": "AMM Algorithm",
  "definition": "An AMM Algorithm is the pricing rule of an Automated Market Maker that algorithmically sets exchange rates from the reserves held in a liquidity pool, removing the need for a traditional order book. The canonical form is the constant-product invariant x*y=k, with variants such as constant-sum, stableswap, and concentrated-liquidity curves tuned for different asset pairs. It determines slippage, price impact, and the impermanent loss that liquidity providers bear.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:impermanent-loss", "label": "Impermanent Loss"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - An AMM Algorithm is the deterministic pricing curve that quotes prices from pool reserves in a decentralized exchange. It governs the behaviour of a [[Liquidity Pool]] and is the direct source of [[Impermanent Loss]] for providers.
- ### Content
  - The constant-product rule keeps the product of reserves invariant, so each trade moves price along a hyperbola, producing slippage proportional to trade size relative to depth. Specialized invariants reduce slippage for correlated assets (stableswap) or concentrate capital in a price band (concentrated liquidity), trading simplicity for capital efficiency and more complex risk profiles.
