public:: true

# Decentralized Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralized-trading",
  "@type": "Page",
  "vc:slug": "decentralized-trading",
  "title": "Decentralized Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-trading",
  "@type": "Class",
  "label": "Decentralized Trading",
  "definition": "Decentralized trading is the exchange of crypto-assets directly between parties through smart contracts on a blockchain, without a centralized intermediary holding custody of funds or matching orders. Trades settle peer-to-contract against liquidity pools or order books governed by deterministic on-chain logic, giving traders self-custody and permissionless access. It is the activity layer enabled by decentralized exchanges and automated market makers.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-exchange-dex", "label": "Decentralized Exchange (DEX)"},
      {"@id": "urn:ngm:class:automated-market-making", "label": "Automated Market Making"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Decentralized trading lets participants swap tokens directly via on-chain contracts rather than through a custodial venue. It is the user-facing activity made possible by [[Decentralized Exchange (DEX)]] infrastructure and [[Automated Market Making]] pricing.
- ### Content
  - Trades execute against liquidity pools (AMMs) or on-chain order books, settling atomically with self-custody throughout. Trade-offs include slippage, miner/validator extractable value (MEV), and gas costs, balanced against censorship resistance and the absence of counterparty custody risk.
