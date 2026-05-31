public:: true

# Tokenised Real World Assets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tokenised-real-world-assets",
  "@type": "Page",
  "vc:slug": "tokenised-real-world-assets",
  "title": "Tokenised Real World Assets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokenised-real-world-assets",
  "@type": "Class",
  "label": "Tokenised Real World Assets",
  "definition": "Tokenised real-world assets (RWAs) are blockchain tokens that represent ownership or economic rights in tangible or traditional financial assets such as property, bonds, equities, or commodities. By mapping off-chain value onto programmable tokens, they enable fractional ownership, continuous settlement, and integration with decentralised finance while still depending on legal frameworks and custodians for enforceability.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"}, {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Blockchain tokens representing ownership of tangible or traditional financial assets, enabling fractionalisation and programmable settlement. They are a key collateral and yield source for [[Decentralized Finance (DeFi)]] and are recorded on a [[Distributed Ledger]].
- ### Content
  - RWAs bring trillions in traditional value into reach of on-chain protocols, supporting use cases such as tokenised treasury bills, private credit, and real estate. Their viability hinges on legal recognition of token holders' claims, reliable off-chain custody, and oracle-fed valuation data.
