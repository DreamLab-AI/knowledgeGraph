public:: true

# Decentralized Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralized-finance",
  "@type": "Page",
  "vc:slug": "decentralized-finance",
  "title": "Decentralized Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-finance",
  "@type": "Class",
  "label": "Decentralized Finance",
  "definition": "Decentralized finance (DeFi) is an ecosystem of financial services built on public blockchains using smart contracts to provide lending, trading, derivatives and asset management without traditional intermediaries. Protocols are composable and permissionless, letting users transact directly from self-custodied wallets. DeFi introduces novel mechanisms such as automated market makers and liquidity pools, along with risks like impermanent loss and smart-contract exploits.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:impermanent-loss", "label": "Impermanent Loss"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Decentralized finance is blockchain-based financial services delivered through smart contracts without intermediaries, with mechanics like [[Impermanent Loss]] and coordination via [[Decentralized Governance]].
- ### Content
  - Composable DeFi protocols stack lending, decentralised exchanges and stablecoins so that the output of one becomes the input of another. The model offers open access and transparency but concentrates systemic risk in contract code, oracle integrity and liquidity dynamics.
