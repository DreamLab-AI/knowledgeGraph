public:: true

# Programmable Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:programmable-finance",
  "@type": "Page",
  "vc:slug": "programmable-finance",
  "title": "Programmable Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:programmable-finance",
  "@type": "Class",
  "label": "Programmable Finance",
  "definition": "Programmable finance is the encoding of financial logic, agreements, and assets as executable code on blockchains, so that payments, lending, settlement, and compliance execute automatically and verifiably. It is enabled by smart contracts that compose into open, permissionless financial primitives. It underpins decentralised finance and emerging layered scaling on networks such as Bitcoin.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:de-fi", "label": "DeFi"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:btc-layer-3", "label": "BTC Layer 3"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Programmable finance encodes financial agreements and assets as executable on-chain logic that settles automatically and verifiably. It is supported by higher-layer designs such as [[BTC Layer 3]] and is enabled by the [[Smart Contract]] as its core building block.
- ### Content
  - By expressing instruments and rules as composable smart contracts, programmable finance allows automated lending, automated market making, conditional payments, and embedded compliance without trusted intermediaries. Composability lets protocols stack into complex products, while transparency and determinism reduce settlement risk, at the cost of new attack surfaces such as contract bugs and oracle manipulation.
