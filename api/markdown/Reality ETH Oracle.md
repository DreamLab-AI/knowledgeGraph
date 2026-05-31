public:: true

# Reality ETH Oracle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reality-eth-oracle",
  "@type": "Page",
  "vc:slug": "reality-eth-oracle",
  "title": "Reality ETH Oracle",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reality-eth-oracle",
  "@type": "Class",
  "label": "Reality ETH Oracle",
  "definition": "Reality.eth is an Ethereum-based crowdsourced oracle that resolves arbitrary questions by escalating bonds, allowing anyone to post or challenge answers until an economically final result is reached. It feeds resolved outcomes into smart contracts and is widely used to settle governance proposals and prediction-market events. The escalation-game design lets it answer subjective or off-chain questions that price-feed oracles cannot.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"},
      {"@id": "urn:ngm:class:dao-tooling", "label": "DAO Tooling"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Reality.eth is a crowdsourced Ethereum oracle that resolves questions via bonded answer escalation, providing dispute-resistant outcomes to smart contracts and tools such as [[Snapshot Voting]] and [[DAO Tooling]].
- ### Content
  - Answerers post a bond backing their response; any challenger must double the bond to overturn it, so converging on truth becomes the cheapest strategy. Unresolved or disputed cases can fall back to an arbitrator such as Kleros, making the oracle suitable for executing DAO decisions and settling subjective market questions.
